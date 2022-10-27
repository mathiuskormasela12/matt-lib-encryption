// ========== Math Lib Encryption
/* 
	Written By Mathius
	Thursday, 27th October 2022
*/

class MattLibEncryption {
	constructor(secretKey) {
		this.secret = secretKey;
		this.alphabet = [
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
			'z',
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9'
		];
	}

	encrypt(plainText) {
		const lowerCasePlainText = plainText.toLowerCase();
		const alphabet = [...this.alphabet];
		let modifiedAlphabet = [];

		let cipherText = '';

		for(const key of this.secret) {
			const indexOfElementsThatWillBeSwapped = alphabet.indexOf(key);
			modifiedAlphabet = [
				...alphabet.slice(indexOfElementsThatWillBeSwapped)
			];
		}

		for(const item of alphabet) {
			if(modifiedAlphabet.indexOf(item) == -1) {
				modifiedAlphabet.push(item);
			}
		}

		for(const text of lowerCasePlainText) {
			if(text === ' ') {
				cipherText += ' ';
			} else {
				const index = alphabet.indexOf(text);
				cipherText += modifiedAlphabet[index];
			}
		}

		return cipherText;
	}

	decrypt(cipherText) {
		const alphabet = [...this.alphabet];
		let modifiedAlphabet = [];

		let plainText = '';

		for(const key of this.secret) {
			const indexOfElementsThatWillBeSwapped = alphabet.indexOf(key);
			modifiedAlphabet = [
				...alphabet.slice(indexOfElementsThatWillBeSwapped)
			];
		}

		for(const item of alphabet) {
			if(modifiedAlphabet.indexOf(item) == -1) {
				modifiedAlphabet.push(item);
			}
		}

		for(const text of cipherText) {
			if(text === ' ') {
				plainText += ' '
			} else {
				const index = modifiedAlphabet.indexOf(text);
				plainText += alphabet[index];
			}
		}

		return plainText;
	}
}

module.exports = MattLibEncryption;