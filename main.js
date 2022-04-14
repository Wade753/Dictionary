var wordsArray = [];

function addToArray(){
    let newWordAdded = document.getElementById("add").value;
    if(newWordAdded.match("[a-z]")){
        wordsArray.push(newWordAdded);
        let alreadyAdded = wordsArray.includes(newWordAdded);
        if(alreadyAdded){
        addMessage.innerHTML = "Word already added";
        console.log("Added: " + newWordAdded)
        }else{
        wordsArray.push(newWordAdded);
        addMessage.innerHTML = "New word added!";
        }
    }
    document.dictionaryAdd.reset();
}

function findInArray(){
    let findWordAdded = document.getElementById("find").value;
    if(findWordAdded.match("[a-z]")){
        let exiWord = wordsArray.includes(findWordAdded);
        if(exiWord){
            findMessage.innerHTML = "Word found in the dictionary";
            console.log("Found: " + findWordAdded)
        }else{
            findMessage.innerHTML = "Word not found in the dictionary";
            console.log("Doesn't exist: " + findWordAdded)
        }
    }
    document.dictionaryFind.reset();
}
