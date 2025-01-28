import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

function CoinTable({coins}) {

  const navigate = useNavigate();

  const navigateToSingleCoinPage = (coin) => {
    navigate('/singleCoin',
            {
              state : {coin : coin}
            });
  };

    const [input, setInput] = useState("")
    
    const handleChange = (input) => {
        setInput(input);
    };


  return (
  <>
  <div className='grid place-items-center py-8 overflow-hidden'>
    <div className='relative'>
    <form>   
        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-96">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" 
                id="default-search" 
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Coins..." required
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                />
                <button 
                type="submit" 
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => {e.preventDefault();}}
                >Search</button>
            </div>
    </form>
    </div>
    </div>
    <div className="w-screen relative overflow-hidden shadow-md sm:rounded-lg">
        <table className="w-full text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-100">
            <thead className="text-xs text-gray-100 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Coin
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        24h
                    </th>
                    <th scope="col" className="px-6 py-3">
                        24h Volume
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Market Cap
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Current Trend
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                  coins.filter((coin) =>{ return coin.name.toLowerCase().includes(input.toLowerCase());}).map((coin) =>(
                    <tr key={coin.id} onClick={() => {navigateToSingleCoinPage(coin)}} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                        {coin.market_cap_rank}
                    </td>
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <img className="w-10 h-10 rounded-full" src={coin.image} alt=""/>
                        <div className="ps-3">
                            <div className="text-base font-bold">{coin.name}</div>
                            <div className="font-normal text-gray-100">{coin.symbol}</div>
                        </div>  
                    </th>
                    <td className="px-6 py-4">
                        ${coin.current_price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                          {coin.price_change_percentage_24h}%
                    </td>
                    <td className="px-6 py-4">
                          ${coin.total_volume.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                          ${coin.market_cap.toLocaleString()}
                    </td>

                    {
                      coin.price_change_percentage_24h > 0? (
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                              <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> UpTrend
                          </div>
                        </td>
                      ) :
                      (
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                              <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> DownTrend
                          </div>
                        </td>
                      )
                    }
                </tr>
                  ))
                }
              
            </tbody>
        </table>
    </div>
  </>
    
  )
}

export default CoinTable