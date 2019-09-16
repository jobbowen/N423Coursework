var FIREBASE_MODEL = (function() {
  // you need to input code here
  function authStateObserver(user) {
    if (user) {
     $('#signin-google').attr('hidden', true);
     $('#signout-google').removeAttr('hidden');
     $('.user-pic').removeAttr('hidden');
     $('.user-name').removeAttr('hidden');
     $('.user-name').text(user.displayName);
     $('.user-pic').css('background-image', 'url(' + user.photoURL + ')');
    } else {
      console.log("No user");
      $('#singin-google').attr('hidden');
      $('#signout-google').attr('hidden', true);
      $('.user-pic').attr('hidden', true);
      $('.user-name').attr('hidden', true);
      $('.user-name').text('');
    }
  }

  function initFirebaseAuth() {
    //Listen to auth state changes
    firebase.auth().onAuthStateChanged(authStateObserver);
  }

  var _signinWithGoogle = function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  var _createAccount = function (email, pw, fname, lname) {
    firebase.auth().createUserWithEmailAndPassword(email, pw).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + '' + errorMessage);
    }).then(function(res) {
      console.log(res);
    });
  };

  var _signInWithEP = function (email, pw) {
    firebase.auth().signInWithEmailAndPassword(email, pw).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + '' + errorMessage);
    }).then(function (res) {
      console.log(res);
    })
  };

  var _signOut = function() {
    firebase.auth().signOut();
  };

  initFirebaseAuth();

  return {
    //   return functions here
    signinWithGoogle: _signinWithGoogle,
    signOut: _signOut,
    createAccount: _createAccount,
    signInWithEP: _signInWithEP
  };
})();
