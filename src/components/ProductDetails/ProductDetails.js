import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "../../redux/slices/CartSlice";
import { getSingleProductApi } from "../../api/product/product";

import bg from '../../assets/bg.png'

export function ProductDetails({ }) {


  const dispatch = useDispatch();
  const param = useParams();

  const [singleProduct, setSingleProduct] = useState({})

  const findProduct = async () => {
    try {
      const res = await getSingleProductApi(param.id);
      if (res.status == 200) {
        setSingleProduct(res.data);
      }

    } catch (err) {
      console.log(err, 'some error occoured');
    }
  }

  useEffect(() => {
    findProduct();
  }, [])



  const [selectedImg, setSelectedImg] = useState("");
  // const [elementt, setElementt] = useState('');

  // ({ isSingleProduct: false, index: 0 });
  const [selectedSize, setSelectedSize] = useState();

  const selectedSizeStyle = `border-2 border-black bg-black text-white w-[80px] h-[30px]`;

  const [qty, setQty] = useState(0);

  const addToCart = () => {
    const objToDispatch = {
      size: selectedSize,
      quantity: qty,
      product: singleProduct,
    };
    dispatch(setCart(objToDispatch));
  };


  return (
    <>

      {singleProduct ? (

        <>
          <div className="h-[500px] flex items-center">
            {/* image wali div */}
            <div className="w-[50%] flex gap-7 justify-center ">
              <div className=" flex flex-col gap-3">
                {singleProduct && singleProduct?.images?.map((item, i) => (
                  <img
                    onClick={() => 
                      // setSelectedImg({ isSingleProduct: true, index: i })
                      setSelectedImg(item)
                    }
                    className="w-[100px] "
                    src={item}
                    alt=""
                  />
                ))}
              </div>
              <div>

                {/* {
                  // singleProduct?.images.find((img)=>{})
                   singleProduct?.images?.forEach((item , index) => {
                     if(index == 0){
                       // setElementt(item);  
                    }
                    
                 } ) } */}

                      {singleProduct ? 
                <img className="w-[400px]" src={selectedImg}alt=""/> 
                 : <img
                  className="w-[400px]"
                  src={bg}
                   alt="" 
                 />}
              </div>
            </div>
            {/* dussri wali div */}

            <div className="w-[50%]">
              <div>
                <h1 className="text-2xl font-bold">{singleProduct?.name}</h1>
                {singleProduct && singleProduct?.colors?.map((col, i) => (
                  <span key={i} className="text-lg font-bold">
                    {col} /{" "}
                  </span>
                ))}
                <br />
                <span className="text-lg text-red-700 line line-through">
                  {" "}
                  price ${singleProduct.price}
                </span>
                <span className="text-lg text-green-700 grow ml-6">
                  price:${singleProduct.discountedPrice}
                </span>
              </div>

              <div className="flex flex-col gap-3 mt-10 ">
                <h3 className="text-2xl font-bold">Select size</h3>
                <div className="w-[400px] flex flex-wrap gap-3">
                  {singleProduct && singleProduct?.sizes?.map((size, i) => (
                    <button
                      onClick={() => setSelectedSize(size)}
                      key={i}
                      className={
                        selectedSize == size
                          ? selectedSizeStyle
                          : "border-2 border-black  w-[80px] h-[30px]"
                      } updated
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <div className="flex justify-start items-center  gap-3 w-[350px]">
                  <span className="font-bold">Quantity:</span>
                  <button
                    className="border-2 w-[30px] h-[30px]  text-2xl bg-black text-white"
                    onClick={() => setQty(qty - 1)}
                  >
                    -
                  </button>
                  {qty}
                  <button
                    className="border-2 w-[30px] h-[30px] text-2xl bg-black text-white"
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </button>
                </div>
                <Link to="/cart">
                  <button
                    onClick={addToCart}
                    className="border-2 w-[360px] h-[40px] rounded-3xl  bg-black text-white"
                  >
                    Add to Cart
                  </button>
                </Link>
                <button className="border-2 w-[360px] h-[40px] rounded-3xl  bg-black text-white">
                  Online Pyment
                </button>
              </div>
            </div>
          </div>
        
        </>
      ) : 'Loading ...'}

    </>
  );
}
