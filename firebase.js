// firebase.js


import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { getFirestore } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const firebaseConfig = {


apiKey: "ВАШ_API_KEY",

authDomain: "ВАШ_PROJECT.firebaseapp.com",

projectId: "ВАШ_PROJECT_ID",

storageBucket: "ВАШ_STORAGE.appspot.com",

messagingSenderId: "ВАШ_ID",

appId: "ВАШ_APP_ID"


};



const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
