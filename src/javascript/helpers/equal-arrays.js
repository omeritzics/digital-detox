'use strict';

export default function equalArrays(a, b) {
	let i = a.length;

	if (i !== b.length) {
		return false;
	}

	while (i--) {
		if (a[i] !== b[i]) {
			return false;
		}
	}

	return true;
}
