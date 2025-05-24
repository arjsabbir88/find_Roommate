import React from 'react'
import { Link } from 'react-router'

export const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <img src="https://i.ibb.co/qYYqL5hc/undraw-page-not-found-6wni.png" alt="404 Illustration" className="w-96 mb-8" />
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
                <Link to='/' className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Go Home
                </Link>
            </div>
        </div>
    )
}
