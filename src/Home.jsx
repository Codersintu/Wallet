import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='w-[1200px] flex justify-center mt-20'>
        <div className="flex flex-col ml-28 gap-5">
            <h1 className='text-black font-bold text-5xl'>Chintu supports multiple blockchains</h1>
            <p className='text-2xl text-gray-500'>Choose a blockchain to get started.</p>
            <div className="flex gap-8">
                <Link to='/solana'>
                <button className='border font-bold cursor-pointer pt-3 pb-3 pr-10 pl-10 bg-black text-white rounded-xl'>Solana</button>
                </Link>
                <Link to='/eth'>
                <button className='border font-bold cursor-pointer pt-3 pb-3 pr-10 pl-10 bg-black text-white rounded-xl'>Ethereum</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Home