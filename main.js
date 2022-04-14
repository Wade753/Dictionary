let dictionary = [];

function addToArray() {
	let newWord = document.getElementById("add").value;
	if (newWord.match("[a-z]")) {
		let alreadyAdded = dictionary.includes(newWord);
		if (alreadyAdded) {
			addMessage.innerHTML = "Word already added";
		} else {
			dictionary.push(newWord);
			addMessage.innerHTML = "New word added!";
			console.log("Added: " + newWord)
		}
	}
	document.dictionaryAdd.reset();
}

function findInArray() {
	let findWord = document.getElementById("find").value;
	if (findWord.match("[a-z]")) {
		let existingWord = dictionary.includes(findWord);
		if (existingWord) {
			findMessage.innerHTML = "Word found in the dictionary";
			console.log("Found: " + findWord)
		} else {
			findMessage.innerHTML = "Word not found in the dictionary";
			console.log("Doesn't exist: " + findWord)
		}
	}
	document.dictionaryFind.reset();
}