
//ADD YOUR FIREBASE LINKS HERE
// add database url
var firebaseConfig = {
      apiKey: "AIzaSyCULodPRiHcbCQGJgi7Uhv5IcEAqZN-DcQ",
      authDomain: "kwitter-69ec1.firebaseapp.com",
      projectId: "kwitter-69ec1",
      storageBucket: "kwitter-69ec1.appspot.com",
      messagingSenderId: "350070315876",
      appId: "1:350070315876:web:fd216454edb704d0ff7871"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
