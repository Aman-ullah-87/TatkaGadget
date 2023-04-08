import React from 'react';

const ShopCard = () => {
    return (
        <div className='shadow-lg  lg:max-w-sm bg-[#f1f2f4] object-center p-6'>
            <img src="/src/assets/images/smart-home-v2-7.jpg" alt="" className='lg:h-[320px] lg:w-[336px] w-full h-[14rem] cover  flex justify-center object-cover' />
            <h5 className='text-2xl font-bold my-2'>Smart Air Conditioner</h5>
            <p>Category: Home Appliance</p>
            <p className='font-bold text-md'>Price: 799$</p>
            <button className='btn !w-full bg-cyan-200 hover:bg-cyan-400'>Add To Cart</button>
        </div>
    );
};

export default ShopCard;