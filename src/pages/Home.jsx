import React, { useEffect, useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi"
 import { useDispatch } from "react-redux"
 
const Home = () => {

   const dispatch=useDispatch()
  const [data, setData] = useState({})


    


  useEffect(() => {

    fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`)
      .then((res) => res.json())
      .then((products) => setData(products))

  }, [])


 console.log(data);
  


  return (
    <div className="w-full min-h-screen  ">
      <div className="max-w-[1380px] mx-auto px-2 flex justify-between items-center h-full">

        <div className='container mt-1 flex  gap-20'>


          <div className='filterDiv bg-gray-300 w-[20%] h-[70vh] mt-20  drop-shadow-md rounded-md overflow-auto '>

            <div className=' flex flex-col ml-7  mt-5 text-xl gap-1 '>

              <div >
                <span>Colour</span>
                <div className='flex  flex-col gap-1 ml-2'>
                  <div className='flex gap-2'>
                    <input type="checkbox" className=' w-4 cursor-pointer ' />
                    <label for="vehicle1">Red</label>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" className=' w-4  cursor-pointer ' />
                    <label for="vehicle2"> Blue</label>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" className=' w-4  cursor-pointer ' />
                    <label for="vehicle3"> Green</label>
                  </div>
                </div>
              </div>
              <div >
                <span>Gender</span>
                <div className='flex  flex-col gap-1 ml-2'>
                  <div className='flex gap-2'>
                    <input type="checkbox" className=' w-4  cursor-pointer ' />
                    <label for="vehicle1">Men</label>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" className=' w-4 cursor-pointer ' />
                    <label for="vehicle2"> Women</label>
                  </div>

                </div>
              </div>
              <div >
                <span>Price</span>
                <div className='flex  flex-col gap-1 ml-2'>
                  <div className='flex gap-2'>
                    <input type="checkbox" className=' w-4  cursor-pointer' />
                    <label for="vehicle1">0-Rs250</label>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" className=' w-4 cursor-pointer ' />
                    <label for="vehicle2"> Rs251-450</label>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" className=' w-4  cursor-pointer ' />
                    <label for="vehicle3"> Rs 450</label>
                  </div>
                </div>
              </div>
              <div >
                <span>Type</span>
                <div className='flex  flex-col gap-1 ml-2'>
                  <div className='flex gap-2'>
                    <input type="checkbox" className=' w-4 cursor-pointer ' />
                    <label for="vehicle1">Polo</label>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" className=' w-4 cursor-pointer ' />
                    <label for="vehicle2"> Hoodie</label>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" className=' w-4  cursor-pointer ' />
                    <label for="vehicle3"> Basic</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  product list */}

          <div className='productDiv   w-[80%] h-[80vh]  '>

            {/*  seaarch div */}
            <div className='mt-6 '>

              <div className=' flex items-center justify-center '>


                <input type="text" name="" placeholder='Search for Products' className='outline-none p-2 w-80 border-b-2 border-gray-400 ' />
                <span className=' bg-slate-400 text-white px-4 py-3  rounded-md cursor-pointer'>
                  <HiOutlineSearch size={20} />
                </span>
              </div>

            </div>

            {/*  product listing div */}

            <div className='mt-5  grid  sm:grid-cols-2 lg:grid-cols-4 gap-y-6   '>

              {

                data.length>0 && data.map((ele)=>(
                  <div className='  pt-3  px-4 h-[245px] w-[220px]   border border-indigo-600 ' >
                <div >
                  <img src={ele.imageURL} alt="product img" className=' w-[180px] h-[180px]' />
                </div>

                <div className=' flex  justify-between items-center mt-2 mb-2 '>
                  <span className='ml-5'>Rs {ele.price} </span>
                  <span className='bg-slate-600 text-white p-1  rounded-md  cursor-pointer '> Add to cart </span>
                </div>
              </div>
                ))
              }
            

            </div>





          </div>
        </div>

      </div>
    </div>
  )
}

export default Home