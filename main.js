var SpeechRecongnit = window.webikitSpeechRecongnit;
var recongniton = new SpeechRecongnit();
var Textbox = document.getElementById("Textbox")

function start()
{
    Textbox.innerHTML = "";
    recongnition.start();
}
recognition.onresult = function(event)
{
    console.log(event)
    var content = event.result[0][0].transcript;
    Textbox.innerHTML = content
    console.log(content);
    speak();
}
function speak(){
 var synth = window.spechSnythesis;
 speak_data = document.getElementById ("textbox").value;
 var uthettis = new SpeechSynthesisUtterance(speak_data)
 synth.speak (utterThis)
Webcam.atthach(camera)
}
 console.log ("tirando selfie ")

 camera = document.getElementById("camera");
Webcam.set({
whidth:360,
heigth:250,
image_format : 'png',
png_quality:90
 });

