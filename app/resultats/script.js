const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const p1 = document.getElementById("p1");
const h3 = document.getElementById("h3");
const btnPassif = document.getElementById("btnPassif");
const btnAgressif = document.getElementById("btnAgressif");
const btnManipulateur = document.getElementById("btnManipulateur");
const btnAssertif = document.getElementById("btnAssertif");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const h42 = document.getElementById("h42");
const screenResults = document.getElementById("screenResults");
const h22 = document.getElementById("h22");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
let i = 0;


const informations = [
    {h1: "GRILLE D'ANALYSE & RESULTATS", h2: "Chaque affirmation du test correspond à une forme d'attitude", p1: "- LA FUITE\n- L'ATTAQUE PROGRESSIVE\n- LA MANIPULATION\n- LE COMPORTEMENT ASSERTIF"},
    {h1: "TES RESULTATS"},
    {h1: "CONCLUSION", h2: "Ces trois postures non assertives font référence directement à notre schéma cognitif et à nos « pensées automatiques ».", p1: "Posez-vous la question suivante : « est-ce que les situations où j’adopte l’une de ces postures non assertives ont des caractéristiques communes (contexte, enjeux, interlocuteurs, etc...) ? ». Listez ensuite ces caractéristiques et faites le lien avec votre Histoire : tirer votre fil d’Ariane;\n\nil vous appartient de modifier ou pas ces attitudes, cherchez votre gain et ne cherchez pas à aller trop vite. On ne change pas pour les autres mais pour soi..."}, 
];

h1.textContent = informations[i].h1;
h2.textContent = informations[i].h2;
p1.textContent = informations[i].p1;
h3.textContent = informations[i].h3;
btnPassif.style.display = "none";
btnAgressif.style.display = "none";
btnManipulateur.style.display = "none";
btnAssertif.style.display = "none";
button1.textContent = informations[i].button1;
button2.textContent = informations[i].button2;
leftButton.style.display = "none";
h42.textContent = "Test repris du livre de Dominique CHALVIN, « Affirmation de Soi »";
screenResults.style.display = "none";
h22.style.display = "none";
p2.style.display = "none";
p3.style.display = "none";


////////////////////////////////////////////////////////
////////////////////////SLIDER//////////////////////////
////////////////////////////////////////////////////////

rightButton.addEventListener("click", function(event) {
    if (i < informations.length - 1) {
    i = i+1;
        h1.textContent = informations[i].h1;
        h2.textContent = informations[i].h2;
        p1.textContent = informations[i].p1;
        h3.textContent = informations[i].h3;
        button1.textContent = informations[i].button1;
        button2.textContent = informations[i].button2;
    console.log(i)
    };


    if (i === 1) {
        btnPassif.style.display = "flex";
        btnAgressif.style.display = "flex";
        btnManipulateur.style.display = "flex";
        btnAssertif.style.display = "flex";
        leftButton.style.display = "inline-block";
    };

    if (i === 2) {
        rightButton.style.display = "none";
        btnPassif.style.display = "none";
        btnAgressif.style.display = "none";
        btnManipulateur.style.display = "none";
        btnAssertif.style.display = "none";
    };
});

leftButton.addEventListener("click", function(event) {
    if (i > 0) {
    i = i-1;
        h1.textContent = informations[i].h1;
        h2.textContent = informations[i].h2;
        p1.textContent = informations[i].p1;
        h3.textContent = informations[i].h3;
        button1.textContent = informations[i].button1;
        button2.textContent = informations[i].button2;
    console.log(i)
    };

    if (i < 2) {
        leftButton.style.display = "inline-block";
        rightButton.style.display = "inline-block";
    };

    if (i === 0) {
        btnPassif.style.display = "none";
        btnAgressif.style.display = "none";
        btnManipulateur.style.display = "none";
        btnAssertif.style.display = "none";
        button1.style.display = "none";
        button2.style.display = "none";
        leftButton.style.display = "none";
    };
});