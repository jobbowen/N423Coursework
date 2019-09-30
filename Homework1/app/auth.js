//Listen to auth state changes
auth.onAuthStateChanged(user => {
   if (user) {
       document.querySelector(".status").innerHTML = "<h1>You are logged in</h1>";
   } else {
       document.querySelector(".status").innerHTML = "<h1>You are logged out</h1>";
   }
});



let signUp = document.querySelector('#signUpForm');
signUp.addEventListener('submit', (e) => {
    e.preventDefault();

    //Get user info
    let email = signUp['suEmail'].value;
    let password = signUp['suPassword'].value;

    console.log(email, password);

    //Sign up user
    auth.createUserWithEmailAndPassword(email, password).then(credentials => {
        signUp.reset();
    })
});

//Logout User
let logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

//Login User
let loginUser = document.querySelector('#signInForm');
loginUser.addEventListener('submit', (e) => {
    e.preventDefault();

    //Get user info
    let email = loginUser['siEmail'].value;
    let password = loginUser['siPassword'].value;

    auth.signInWithEmailAndPassword(email, password).then(credentials => {
        loginUser.reset();
    })

});
