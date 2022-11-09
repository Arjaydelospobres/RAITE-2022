  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  import { getAuth,
          updatePassword, 
          signInWithEmailAndPassword, 
          createUserWithEmailAndPassword,
          onAuthStateChanged,
          signOut,
          GoogleAuthProvider,
          signInWithRedirect,
          getRedirectResult,
          signInWithPopup  
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyDxs8ppPdSI0US-pKElrmC5VDC9hQvHEjY",
    authDomain: "test-d47e9.firebaseapp.com",
    projectId: "test-d47e9",
    storageBucket: "test-d47e9.appspot.com",
    messagingSenderId: "204645864615",
    appId: "1:204645864615:web:46c306660cd4fd6c6a7782",
    measurementId: "G-85PPHFM1Z3"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  var googleBTN = document.getElementById("google");

  googleBTN.addEventListener('click',(e)=>{
     signInWithPopup(auth, provider)
  .then((result) => {
     window.location.href ="dashboard.php"; 

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  
  });
  
