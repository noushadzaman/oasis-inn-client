import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
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
            .then(data => {
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
                navigate('/');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logged In successfully',
                    showConfirmButton: false,
                    timer: 2500
                })
            })
            .catch(data => {
                console.log(data)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover">Register here!</Link >
                            </label>
                            <p className="text-error">{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <button
                                onClick={handleGoogleLogin} className="btn btn-primary mt-3">google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;