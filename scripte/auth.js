//formularul de sign-up
const refFormularSignUp=document.querySelector('#formular-signup')
refFormularSignUp.addEventListener('submit', (e) => {
    e.preventDefault();

    //salveaza info utilizator
    const valEmail = refFormularSignUp['signup-email'].value;
    const valParola = refFormularSignUp['signup-password'].value;

    //createUserWithEmailAndPassword
    
    autentificare.createUserWithEmailAndPassword(valEmail,valParola).then(cred =>{
         // inchide modal signup  & reseteaza formular
         console.log(valEmail,' - ',valParola)
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    refFormularSignUp.reset();
    })

})

//logout
    const refButonLogOut=document.querySelector('#logout');
    refButonLogOut.addEventListener('click', (e) => {
        e.preventDefault();
        autentificare.signOut().then( () => {
            console.log('utilizatorul s-a carat')
        })
    })