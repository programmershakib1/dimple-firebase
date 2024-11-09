
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './App.css'
import { auth } from './firebase/firebase.init';
import { useState } from 'react';

function App() {

  const [user, setSuer] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      setSuer(result.user)
    })
    .catch(error => console.log(error), setSuer(null))
  }

  return (
    <>
      <h1>Simple Dimple Trimple Firebase</h1>
      <button onClick={handleGoogleSingIn}>Login with Google</button>
      {
        user && <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </>
  )
}

export default App
