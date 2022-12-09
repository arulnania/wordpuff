const playBtn = document.getElementById("play-btn")
const playArea = document.getElementById("playArea")
const guessWord = document.getElementById("guess-word")
const def = document.getElementById("defenition")
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"


function generatequestion(){
    var words = ['multifarious', 'aberration', 'obfuscate', 'quixotic', 'fortuitous', 'iconoclast', 'cognizant', 'ebullient', 'dour', 'supercalifragilisticexpialidocious']
    question = words[Math.floor(Math.random()*words.length)]
}
function game(){
    generatequestion()
    fetch(`${url}${question}`)
        .then((response) => response.json())
        .then((data) => {
            def.innerHTML = `
                ${data[0].meanings[0].definitions[0].definition}
           `
        })
    
    console.log(question)
    playGame()
    playArea.style.display = 'block'
}

function gameres(){
    let guess = guessWord.value
    let result = document.getElementById("result")
    if(guess === question){
        result.innerHTML = `
            Hurray!!! Correct answer.
        `
    }
    else{
        result.innerHTML = `
            Oops!!! Try again.        
        `
    }
}

function playGame(){
    let speechVoice = new SpeechSynthesisUtterance()
    let voices = speechSynthesis.getVoices()
    speechVoice.voice = voices[2]
    speechVoice.text = question
    speechVoice.lang = 'en-US'
    speechSynthesis.speak(speechVoice)
}