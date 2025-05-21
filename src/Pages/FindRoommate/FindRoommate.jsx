import React from 'react'

export const FindRoommate = () => {
    return (
        <div className='my-6'>
            <div className='text-center my-6'>
                <h1 className='text-xl md:text-2xl font-bold text-[#F2C94C]'>Post Your Roommate Listing</h1>
                <p className='text-[#2D2D2D]'>Let others know what kind of roommate you're looking for – just fill out the details and get connected easily!</p>
            </div>
            <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Title</label>
                    <input type="text" className="input w-full" placeholder="Looking for a roommate in NYC" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Location</label>
                    <input type="text" className="input w-full" placeholder="Location" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Rent Amount</label>
                    <input type="text" className="input w-full" placeholder="Rent Amount" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Room Type</label>
                    <input type="text" className="input w-full" placeholder="Single, Shared, etc." required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Lifestyle Preferences</label>
                    <input type="text" className="input w-full" placeholder="Pets, Smoking, Night Owl, etc." required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Description</label>
                    <input type="text" className="input w-full" placeholder="Description" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Contact Info</label>
                    <input type="text" className="input w-full" placeholder="Contact Number" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Availability</label>
                    <input type="text" className="input w-full" placeholder="available or not" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">User Email</label>
                    <input type="email" className="input w-full" placeholder="User Email ( you can not edit this field)" required />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">User Name</label>
                    <input type="text" className="input w-full" placeholder="User Name ( you can not edit this field) " required />
                </fieldset>
                <div className='grid col-span-2 w-full'>
                    <button type='submit' class="px-5 py-2.5 relative rounded group text-white font-medium inline-block w-full hover:cursor-pointer">
                        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span class="relative">Button Text</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
