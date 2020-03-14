const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


//
const greetings = [
    "I'm good thank you.",
    "Doing good",
    "Go away!"
];

recognition.onstart = function(){
    console.log("Voice is activated, please speak into the microphone.");
};


recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    readOutLout(transcript);
};


//add the listener to the button.
btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLout(message)
{
    const speech = new SpeechSynthesisUtterance();

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    if(message.includes("how are you")){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
        content.textContent = finalText;
    }
    else
    {
        content.textContent = message;
        speech.text = message;
    }

    window.speechSynthesis.speak(speech);
}