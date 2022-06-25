
const firebaseConfig = {
      apiKey: "AIzaSyCjzt8Ih9HCSNVZh9n0gUqYGQOsNdjSvqg",
      authDomain: "kwitter-946ee.firebaseapp.com",
      databaseURL: "https://kwitter-946ee-default-rtdb.firebaseio.com",
      projectId: "kwitter-946ee",
      storageBucket: "kwitter-946ee.appspot.com",
      messagingSenderId: "836126790762",
      appId: "1:836126790762:web:6738ba8141237aebe36613",
      measurementId: "G-W1P5L7K8NF"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+ user_name+ "!";
function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"

      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});

}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location = "index.html";
} 

