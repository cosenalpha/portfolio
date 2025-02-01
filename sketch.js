let timerValue = 6300;
let clickValue = false;
let filters = [];

function loop() {
    if (millis()>timerValue) {
        document.getElementById('click').style.display = "block";
        clickValue = true;
    }
}

function click_anywhere() {
    if (clickValue == false) {
        document.getElementById('click').style.display = "block";
        document.getElementById('type').style.animation = "b .8s infinite steps(1)";

        clickValue = true;
    } else if (clickValue == true) {
        window.location = 'projects.html';    }
}

// @@@@@@@@@@@@@@@@@@@ FUNZIONE FILTRO LISTA PROGETTI @@@@@@@@@@@@@@@@@@@

let typeOld = [];

function filter(type) {
    typeOld.push(type);
    for (let i = 0; i < typeOld.length; i++) {
     if (typeOld[i] == typeOld[i-1]) {
        clearFilter();
     } else {
        const activeFilter = document.querySelectorAll(".filter-active");
    for (let i = 0; i < activeFilter.length; i++) {
        activeFilter[i].classList.toggle("filter-active");
    }

    let nameButt = "b-" + type;
    document.getElementById(nameButt).classList.toggle("filter-active");


    if (document.querySelector(".filter-active")) {
      const nodeList = document.querySelectorAll(".list-butt");
      for (let i = 0; i < nodeList.length; i++) {
         nodeList[i].style.display = "none";
       }
    
      let nameClass = ".f-" + type;
      const viewList = document.querySelectorAll(nameClass);
      for (let i = 0; i < viewList.length; i++) {
         viewList[i].style.display = "block";
       }
      document.querySelector(nameClass).style.border = "none";
    }
     }
    }

     
}

function clearFilter() {
    const nodeList = document.querySelectorAll(".list-butt");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.display = "block";
      nodeList[i].style.borderTop = "1px solid #FFF";
    }

    document.querySelector(".list-butt").style.border = "none";

    const activeFilter = document.querySelectorAll(".filter-active");
    for (let i = 0; i < activeFilter.length; i++) {
        // activeFilter[i].style.opacity = "40%";
        activeFilter[i].classList.toggle("filter-active");
    }
}