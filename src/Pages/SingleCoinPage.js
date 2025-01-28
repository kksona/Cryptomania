import React from 'react'
import { useLocation } from 'react-router-dom'
import MyChart from '../Components/Chart'
import { useEffect, useState } from 'react'
import Axios from "axios"
import { Button } from "@material-tailwind/react";
import { FooterWithLogo } from '../Components/Footer'
import GoToTop from '../Components/GoToTop'
import Description from '../Components/Description'
import NavBar from '../Components/NavBar'

function SingleCoinPage() {
    const location = useLocation()
    const coin = location.state.coin

    const [category, setCategory] = useState('prices')
    const [data, setData] = useState([])
    const [days, setDays] = useState(1)

    const fetchData = async () => {
        try{
            await Axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=${days}`)
            .then((res) => {
                if(category === "prices"){setData(res.data.prices)}
                else if(category === "market_caps"){setData(res.data.market_caps)}
                else {setData(res.data.total_volumes)}
                })
        }
        catch(error){
            console.error(error)
        }
    };

    useEffect(() =>{
        fetchData();
    },[days, category]);

    

  return (
    <div className='bg-gray-300 p-0 max-w-screen overflow-hidden'>
        <NavBar/>
    <div className='flex w-screen justify-between p-20'>
        <div>
            <div className='text-6xl uppercase p-8 text-gray-100 font-extrabold font-serif bg-gray-900 border-b'>
                {coin.id}
            </div>
            <div>
                <div className='flex justify-between bg-gray-600 border-b p-1'>
                    <div className='h-12 w-64 font-semibold text-4xl text-white'>
                        Rank
                    </div>
                    <div className='text-4xl text-white'>
                        {coin.market_cap_rank}
                    </div>
                </div>
                <div className='flex justify-between bg-gray-600 border-b p-1'>
                    <div className='h-12 w-64 font-semibold text-4xl text-white'>
                        Price
                    </div>
                    <div className='text-4xl text-white'>
                        ${coin.current_price.toLocaleString()}
                    </div>
                </div>
                <div className='flex justify-between bg-gray-600 p-1'>
                    <div className='h-12 w-64 font-semibold text-4xl text-white'>
                        Market Cap
                    </div>
                    <div className='text-4xl text-white'>
                        ${coin.market_cap.toLocaleString()}
                    </div>
                </div>
            </div>
        </div>
        <div className='w-124 h-124 space-y-10'>
            <img src={coin.image} className='object-cover rounded-full'/>
            <p className='text-white font-bold text-3xl text-center uppercase bg-black rounded-2xl'>{coin.symbol}</p>
        </div>
    </div>
    <div className='bg-slate-100 h-screen w-screen p-5'>
    <div className="flex justify-items-start gap-4 py-2">
      <Button size="md" onClick={() => {setCategory('prices')}}>Price</Button>
      <Button size="md" onClick={() => {setCategory('market_caps')}}>Market Cap</Button>
      <Button size="md" onClick={() => {setCategory('total_volumes')}}>Volume</Button>
    </div>
    <div className='h-5/6'>
        <MyChart data={data} category={category}></MyChart>
    </div>
    <div className="flex justify-between items-end gap-4 py-2 w-5/6">
      <Button size="md" onClick={() => {setDays(1)}}>1D</Button>
      <Button size="md" onClick={() => {setDays(7)}}>7D</Button>
      <Button size="md" onClick={() => {setDays(30)}}>1M</Button>
      <Button size="md" onClick={() => {setDays(365)}}>1Y</Button>
    </div>
    </div>
    <Description id={coin.id}/>
    <FooterWithLogo/>
    <GoToTop/>
    </div>
  )
}

export default SingleCoinPage