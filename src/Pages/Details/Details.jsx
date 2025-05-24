import React, { useContext, useState } from 'react'
import { AiFillLike } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { useLoaderData } from 'react-router'
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';

export const Details = () => {
    const dataForDetails = useLoaderData();
    const { user } = useContext(AuthContext)

    const {
        _id,
        title,
        location,
        roomType,
        lifeStyle,
        descriptions,
        contact,
        availability,
        email,
        name,
        image,
        rent,
        likeCount
    } = dataForDetails;
    console.log(likeCount)

    const [like, setLike] = useState(likeCount);
    const [isLiked, setIsLiked] = useState(false);
    const [showContract, setShowcontract] = useState(false);

    // const handleLike = () => {
    //     if (isLiked) {
    //         setLike(like - 1);
    //         setIsLiked(false);
    //     } else {
    //         setLike(like + 1);
    //         setIsLiked(true)

    //     }
    // }

    const handleSendMessage = () => {
        const textArea = document.getElementById("textArea").value;
        if (textArea.length > 3) {

            toast('Your massage send successfully');
        } else {
            toast.error('Your message have to me more than 3 letter')

        }
    }

    const handleConfirmBtn = () => {
        toast('Thanks for confirmation');
    }

    const handleLike = async () => {
        if (email === user.email) {
            toast.error("You can't like your own post!");
            return;
        }

        const res = await fetch(`https://server-side-fawn.vercel.app/details/${_id}/like`, {
            method: "PATCH",
        });

        if (res.ok) {
            setLike(prev => prev + 1);
            setShowcontract(true)
            // toast.success("You liked this!");
        }

    };

    return (
        <>
            <div
                className="hero my-6"
                style={{
                    backgroundImage:
                        `url(${image})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="text-center">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <h1 className="mb-5 text-5xl font-bold">Welcome to RoomSync</h1>
                        <p className="mb-5">
                            Suggests harmony and connection between roommates.
                        </p>
                        <button className="btn bg-[#50E3C2] hover:bg-[#30C9A2] transition duration-300 ease-in-out hover:text-white">Get Started</button>
                    </div>
                </div>
            </div>

            <div className='my-6 rounded-2xl max-w-7xl mx-auto bg-base-200 p-4'>
                <div>
                    <h1 className='text-2xl font-bold text-center my-6'>See Your Home Details</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <img className='rounded-2xl' src={image} alt="" />
                    <div className='grid grid-cols-2 gap-4'>
                        <img className='rounded-2xl' src={image} alt="" />
                        <img className='rounded-2xl' src={image} alt="" />
                        <img className='rounded-2xl' src={image} alt="" />
                        <img className='rounded-2xl' src={image} alt="" />
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-2xl font-bold'>New Listing</h1>
                <h1 className='text-center text-2xl font-bold text-[#F2C94C] my-5'>{title}</h1>
            </div>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>
                <div className="card-body card card-dash bg-base-200 shadow-xl/30">
                    <div className='flex justify-between bg-green-200 p-6 rounded-2xl'>
                        <div className='text-center'>
                            <p className='text-base md:text-lg text-[#969696] mb-[-4px]'>Price/Month</p>
                            <h2 className="card-title font-semibold text-lg md:text-xl">tk- {rent} taka</h2>
                        </div>
                        <div className='text-center'>
                            <p className='text-base md:text-lg text-[#969696] mb-[-4px]'>Availability</p>
                            <h2 className="card-title font-semibold text-lg md:text-xl">{availability}</h2>
                        </div>
                    </div>
                    <div className='flex justify-between bg-green-200 p-6 rounded-2xl'>
                        <div className='text-center'>
                            <p className='text-base md:text-lg text-[#969696] mb-[-4px]'>Room Type</p>
                            <h2 className="card-title font-semibold text-lg md:text-xl">{roomType}</h2>
                        </div>
                        <div className='text-center'>
                            <p className='text-base md:text-lg text-[#969696] mb-[-4px]'>LifeStyle</p>
                            <h2 className="card-title font-semibold text-lg md:text-xl">{lifeStyle}</h2>
                        </div>
                    </div>
                    <div className='flex justify-between bg-green-200 p-6 rounded-2xl'>
                        <div className='text-center'>
                            <p className='text-base md:text-lg text-[#969696] mb-[-4px]'>Location</p>
                            <h2 className="card-title font-semibold text-lg md:text-xl">{location}</h2>
                        </div>
                        <div className='text-center'>
                            <p className='text-base md:text-lg text-[#969696] mb-[-4px]'>Contact</p>
                            {
                                showContract ? (<h2 id='contact' className="card-title font-semibold text-lg md:text-xl">{contact}</h2>) :
                                    (<h2 id='contactTitle' className="card-title font-semibold text-lg">Like page to see contact</h2>)
                            }
                        </div>
                    </div>

                    <div className='bg-green-200 p-6 rounded-2xl'>
                        <p className='text-lg'>{descriptions}</p>
                    </div>
                    <div className='my-4 w-full'>
                        <button onClick={handleConfirmBtn} class="relative w-full px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group hover:cursor-pointer">
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative text-2xl font-semibold transition-colors duration-300 delay-200 group-hover:text-white ease">Confirm</span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className='bg-base-200 rounded-xl p-4 w-full max-w-md min-h-[300px] max-h-[350px] mx-auto lg:mx-0 shadow-xl/30'>
                        <div className='flex items-center mt-4'>
                            <CgProfile size={40} />
                            <div>
                                <h2 className='text-3xl font-bold ml-2'>{name}</h2>
                                <p className='ml-2 text-xm text-[#969696]'>{email}</p>
                            </div>
                        </div>
                        <div className='my-4'>
                            <fieldset className="fieldset">
                                <textarea id='textArea' className="textarea h-24 resize-none w-full" placeholder={`Write message to ${name}`}></textarea>
                            </fieldset>
                            <button onClick={handleSendMessage} className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none hover:cursor-pointer mt-6">
                                Message
                            </button>
                        </div>

                    </div>
                    <div className='flex justify-center items-center bg-base-200 rounded-xl p-4 my-6 w-full max-w-md mx-auto 
                    lg:mx-0 shadow-xl/30 transform transition hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                        <AiFillLike onClick={handleLike} size={40} className='hover:cursor-pointer' />
                        <span className='ml-3 text-2xl font-semibold'>{like}</span>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    )
}
