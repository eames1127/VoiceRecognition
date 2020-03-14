# Voice Recognition application.

###About:
This is a simple (1st) voice registration application.

The intention is just to experiment with the speech ability to gain a better understanding.

###Features:
* Speak recognition.
* Spoken reply.
* Chat logging.
* Basic/very simple configured replies.


###Speech rec code:
```javascript {cmd="node"}
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//When speech rec turned on.
recognition.onstart = () => {
    ...
};

//After the speech rec has done.
recognition.onresult = (event) => {
    ...
    //Gets the spoken text.
    const transcript = event.results[current][0].transcript;
    ...
};

//Add the listener to the button so that when pressed the micophone is activated.
btn.addEventListener('click', () => {
    recognition.start();
});

//Setup and speak.
function readOutLout(message)
{
    const speech = new SpeechSynthesisUtterance();

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
```