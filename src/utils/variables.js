export const departaments = {
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

/* export const links = [
	{ id: 1, title: 'Всё' },
	{ id: 2, title: 'Designers' },
	{ id: 3, title: 'Analysts' },
	{ id: 4, title: 'Managers' },
	{ id: 5, title: 'iOS' },
	{ id: 6, title: 'Android' },
]; */

const departamentLinks = (Object.values(departaments))
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

export const departamentLinksModified = departamentLinks
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

departamentLinksModified
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
