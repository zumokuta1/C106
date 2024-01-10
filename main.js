var SpeechRecognition = window.webkitSpeechRecognition;

var reconognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    reconognition.start();
}

reconognition.onresult = function (event) {
    console.log(event);

    var Content = event.result[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;

}