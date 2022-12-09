const inpText  = document.getElementById("input-text")
const convertIcon = document.getElementById("convert-icon")

convertIcon.addEventListener('click', function(){
    let speechText = inpText.value
    let speechVoice = new SpeechSynthesisUtterance()
    let voices = speechSynthesis.getVoices()
    speechVoice.voice = voices[2]
    speechVoice.text = speechText
    speechVoice.lang = 'en-US'
    speechSynthesis.speak(speechVoice)
    console.log(speechText)
})