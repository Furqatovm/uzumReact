import React from 'react'

const Buttons = () => {
  return (
    <section className="btns max-w-[1250px] mx-auto grid grid-cols-4 gap-[1rem] max-md:grid-cols-2 max-md:px-[1rem]">
    <button className="flex gap-[1rem] items-center bg-[#efefef] justify-center py-[10px] rounded-[20px]">
        <img src="https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b" className="w-[40px]" alt="qonday" />
        <span className="text-[#1f2026] font-[500]">Onalar va bolalar uchun</span>
    </button>

    <button className="flex gap-[1rem] items-center bg-[#efefef] justify-center py-[10px] rounded-[20px]">
        <img src="https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b" className="w-[40px]" alt="qonday" />
        <span className="text-[#1f2026] font-[500]">Arzon narxlar kafolati</span>
    </button>

    <button className="flex gap-[1rem] items-center bg-[#efefef] justify-center py-[10px] rounded-[20px]">
        <img src="https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b" className="w-[40px]" alt="qonday" />
        <span className="text-[#1f2026] font-[500]">Zamonaviy Bozor</span>
    </button>

    <button className="flex gap-[1rem] items-center bg-[#efefef] justify-center py-[10px] rounded-[20px]">
        <img src="https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b" className="w-[40px]" alt="qonday" />
        <span className="text-[#1f2026] font-[500]">Maktab bozori</span>
    </button>


</section>
  )
}

export default Buttons