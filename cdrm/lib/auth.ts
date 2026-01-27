// lib/auth.ts
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export async function signUp(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signIn(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function signInWithGoogle() {
  return await signInWithPopup(auth, googleProvider);
}

export async function logOut() {
  return await signOut(auth);
}
