// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    getRedirectResult,
    onAuthStateChanged,
    signOut
 } 
 from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyBqk8V6QlXshil8D1E9719ndUXuu6JYdDY",
  authDomain: "bookera-77.firebaseapp.com",
  projectId: "bookera-77",
  storageBucket: "bookera-77.firebasestorage.app",
  messagingSenderId: "1091043390579",
  appId: "1:1091043390579:web:c3ee824918bcac14482606",
  measurementId: "G-8H4E7Q0F9D"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

// Set up Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({pompt:"select_account"})

//sign-in function with error handling 

export const signInWithGooglePopup = async () => {
    try{
        return await signInWithPopup(auth,googleProvider)
    } catch ( error){
        console.error("Google Sign-In-Error:" , Error)
    }
}

// get redirected after sign-in

export const getRedirectedUser = async () => {
    try{
        const response = await getRedirectResult(auth);
        return response ? response.user : null;
    }catch(error) {
        console.error("no user authentication Data found" , error);
    }
}

// sign-in with email and password 

export const createAuthUserWithEmailAndPassword = async () => {
    if(!emaail || password) return;
    try{
        const auth = getAuth();
        return await createUserWithEmailAndPassword(auth,email,password);
    }catch(error){
        console.error("Faild Some Error Occured" , error)
    }
}

export const signInAuthWithEmailAndPassword = async () => {
    if(!email || password) return;
    try{
        const auth = getAuth(auth);
        return await signInWithEmailAndPassword(auth,email,password);
    }catch(error){ 
        console.error("Failed Some error Occurred" , error)
    }
}

// sign-out functions 
export const SignOutUser = () => signOut(auth);

export const onAuthStateChangedHandler = (callback) => {
    onAuthStateChanged(auth,callback)
}