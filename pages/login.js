import NavBar from "../components/NavBar/NavBar"
import style from "../styles/login.module.scss"
import {useState} from "react"
import firebase from "../firebase/clientApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export default function Login() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    return (
        <div className={style.main}>
            <form className={"bg-light p-5 " + style.mainform}>
                <h1 className="text-decoration-underline mb-2">Login</h1>

                <div className="form-group mb-3">
                    <label for="emailInput">Email</label>
                    <input 
                        type="email" class="form-control" id="emailInput" placeholder="Email" 
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="form-group mb-3">
                    <label for="passwordInput">Password</label>
                    <input 
                        type="password" class="form-control" id="passwordInput" placeholder="Password" 
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <button 
                    className="btn btn-primary justify-content-center" type="submit"
                    onClick={() => {console.log(email, password)}}
                >
                        Login
                </button>
            </form>
        </div>
    )
}