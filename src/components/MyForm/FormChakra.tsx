/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  CSSReset,
  Heading,
  Icon,
  Link,
  ThemeProvider,
  theme,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Checkbox,
  Progress,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  OmitCommonProps,
  ProgressProps,
} from '@chakra-ui/react';
import { Form, Field, useField, useForm } from 'react-final-form';
import validate from './validate';

const sleep = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values: any) => {
  await sleep(300);
  window.alert(JSON.stringify(values, null, 2));
};

const FormChakra = (props: string[]) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box w={500} p={4} m="20px auto">
      <Heading as="h1" size="xl" textAlign="center">
        React Final Form
      </Heading>
      <Heading as="h2" size="l" textAlign="center" m={5}>
        Chakra
      </Heading>
      <Box as="p" textAlign="center">
        Example using React Final Form and{' '}
        <Link href="https://chakra-ui.com" isExternal>
          Chakra <Icon name="external-link" mx="2px" />
        </Link>
        .
      </Box>
      <Box as="p" textAlign="center">
        <Link href="https://final-form.org/react" isExternal>
          Read Docs <Icon name="view" mx="2px" />
        </Link>
      </Box>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, form, errors, submitting, pristine, values }) => (
          <Box
            as="form"
            p={4}
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            onSubmit={handleSubmit}>
            {/* 
            This example uses a mixture of custom field components using useField() 
            and components adapted to take the { input, meta } structure <Field/>
            provides
            */}
            <InputControl name="firstName" label="firstName" value={props[2]} />
            <InputControl name="lastName" label="lastName" value={props[3]} />
            <CheckboxControl name="employed" value="false">
              Employed
            </CheckboxControl>
            <Field name="favoriteColor" component={AdaptedRadioGroup} label="Favorite Color">
              <Radio value="#ff0000" color="red">
                Red
              </Radio>
              <Radio value="#00ff00" color="green">
                Green
              </Radio>
              <Radio value="#0000ff" color="blue">
                Blue
              </Radio>
            </Field>
            <Control name="toppings" my={4}>
              <FormLabel htmlFor="toppings">Toppings</FormLabel>
              <Stack pl={6} mt={1} spacing={1}>
                <CheckboxArrayControl name="toppings" value="chicken">
                  🐓 Chicken
                </CheckboxArrayControl>
                <CheckboxArrayControl name="toppings" value="ham">
                  🐷 Ham
                </CheckboxArrayControl>
                <CheckboxArrayControl name="toppings" value="mushrooms">
                  🍄 Mushrooms
                </CheckboxArrayControl>
                <CheckboxArrayControl name="toppings" value="cheese">
                  🧀 Cheese
                </CheckboxArrayControl>
                <CheckboxArrayControl name="toppings" value="tuna">
                  🐟 Tuna
                </CheckboxArrayControl>
                <CheckboxArrayControl name="toppings" value="pineapple">
                  🍍 Pineapple
                </CheckboxArrayControl>
              </Stack>
              <Error name="toppings" />
            </Control>
            <TextareaControl name="notes" label="Notes" />
            <PercentComplete size="sm" my={5} hasStripe isAnimated />
            <ButtonGroup spacing={4}>
              <Button
                isLoading={submitting}
                loadingText="Submitting"
                colorScheme="teal"
                type="submit">
                Submit
              </Button>
              <Button
                colorScheme="teal"
                variant="outline"
                onClick={() => {
                  return form.reset;
                }}
                isDisabled={submitting || pristine}>
                Reset
              </Button>
            </ButtonGroup>
            <Box as="pre" my={10}>
              {JSON.stringify(values, null, 2)}
            </Box>
          </Box>
        )}
      />
    </Box>
  </ThemeProvider>
);

const AdaptedTextarea = ({
  input,
  meta,
  ...rest
}: {
  input: any;
  meta: { error: undefined; touched: boolean; invalid: boolean };
}) => <Textarea {...input} {...rest} isInvalid={meta.error && meta.touched} />;

const CheckboxControl = ({
  name,
  value,
  children,
}: {
  name: string;
  value: string;
  children?: React.ReactNode | null;
}) => {
  const {
    input: { checked, ...input },
    meta: { error, touched, invalid },
  } = useField(name, {
    type: 'checkbox', // important for RFF to manage the checked prop
  });
  return (
    <FormControl isInvalid={touched && invalid} my={4}>
      <Checkbox {...input} isInvalid={touched && invalid} my={4}>
        {children}
      </Checkbox>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

const CheckboxArrayControl = ({
  name,
  value,
  children,
}: {
  name: string;
  value: string;
  children: string;
}) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: 'checkbox', // important for RFF to manage the checked prop
    value, // important for RFF to manage list of strings
  });
  return (
    <Checkbox {...input} isChecked={checked} isInvalid={error && touched}>
      {children}
    </Checkbox>
  );
};

const AdaptedRadioGroup = ({
  input,
  meta,
  label,
  children,
}: {
  input: any;
  meta: { error: undefined; touched: boolean; invalid: boolean };
  label: string;
  children: any;
}) => (
  <FormControl isInvalid={meta.touched && meta.invalid} my={4}>
    <FormLabel htmlFor={input.name}>{label}</FormLabel>
    <RadioGroup {...input}>{children}</RadioGroup>
    <FormErrorMessage>{meta.error}</FormErrorMessage>
  </FormControl>
);

const Control = ({ name, ...rest }: { name: string; children: React.ReactNode; my: number }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } });
  return <FormControl {...rest} isInvalid={error && touched} />;
};

const Error = ({ name }: { name: string }) => {
  const {
    meta: { error },
  } = useField(name, { subscription: { error: true } });
  return <FormErrorMessage>{error}</FormErrorMessage>;
};

const InputControl = ({
  name,
  label,
  value,
}: {
  name: string;
  label: string;
  value: string | '';
}) => {
  const { input, meta } = useField(name);
  return (
    <Control name={name} my={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={value ? value : label}
      />
      <Error name={name} />
    </Control>
  );
};

const TextareaControl = ({ name, label }: { name: string; label: string }) => (
  <Control name={name} my={4}>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <Field name={name} component={AdaptedTextarea} placeholder={label} id={name} />
    <Error name={name} />
  </Control>
);

const PercentComplete = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      keyof ProgressProps
    > &
    ProgressProps & { as?: 'div' | undefined },
) => {
  const form = useForm();
  const numFields = form.getRegisteredFields().length;
  const numErrors = Object.keys(form.getState()!.errors as any).length;
  return (
    <Progress
      value={numFields === 0 ? 0 : ((numFields - numErrors) / numFields) * 100}
      {...props}
    />
  );
};

export default FormChakra;
