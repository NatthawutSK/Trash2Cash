// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAfvXdrrZHWnM6srTcoSuMaaMGz4AAhFbo",
	authDomain: "mobileproject-e5c6a.firebaseapp.com",
	projectId: "mobileproject-e5c6a",
	storageBucket: "mobileproject-e5c6a.appspot.com",
	messagingSenderId: "1015833359557",
	appId: "1:1015833359557:web:bfbffcdfc7cc299d8bacac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
