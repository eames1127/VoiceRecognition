const btn = document.querySelector(".talk");
const mesLog = document.getElementById("messageLog");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Greeting array.
const greetings = [
    "I'm good thank you.",
    "Doing good",
    "Go away!"
];

recognition.onstart = () => {
    console.log("Voice is activated, please speak into the microphone.");
};

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    var completeText ="<b>You</b>:"+ transcript; 
    mesLog.innerHTML += completeText;

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

    var finalText = "";

    switch(message){
        case "hello":
            finalText = "Hello";
        break;

        case "hi":
            finalText = "Hello";
        break;

        case "how are you":
            finalText = greetings[Math.floor(Math.random() * greetings.length)];        
        break;

        case "I'm from Hartlepool":
            finalText = "Wow, you mean you're actually admitting that? I wouldn't..."
        break;

        case "I'm from Mansfield":
            finalText = "It could be worse..."
        break;
        
        default:
            finalText = "Sorry, I don't know how to answer that.";    
    }

    var completeText ="<br /><b>Computer:</b> " + finalText + "<br />";
    mesLog.innerHTML += completeText; 
    speech.text = finalText;

    window.speechSynthesis.speak(speech);
}