//


const animalList  = ["Dog", "Elephant", "Fish", "Frog", "Lion", "Rabbit", "Tiger"];

const images = document.getElementsByTagName('img');

// TODO: Add EventListeners to each image element

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', addBorder);
}


for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseout', removeBorder);
}
// alters the elements class name to add the CSS border styling
function addBorder() {
    this.className = 'border';

}
// alters the elements class name to remove the CSS border styling.
function removeBorder() {
    this.className = 'noBorder';
}

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', animal);
}




// random funtion for print random animal
//function random(){
 let guess = (Math.random() * 7).toFixed();
    
 let pick = animalList[guess];
 document.getElementById('word').innerHTML = (pick);
 
//}

//random();

// for counting hit and miss set up variable

let hit = 0;
let miss = 0;


// function for comparing the animal with the word 

function animal (e){
    
    //let word = document.getElementById("word").textContent;
    let text = e.target.alt;
    
    
     console.log(pick);
    //console.log(e);
     console.log(text);
    
    
    if( pick== text){
           document.getElementById('guess').innerHTML = "You got it!";
           hit++;
           guess = (Math.random() * 7).toFixed();
           pick = animalList[guess];
           document.getElementById('word').innerHTML = (pick);
           console.log(pick);
           //random();
    } else {
        document.getElementById('guess').innerHTML = "No, try it again!!";
        miss++;
    
    }
    
     document.getElementById("hit").innerHTML = ("You hit: " + hit);
     document.getElementById("miss").innerHTML = ("You missed : " + miss);
    
    
}









