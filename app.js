var config = {
	apiKey: "AIzaSyDt_lkdDdJJRfG_M3WtITYXsfKdg-BW4t0",
	authDomain: "iioffice-test.firebaseapp.com",
	databaseURL: "https://iioffice-test.firebaseio.com",
	projectId: "iioffice-test",
	storageBucket: "iioffice-test.appspot.com",
	messagingSenderId: "715721258818",
	appId: "1:715721258818:web:d996a6a5297c76fb"
};
firebase.initializeApp(config);

//DOM取得

var login_cotainer = document.getElementById("login_cotainer");
var inputarea = document.getElementById("input-area");
var newuser = document.getElementById("newuser");
var login = document.getElementById("login");
var logout = document.getElementById("logout");
var main_content = document.getElementById("main_content");

//ログイン処理
login.addEventListener("click", function (e) {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.catch(function (error) {
			alert("ログインできません（" + error.message + "）");
		});
});

//ログアウト処理
logout.addEventListener("click", function () {
	firebase.auth().signOut();
});

//認証状態の確認
firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		loginDisplay();
	} else {
		logoutDisplay();
	}
});

function loginDisplay() {
	login_cotainer.classList.add("hide");
	main_content.classList.remove('hide')
	if (main_content.childElementCount === 0) {
		location.reload()
	}
}

function logoutDisplay() {
	logout.classList.add("hide");
	inputarea.classList.remove("hide");

	main_content.textContent = "";
}