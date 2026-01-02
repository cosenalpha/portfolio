// @@@@@@@@@@@@@@@@@@@ FUNZIONE FILTRO LISTA PROGETTI @@@@@@@@@@@@@@@@@@@

let typeOld = [];

function filter(type) {
    typeOld.push(type);
    console.log(type);
    console.log(typeOld);

    for (let i = 0; i < typeOld.length; i++) {
     if (typeOld[i] == typeOld[i-1]) {


        clearFilter();
        break
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
         viewList[i].style.display = "flex";
       }
      document.querySelector(nameClass).style.border = "none";
      }
    }
  }
}

function clearFilter() {
    const nodeList = document.querySelectorAll(".list-butt");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.display = "flex";
      nodeList[i].style.borderTop = "1px solid #FFF";
    }

    document.querySelector(".list-butt").style.border = "none";

    const activeFilter = document.querySelectorAll(".filter-active");
    for (let i = 0; i < activeFilter.length; i++) {
        // activeFilter[i].style.opacity = "40%";
        activeFilter[i].classList.toggle("filter-active");
    }
    typeOld = [];
}

function overButton(overName) {
  if (overName==1) {
    document.getElementById("ripplesImg").style.display = "block";
  } else if (overName == 2) {
    document.getElementById("flogistoImg").style.display = "block";
  } else if (overName == 3) {
    document.getElementById("anthroImg").style.display = "block";
  } else if (overName == 4) {
    document.getElementById("interdependenceImg").style.display = "block";
  } else if (overName == 5) {
    document.getElementById("netzeroImg").style.display = "block";
  } else if (overName == 5) {
    document.getElementById("netzeroImg").style.display = "block";
  } else if (overName == 6) {
    document.getElementById("meatImg").style.display = "block";
  } else if (overName == 7) {
    document.getElementById("vakenImg").style.display = "block";
  } else if (overName == 8) {
    document.getElementById("pawsImg").style.display = "block";
  } else if (overName == 9) {
    document.getElementById("chatImg").style.display = "block";
  } else if (overName == 10) {
    document.getElementById("codingImg").style.display = "block";
  } else if (overName == 11) {
    document.getElementById("effimeroImg").style.display = "block";
  } else if (overName == 12) {
    document.getElementById("photoImg").style.display = "block";
  } else if (overName == 13) {
    document.getElementById("selfImg").style.display = "block";
  } else if (overName==0) {
    const imgShown = document.querySelectorAll(".imgList");
    for (let i = 0; i < imgShown.length; i++) {
      imgShown[i].style.display = "none";
    }
  }

}

function openBox(boxN) {
  console.log(boxN);
  let boxName = "box-" + boxN;
  let buttonName = "butt-" + boxN;
  document.getElementById(boxName).classList.toggle("opened-box");
  document.getElementById(buttonName).classList.toggle("active-button");

}

function openBb() {
    let description = document.querySelector('.prj-descr');
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');

    description.classList.toggle("opened-box");
    plus.classList.toggle("plus-active");
    plus.classList.toggle("plus-inactive");
    minus.classList.toggle("minus-active");
    minus.classList.toggle("minus-inactive");

  
    console.log("Wow");
}