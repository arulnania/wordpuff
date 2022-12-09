const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const result = document.getElementById("result")
const sound = document.getElementById("sound")
const searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            result.innerHTML = `
            <section class="p-2">
                <div class="container">
                    <div class="word d-flex">
                        <span class="h1 text-h">${inpWord}</span>
                        <span class="ms-5">
                        <button class="btn" onClick="playDic()"><i class="bi bi-volume-up  h3"></i></button>
                        </span>
                    </div>
                    <div class="details d-flex fst-italic">
                        <p class="">${data[0].meanings[0].partOfSpeech}&nbsp</p>
                        <p class="">${data[0].phonetic}</p>
                    </div>
                    
                    <div class="word-meaning">
                        <p class="h5">
                        ${data[0].meanings[0].definitions[0].definition}
                        </p>
                    </div>
                    <div id="synm" class="mt-4">
                        <p class="h5">Synonyms:</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item border-0">${data[0].meanings[0].definitions[0].synonyms[0]}</li>
                            <li class="list-group-item border-0">${data[0].meanings[0].synonyms[1]}</li>
                        </ul>
                    </div>
                    <div id="antnm" class="mt-4">
                        <p class="h5">Antonyms:</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item border-0">${data[0].meanings[0].antonyms[0]}</li>
                            <li class="list-group-item border-0">${data[0].meanings[0].antonyms[1]}</li>
                        </ul>
                    </div>
                    <div class="word-example mt-4">
                        <p class="">
                        <span class="h5">Example: </span>${data[0].meanings[0].definitions[0].example}
                        </p>
                    </div>
                </div>
            </section>
            `
             
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        })
})
function playDic() {
    var inpWord = document.getElementById("inp-word").value;
    var speechVoice = new SpeechSynthesisUtterance();
    var voices = speechSynthesis.getVoices();
    speechVoice.voice = voices[2];
    speechVoice.text = inpWord;
    speechVoice.lang = "en-US";
    speechSynthesis.speak(speechVoice);
}


