/*********************************************************
 * 
 * Popup pour bouton Partager
 * 
 *********************************************************/

/** 
 * Fonction  pour afficher la modale
 */
function afficherModal() {
    let modal = document.querySelector(".modale-background")
    // La modale va passer de (display = none) => flex.
    // Elle deviendra visible.
    modal.classList.add("active")
}

/**
 * Fonction pour cacher la modale
 */
function cacherModal() {
    let modal = document.querySelector(".modale-background")
    // La modale va passer de (display = flex) => none.
    // On remet l'état de la modale par défaut.
    modal.classList.remove("active")

}

/**
 * Fonction pour écouter le bouton de partage 
 * Puis affiche la modale
 */
function initModalListener(){
    let btnShare = document.getElementById("share")
    let modalBackground = document.querySelector(".modale-background")
    btnShare.addEventListener("click", () =>{
        afficherModal()
    })

    modalBackground.addEventListener("click", (event) =>{
        if (event.target !== modalBackground) {
        cacherModal()
        }
    })

}

    let btnShare = document.getElementById("share")
    let modalBackground = document.querySelector(".modale-background")
    btnShare.addEventListener("click", () =>{
    afficherModal()
    })

    modalBackground.addEventListener("click", (event) =>{
        if (event.target === modalBackground) {
            console.log(modalBackground)
            cacherModal()
        }
    })
