import React from 'react'
import { FaSpotify } from "react-icons/fa";

export default function NavBar() {
    return (
        <div className='flex flex-row items-center justify-center bg-green-950 h-24 text-white'>
            <FaSpotify size={40} className='mr-4'/>
            <div className='text-4xl'>Spotify</div>
        </div>
    )
}