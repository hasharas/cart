import React, { useState } from 'react';
import cartData from '../../data/data';
import Button from '../button/Button';

const Cart = () => {

      const [myalert, setMyAlert] = useState();

      const setAlert = () => {
            setMyAlert("Clicked item add button")
      }

      return (
            <div className='m-5 p-5 w-full  flex flex-wrap gap-4 bg-slate-400 rounded'>
                  {cartData.map((items, index) => (
                        <div key={index} className='flex flex-col border  rounded-xl bg-neutral-400  gap-2 mx-5'>
                              <img src={items.image} alt="" className='w-[200px] h-[200px] bg-cover object-cover rounded-t-lg' />
                              <div className='flex flex-col justify-center border rounded-md p-2 bg-slate-300 items-center gap-2'>
                                    <p>{items.itemName}</p>
                                    <p>{items.quantity}</p>
                                    <p>{items.price}</p>
                              </div>
                              <div className='p-3 flex justify-center'>
                                    <Button
                                          buttonName="Add to Cart"
                                          onClick={setAlert}
                                          type='button'
                                          value='addtocart' />
                              </div>


                        </div>
                  ))}
            </div>
      );
}

export default Cart;
