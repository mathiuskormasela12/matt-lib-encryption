
function encrypt(keys: string, plainText: string): string {
	let cipherText: string = '';
	const alphabeth = [
		'a', 
		'b', 
		'c', 
		'd', 
		'e', 
		'f', 
		'g',
		'h', 
		'i',
		'j', 
		'k', 
		'l', 
		'm', 
		'n', 
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];

	for(const text of plainText) {
		let num: number = 0;

		for (const key of keys) {
			// Formula C = (P + K) % 26
			const index = (Number(alphabeth.indexOf(text)) + Number(alphabeth.indexOf(key))) % 26;
			num += index;
		}

		cipherText += alphabeth[num];
	}

	return cipherText;
}

function decrypt(keys: string, cipherText: string): string {
	let plainText: string = '';
	const alphabeth = [
		'a', 
		'b', 
		'c', 
		'd', 
		'e', 
		'f', 
		'g',
		'h', 
		'i',
		'j', 
		'k', 
		'l', 
		'm', 
		'n', 
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];

	for(const text of cipherText) {
		let num: number = 0;

		for (const key of keys) {
			// Formula P = (C - K);
			const index = (Number(alphabeth.indexOf(text)) - Number(alphabeth.indexOf(key)));
			num += index;
		}

		plainText += alphabeth[num];
	}

	return plainText;
}

export { encrypt, decrypt };