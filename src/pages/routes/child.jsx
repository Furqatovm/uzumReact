import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Loader from './loader';
import { FaRegHeart } from "react-icons/fa";
import { MdDownloadDone } from "react-icons/md";
import { TbShoppingBagCheck } from "react-icons/tb";



import Card from './card';

const Child = () => {
    const [loader, setloader] =useState(true);
    const [datValue, setvalue] =useState([]);
    useEffect(() =>{
        axios.get("https://dummyjson.com/products").then((res) =>{
            setvalue(res.data.products);
            setloader(false);
        }).catch((err) =>console.log(err))
    },[]);
    const [ob, setData] =useState({});
    const {id} =useParams();

    const fetchData =async () =>{
        try{
            const res =await axios.get(`https://dummyjson.com/products/${id}`);
            setData(res.data);
        } catch(err){
        }
    }

    useEffect(() =>{
        fetchData()
    }, [id])
  return (
    <div className='max-w-[1250px] mx-auto px-[1rem] my-[1rem] flex flex-wrap justify-between items-start'>
        <div className='w-[65%]'>
            <div>
                <h1 className='text-[1.8rem] font-semibold text-[#1F2026]'>{ob.title}</h1>
                <div className='flex gap-[2px] items-center justify-start'>
                <img src="https://tse1.mm.bing.net/th/id/OIP.x7NaGWDspfrvBVaCBbGB9gHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3" className='w-[25px] h-[25px]' alt="" />
                <span className='text-[14px] text-[#7e818c] underline'>{ob.rating} <span>  ({ob.stock} sharhlar) </span></span>
                <span className='text-[14px] ml-3 text-[#7e818c] '> {(ob.images)?.length}rasmlar</span>
                <span className='text-[14px] ml-3 text-[#7e818c] '> {(ob.stock)}+Buyurtma</span>
            </div>
            </div>
            <div className='flex gap-[1rem]'>
                <div className='w-[20%]'>
                    {ob.images?.map((resp, i) =>  <img src={resp} key={i} className='max-w-[100px] w-full' alt="" />)}
                </div>
                <div className='w-[78%] flex gap-1'>
                   {ob.images?.[0]&& <img src={ob.images[0]}  alt='dlak' className='w-[49%]'/>}
                   {ob.images?.[1]&& <img src={ob.images[1]}  alt='dlak' className='w-[49%]'/>}
                </div>

            </div>
            <div className='my-[1.5rem]'>
                    <p className='text-[14px] text-[#1f2026]'>{ob.description}</p>
                </div>

                <div className='flex overflow-auto gap-5 my-scrollbar'>
                    {
                        ob.reviews?.map((qiy, i) =>
                            <div key={i} className='left min-w-[50%] px-[1rem] py-[2rem] border border-gray-400 rounded-[20px]'>
                            <div className='flex justify-between mb-[10px]'>
                                <div>
                                    <span className='block text-[14px] text-[#1f2026] font-medium'>{qiy.reviewerName}</span>
                                    <span className='block text-[12px] text-[#7e818c]'>{qiy.date}</span>
                                </div>
                                <div className='flex items-center'>
                    <img src="https://tse1.mm.bing.net/th/id/OIP.x7NaGWDspfrvBVaCBbGB9gHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3" className='w-[25px] h-[25px]' alt="" />
                    <span className='text-[14px] text-[#7e818c] font-medium'>{qiy.rating}</span>
                                </div>
                            </div>
                        <span className='block  text-[14px] text-[#1f2026] font-medium'>Fikr: <span className='font-normal'>{qiy.comment}</span></span>
                        <span className='block  text-[14px] text-[#1f2026] font-medium'>Email: <span className='font-normal'>{qiy.reviewerEmail}</span></span>
                        </div>
                        )
                    }
                </div>
        </div>
 
        <div className='w-[30%] border border-gray-400 rounded-[20px] p-[1.5rem] py-[2rem] flex flex-col gap-2'>
                <h3 className='text-[2rem] text-[#7f4dff] font-bold'>{(ob.price)?.toLocaleString()} so'm</h3>
                <span>Uzum kartasiz {(ob.price)+3} <span className='line-through text-[#7e818c]'>{(ob.price)+6}</span></span>
                <div>
        <span className='text-[1rem] inline-block text-[#1f2026] font-medium py-[1px] rounded-[4px] px-[4px] bg-[#ffff00] '>{(ob.price/12).toLocaleString()} so'm/oyiga</span>
            </div>
            <div className='flex gap-1'>
                <button className='py-[10px] px-[1rem] bg-gray-300 font-medium text-[#1f2026] rounded-[10px] w-[80%]'>Xarid qilish uchun</button>
                <button className='py-[10px] px-[1rem] bg-gray-300 font-medium text-[#1f2026] rounded-[10px] w-[20%] flex items-center justify-center text-[1.3rem]'>
                    <FaRegHeart />
                </button>
            </div>
            <button className='bg-[#7000ff] py-[1rem] w-full rounded-[10px] text-white font-medium cursor-pointer my-2'>
                <span>Savatga Qo'shish</span>
                <span className='block text-[12px]'>{ob.shippingInformation}</span>
            </button>
            <div className='flex gap-1 items-center'>
                <div className='bg-[#d7f5dd] p-[0.7rem] rounded-[10px] text-[1.2rem]'>
                <MdDownloadDone />
                </div>
                <span>{ob.stock} kishini Savatida turibdi</span>
            </div>
            <div className='flex gap-1 items-center'>
                <div className='bg-[#ffefcc] p-[0.7rem] rounded-[10px] text-[1.2rem]'>
                <TbShoppingBagCheck />
                </div>
                <span>{ob.stock-37} kishi sotib oldi</span>
            </div>
        </div>




            <div className='my-[1rem] w-full'>
                <h2 className='text-[1.5rem] text-[#1f2026] font-semibold'>O'xshash mahsulotlar</h2>
            </div>

        <div className="lists grid grid-cols-5 max-w-[1250px] mx-auto w-full gap-[20px] max-md:px-[1rem] max-md:grid-cols-3">
       {loader ? <Loader />:
       datValue?.filter((val) => val.category ==ob.category)
       .map((val) => (
        <Link onClick={()=> window.scrollTo({top:0, behavior:"smooth"})} key={val.id} to={`/About/${val.id}`}>
            <Card {...val}/>
        </Link>
       ))
       }


            

    </div>


    </div>
  )
}

export default Child