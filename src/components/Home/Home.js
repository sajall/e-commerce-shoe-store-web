
import { useEffect, useState } from 'react'
import { Cards } from '../Cards/Cards'
import Shoeswiper from '../Shoeswiper/Shoeswiper'
import Swiper from '../Shoeswiper/Shoeswiper'
import './Home.css'
import { getproductsApi } from '../../api/product/product'

export function Home({ }) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getproductsApi().then((res) => setProducts(res.data))
  }, [])
  
  return (
    <>
      <img src="Banner.webp" alt="" />

      <div className='flex gap-5 text-center justify-around font-bold text-lg'>
        {/* <div className='text-3xl font-bold underline'>this is div</div> */}
        <div>
          <img src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe.avif&w=1920&q=75" alt="" />
          <span className='absolute text-xl'>Addidas</span>
        </div>
        <div>
          <img src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe2.avif&w=1920&q=75" alt="" />
          <span className='absolute text-xl'>Nike</span>

        </div>

        <div>
          <img src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe3.avif&w=1920&q=75" alt="" />
          <span className='absolute text-xl'>Bata</span>

        </div>
        ProductDetails
        <div>
          <img src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe.avif&w=1920&q=75" alt="" />
          <span className='absolute text-xl'>Service</span>

        </div>
      </div>
      <h1 className='mt-[120px] font-bold text-2xl'>By Addidas</h1>
      <Shoeswiper></Shoeswiper>


      <div className='flex flex-wrap gap-5 justify-center'>
        {products.map((prod, i) => {
          return (<Cards key={i} prod={prod}></Cards>)
        })}


      </div>

    </>
  )
}