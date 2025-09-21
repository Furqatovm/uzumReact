import React from 'react'
import { TbShoppingBagPlus } from "react-icons/tb";

const Card = ({id, description, images, title, rating, price, discountPercentage, stock}) => {

  return (
    <div>
    <div className="overflow-hidden">
    <div className="w-full h-[310px] flex items-center justify-center overflow-hidden rounded-[8px]">
        <img src={images[0]} className="w-full h-full object-contain bg-[#efefef] rounded-[8px] hover:scale-[1.1] cursor-pointer" alt=""/>
    </div>
    <div className="flex flex-col py-[10px] px-[5px]">
        <div className='flex gap-[5px] items-center'>
            <span className='text-[#7f4dff] text-[14px] font-semibold'>{(price*((100-discountPercentage)/100)).toFixed(3)}</span>
        </div>
        <span className='text-[12px] text-[#7e818c]'>{(price).toLocaleString()}</span>
            <div>
        <span className='text-[11px] inline-block text-black font-[300] py-[1px] rounded-[4px] px-[4px] bg-[#ffff00] '>{(price/12).toLocaleString()} so'm/oyiga</span>
            </div>
            <p className='text-[#1f2026] text-[12px]'>{(title).slice(0, 30)}</p>
            <div className='flex gap-[2px] items-center justify-start'>
                <img src="https://tse1.mm.bing.net/th/id/OIP.x7NaGWDspfrvBVaCBbGB9gHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3" className='w-[25px] h-[25px]' alt="" />
                <span className='text-[12px] text-[#7e818c]'>{rating} <span>  ({stock} sharhlar) </span></span>
            </div>
    </div>  
    <button className='bg-[#7000ff] flex items-center justify-center w-full text-white rounded-[4px] py-[8px] cursor-pointer hover:bg-transparent hover:text-[#7000ff] border border-transparent hover:border-[#7000ff]'>
        <div className='text-[20px]'>
          <TbShoppingBagPlus />
        </div>
          <span className='text-[14px] font-medium hover:text-[#7000ff]'>Ertaga</span>
    </button>
</div>
</div>
  )
}

export default Card