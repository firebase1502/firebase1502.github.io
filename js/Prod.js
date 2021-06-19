firebase.initializeApp({    
    apiKey: "AIzaSyAHlj_tn8i8m-xTFCGcOKazDQEgFLkzlTo",
    authDomain: "fir-1502.firebaseapp.com",
    projectId: "fir-1502"
});
// Initialize Cloud Firestore through Firebase

var db = firebase.firestore();
var usuario;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        usuario = user.email;
    } 
    else { 
    }
});

function agre(){
    
    var codigo = document.getElementById('codigo').value;
    var titulo = document.getElementById('titulo').value;
    var costo = document.getElementById('costo').value;
    var UD = document.getElementById('UD').value;
    
    
    db.collection("Productos").add({
        codigo: codigo,
        titulo: titulo,
        costo: parseFloat(costo),
        UD: parseInt(UD)
    })
    .then(function(docRef) {
        console.log("ID: ", docRef.id);
        document.getElementById('codigo').value = '';
        document.getElementById('titulo').value = '';
        document.getElementById('costo').value = '';
        document.getElementById('UD').value = '';
        
        document.getElementById('modal-wrapper').style.display='none';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

//lectura de datos
var tabdprod = document.getElementById('Produc');

db.collection("Productos").onSnapshot((querySnapshot) => {
    
    tabdprod.innerHTML = '';
    
    querySnapshot.forEach((doc) => {
        
    tabdprod.innerHTML += `
    <tr>
      <th scope="row" style="text-align: center;">${doc.data().codigo}</th>
      <td style="text-align: center;">${doc.data().titulo}</td> 
      <td style="text-align: center;">$ ${doc.data().costo}</td>
      <td style="text-align: center;">${doc.data().UD}</td>
      <td><button style="display: block; margin: 0 auto;" class = "btn-primary btn-sm" onclick = "editar('${doc.id}','${doc.data().codigo}','${doc.data().titulo}','${doc.data().costo}','${doc.data().UD}')">Editar</button></td>
      <td><button style="display: block; margin: 0 auto;" class = "btn-danger btn-sm" onclick = "eliminar('${doc.id}','${doc.data().titulo}','${doc.data().costo}','${doc.data().UD}')">Eliminar</button></td>
    </tr>
       `     
    });
});

//borrar
function eliminar(id){
    //Ingresamos un mensaje a mostrar
    var mensaje = confirm("¿Deseas eliminar este producto?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje){
            
        
            db.collection("Productos").doc(id).delete().then(function() {
            window.alert("Producto eliminado exitosamente")
            
            document.getElementById('codigo').value = '';
            document.getElementById('titulo').value = '';
            document.getElementById('costo').value = '';
            document.getElementById('UD').value = '';
            
            var boton = document.getElementById('Bguar');
            boton.innerHTML = 'Agregar';
            boton.onclick=function(){
                agre();
            }
        }).catch(function(error) {
        });    
    }
    //Detectamos si el usuario denegó el mensaje
    else{
        
    }
}

//editar
function editar(id,codigo,titulo,costo,UD){
    
    document.getElementById('codigo').value = codigo;
    document.getElementById('titulo').value = titulo;
    document.getElementById('costo').value = costo;
    document.getElementById('UD').value = UD;

    
    var boton = document.getElementById('Bguar');
    boton.innerHTML = 'Editar';
    
    document.getElementById('modal-wrapper').style.display='block';
    
    boton.onclick = function (){
            var washingtonRef = db.collection("Productos").doc(id);

            var codigo = document.getElementById('codigo').value;
            var titulo = document.getElementById('titulo').value;
            var costo = document.getElementById('costo').value;
            var UD = document.getElementById('UD').value;
            
           
            return washingtonRef.update({
                    codigo: codigo,
                    titulo: titulo,
                    costo: parseFloat(costo),
                    UD: parseInt(UD)
            })
            .then(function() {
                boton.innerHTML = 'Agregar';
                
                document.getElementById('codigo').value = '';
                document.getElementById('titulo').value = '';
                document.getElementById('costo').value = '';
                document.getElementById('UD').value = '';
                
                document.getElementById('modal-wrapper').style.display='none';
                
                boton.onclick=function(){
                    agre();
                }
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }

}

function limpiar(){
    document.getElementById('modal-wrapper').style.display='none';
    
    var codigo = document.getElementById('codigo').value;
    var titulo = document.getElementById('titulo').value;
    var costo = document.getElementById('costo').value;
    var UD = document.getElementById('UD').value;
    
    document.getElementById('codigo').value = '';
    document.getElementById('titulo').value = '';
    document.getElementById('costo').value = '';
    document.getElementById('UD').value = '';
    
    var boton = document.getElementById('Bguar');
    
    boton.innerHTML = 'Agregar';
    
    boton.onclick=function(){
        agre();
    }
}
