var FIREBASE_MODEL = (function() {
  // you need to input code here
  function authStateObserver(user) {
    console.log(user);
    if (user) {
      alert("Signed In");
    } else {
      alert("No User");
    }
  }

  function initFirebaseAuth() {
    //Listen to auth state changes
    firebase.auth().onAuthStateChanged(authStateObserver);
  }

  initFirebaseAuth();

  return {
    //   return functions here
  };
})();
