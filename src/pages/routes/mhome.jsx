import React, { useEffect, useState } from 'react'
import MySwiper from './swiper'
import Buttons from './buttons'
import axios, { Axios } from 'axios'
import Card from './card'
import Loader from './loader'
import { Link } from 'react-router-dom'
import Sections from './sections'


const Home = () => {
    const [loader, setloader] =useState(true);
    const [datValue, setData] =useState([]);
    useEffect(() =>{
        axios.get("https://dummyjson.com/products").then((res) =>{
            setData(res.data.products);
            setloader(false);
        }).catch((err) =>console.log(err))
    },[])
  return (
<div>

<MySwiper />
<Buttons />
<section className="max-w-[1250px] mx-auto my-[2rem] px-[1rem] ">
        <div className="flex gap-[0.5rem] items-center">
            <h1 className="text-[#1F2026] text-[1.75rem] font-[700]">Mashhur</h1>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.4017 24.9974C13.9889 24.533 14.0308 23.8218 14.4952 23.409L20.2992 18.2499L14.4952 13.0907C14.0308 12.6779 13.9889 11.9669 14.4017 11.5025C14.8145 11.0381 15.5256 10.9963 15.99 11.409L22.74 17.409C22.9802 17.6226 23.1176 17.9286 23.1176 18.2499C23.1176 18.5712 22.9802 18.8772 22.74 19.0907L15.99 25.0907C15.5256 25.5035 14.8145 25.4618 14.4017 24.9974Z" fill="#1F2026"/>
                </svg>                
        </div>

    </section>

    <div className="lists grid grid-cols-5 max-w-[1250px] mx-auto w-full gap-[20px] max-md:px-[1rem] max-md:grid-cols-3">
     { loader ? <Loader />:
        datValue.map((val) =>{
            return <Link key={val.id} to={`/About/${val.id}`}>
            <Card key={val.id} {...val} />
            </Link>
        })}

            

    </div>
</div>
  )
}



export default Home