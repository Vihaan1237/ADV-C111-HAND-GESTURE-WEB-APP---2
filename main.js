//https://teachablemachine.withgoogle.com/models/JRYXPAnCO/model.json//

prediction = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capturedimage" src="'+data_uri+'"/>'
    });
}

Classfier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JRYXPAnCO/model.json',modelLoaded);

function modelLoaded(){
console.log("Model Loaded");
}