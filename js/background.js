const images = ["img/0.jpg","img/1.jpg","img/2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

//const bgImage = document.createElement("img");

//document.body.appendChild(bgImage);

//bgImage.src = `img/${chosenImage}`;

function paintImage(){
    document.body.style.backgroundImage = "url(" + chosenImage +")";
    console.log(`img/${chosenImage}`);
}

paintImage();
