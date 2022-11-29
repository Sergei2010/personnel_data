import { DateTime } from 'luxon';

export const text = ( age: number ) => {
	let txt;
	let count = age % 100;
	if ( count >= 5 && count <= 20 ) {
		txt = 'лет';
	} else {
		count = count % 10;
		if ( count === 1 ) {
			txt = 'год';
		} else if ( count >= 2 && count <= 4 ) {
			txt = 'года';
		} else {
			txt = 'лет';
		}
	}
	return txt;
};

export function getTimeForZero () {
	const nextYearFromNow = DateTime.now().year + 1;
	const dt = DateTime.local( nextYearFromNow, 1, 1 ).setLocale( 'ru' ).toISO();
	return dt;
}
