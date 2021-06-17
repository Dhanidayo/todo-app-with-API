import React from "react";
import getFirebase from "./firebase";

const Logout = () => {
    
    const firebaseInstance = getFirebase();

    //logout function
    const signOut = async () => {
        try {
        if (firebaseInstance) {
            await firebaseInstance.auth().signOut();
            alert("Successfully signed out!");
        }
        } catch (error) {
        console.log("error", error);
        }
    }


  return <button onclick={signOut}>Sign out</button>;
};

export default Logout;