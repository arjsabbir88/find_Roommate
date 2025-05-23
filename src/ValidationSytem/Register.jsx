import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider'
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { Loading } from '../Component/Loading/Loading';

export const Register = () => {

    const { user, createUser, loginWithGoogle, updateUser, setUser, loading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (user && location.pathname === '/auth/register') {
            toast('You are already LogedIn');
            navigate('/');
        }
    }, [user, location])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Clicked")

        const form = e.target;
        const formData = new FormData(form);
        const convertData = Object.fromEntries(formData.entries());

        const { name, email, photo, password } = convertData;

        console.log(name, email, photo, password)



        createUser(email, password)
            .then((result) => {
                const user = result.user;

                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        toast.error(errorMessage)
                        console.log('error form update user')
                    });

                Swal.fire({
                    position: "center",
                    icon: "success",
                    text: 'Create Your Account Successfully',
                    title: "Welcome to RoomSync",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }).catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log('error form create user form')
            })
    }

    const handleLoginWithGoogle = () => {
        console.log('clicked');
        loginWithGoogle()
            .then(() => {
                toast.success('Login With Google Successfully');
                navigate('/')
            }).catch((error) => {
                toast.error('Sorry!! Something Was Worng!! Try again letter');
            })

    }



    if (loading) {
        return <Loading />
    }

    return (
        <div className='flex items-center flex-col md:flex-row my-10'>
            <ToastContainer />
            <div className='max-w-xl md:max-w-xl lg:max-w-2xl'

                style={{
                    animation: 'updown 2s ease-in-out infinite',
                    display: 'inline-block'
                }}

            >
                <img className='w-lg md:w-lg lg:w-xl' src='https://i.ibb.co/D39YmXX/undraw-happy-feeling-itcr.png' alt="loginImage" />

                <style>
                    {`
                        @keyframes updown {
                            0%, 100% {
                            transform: translateY(0);
                            }
                            50% {
                            transform: translateY(-10px);
                            }
                        }
                    `}
                </style>
            </div>
            <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-2xl/30 md:ml-30 lg:ml-40">
                <h2 className='text-black text-xl font-bold text-center'>SignUp to Room<span className='text-red-500 my-4'>Sync</span></h2>

                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" />


                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />


                <label className="label">Photo URL</label>
                <input type="text" name='photo' className="input" placeholder="Photo URL" />

                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Submit</button>
                <p>Already have an account <Link to='/auth/login' className='text-red-400 hover:link hover:link-hover hover:link-primary'>click here</Link></p>

                <div className='my-6'>
                    <h2 className='my-6 text-center font-bold text-2xl'>Or</h2>
                    <button onClick={handleLoginWithGoogle} type='button' className="btn bg-white text-black border-[#e5e5e5] w-full">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </form>


        </div>
    )
}
