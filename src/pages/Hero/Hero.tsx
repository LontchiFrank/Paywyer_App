import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='w-full flex gap-4 p-7'>

            <Link
                to="/auth/signin"
                className="inline-flex items-center justify-center rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
                Sign In
            </Link>
            <Link
                to="/auth/signup"
                className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
                Sign Up
            </Link>
        </div>
    )
}

export default Hero