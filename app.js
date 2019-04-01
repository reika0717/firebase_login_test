var config = {
  apiKey: "AIzaSyB86ZplRp50fWO53LYrsjaChiQvq7D-Ixc",
  authDomain: "login-test-b692a.firebaseapp.com",
  databaseURL: "https://login-test-b692a.firebaseio.com",
  projectId: "login-test-b692a",
  storageBucket: "login-test-b692a.appspot.com",
  messagingSenderId: "867110472171"
};
firebase.initializeApp(config);

//DOM取得
var inputarea = document.getElementById("input-area");
var newuser = document.getElementById("newuser");
var login = document.getElementById("login");
var logout = document.getElementById("logout");
var info = document.getElementById("info");

//ログイン処理
login.addEventListener("click", function(e) {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      alert("ログインできません（" + error.message + "）");
    });
});

//ログアウト処理
logout.addEventListener("click", function() {
  firebase.auth().signOut();
});

//認証状態の確認
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    loginDisplay();
  } else {
    logoutDisplay();
  }
});

function loginDisplay() {
  logout.classList.remove("hide");
  inputarea.classList.add("hide");

  info.textContent = "ログイン中です！";
}

function logoutDisplay() {
  logout.classList.add("hide");
  inputarea.classList.remove("hide");

  info.textContent = "";
}
