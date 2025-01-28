import React, { useEffect, useState } from 'react';
import Axios from "axios";

function Description({id}) {

    const [desc, setDesc] = useState([]);

    const fetchDesc = async () => {
        try{
            await Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((res) => {setDesc(res.data.description)})
        }
        catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        fetchDesc();

    },[]);


  return (
    <div className='p-10'>
    <p dangerouslySetInnerHTML={{__html: desc.en}} className='text-2xl text-center font-montserrat leading-relaxed'></p>
    </div>
  )
}

export default Description