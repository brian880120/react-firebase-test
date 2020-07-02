import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBWHse_wueNutpNnj5rUmMdAKVC2tuQCZc",
    authDomain: "fir-test-d9384.firebaseapp.com",
    databaseURL: "https://fir-test-d9384.firebaseio.com",
    projectId: "fir-test-d9384",
    storageBucket: "fir-test-d9384.appspot.com",
    messagingSenderId: "892729333801",
    appId: "1:892729333801:web:1da9f7c1fe5dbd86222438"
};

class AppFirebase {
    static init() {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        this.firebase = firebase;
    }

    static getFirebase() {
        return this.firebase;
    }
}

export default AppFirebase;
