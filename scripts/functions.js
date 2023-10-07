/**
 * Cette fonction vérifie le score en 
 * fonction du nombre de mots/phrases à réécrire.
 * 
 * @returns 
 */
function retournerAffichageScore (score, nombreQuestions) {
    let affichageScore = `${score} / ${nombreQuestions}`;
    let span = document.querySelector(".score span")
    span.innerText = affichageScore
    return affichageScore
}

///////////////////////////////////////////////////// 
// On remplace le H3 qui a servit à afficher les insultes
///////////////////////////////////////////////////// 

function replaceAlert(noAlert) {
    let zoneInsults = document.querySelector(".header-main h2")
    zoneInsults.textContent = noAlert
}

///////////////////////////////////////////////////// 
// On recherche des insultes
///////////////////////////////////////////////////// 

function isInsulted (texte, insults) {  
    let zoneInsults = document.querySelector(".header-main h2")
    for (i = 0;
         i < insults.length;
         i++) {
        if (texte === insults[i]) {
        zoneInsults.textContent = alertInsult
    }}
} 

/***************************                    ******
 *  Afficher les mots à écrire                       *
 ***********                                    ******/ 
function afficherLeMot(proposition) {
    let listeDeMots = document.querySelector(".liste h4") // Sélection de la zone d'affichage (ici le H4)      
    
    /* let i = 0;
            while (i < proposition.length )
            {   
                motApp = proposition[i]
                i++ 
                         
            }  */
    listeDeMots.innerText = proposition                    // On affiche le mots/phrase 
    //return proposition
}
/**
 * Vérifier les champs input
 */
function verifierChamp(champ) {
    if (champ.value === "") {
        throw new Error(`Le champ ${champ.id} est vide`)
    }
}

/***************************                    ******
 *  Afficher les messages d'erreurs                  *
 ***********                                    ******/                
/**
 * 
 * @param {*} error 
 */
function afficherErrorMessages(error) {
    //let erreur = `<span>${error}</span>`;
    //let erreur = ${error};
    let newSpan = document.getElementById("messageError")   // On vérifie le span
    if (!newSpan) {                                         // S'il n'existe pas
        let modal = document.querySelector(".modal");       // On sélectionne la zone de création
        newSpan = document.createElement("span")            // On crer le span
        newSpan.id = "messageError"                         // On lui donne un ID        
        modal.append(newSpan)                               // On l'insère à la modale pour l'afficher
    }
    newSpan.innerText = error                               // On insère le texte  d'erreur
        //body.innerHTML = erreur    
}


/***************************                    ******
 *  Retirer les messages d'erreurs // (Obsolète)     *
 ***********                                    ******/
/* function retirerErrorMessages() {
    let body = document.querySelector(".modal span");
        body.innerHTML =""
} */

/***************************                    ******
 *  Envoi Email et Gestion du formulaire d'envoi     *
 ***********                                    ******/   

/**
 * 
 * @param {*} nom 
 * @param {*} email 
 * @param {*} score 
 */
function mailTo(nom, email, score) {
    let createMaiTo = `mailto:${email}?subject=Partage du score Azertype&body=Salut, c'est ${nom} et j'ai fait ce joli ${score} sur AzerType !`
    location.href = createMaiTo;
}

function gererFormulaire (score, i) {       
    let sendMail = document.querySelector("form");
    sendMail.addEventListener("submit", (event) => {

    try {   
        event.preventDefault();
        afficherErrorMessages("") 
        let valueNom = document.getElementById("nom").value;
        let valueemail = document.getElementById("email").value;
        let scoreEmail = `${score} / ${i}`;
        
        let nom = document.getElementById("nom");
        checkInput(nom);

        let email = document.getElementById("email");
        checkEmail(email);
        
        mailTo (valueNom, valueemail, scoreEmail);             
        } catch (Error) {    
            //verifierChamp(nom)                 
            afficherErrorMessages(Error.message)
            //console.log("Une erreur est survenue : " + error.message)
        }
    })
}

/***************************                    
 *  Lancer le jeux -                                 
 ***********                                    ******/ 
/*****************************                                                          ******
 * Cette fonction lance le jeu.                                                              *  
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle      *
 *****                                                                                  ******/ 

function lancerJeu() {;
    let i = 0;
    let score = 0;
    let propositions = listeMots

    let boutonValider = document.getElementById("valider");
    let texte = document.getElementById("texte");
    
    //gameTypeChoice()
    //gameTypeChoice()    //afficherLeMot(listeMots[i]) ;
    //afficherLeMot(proposition[i]) ;
    /* if (gameTypeChoice() === typeMots) {
        proposition = listePhrases
        console.log(proposition)
    }  */
    afficherLeMot(propositions[i]) ;                                // On affiche un premier mot à comparer

    boutonValider.addEventListener ("click", () => {                // On écoute le btn valider
        if (texte.value === propositions[i]) {                      // Si le texte correspond à ce qui est affiché
            score++                                                 // Le score augmente
        }; 
        replaceAlert(noAlert);                                      // On enlève l'alerte d'insultes au cas où...
        i++;
        retournerAffichageScore (score, i) ;
        if (propositions[i] === undefined) {
            
            afficherLeMot("Le jeu est fini !") ;                    // Si la liste de mots/phrases est terminée, on retourne que le jeu est fini
            isInsulted (texte.value, insultes);                     // On vérifie des insultes...
            texte.value = '';                                       // On clean la zone de texte
            boutonValider.disabled = true ;                         // Puis on désactive le bouton de validation de texte
        } else {
            isInsulted (texte.value, insultes);
            texte.value = '';
            afficherLeMot(propositions[i]);  
        }
    })


    let listeRadioInputs = document.querySelectorAll('input[type="radio"][name="optionSource"]') ; // les boutons radio
        for (let i2 = 0;
                 i2 < listeRadioInputs.length;
                 i2++) {
                        listeRadioInputs[i2].addEventListener("change", (event) => {    // On écoute les btn radio
                        if (event.target.value === typeMots) {                          // Si le mot correspond
                            propositions = listeMots
                        } else {
                            propositions = listePhrases
                        }
                        afficherLeMot(propositions[i]);                                 // On affiche le prochain mot/phrase
                    })
                }
            gererFormulaire (score, i)                                                  // On envoi un mail si le partage est demandé 
           /*  if (areInputsEmpty()) {
                console.log("Le champ nom est vide")
                
            } else {//if
                    //(areInputsEmpty()) {
                //mailTo (nom, email, scoreEmail);
                console.log("Le champ nom est repliissss")
            } */
            
            //if ((nom.trim() !== "") && (email.trim() !== "")) {
                /* if ((checkInput(nom2)) && checkEmail(email2)){
                console.log("Le champ nom est vide")
                } else {
                    console.log("okay !")
                } */
                /* if (checkInput(nom) && checkEmail(email)) {
                    mailTo (valueNom, valueemail, scoreEmail);
                } else {                       
                    console.log("Erreur")
                }  */          
        //})
    retournerAffichageScore (score, i) ;           
    //checkInsults(userText, insultes)
} 

/***************************               ******
 *  Valider avec une regex l'input Nom & Email  *
 ***********                               ******/
/**
 * @throws {Error}
 * @param {*} balise 
 */
function checkInput(balise) {
    let inputRegex = new RegExp("[a-z0-9A-Z-_\S]{3,12}")
    if (!inputRegex.test(balise.value.trim())) {
        balise.classList.add("error")
        throw new Error("Le nom n'est pas valide")  
    }
    balise.classList.remove("error")
}

/**
 * @throws {Error}
 * @param {*} balise 
 */
function checkEmail(balise) {
    let emailRegex = new RegExp("[a-z0-9A-Z._-]+@[a-z0-9A-Z._-]+\\.[a-zA-Z]+");   
    if (!emailRegex.test(balise.value)) {
        balise.classList.add("error") 
        throw new Error("Cet email n'est pas valide") 
    }
    balise.classList.remove("error")    
}


/* function checkInsults (userText, insultes, alertInsult) {

    let zoneInsults = document.querySelector(".header-main h2")
    console.log(zoneInsults)
    //let alerteInsults = "Surveillez votre langage, les insultes ne sont pas tolérées !"  
    //let noAlerts = "L'Application pour écrire plus vite! 2"  
    //insults.textContent = "L'Application pour écrire plus vite! 2" 
/*  for(let i = 0;
            i < insultes.length;
            i++) {    
                console.log(userText)   */
            //while (userText !== insultes[i]) {
            //mot = prompt("Surveillez votre langage, les insultes ne sont pas tolérées !Le mot est " +motApp)
            //mot = prompt("Surveillez votre langage, les insultes ne sont pas tolérées !"
            //zoneInsults.textContent = noAlerts
            
            /* for(let i = 0;
                    i < insultes.length;
                    i++) { 
                if (userText === insultes[i]) {                    
                //mot = prompt("Surveillez votre langage, les insultes ne sont pas tolérées !Le mot est " +motApp)
                //mot = prompt("Surveillez votre langage, les insultes ne sont pas tolérées !"
                zoneInsults.textContent = `${alertInsult}`
                consoletexte.value)
                //return true     
                }
            }
        return     */
    //}  
    
///////////////////////////////////////////////////// 
// On demande à l'utilisateur quel type de jeu il souhaite 
// et avec choix obligatoire 
///////////////////////////////////////////////////// 

/*function gameType(motApp, phraseApp) {
    let choix = prompt("Veuillez choisir votre type de jeux : " + motApp + " ou " + phraseApp);
    while ((choix !== motApp) && (choix !== phraseApp)) {
        choix = prompt("Vous devez choisir votre jeux en tappant : " + motApp + " ou en tappant : " + phraseApp);
    }
    return choix
}*/

/* function checkGameType() {
    let listeRadioInputs = document.querySelectorAll('input[type="radio"][name="optionSource"]') ; // les boutons radio
    let choix01;
    let choix02;
        for (let i = 0;
                 i < listeRadioInputs.length;
                 i++) {
               
                    listeRadioInputs[i].addEventListener("change", (event) => {
                        console.log (event.target.value)  
                        
                        
                        /* if (event.target.value === typeMots) {
                            choix01 = event.target.value
                        }                         
                        if 
                            (event.target.value === typePhrases) {
                            choix02 = event.target.value
                        } */
                        /* const choix = listeRadioInputs[i]
                        if (choix.checked == true) {
                            i++
                            console.log (choix)
                        } */
                        /* choix = listeRadioInputs[i].value
                        console.log(choix)

                        if (choix === typeMots) {
                            return choix
                        } else if 
                            (choix === typePhrases) {
                            return choix
                            }
                        return choix */
                        //console.log( choix01, choix02   )   
/*                 })
            }
                //console.log( choix01, choix02   )  
                //console.log (listeRadioInputs[i])   
    }  */ 
    



///////////////////////////////////////////////////// 
// On récupère les boutons
///////////////////////////////////////////////////// 
/*function monBoutonUtilisé() {
    let listeBoutons = document.querySelectorAll(".button")
        for (i = 0;
             i < listeBoutons.length;
             i++) {                
                monBouton = listeBoutons[i]
                monBouton.addEventListener ("click", (event) => 
                    {
                    monBouton = event.target
                    console.log(`J'ai récupéré mon bouton ${monBouton.id}`)
                    })
            }
        console.log(`J'ai revérifié mon bouton ${monBouton.id}`)
        
}
///////////////////////////////////////////////////// 
// On récupère le bouton Partager (modale)
///////////////////////////////////////////////////// */
/* const sendMail = document.querySelector("form")

sendMail.addEventListener("submit", (event) => {
        event.preventDefault();
        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        //let email = getEmail.value

        console.log(nom)
        console.log(email)
    }) */

///////////////////////////////////////////////////// 
// On exécute les questions en fonction du choix 
///////////////////////////////////////////////////// 



///////////////////////////////////////////////////// 
// On demande un mot à l'Utilisateur, on check ses insultes et il aura 3 essais
//////////////////////////

/*function checkWords(mot, motApp,insultes) {
    for (i2 = 0;
    i2 < insultes.length;
    i2++) {
    
    i = 1
    while ((mot !== motApp) && i < 3) { // 3 essais en tout
        mot = prompt("Essai : "+ i + "/3 C'est pas le bon mot... Le mot est : " + motApp);
        i++ 
        //score--   
     
        if (mot === insultes[i2]) {
        mot = prompt("Surveillez votre langage ! Le mot est : " +motApp)    
        } 
        return                      
        } 
    }score++ 
} */ 



/*function checkWords(mot, motApp) {
    let i = 0
    while ((mot !== motApp) && i < 3) 
    { // 3 essais en tout
        i++ 
        mot = prompt("Essai : "+ i + "/3 C'est pas le bon mot... Le mot est : " + motApp);
        //score-- 
        for (   i2 = 0;
                i2 < insultes.length;
                i2++
            ) {
            if ((mot === insultes[i2]) && i < 3) {
                i++
                mot = prompt("Surveillez votre langage ! Le mot est : " +motApp)    
            }
        } 
    }     
    return mot
}*/






// ALL inputs à retravailler
/* function areInputsEmpty(value) {
    let inputs = document.querySelectorAll(".modal input");
    //let nomInput = document.getElementById("nom");
    //let emailInput = document.getElementById("email")
    //nomInput.addEventListener("change", (event) => {
    for(let i = 0;
            i < value.length;
            i++)
    inputs[i].addEventListener("input", (event) => {
        allInputs = event.target.value
        //valueNom = event.target.value
        if (allInputs.trim() === "") {
            console.log("Le champ valuenom est remlpis")
            return true
        }
    })
    return false
} */

/* let baliseNom = document.getElementById("nom")
    baliseNom.addEventListener("change", (event) => {
        valueNom = event.target.value
        if (valueNom === "") {
            console.log("Le champ valuenom est vide")
        } else {
            console.log("Le champ valuenom est rempli")
        } 
})

                

function gameTypeChoice() {
    let listeRadioInputs = document.querySelectorAll('input[type="radio"][name="optionSource"]') ; // les boutons radio
    let propositions = ""
        for (let i2 = 0;
                 i2 < listeRadioInputs.length;
                 i2++) {
                    
                    listeRadioInputs[i2].addEventListener("change", (event) => {
                            if (event.target.value === typeMots) {
                            //if (event.target.value === typeMots) {
                                //afficherLeMot(listeMots[i]);

                                //return typeMots
                                propositions = listeMots
                                //afficherLeMot(choix); 
                                //console.log(proposition) 
                                return propositions
                            }                             
                            if (event.target.value === typeMots) { 
                                    propositions = listePhrases
                                    //choix = listePhrases[i]
                                    //afficherLeMot(choix);
                                    //afficherLeMot(listePhrases[i]); 
                                    //console.log(proposition)  
                                    //return typePhrases
                                    return propositions
                                }
                                //console.log (event.target.value) 
                            //return event.target.value
                            return propositions
                    })
                    //return propositions
                }
    return propositions
}

//////////////////
// Non fonctionnel
//////////////////


///////////////////////////
// Excercice d'algorithêt
///////////////////////////*/
