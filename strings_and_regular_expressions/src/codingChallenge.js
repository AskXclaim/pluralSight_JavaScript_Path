let input =
	`paris,france
	london,england,
	tokyo,japan`;
// desired out - "Paris is the capital of France; London is the capital of England, Tokyo is..."

const getPhrase = (inputArray, maxCharacter = null) => {
	const newlineSeperatedArray = getNewlineSeperatedArray(inputArray);
	let output = "";
	if (newlineSeperatedArray.length === 0) return output;

	if (maxCharacter === null) {
		return getPhraseWithNullOrZeroMaxCharacterLength(newlineSeperatedArray);
	}

	return getPhraseWithMaxCharacterLengthSet(newlineSeperatedArray, maxCharacter)
}

const getNewlineSeperatedArray = (phrase) => {
	if (typeof phrase !== "string" && Object.prototype.isPrototypeOf(phrase) === false)
		throw new Error("Argument must be an array of strings");

	const newlineSeperatedArray = phrase.split('\n');
	if (newlineSeperatedArray.length === 0) return [];

	return newlineSeperatedArray;
}
const toNormalCase = (word) => {
	const firstCharacter = word.slice(0, 1).toUpperCase();
	return `${firstCharacter}${word.slice(1)}`;
}

const getPhraseWithNullOrZeroMaxCharacterLength = (newlineSeperatedArray) => {
	let cityAndCountry = [];
	let output = "";
	for (let i = 0; i < newlineSeperatedArray.length; i++) {
		cityAndCountry = newlineSeperatedArray[i].trim().split(",");
		if (i === 2) {
			output = `${output}${toNormalCase(cityAndCountry[0])} is...`;
			break;
		}
		output = `${output}${toNormalCase(cityAndCountry[0])} is the capital of ${toNormalCase(cityAndCountry[1])}; `;
	}
	return output;
}

const getPhraseWithMaxCharacterLengthSet = (newlineSeperatedArray, maxCharacter) => {
	let output = "";
	if (maxCharacter <= 0) return output;

	let cityAndCountry = [];
	for (const cityCountry of newlineSeperatedArray) {
		cityAndCountry = cityCountry.trim().split(",");
		output = `${output}${toNormalCase(cityAndCountry[0])} is the capital of ${toNormalCase(cityAndCountry[1])}; `;
		if (output.length >= maxCharacter) {
			output = `${output.slice(0, maxCharacter)} ...`;
			break;
		}
	}
	return output;
}

console.log(getPhrase(input, 15));