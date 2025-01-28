import { useEffect, useState} from "react";
import Axios from 'axios';
import NavBar from "./Components/NavBar";
import CoinTable from "./Components/CoinTable";
import { FooterWithLogo } from "./Components/Footer";



function App() {

  const [coins, setCoins] = useState([]);
  const [searchedCoin, setSearchedCoin] = useState([]);

  const fetchCoins = async () => {
    try{
      await Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=&1sparkline=false&locale=en")
      .then((res) => {setCoins(res.data)});
    }
    catch(error){
      console.error(error);
    }
  };


  useEffect(() =>{
    console.log("Api req has been made");
    fetchCoins();
    const interval = setInterval(() => {
      fetchCoins();
      console.log("Table updated");
    },30000)
    return () => clearInterval(interval);
  },[]);


  return (
    <div className="App overflow-hidden">
      <NavBar/>
      <CoinTable coins={coins}></CoinTable>
      <FooterWithLogo/>
    </div>
  );
}

export default App;
