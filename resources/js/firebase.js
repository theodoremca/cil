// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage , ref ,uploadBytesResumable,  getDownloadURL } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfH3vvnh0qpvNSKy6NJlBFFWTyxknwdH8",
    authDomain: "cil-2021.firebaseapp.com",
    projectId: "cil-2021",
    storageBucket: "cil-2021.appspot.com",
    messagingSenderId: "1062374423483",
    appId: "1:1062374423483:web:38280798604bdc46f5a29e",
    measurementId: "G-HBRV71EDM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)







export {
    storage, ref , uploadBytesResumable , getDownloadURL , analytics
}
