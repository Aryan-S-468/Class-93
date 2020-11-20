// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAEGOS6NSSSBGRDJRZiE5HrGb1_4htiqks",
      authDomain: "class-93-1a311.firebaseapp.com",
      databaseURL: "https://class-93-1a311.firebaseio.com",
      projectId: "class-93-1a311",
      storageBucket: "class-93-1a311.appspot.com",
      messagingSenderId: "276581751742",
      appId: "1:276581751742:web:e8a11c694d50def40eb7ef"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
