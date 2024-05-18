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
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val();
       if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['name'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+Like +" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like "+ like +"</span></button><hr>";
      
_
      row= name_with_tag + message_with_tag +like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
      });

      document.getElementById("msg").value = "";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "kwitter.html";
}

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });

}

function send() { msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
 document.getElementById("msg").value = ""; }