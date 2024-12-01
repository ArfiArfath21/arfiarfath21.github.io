import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "some string",
    authDomain: "some string",
    projectId: "some string",
    storageBucket: "some string",
    messagingSenderId: "some string",
    appId: "some string",
    measurementId: "some string"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// console.log(app);
// console.log(db);

// Handle Form Submission
const form = document.getElementById('subscribeForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('emailInput').value;

    try {
        await db.collection('subscribers').add({ email: email, timestamp: new Date() });
        alert("Thank you for subscribing! Stay tuned for updates.");
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to subscribe. Please try again later.");
    }
});
