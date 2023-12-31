import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import {  updateProfile } from "firebase/auth";
const Register = () => {
    const { logOut,createUser, logInWithGoogle,logInWithGitHub,setUser} = useContext(AuthContext)
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then((result) => {
          updateUserData(result.user,name,photoUrl)
          logOutUser()
          navigate("/login")
          
        })
        .catch(error => {
          if(error.message == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
            setError("The password is less than 6 characters")
          }
          if(error.message == "Firebase: Error (auth/email-already-in-use)."){
            setError("Email alredy in use")
          }
          console.log(error)
        } 
        
        )
       
    }
    
    const handleLogInWithGoogle = () => {
      logInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user)
        navigate(from)
      })
      .catch(error => setError(error.message))
    }
    const handleLogInWithGitHub = () => {
      logInWithGitHub()
      .then((result) => {
        const user = result.user;
        setUser(user)
        navigate(from)
      })
      .catch(error => setError(error.message))
    }
    const updateUserData = (user,name,photoUrl) => {
      updateProfile(user, {
        displayName: name, photoURL: photoUrl
      }).then(() => {  
        console.log("updated user successfully")
      }).catch((error) => {
        console.log(error.message)
      });
    }

    const logOutUser = () => {
      logOut()
    .then(() => {
    navigate("/login")
    })
    .catch(error => console.log(error))
    } 

    return (
        <div className="hero min-h-[60vh] ">
        <div className="w-full flex justify-center">
          <div className="card  w-full max-w-lg shadow-2xl bg-base-100">
          <h1 className="text-center font-bold text-3xl py-5">Registation</h1>
            <div  className="card-body  bg-gray-200">
            <form onSubmit={handleRegister}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name"  required name="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input type="text" placeholder="profile photo url"  required name="photoUrl" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Enter your Email" required name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" required name="password" className="input input-bordered" />
              </div>
              <p className="py-1 text-red-600">{error}</p>
              <p className="mt-2">Already have an account ? <Link to="/login" className="underline">Log in</Link></p>
              <div className="form-control mt-6">
                <button type="submit" className="w-full py-2 bg-amber-400 rounded-md">Register</button>
              </div>
            </form>
            <p className="text-center font-semibold text-md">or login with</p>
            <div className="mt-5 text-gray-200">
                <button className="flex items-center bg-gray-900  w-full py-2 rounded-md justify-center" onClick={handleLogInWithGoogle}><span className="mr-2"><FaGoogle/></span> Login with Google</button>
                <button className="flex items-center bg-gray-900 w-full py-2  mt-3 rounded-md justify-center" onClick={handleLogInWithGitHub}><span className="mr-2"><FaGithub/></span> Login with GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;