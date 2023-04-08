import React from 'react';
import ShopCard from '../components/Card/ShopCard';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData()
    
    return (
        <div className='lg:px-32 xl:px-32 px-12 my-14 grid md:gird-cols-2 lg:gird-cols-3 xl:grid-cols-3 gap-8'>

            {
                products.map(product=> <ShopCard key={product.id} product={product} />)
            }
        
        </div>
    );
};

export default Shop;