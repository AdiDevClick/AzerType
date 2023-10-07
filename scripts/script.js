let chaine ="ca-chalot";
let regex = new RegExp("[a-z0-9A-Z._-]+@[a-z0-9A-Z._-]+\.[a-zA-Z]+")
//let regex = new RegExp("^[a-z]+$");
let resultat = regex.test(chaine);
console.log(resultat);


let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    try {
        event.preventDefault();

        let baliseNom = document.getElementById("nom")
        verifierChamp(baliseNom)

        let balisePrenom = document.getElementById("prenom")
        verifierChamp(balisePrenom)

        let baliseEmail = document.getElementById("email")
        verifierChamp(baliseEmail)
        
    } catch (error) {
        console.log("Une erreur est survenue : " + error.message)
    }
})

// on injecte les mots

//////////////////////////////////////////////////////////////////
// On récupère le texte
//////////////////////////////////////////////////////////////////
/* let messageUser = document.getElementById("texte")
let monBouton = document.getElementById("valider")

monBouton.addEventListener ("click", () =>  {
    console.log(messageUser.value)
}) */



//console.log(monBoutonUtilisé() + "test")
//////////////////////////////////////////////////////////////////
// On récupère le bouton
//////////////////////////////////////////////////////////////////

//let monBouton = document.getElementById("start")
/*let listeBoutons = document.querySelectorAll(".button")

for (i = 0;
     i < listeBoutons.length;
     i++) {
     let monBouton = listeBoutons[i] 
    console.log(monBouton)

    monBouton.addEventListener ("click", (event) => {
        monBouton = event.target
        console.log(monBouton)
    })
}
        /*if (monBouton.addEventListener ("click", (event) =>
        {
            console.log("J'ai cliqué sur ce" +monBouton)
        ;

/*let isGameStarted = (lancerJeu());
//monBouton.addEventListener("click", (event) => 
{   
    //if (!isGameStarted) {
    //monBouton.innerHTML = "Démarrer";
    lancerJeu();
    //isGameStarted = true;
    //} else if (isGameStarted) {
    //monBouton.innerHTML = "Started"
    //isGameStarted = false
    //}
});*/

/* document.addEventListener('keypress', (event) => {
    console.log(event.key);
}); */

//////////////////////////////////////////////////////////////////
// On check le gameType
//////////////////////////////////////////////////////////////////
/* let listeInputRadio = document.getElementsByName("optionSource") ; // les boutons radio
    
for (i = 0;
     i < listeInputRadio.length;
     i++) {
        console.log(listeInputRadio[i].checked)
     } */





//////////////////////////////////////////////////////////////////
// On affiche les mots
//////////////////////////////////////////////////////////////////
let baliseDeMots = document.querySelectorAll(".listeMotsApplication span")
console.log(baliseDeMots)




//////////////////////////////////////////////////////////////////
// On récupère le score
//////////////////////////////////////////////////////////////////

/*let score = document.querySelector(".score span")
console.log(score)



/*
let baliseFacebook = document.getElementById("fb")
//baliseFacebook.setAttribute("alt", "Ceci est la nouvelle veuleur alt")
baliseFacebook.alt = "La toute nouvelle balise alt";
baliseFacebook.classList.add("test")
baliseFacebook.classList.remove("fb")
baliseFacebook.href = "www.google.com"

console.log(baliseFacebook)




// On défini le texte et ses variables
let contenuTitre = "Test Azertype"
let contenuTitre2 = "Mon Azertype"
let contenuTitre3 = "C'est Mon Azertype"
let contenuParagraphe = "C'est ma nouvelle app pour apprendre à écrire"

// On crer la div, puis le h1, puis le paragraphe (ou autre choses si nécessaire)
let nouvelleDiv = document.createElement("div")
let nouveauH1 = document.createElement("h1")
let nouveauParagraphe = document.createElement("p")

// On ajoute le texte dans le titre et le paragraphe qu'on vient de créer 
nouveauParagraphe.textContent = contenuParagraphe
nouveauH1.textContent = contenuTitre

//Ajouter le nouvel élément au parent
nouvelleDiv.appendChild(nouveauH1)
nouvelleDiv.appendChild(nouveauParagraphe)

// On ajoute la div et ses éléments dans le body après la target
let body = document.querySelector("body")
body.appendChild(nouvelleDiv)


//Plus rapidement :
// On target l'élément parent existant
let parentElement = document.getElementById("liste")
let nouvelElement = document.createElement("h1"); // puis on crer
nouvelElement.innerHTML = contenuTitre2 // on inclu à l'intérieur
parentElement.appendChild(nouvelElement) // on l'affiche


/////////////////
// Méthode bcp plus rapide avec les backticks ` 
// On reprendre les même variable 
// contenuTitre et contenuParagraphe
///////////

/*let div = `
    <div>
        <h1>${contenuTitre3}</h1>
        <p>${contenuParagraphe}</p>
    </div>
    `;

body = document.querySelector(".score")
body.innerHTML = div*/







/*function lancerJeu (choix, motUser, insultes, listeMots, listePhrases) {
if (choix === typeMots) {
    for (let    i = 0;
                i < listeMots.length;
                i++ ) 
                {  
            motUser = prompt("Entrez le mot : " + listeMots[i]);      
            checkInsults(motUser, insultes, listeMots[i])
            if (checkWords(motUser, listeMots[i], insultes) === listeMots[i]) {
            score++ } 
            showmessage = retournerMessageScore(score, listeMots.length)            
    } 
    motUser = prompt(showmessage)
    //console.log("Votre nouveau score : " + score + " sur "+ listeMots.length) 
}      
    

    else {
    for (let    i = 0;
                i < listePhrases.length;
                i++ ) {  
            motUser = prompt("Entrez la phrase : " + listePhrases[i]);      
            checkInsults(motUser, insultes, listePhrases[i])
            if (checkWords(motUser, listePhrases[i], insultes) === listePhrases[i]) {
            score++
            showmessage = retournerMessageScore(score, listePhrases.length) 
            
            }
    }
    motUser = prompt(showmessage)
    //console.log("Votre nouveau score : " + score + " sur "+ listePhrases.length)
}
}*/

/*if (choix === mots) {
    for (let    i = 0;
                i < listeMotsApplication.length;
                i++ ) 
                {  
            motUtilisateur = prompt("Entrez le mot : " + listeMotsApplication[i]);      
            checkInsults(motUtilisateur, insultes, listeMotsApplication[i])
            if (checkWords(motUtilisateur, listeMotsApplication[i], insultes) === listeMotsApplication[i]) {
            score++ }
            console.log(showmessage);
            
    } 
    console.log(showmessage)
    console.log("Votre nouveau score : " + score + " sur "+ listeMotsApplication.length) 
}      
    

    else {
    for (let    i = 0;
                i < listeMotsApplication.length;
                i++ ) {  
            motUtilisateur = prompt("Entrez la phrase : " + listePhrasesApplication[i]);      
            checkInsults(motUtilisateur, insultes, listePhrasesApplication[i])
            if (checkWords(motUtilisateur, listePhrasesApplication[i], insultes) === listePhrasesApplication[i]) {
                score++
                showmessage = retournerMessageScore(score, listePhrasesApplication.length) 
            
            }
    }
    console.log(showmessage)
    console.log("Votre nouveau score : " + score + " sur "+ listePhrasesApplication.length)
}*/