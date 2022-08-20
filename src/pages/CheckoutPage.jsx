import React from 'react'
import { useSelector } from 'react-redux'
import { removeFromCart ,incrementQuantity ,decrementQuantity }  from "../Redux/action/action"
import { useDispatch } from 'react-redux/es/exports'
import { data } from 'autoprefixer'
import { Link } from 'react-router-dom'
const CheckoutPage = () => {

  const cartData = useSelector((state) => state.cartData);

   const dispatch=useDispatch()



  return (
    <div className="w-full min-h-screen  ">
      <div className="max-w-[1380px] mx-auto px-2 flex justify-between items-center h-full">


        <div>


          <div className='mb-20 mt-5 text-xl'>
            Shoppin Cart
          </div>

          <div className=' flex flex-col ml-[10%]  '>

            {
              
              cartData.length===0 ? <>
                    

                    
                      <Link to={"/"}>
                          Please go to Home page and add items 😢
                      </Link>
                    
               </> : cartData && cartData.map((ele) => (
                <div className=' flex justify-center  items-center gap-10   px-4  mt-4 mb-4  '>

                  {/* first */}
                  <div className='flex gap-10 justify-center items-center'>
                    <img src={ele.imageURL} alt="product img" className=' w-[80px] h-[80px]' />

                    <div className='flex  flex-col font-bold' >
                      <span>{ele.name}</span>
                      <span>Rs {ele.price}</span>
                    </div>
                  </div>

                  {/*  second */}
                  <div className='flex gap-10 justify-center items-center'>
                    <div className=' flex text-3xl gap-5 cursor-pointer items-center justify-center w-[100px]' >
                      <span onClick={()=> {dispatch(decrementQuantity(ele.id))}} >-</span>
                      <span className='text-xl'>{ele.quantity}</span>
                      <span onClick={()=> {dispatch(incrementQuantity(ele.id))}} >+</span>
                    </div>
                    <button className='cursor-pointer py-2 px-3 border border-black  rounded-md '   onClick={ ()=> {dispatch(removeFromCart(ele.id))} }  >Delete</button>

                  </div>


                </div>
              ))
            }




          </div>
        </div>



      </div>
    </div>
  )
}

export default CheckoutPage