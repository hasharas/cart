import React from 'react';
import cartData from '../../data/data';

const Cart = () => {

      return (
            <div className='m-5 p-5 w-full  flex flex-wrap gap-4 bg-slate-400 rounded'>
                  {cartData.map((items, index) => (
                        <div key={index} className='flex flex-col border  rounded-xl bg-neutral-400  gap-2 mx-5'>
                              <img src={items.image} alt="" className='w-[200px] h-[200px] rounded-xl' />
                              <div className='flex flex-col justify-center border rounded-md p-2 bg-slate-300 items-center gap-2'>
                                    <p>{items.itemName}</p>
                                    <p>{items.quantity}</p>
                                    <p>{items.price}</p>
                              </div>
                              <div className='p-3 flex justify-center'>
                                    <button className='p-2 bg-green-600 text-white rounded-md'>Add Cart</button>
                              </div>


                        </div>
                  ))}
            </div>
      );
}

export default Cart;
