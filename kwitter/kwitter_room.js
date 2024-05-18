

var firebaseConfig = {
      apiKey: "AIzaSyBtJshASqprvhO9Ob8nJuXzn-iRSvyTkl8",
      authDomain: "lets-chat-webb-app-95779.firebaseapp.com",
      databaseURL: "https://lets-chat-webb-app-95779-default-rtdb.firebaseio.com",
      projectId: "lets-chat-webb-app-95779",
      storageBucket: "lets-chat-webb-app-95779.appspot.com",
      messagingSenderId: "733516904741",
      appId: "1:733516904741:web:22fc18ffdee7f6621b02cc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+ user_name;
    function addRoom() { room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData(); 

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "index.html";
}

function redirectToRoomName(name) { console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
       }