export interface IdentityFn {
	//<T extends React.SetStateAction<boolean>> ( arg: T ): void;
	identity: <T extends React.SetStateAction<boolean>> ( value: T ) => void;
}