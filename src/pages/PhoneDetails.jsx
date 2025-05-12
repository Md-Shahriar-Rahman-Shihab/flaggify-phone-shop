import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Components/ui/Button';
import { MdShoppingCart, MdBookmarkAdd } from "react-icons/md";
import { addFavorite, addToCart } from '../utils';
import { CartContext } from '../providers/Contexts';
import { getCart } from '../utils';

const PhoneDetails = () => {
    const {setCart} = useContext(CartContext)
    const data = useLoaderData();
    const { id } = useParams();
    const singlePhone = data.find(phone => phone.id === parseInt(id));

    const {
        name,
        image,
        brand,
        model,
        price,
        description,
        storage,
        camera_info,
    } = singlePhone || {};
    const handleFavorite = () => {
        addFavorite(singlePhone)
    }
    const handleCart = () =>{
        //save to localstorage for persistency
        addToCart(singlePhone)
        //update state for instant ui change
        setCart(getCart())
    }


    return (
        <div className='w-full py-12 px-4 md:px-20'>
            <img src={image} alt="Phone Image" className='w-full mx-auto md:w-[600px] mb-8' />
            
            {/* Title and Buttons */}
            <div className="flex justify-between items-center mb-10">
                <h1 className='text-5xl font-thin'>{name}</h1>
                <div className='space-x-4 flex'>
                    <Button onClick={handleCart} label={<MdShoppingCart />} />
                    <Button onClick={handleFavorite} label={<MdBookmarkAdd />} />
                </div>
            </div>

            {/* Details */}
            <div>
                <h2 className='text-3xl font-thin mb-6'>Details:</h2>
                <p className='mb-3'><b>Brand:</b> {brand}</p>
                <p className='mb-3'><b>Model:</b> {model}</p>
                <p className='mb-3'><b>Storage:</b> {storage.join(', ')}</p>
                
                {/* Fixed Price Display */}
                <p className='mb-3'>
                    <b>Price:</b>{' '}
                    {Object.entries(price).map(([variant, amount], idx) => (
                        <span key={idx}>
                            {variant}: {amount}{idx < Object.entries(price).length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </p>

                <p className='mb-3'><b>Camera Info:</b> {camera_info}</p>
                <p className='mb-3'><b>Description:</b> {description}</p>
            </div>
        </div>
    );
};

export default PhoneDetails;
