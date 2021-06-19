firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      $('#username').val(user.displayname);
      $('#userpass').val(user.email);
      document.getElementById('username').innerHTML = user.email;
  } else {
     
  }
});

var db = firebase.firestore();

function acceso(){
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    firebase.auth.GoogleAuthProvider().catch(function (error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
        
});
}

function logout(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
}

    var displayName;
    var email;
    var emailVerified;
    var photoURL;
    var isAnonymous;
    var uid;
    var providerData;
    var compra;
    var ventas;
    var bitacoras;


function obs(){
    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      console.log('existe usuario')
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
      console.log('no existe usuario')
    // ...
  }
});
}

obs();


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({    
    apiKey: "AIzaSyAHlj_tn8i8m-xTFCGcOKazDQEgFLkzlTo",
    authDomain: "fir-1502.firebaseapp.com",
    projectId: "fir-1502",
});
