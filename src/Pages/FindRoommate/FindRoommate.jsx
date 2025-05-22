import React from 'react'
import Swal from 'sweetalert2';

export const FindRoommate = () => {

    const handleAddToFindRoommate = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newAddedRoommate = Object.fromEntries(formData.entries());
        console.log(newAddedRoommate);


        // send data to db

        fetch("http://localhost:3000/roommates-listing", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddedRoommate)
        })
            .then(res => res.json())
            .then(data => {

                console.log("after adding roommate", data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Added your data successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset()
            }).catch(error => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Something was wrong try again letter",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }
    return (
        <div className='my-6'>
            <div className='text-center my-6'>
                <h1 className='text-xl md:text-2xl font-bold text-[#F2C94C]'>Post Your Roommate Listing</h1>
                <p className='text-[#2D2D2D]'>Let others know what kind of roommate you're looking for – just fill out the details and get connected easily!</p>
            </div>
            <form onSubmit={handleAddToFindRoommate} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Title</label>
                    <input type="text" name='title' className="input w-full" placeholder="Looking for a roommate in NYC" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Location</label>
                    <input type="text" name='location' className="input w-full" placeholder="Location" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Rent Amount</label>
                    <input type="text" name='rent' className="input w-full" placeholder="Rent Amount" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Room Type</label>
                    <input type="text" name='roomType' className="input w-full" placeholder="Single, Shared, etc." required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Lifestyle Preferences</label>
                    <input type="text" name='lifeStyle' className="input w-full" placeholder="Pets, Smoking, Night Owl, etc." required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Image URL</label>
                    <input type="text" name='image' className="input w-full" placeholder="Image URL" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Contact Info</label>
                    <input type="text" name='contact' className="input w-full" placeholder="Contact Number" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Availability</label>
                    <input type="text" name='availability' className="input w-full" placeholder="available or not" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">User Email</label>
                    <input type="email" name='email' className="input w-full" placeholder="User Email ( you can not edit this field)" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">User Name</label>
                    <input type="text" name='name' className="input w-full" placeholder="User Name ( you can not edit this field) " required />
                </fieldset>
                <div className='grid col-span-2 w-full'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 my-5">
                        <label className="label">Descriptions</label>
                        <input type="text" name='descriptions' className="textarea textarea-info w-full" placeholder="descriptions" required />
                    </fieldset>
                    {/* <textarea placeholder="Info" className="textarea textarea-info"></textarea> */}
                    <button type='submit' className="px-5 py-2.5 relative rounded group text-white font-medium inline-block w-full hover:cursor-pointer">
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span className="relative">Button Text</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
