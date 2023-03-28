import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMoZni-lk4c5ZdG64ZO1iTM8J7wsjnOVY",
  authDomain: "bibliotech-damaso.firebaseapp.com",
  projectId: "bibliotech-damaso",
  storageBucket: "bibliotech-damaso.appspot.com",
  messagingSenderId: "1012835654051",
  appId: "1:1012835654051:web:72073b60467332a817e216"
};

// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);
// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);