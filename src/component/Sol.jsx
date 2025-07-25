import { Keypair } from '@solana/web3.js'
import { useState } from 'react'
import bs58 from "bs58"

function Sol() {
  const [wallet,setWallet]=useState([])
  
  const generatewallet=()=>{
    const keypair=Keypair.generate();
    const pubkey=keypair.publicKey.toBase58()
    const privkey=bs58.encode(keypair.secretKey)
     setWallet(prev=>[...prev,{pubkey,privkey}])
    
  }

  const Deletewallet=(index)=>{
   setWallet(wallet.filter((_,i)=> i !== index))
  }

  return (
   <div className="w-[100vw] flex justify-center mt-20 ">
    <div className='w-[1200px] flex flex-col justify-center '>
      <div className="flex flex-col">
        <h1 className='text-black font-bold text-5xl mb-2'>Secret Recovery Phrase</h1>
        <p className='text-2xl text-gray-600 mb-4'>Save these words in a safe place.</p>
        <button className='border font-bold cursor-pointer pt-3 pb-3 pr-10 pl-10 mb-9 bg-black text-white rounded-xl w-56 hover:bg-gray-800' onClick={generatewallet}>Genrate Wallet</button>
      </div>

{wallet && (
  <>
  {wallet.map((wallet,index)=>(
  
      <div key={index} className="shadow mt-5 h-[300px] rounded-2xl">
        <div className="flex justify-between items-center">
          <h1 className='p-8 text-4xl font-semibold'>Wallet {index + 1}</h1>
          <button className='mr-4 text-white pb-3 pr-6 pl-6 cursor-pointer rounded-xl bg-red-600  h-[30px]' onClick={()=>Deletewallet(index)}>Delete</button>
        </div>
      
        <div className="pl-10 pb-10 shadow-2xs bg-gray-200">
        <div className="flex flex-col gap-2">
          <p className='text-2xl'><b>Public key:</b></p>
          <p>{wallet.pubkey}</p>
        </div>
        <div className="flex flex-col gap-2 mt-7">
          <p className='text-2xl'><b>Private key:</b></p>
          <p>{wallet.privkey}</p>
        </div>
          </div>
      </div>
      ))}
      </>)}
    </div>
    </div>
  )
}

export default Sol;