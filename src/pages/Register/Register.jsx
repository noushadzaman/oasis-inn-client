import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import axios from "axios";



const image_Hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_Hosting_key}`;

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const { createUser, setPhotoAndName, auth } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onSubmit = (form) => {
        const name = form.name;
        const email = form.email;
        const password = form.password;
        const photo = form.photo[0];
        const photFile = { image: form.photo[0] }
        console.log(name, email, password);
        console.log(photo);
        // axios.post(image_hosting_api, photFile, {
        //     headers: {
        //         "content-Type": "multipart/form-data"
        //     },
        // })
        //     .then(res => {
        //         const image = res.data.data.display_url;
                createUser(email, password)
                    .then(() => {
                        // setPhotoAndName(name, image)
                        setError('');
                        navigate('/');
                        Swal.fire({
                            title: 'Registration successful.',
                            icon: "success",
                            showConfirmButton: false,
                            timer: 2000
                        });

                    })
                    .catch(err => {
                        setError(err.message);
                    })
            // })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:w-[40%]">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-[5px]">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input  {...register("name", { required: true })} name="name" type="text" placeholder="name" className="input input-bordered rounded-[5px]" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input  {...register("email", { required: true })} name="email" type="email" placeholder="email" className="input input-bordered rounded-[5px]" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input  {...register("password", { required: true })} name="password" type="password" placeholder="password" className="input input-bordered rounded-[5px]" required />
                        </div>

                        <div className="form-control">
                            <input  {...register("photo")} type="file" className="rounded-[5px] mt-3 file-input-bordered file-input-sm file-input file-input-ghost max-w-xs" name="photo" />
                            <Link to="/login" className="text-[#b99d75] mt-5">Login here!</Link >
                            <p className="text-error">{error}</p>
                        </div>

                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="form-control mt-6">
                            <button className="button-primari" type="submit" >Register</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;