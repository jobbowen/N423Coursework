function addListeners() {
  $("nav a").click(function(e) {
    let btnID = e.currentTarget.id;

    if (btnID == "signin") {
      // This is for when you sign in with email password
      //   You would probably display the form here We are not doing anything with it now
      console.log("email");
    }

    if (btnID == "signin-google") {
      //   this is for google signin
      FIREBASE_MODEL.signinWithGoogle();
      //console.log("google");
    }
  });

  $("#suSubmit").click(function(e) {
    e.preventDefault();
    e.preventDefault();
    let fName = $("sufName").val();
    let lName = $("sulName").val();
    let email = $("suEmail").val();
    let pw = $("suPassword").val();

    // send it all to model
  });

  $("#siSubmit").click(function(e) {
    e.preventDefault();
    let email = $("siEmail").val();
    let pw = $("siPassword").val();

    // send it all to model
  });
}

function initApp() {
  // add the data portion here or set up listeners
  addListeners();
}

$(document).ready(function() {
  initApp();
});
