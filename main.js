SpeechRecognition = window.webkitSpeechRecognition;
//Web speech API//

var Recognition = new SpeechRecognition();

function start() {
    document.getElementById('output').innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function (event) {
    var content = event.results[0][0].transcript;

    document.getElementById('output').innerHTML = content;
    console.log(event);
    if(content == 'take my selfie'){
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;// Convert text to speech

    speak_data = 'Taking Your Selfie In 5 seconds';

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    timer();

    setTimeout(function(){
        takesnapshot();
        save();
      }, 13000);
}

camera = document.getElementById('camera');
Webcam.set({
    image_format : 'jpeg',
    jpeg_quality : 100
});