import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyA0MuBjs5NL8_iKABs2500ilxSq6asj0tk",
  authDomain: "pharmahub-cfcc7.firebaseapp.com",
  projectId: "pharmahub-cfcc7",
  storageBucket: "pharmahub-cfcc7.appspot.com",
  messagingSenderId: "503599101330",
  appId: "1:503599101330:web:5b64661a95ed143421fd4b",
  databaseURL: "https://pharmahub-cfcc7-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export async function addUserWithRolePharmacy({ name, email, username }) {
  const password = "12345678";
  const result = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user.uid;
    })
    .then((userId) => {
      const res = set(ref(database, `users/${userId}`), {
        name: name,
        username: username,
        email: email,
        role: "pharmacy",
      });
      const pharmacyRes = set(ref(database, `pharmacies/${userId}`), {
        owner: userId,
        name: name,
      });
      console.log("User added successfully");
      return res;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  return result;
}

export async function login({ email, password }) {
  const result = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in successfully", user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  return result;
}

export async function getUserbyId(id: any) {
  const dbRef = ref(database);
  const data = get(child(dbRef, `users/${id}`))
    .then((snapshot) => {
      return snapshot.val();
    })
    .catch((error) => {
      console.error(error);
    });
  return data;
}

export async function getPharmacies() {
  const dbRef = ref(database);
  const data = get(child(dbRef, `pharmacies`))
    .then((snapshot) => {
      return snapshot.val();
    })
    .catch((error) => {
      console.error(error);
    });

  return data;
}
