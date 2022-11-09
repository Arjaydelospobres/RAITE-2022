import { 
  getAuth,
  updatePassword, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

//login function
const login = async() => {
const loginEmail = email.value;
const loginpass = pass.value;
signInWithEmailAndPassword(auth,loginEmail, loginpass).then(()=>{
    window.location.href ="location: ../track.php"; 
}).catch((error)=>{
    alert("Wrong Password");
     window.location.href ="location: ../track.php";
 
  })
}
//create Coordinator Access 
  const createCoor = async() =>{
  const coordEmail = coorEmail.value;
  const coordPass = coorPass.value;
  try{ 
  const userCredential = await createUserWithEmailAndPassword(auth, coordEmail, coordPass);
      //adding data to firestore 
      var coorAddDoc = doc(firestore, "COORDINATOR", userCredential.user.uid);
        const coorDocRef = await setDoc(
            coorAddDoc, {
            firstName: coorFirstName.value,
            lastName: coorLastName.value,
            email: coorEmail.value,
            position: coorPosition.value,
            department: coorDepartment.value,
            password: coorPass.value
          }
            ).then(()=> {
              alert("Data is been Added");
            }).catch((error) => {
              alert(error);  
            })
  

  }
  catch(error){
      alert(error);

  }
}
//logout User
const logout = async() =>{
  await signOut(auth);
  window.location.href = "index.html";
}
