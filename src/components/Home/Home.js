import { useMutation, useQuery } from "@apollo/client";
import { getALL } from "../../GraphQL/Query";
import { useEffect, useState } from 'react';
import { Cards } from '../Cards/Cards'
import Shoeswiper from '../Shoeswiper/Shoeswiper'
import Swiper from '../Shoeswiper/Shoeswiper'
import './Home.css'


export function Home({ }) {
  const [products, setProducts] = useState([])

  const { loading, error, data } = useQuery(getALL);

  useEffect(() => {
    setProducts(data?.getAll);
  }, [data]);
  
  if (loading) return <div  className="min-h-[800px]"> 
  <h1 className="text-2xl font-bold">LOADING...</h1>
  </div>;



  return (
    <div className="">
      <img src="Banner.webp" alt="" />

      <div className='flex gap-5 text-center justify-around font-bold text-lg'>
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
        <div>
          <img src="https://shoe-paradies.vercel.app/_next/image?url=%2Fshoe.avif&w=1920&q=75" alt="" />
          <span className='absolute text-xl'>Service</span>

        </div>
      </div>
      <h1 className='mt-[120px] font-bold text-2xl'></h1>
      <Shoeswiper products={products} />

      <div className='flex flex-wrap gap-5 justify-center'>

        {products?.map((prod, i) => {
       
          return (<Cards key={i} prod={prod} ></Cards>)
        })}


      </div>

    </div>
  )
}