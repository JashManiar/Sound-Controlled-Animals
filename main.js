var Ape = 0;
var Bear = 0;
var Cat = 0;
var Cow = 0;
var Elephant = 0;
var Horse= 0;
var Lion = 0;
var Monkey = 0;
var Pig = 0;
var background_noise = 0;

function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "Ape"){
            img.src = "Ape.jpg";
            Ape = Ape+1;
            document.getElementById("detected").innerHTML = "Detected Ape - "+ Ape;
        }
        else if(results[0].label == "Cat"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            Cat = Cat+1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+ Cat;
        }
        else if(results[0].label == "Lion"){
            img.src = "Lion.jpg";
            Lion = Lion+1;
            document.getElementById("detected").innerHTML = "Detected Lion - "+ Lion;
        }
        else if(results[0].label == "Cow"){
            img.src = "Cow.jpg";
            Cow = Cow+1;
            document.getElementById("detected").innerHTML = "Detected Cow - "+ Cow;
        }
         else if(results[0].label == "Horse"){
             img.src= "Horse.jpg";
             Horse = Horse+1;
            document.getElementById("detected").innerHTML = "Detected Horse - "+ Horse;
        }
        else if(results[0].label == "Monkey"){
            img.src = "Monkey.jpg";
            Monkey = Monkey+1;
            document.getElementById("detected").innerHTML = "Detected Monkey - "+ Monkey;
        }
        else if(results[0].label == "Pig"){
            img.src = "Pig.jpg";
            Pig = Pig+1;
            document.getElementById("detected").innerHTML = "Detected Pig- "+ Pig;
        }
        else if(results[0].label == "Elephant"){
            img.src = "Elephant.jpg";
            Elephant = Elephant+1;
            document.getElementById("detected").innerHTML = "Detected Elephant - "+ Elephant;
        }
        
        else{
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}
