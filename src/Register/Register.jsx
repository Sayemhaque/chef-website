import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app)
const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then((result) => {
          console.log(result.user)
          updateUserData(name,photoUrl)
        })
        .catch(error => console.log(error.message))
       
    }

    const updateUserData = (name,photoUrl) => {
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoUrl
      }).then(() => {
        console.log("updated user successfully")
      }).catch((error) => {
        console.log(error.message)
      });
    }
    return (
        <div className="hero min-h-[60vh] ">
        <div className="w-full flex justify-center">
          <div className="card  w-full max-w-lg shadow-2xl bg-base-100">
          <h1 className="text-center font-bold text-3xl py-5">Register</h1>
            <div  className="card-body  bg-gray-200">
            <form onSubmit={handleRegister}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name"  required name="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input type="text" placeholder="photo url"  required name="photoUrl" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" required name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" required name="password" className="input input-bordered" />
              </div>
              <p className="mt-2">Already have an account ? <Link to="/login" className="underline">Log in</Link></p>
              <div className="form-control mt-6">
                <button type="submit" className="w-full py-2 bg-amber-400 rounded-md">Login</button>
              </div>
             
            </form>
            <div className="mt-5 text-gray-200">
                <button className="flex items-center bg-gray-900  w-full py-2 rounded-md justify-center"><span className="mr-2"><FaGoogle/></span> Login with Google</button>
                <button className="flex items-center bg-gray-900 w-full py-2  mt-3 rounded-md justify-center"><span className="mr-2"><FaGithub/></span> Login with GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;