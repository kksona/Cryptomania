import React from 'react'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

const Card = ({item}) => {
  return (
    <div className="w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-900 dark:border-gray-700 justify-center">
        <div className='flex'>
        <div className='w-full'>
            <img className='h-48 w-48 rounded-full' src={item.large} alt="Logo" />
        </div>
        <div className='flex flex-col gap-20'>
        {
            item.data.price_change_percentage_24h.aed > 0 ?(
            <div className='w-full flex gap-5 mt-10'>
            <div className='text-green-200 font-semibold text-5xl'>{item.data.price_change_percentage_24h.aed.toFixed(2)}%</div>
            <div>
                <FaArrowAltCircleUp size={60} color='green'/>
            </div>
            </div>
            ):
            (
            <div className='w-full flex gap-5 mt-10'>
                <div className='text-red-200 font-semibold text-5xl'>{item.data.price_change_percentage_24h.aed.toFixed(2)}%</div>
            <div>
                <FaArrowAltCircleDown size={60} color='red'/>
            </div>
            </div>
            )
        }
        <div>
            <img 
            src={item.data.sparkline}
            alt='sparkline'
            height={100}
            width={500}
            />
        </div>
        </div>
        
        </div>
        <div className="p-5 flex justify-between gap-4 items-center">
            <div>
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{item.symbol}</h5>
            </div>
            <div>
            <p className="font-semibold font-palanquin text-2xl text-gray-100 dark:text-gray-100">{item.data.market_cap}</p>
            </div>
        </div>
    </div>

  )
}

export default Card