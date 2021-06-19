firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      var email = document.getElementById("email").value;
      window.alert("Bienvenido: "+ email);
      location.href = "Inicio.html";
      
  } else {
     document.getElementById("formulario").style.display = "block";
  }
});

function acceso(){
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
  // Handle Errors here.
        window.alert("Error: usuario o contraseña invalida.");
        location.href="index.html"
  // ...
        
});
}


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
