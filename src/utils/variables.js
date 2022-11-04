export const departments = {
	all: 'Всё',
	android: 'Android',
	ios: 'iOS',
	design: 'Дизайн',
	management: 'Менеджмент',
	qa: 'QA',
	back_office: 'Бэк-офис',
	frontend: 'Frontend',
	hr: 'HR',
	pr: 'PR',
	backend: 'Backend',
	support: 'Техподдержка',
	analytics: 'Аналитика',
};

const departmentLinks = (Object.values(departments))
	.filter(item => {
		return (
			item === 'Всё'
			|| item === 'Дизайн'
			|| item === 'Аналитика'
			|| item === 'Менеджмент'
			|| item === 'iOS'
			|| item === 'Android'
		);
	});

export const departmentLinksModified = departmentLinks
	.map((item, array) => {
		if (item === 'Всё') {
			return 'Всё';
		}
		else if (item === 'Дизайн') {
			return 'Designers';
		}
		else if (item === 'Аналитика') {
			return 'Analysts';
		}
		else if (item === 'Менеджмент') {
			return 'Managers';
		}
		else if (item === 'iOS') {
			return 'iOS';
		}
		else if (item === 'Android') {
			return 'Android';
		}
		return array;
	});

departmentLinksModified
	.splice(1, 5, 'Designers', 'Analysts', 'Managers', 'iOS', 'Android');

export const returnKey = (str) => {
	if (str === 'Всё') return 'all';
	else if (str === 'Android') return 'android';
	else if (str === 'iOS') return 'ios';
	else if (str === 'Designers') return 'design';
	else if (str === 'Managers') return 'management';
	else if (str === 'Analysts') return 'analytics';
	else console.log('Bad string');
};

export const returnLink = (str) => {
	if (str === 'all') return 'Всё';
	else if (str === 'android') return 'Android';
	else if (str === 'ios') return 'iOS';
	else if (str === 'design') return 'Designers';
	else if (str === 'management') return 'Managers';
	else if (str === 'analytics') return 'Analysts';
	else console.log('Bad string');
};

export const arrForHash = [
	'8B7BCDC2',
	'225E6693',
	'500B67FB',
	'A89D0DE6',
	'9D9539E7',
	'BDC01094',
	'7F5AE56A',
	'4F32C4CF',
	'B0E33EF4',
	'2D297A22',
];

export const str = 'https://api.lorem.space/image/face?w=120&h=120&hash=';

export function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

export const sortList = [
	{ name: 'По алфавиту', sortProperty: 'lastName' },
	{ name: 'По дню рождения', sortProperty: 'birthday' },
];
