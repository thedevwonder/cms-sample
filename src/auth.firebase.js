import { getAuth, signInAnonymously } from "firebase/auth";
import './db.firebase'

const auth = getAuth();

export default auth;