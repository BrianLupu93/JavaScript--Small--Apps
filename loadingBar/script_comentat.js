// e un pic ciudat naming conventionul tau , asta cu --, in general se foloseste camelCase , sau versiunea_cu_bara_jos , sau versiunea-single-dash
// nu e nimic gresit in asta per say, doar ca in cazul in care lucrezi cu alti developeri o sa li se para peste mana poate sa foloseasca -- in loc de -
// pe mine m-ar incurca treaba asta :))
const emptyBar = document.querySelector(".empty--bar");
const progressBar = document.querySelector(".progress--bar");
const progressPercent = document.getElementById("progress--percent");
// aici e un pic cam migalos sa selectezi fiecare cerc separat
// imagineaza-ti ca peste cateva zile vrei sa adaugi sau sa scoti din cercuri o sa trebuiasca sa modifici tot
// ar fi fain daca ai selecta folosind parent-ul lor, si sa le folosesti din interiorul unui array ( asa faci si practice cu array si e si general purpose)
const circle1 = document.querySelector(".circle--1");
const circle2 = document.querySelector(".circle--2");
const circle3 = document.querySelector(".circle--3");
const circle4 = document.querySelector(".circle--4");
const circle5 = document.querySelector(".circle--5");
const message = document.querySelector(".message");

function moveTheBar() {
  let percent = 0;
  const loadingCircles = setInterval(loading, 600);
  const repeatInterval = setInterval(function () {
    if (percent === 100) {
      progressBar.style.borderTopRightRadius = "2rem";
      progressBar.style.borderBottomRightRadius = "2rem";
      message.textContent = "Complete!";
      clearInterval(repeatInterval);
      clearInterval(loadingCircles);
      circle5.style.opacity = "20%";
      circle5.style.boxShadow = "none";
    } else {
      percent++;
      progressBar.style.width = percent + "%";
      progressPercent.textContent = percent + "%";
      message.textContent = "Loading!";
    }
  }, 100);
}

function loading() {
  // aici daca folosesti alta modalitate de a le selecta si faci cu array o sa fie evident mai scurt procesu
  // sa nu uiti de partea cu clasa de care am povestit pe whatsapp
  const first = setTimeout(function () {
    circle5.style.boxShadow = "none";
    circle1.style.opacity = "100%";
    circle1.style.boxShadow =
      "5px 5px 5px white, -5px -5px 5px white, 5px -5px 5px white, -5px 5px 5px white";
    circle2.style.opacity = "20%";
    circle3.style.opacity = "20%";
    circle4.style.opacity = "20%";
    circle5.style.opacity = "20%";
  }, 0);
  const second = setTimeout(function () {
    circle1.style.opacity = "20%";
    circle1.style.boxShadow = "none";
    circle2.style.opacity = "100%";
    circle2.style.boxShadow =
      "5px 5px 5px white, -5px -5px 5px white, 5px -5px 5px white, -5px 5px 5px white";
    circle3.style.opacity = "20%";
    circle4.style.opacity = "20%";
    circle5.style.opacity = "20%";
  }, 100);
  const third = setTimeout(function () {
    circle1.style.opacity = "20%";
    circle2.style.opacity = "20%";
    circle2.style.boxShadow = "none";
    circle3.style.opacity = "100%";
    circle3.style.boxShadow =
      "5px 5px 5px white, -5px -5px 5px white, 5px -5px 5px white, -5px 5px 5px white";
    circle4.style.opacity = "20%";
    circle5.style.opacity = "20%";
  }, 200);

  const firt = setTimeout(function () {
    circle1.style.opacity = "20%";
    circle2.style.opacity = "20%";
    circle3.style.opacity = "20%";
    circle3.style.boxShadow = "none";
    circle4.style.opacity = "100%";
    circle4.style.boxShadow =
      "5px 5px 5px white, -5px -5px 5px white, 5px -5px 5px white, -5px 5px 5px white";
    circle5.style.opacity = "20%";
  }, 300);

  const fifth = setTimeout(function () {
    circle1.style.opacity = "20%";
    circle2.style.opacity = "20%";
    circle3.style.opacity = "20%";
    circle4.style.opacity = "20%";
    circle4.style.boxShadow = "none";
    circle5.style.opacity = "100%";
    circle5.style.boxShadow =
      "5px 5px 5px white, -5px -5px 5px white, 5px -5px 5px white, -5px 5px 5px white";
  }, 400);
}
moveTheBar();

// !!!!!! cand folosesti elemente care sunt similare, in orice situatie, atat in html cat si cu date simple ( numere, string )
// incearca sa folosesti structuri de date complexe, array sau obiecte ( in cazul in care ai date in date in date folosesti obiecte)
// motivele sunt:
// 1. aplicatia ta o sa fie mai general purpose, si o sa poti modifica cu usurinta numarul de obiecte care vrei sa treaca prin acealsi proces
// 2. un array care contine 10 valori nu face atat presiune pe memoria-ram/cpu in comparatie cu 10 constante/variabile/leturi declarate separat

// sa fi atent cand vine vorba sa faci operatii cu un array de elemente HTML !!!!!! sunt 2 tipuri de date returnate in momentul in care folosesti selectoru sau element.children
// odata iti poate returna array si odata o lista de DOMelements, lista de DOMelements arata ca un array dar nu are aceleasi proprietati si functii ( vine din alt prototype nu din Array ( clasa care reprezinta structura de date))
