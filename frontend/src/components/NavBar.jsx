import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='bg-black py-4 px-8 text-white flex justify-between align-center'>
        <h2 className='text-2xl weight-bold text-indigo-500' >Yummify</h2>
        <ul className='flex justify-between gap-4.5'>
            <li><Link className='hover:text-indigo-200 active:text-indigo-400' to={'/'}>Home</Link></li>
            <li><Link className='hover:text-indigo-200 active:text-indigo-400' to={'/resto-admin'} >Manage Restaurants</Link></li>
        </ul>
    </nav>
  )
}
