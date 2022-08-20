import React from 'react'

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-slate-200 ">
      <div className="max-w-[1380px] mx-auto px-2 flex justify-between items-center h-full">

        <div className='container mt-1 flex  gap-20'>


          <div className='filterDiv bg-red-200 w-[30%] h-[70vh] mt-20  '>

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

          <div className='productDiv  bg-black  w-[70%] h-[80vh]'>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home