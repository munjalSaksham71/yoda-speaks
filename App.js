var txtInput = document.querySelector("#txt-input")
var btnTranslate = document.querySelector("#btn-translate")
var txtOutput = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getServerURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server! Try again after some time.")
}

function clickHandler() {
    var inputText = txtInput.value; //Taking Input Value

    //Calling Server For Processing 
    fetch(getServerURL(inputText))
    .then (response => response.json())
    .then ( json => {
        var TranslatedText = json.contents.translated;
        txtOutput.innerText = TranslatedText;
    })
    .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickHandler)