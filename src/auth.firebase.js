import { getAuth, signInAnonymously } from "firebase/auth";
import app from "./firebase";

const auth = getAuth();

export default auth;