// TESTO EFFETTO TYPEWRITER
let string = "Hi! My name is Sarah and I'm a 21-years-old visual designer. I'm a Communication Design student at Politecnico di Milano, currently finishing my BSc.";

let string1 = ["skills:", "_adobe creative suite (photoshop, illustrator, ", "indesign, lightroom, premiere, aftereffects)", "_blender", "_figma", "programming languages:", "_javascript, p5js, threejs", "_c++"]

let n = 0;

let str = string.split("");
let str1 = string1[n].split("");

let el = document.getElementById('str');
let el1 = [document.getElementById('str1'), document.getElementById('str2'), document.getElementById('str3'), document.getElementById('str4'), document.getElementById('str5'), document.getElementById('str6'), document.getElementById('str7'), document.getElementById('str8')]

let dTempo;
let timer;
let skippato = false;

let running1;
let running;

function setup() {
}

(function animate() {
  str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
  running = setTimeout(animate, 35);
  if( running > 450 ) {
    running1 = setTimeout(animate1, 35);
    let listaProgetti = document.getElementById("listaProgetti");
    listaProgetti.style.display = "block";

    if( skippato == false ) {
    listaProgetti.classList.add('fade'); // attiva l'animazione
    }
  } else if( running == 450 ) {
    timer = millis();
  }
})();

function animate1() {
//   if ( n == 1 || n == 2 ) {
//     dTempo = 2500;
    document.getElementById("str").style.display = "none";
    document.getElementById("testoItalics").style.display = "block";
//   } else if ( n == 5 || n == 6) {
//     dTempo = 1600;
//   } else if (n == 0 || n == 3 || n == 4 || n == 7) {
//     dTempo = 950;
//   } 

  // if( n < 2 ) {
  // //  str1.length > 0 ? el1[n].innerHTML += str1.shift() : clearTimeout(running1);
  //   if(millis() - timer > dTempo) {
  //     n++;
  //     str1 = string1[n].split("");
  //     timer = millis();
  //   }
  // } else if ( n == 2 ){
  //   let listaProgetti = document.getElementById("listaProgetti");
  //   listaProgetti.style.display = "block";

    if( skippato == false ) {
    listaProgetti.classList.add('fade'); // attiva l'animazione
    }

    document.getElementById("hor").style.width = "49.2vw";

    document.getElementById("enterButton").style.display = "none";
    document.getElementById("enterButton1").setAttribute("id", "enterButton");    
  
}

function skip() {
  skippato = true;

  document.getElementById("listaProgetti").style.display = "block";
 
  document.getElementById("hor").style.width = "49.2vw";
  document.getElementById("str").style.display = "none";
  document.getElementById("testoItalics").style.display = "block";

  document.getElementById("testoHome").style.display = "none";
  document.getElementById("testoHomeAlt").style.display = "block";
  document.getElementById("enterButton").style.display = "none";

  document.getElementById("enterButton1").setAttribute("id", "enterButton");
}