import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2';

const Login = () => {
    const { logIn, googleSign } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(() => {
                setError('');
                navigate('/');
                Swal.fire({
                    title: 'Login successful.',
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .catch(err => {
                setError(err.message);
            })
    }

    const handleGoogleLogin = () => {
        googleSign()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logged In successfully',
                    showConfirmButton: false,
                    timer: 2500
                })
                // navigate('/');
            })
            .catch(data => {
                console.log(data)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:w-[40%]">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-[5px]">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered rounded-[5px]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered rounded-[5px]" required />
                            <Link to="/register" className="mt-1 text-[#b99d75]">Register here!</Link >
                            <p className="text-error">{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="button-primari">Login</button>
                            <button
                                onClick={handleGoogleLogin} className="button-primari mt-3">
                                <div className="flex items-center justify-center gap-3">
                                    <FaGoogle /><span>Continue with google</span>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;