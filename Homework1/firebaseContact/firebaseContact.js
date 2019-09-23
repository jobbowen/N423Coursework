//Firebase collection
let contactReference = firebase.database().ref();


//Listener for form submission
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submits form
function submitForm(e) {
    e.preventDefault();

    //Get values
    let firstName = getInputValues('firstName');
    let lastName = getInputValues('lastName');
    let email = getInputValues('email');
    let comment = getInputValues('comment');

    //Save contacts
    saveContacts(firstName, lastName, email, comment);

    //Show Confirmation
    document.getElementById('alert').style.display = 'block';

    //Hide Confirmation
    setTimeout(function () {
            document.getElementById('alert').style.display = 'none';
        }, 40000);

    //Clear form
    document.getElementById('contactForm').reset();
}

//Function to get contact form values
function getInputValues(id) {
    return document.getElementById(id).value;
}

//Save contacts to firebase
function saveContacts(firstName, lastName, email, comment) {
    let newContactReference = contactReference.push();
    newContactReference.set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        comment: comment
    });
}
