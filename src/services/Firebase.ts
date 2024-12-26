import { collection, Firestore, getDocs, getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "@firebase/auth";
import { User } from "../data/user";

const firebaseConfig = {
  projectId: "steam-ui-remake",
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


const provider = new GithubAuthProvider();
provider.addScope('user');


const auth = getAuth();

export function signInWithGithub(): Promise<User | null> {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;

    // The signed-in user info.
    const user = result.user;

    var gitHubUser: User = {
      username: user.displayName,
      avatarURL: user.photoURL,
      wallet: 0,
      isAdmin: false,
      id: user.uid,
      description: "I am logged with Github",
      email: user.email,
      password: "",
      isGithubUser: true
    }

    window.localStorage.setItem('user', JSON.stringify(gitHubUser));
    window.location.href = '/';
    return gitHubUser;
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...

    return null;
  })
  return new Promise((resolve, reject) => {
    resolve(null);
  });
}

export function signOut(): void {
  window.localStorage.removeItem('user');
  window.location.href = '/';
}
