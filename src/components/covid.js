import React, { useEffect,useState } from 'react'
import ReactDom from 'react-dom'

const Covid = () => {
     const [data, setData] =useState([]);
     const getCovidData=async()=>{
         try{
            const res=await fetch('https://api.covid19india.org/data.json');
            const actualData=await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
         }
         catch(err){
            console.log(err);
        }
            
     }

    useEffect(() => {
        getCovidData();
    },[]);
    return(
        <>
        <h1>@ LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>OUR</span>COUNTRY</p>
                        <p className="card_total">India</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>OUR</span>COUNTRY</p>
    <p className="card_total">{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>OUR</span>COUNTRY</p>
    <p className="card_total">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
        </>
    )
}
export default Covid