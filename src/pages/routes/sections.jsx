import React from 'react'
import aylana from "./images/aylan.png"


const Sections = () => {
  return (
   
<section className="max-w-[1250px] mx-auto flex justify-between items-center max-md:hidden px-[1rem]">
    <div className="flex items-center gap-[4px]">
            <img src={aylana} className="w-[24px]" alt="" />
            <span className="text-[#1F2026] text-[12.8px] font-[600]">Muddatli to'lov</span>                
    </div>
    <a href="#" className="text-[14px] text-[#595B66] font-[400] outline-none focus:ring-0">Elektronika</a>
    <a href="#" className="text-[14px] text-[#595B66] font-[400] outline-none focus:ring-0">Maishiy texnika</a>
    <a href="#" className="text-[14px] text-[#595B66] font-[400] outline-none focus:ring-0">Kiyim</a>
    <a href="#" className="text-[14px] text-[#595B66] font-[400] outline-none focus:ring-0">Poyabzallar</a>
    <a href="#" className="text-[14px] text-[#595B66] font-[400] outline-none focus:ring-0">Aksessuarlar</a>
    <a href="#" className="text-[14px] text-[#595B66] font-[400] outline-none focus:ring-0">Go‘zallik va parvarish</a>
    <a href="#" className="text-[14px] text-[#595B66] font-[400] outline-none focus:ring-0">Salomatlik</a>
    <a href="#" className="text-[14px] text-[#595B66] font-[400] outline-none focus:ring-0">Uy-ro‘zg‘or buyumlari</a>
    <a href="#" className="text-[14px] text-[#595B66] font-[400] outline-none focus:ring-0">Qurilish va ta’mirlash</a>
    

    <select name="salom" className="text-[#595B66] text-[14px] ml-[2rem]">
        <option value="Y">Yana</option>
        <option value="Y">Yana</option>
    </select>
</section>
  )
}

export default Sections