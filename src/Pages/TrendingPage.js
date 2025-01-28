import React from 'react'
import NavBar from '../Components/NavBar'
import { FooterWithLogo } from '../Components/Footer'
import { useState, useEffect } from 'react';
import Axios from "axios";
import Card from '../Components/Card';

function TrendingPage() {

  const [item, setItem] = useState([]);

  const fetchTrendData = async () => {
    try{
        await Axios.get("https://api.coingecko.com/api/v3/search/trending")
        .then((res) => {
          let items = [];
          res.data.coins.map((coin) => {
            items.push(coin.item);
          })
          console.log(items);
          setItem(items);
    })
    }
    catch(error){
        console.error(error)
    }
};

  useEffect(() =>{
      fetchTrendData();
  },[]);


  return (
    <>
    <NavBar></NavBar>
    <div className='grid grid-cols-3 p-2 gap-8'>
    {
      item.map((item) => {
        return (
          <Card item={item}></Card>
        )
      })
    }
    </div>
    <FooterWithLogo/>
    </>
  )
}

export default TrendingPage