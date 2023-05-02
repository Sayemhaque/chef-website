import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password,)
    }
    return (
        <div className="hero min-h-[60vh] ">
        
        <div className="w-full flex justify-center">
          <div className="card  w-full max-w-lg shadow-2xl bg-base-100">
          <h1 className="text-center font-bold text-3xl py-3">Log In</h1>
            <div className="card-body  bg-gray-200">
             <form onSubmit={handleLogIn} >
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <p>Do not hava an account ? <Link to="/register" className="underline">Register</Link></p>
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

export default Login;