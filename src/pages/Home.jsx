import React, { useEffect, useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi"
import { useDispatch } from "react-redux"

import { addToCart } from "../Redux/action/action"

const Home = () => {

  const dispatch = useDispatch()
  const [data, setData] = useState({})
  const [input, setInput] = useState("")
  const [filterData,setFilterData]=useState([])
  const [filterKey, setFilterKey] = useState([])
  const [priceFilter, setPriceFilter] = useState({
    maxP: 0,
    minP: 0
  })
 


  useEffect(() => {
          
       let keyS=filterKey.map((ele)=> ele.value)

       console.log("keyS",keyS);

        



  }, [filterKey])
  
   // searching

   useEffect(()=>{
    let updatedData= data.length > 0&& data.filter( item =>{
      return Object.keys(item).some( key => item[key].toString().toLowerCase().includes(input.toString().toLowerCase())
        ) 
    } )
    setFilterData(updatedData)
      
   },[data,input])
         

  useEffect(() => {

    fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`)
      .then((res) => res.json())
      .then((products) => setData(products))

  }, [])




/* if (filterKey.flag === false) {
                    return obj;
                  } else if (obj.gender.includes(filterKey.name)) {
                    return obj;
                  } else if (obj.color.includes(filterKey.name)) {
                    return obj;
                  } else if (obj.name.includes(filterKey.name)) {
                    return obj;
                  } else if (  (obj.price >= priceFilter.minP && obj.price <= priceFilter.maxP)   ){
                    return obj;
                  }  */

  //  handle serach data



  // handle  checkbox 
  const handleChange = (e) => {
    // Destructuring
    const { value, checked ,name } = e.target;


     if(checked){
        let array1=[...filterKey,{name,value}]
         console.log("array1", array1)
       setFilterKey(prev=> [...prev, {name,value}])
       
     }else if(!checked){
          let updatedArray=[...filterKey].filter((obj)=> obj.value!==value)
          console.log("updated array",updatedArray)
           setFilterKey(updatedArray)
     }
 



    
    // const [min, max] = value.split("-")

    // if (max === undefined) {
    //   setPriceFilter({
    //     maxP: Number(min),
    //     minP: 0
    //   })
    // } else {
    //   setPriceFilter({
    //     maxP: Number(max),
    //     minP: Number(min)
    //   })

    // }



   }
  

  return (
    <div className="w-full min-h-screen  ">
      <div className="max-w-[1380px] mx-auto px-2 flex justify-between items-center h-full">

        <div className='container mt-1 flex  gap-20'>


          <div className='filterDiv bg-gray-300 w-[20%] h-[70vh] mt-20  drop-shadow-md rounded-md overflow-auto '>

            <div className=' flex flex-col ml-7  mt-5 text-xl gap-1 '>
              <form >
                <div >
                  <span>Colour</span>
                  <div className='flex  flex-col gap-1 ml-2'>
                    <div className='flex gap-2'>
                      <input

                        type="checkbox" value="Red"
                        name='color'
                        className=' w-4 cursor-pointer '
                        onChange={handleChange}
                      />
                      <label

                      >Red</label>
                    </div>
                    <div className='flex gap-2'>
                      <input type="checkbox"
                        value="Blue"
                        name='color'
                        onChange={handleChange}
                        className=' w-4  cursor-pointer ' />
                      <label

                      > Blue</label>
                    </div>
                    <div className='flex gap-2'>
                      <input
                        value="Green"
                        name='color'
                        onChange={handleChange}
                        type="checkbox" className=' w-4  cursor-pointer ' />
                      <label

                      > Green</label>
                    </div>
                  </div>
                </div>
                <div >
                  <span>Gender</span>
                  <div className='flex  flex-col gap-1 ml-2'>
                    <div className='flex gap-2'>
                      <input type="checkbox"
                        value="Men"
                        name='gender'
                        onChange={handleChange}
                        className=' w-4  cursor-pointer ' />
                      <label

                      >Men</label>
                    </div>
                    <div className='flex gap-2'>
                      <input type="checkbox"
                        value="Women"
                        name='gender'
                        onChange={handleChange}
                        className=' w-4 cursor-pointer ' />
                      <label > Women</label>
                    </div>

                  </div>
                </div>
                <div >
                  <span>Price</span>
                  <div className='flex  flex-col gap-1 ml-2'>
                    <div className='flex gap-2'>
                      <input type="checkbox"
                        value="0-250"
                        name='price'
                        onChange={handleChange}
                        className=' w-4  cursor-pointer' />
                      <label >0-Rs250</label>
                    </div>
                    <div className='flex gap-2'>
                      <input
                        value="251-450"
                        name='price'
                        onChange={handleChange}
                        type="checkbox" className=' w-4 cursor-pointer ' />
                      <label > Rs251-450</label>
                    </div>
                    <div className='flex gap-2'>
                      <input
                        value="450"
                        name='price'
                        onChange={handleChange}
                        type="checkbox" className=' w-4  cursor-pointer ' />
                      <label > Rs 450</label>
                    </div>
                  </div>
                </div>
                <div >
                  <span>Type</span>
                  <div className='flex  flex-col gap-1 ml-2'>
                    <div className='flex gap-2'>
                      <input
                         name='type'
                        value="Polo"
                        onChange={handleChange}
                        type="checkbox" className=' w-4 cursor-pointer ' />
                      <label >Polo</label>
                    </div>
                    <div className='flex gap-2'>
                      <input type="checkbox"
                        value="Hoodie"
                        name='type'
                        onChange={handleChange}
                        className=' w-4 cursor-pointer ' />
                      <label > Hoodie</label>
                    </div>
                    <div className='flex gap-2'>
                      <input type="checkbox"
                        name='type'
                        value="Basic"
                        onChange={handleChange}
                        className=' w-4  cursor-pointer ' />
                      <label > Basic</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/*  product list */}

          <div className='productDiv   w-[80%] h-[80vh]  '>

            {/*  seaarch div */}
            <div className='mt-6 '>

              <div className=' flex items-center justify-center '>


                <input type="text" name="" placeholder='Search for Products'
                  value={input}
                  onChange={(e) => { setInput(e.target.value) }}
                  className='outline-none p-2 w-80 border-b-2 border-gray-400 ' />
                <span className=' bg-slate-400 text-white px-4 py-3  rounded-md cursor-pointer '
                 
                >
                  <HiOutlineSearch size={20} />
                </span>
              </div>

            </div>

            {/*  product listing div */}

            <div className='mt-5  grid  sm:grid-cols-2 lg:grid-cols-4 gap-y-6   '>
                       
              {
               
              
                filterData.length > 0 && filterData.filter((obj) => {
                 
                 return obj;

                    
                }).map((ele) => (
                    <div className='  pt-3  px-4 h-[245px] w-[220px]   border border-indigo-600 ' key={ele.id} >
                      <div >
                        <img src={ele.imageURL} alt="product img" className=' w-[180px] h-[180px]' />
                      </div>

                      <div className=' flex  justify-between items-center mt-2 mb-2 '>
                        <span className='ml-5'>Rs {ele.price} </span>
                        <span className='bg-slate-600 text-white p-1  rounded-md  cursor-pointer ' onClick={() => { dispatch(addToCart(ele)) }}     > Add to cart </span>
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