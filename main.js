// modale pop-up après 2000 sec et scroll et action fermeture et ne s'applique qu'une fois 
let modalAlreadyShowed = false;

window.addEventListener('scroll', function (e) {
    if (!modalAlreadyShowed) {
        setTimeout(() => {
            document.getElementById('modal').style.display = 'block'
        }, 2000)
        modalAlreadyShowed = true
    }
});

document.getElementById('modal-close').addEventListener('click', function (e) {
    document.getElementById('modal').style.display = 'none'
});

// modale de fermeture si modification sur la page
var confirmExiting = false

window.addEventListener('beforeunload', function (e) {
    if (confirmExiting) {
        e.preventDefault();
        e.returnValue = '';
    }
});

document.getElementById('input').addEventListener('input', function (e) {
    confirmExiting = true
});