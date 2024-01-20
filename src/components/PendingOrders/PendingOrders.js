import { useEffect, useState } from "react";
import { getOrdersApi, updateOrderApi } from "../../api/order/orders";

export function PendingOrders() {
  const [orders, setOrders] = useState([]);

  console.log(orders, "orders");

  useEffect(() => {
    getOrdersApi().then((res) => setOrders(res.data));
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  const updateStatus = (id)=>{
    const res = updateOrderApi(id)
    console.log(res, 'res');

    if(res.status ==200){
        // getOrdersApi().then((res) => setOrders(res.data));
    }
  }

  return (
    <div className="min-h-[100vh] w-[85vw] m-auto mt-[30px]">
      {orders?.map((crt, i) => {
        return (
          <div
            key={i}
            className="  border-b-2 border-blue-300 flex  items-center justify-between px-[30px]"
          >
            <div  className="flex flex-col  w-[400px]">
              {crt.items.map((item, i) => (
                <div
                  className="flex   items-center gap-5 p-3 " 
                  key={i}
                >
                  <img
                    className="h-[70px] w-[70px]"
                    src={item.product.images[0]}
                  />
                  <div className=" w-[350px] flex flex-col gap-3">
                    
                    <h1 className="text-sm font-bold">{item?.product?.name}</h1>
                    <div className="flex gap-5 text-gray-700 text-sm font-medium ">
                      <p>Size: {item.size}</p>
                      <p className="flex grow" >Quantity: {item.quantity}</p>
                      <p>Price: {item.product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="ml-[150px] flex flex-col gap-4 items-end">
              <p className="font-bold text-sm">Sub-Total :{crt?.subtotal}</p>
              {user.isAdmin ? (
                <button onClick={()=>updateStatus(crt._id)} className="w-[100px] h-[40px] text-green-500 font-bold border-2 rounded-xl">
                 {!crt.status == 'approved' ? 'Approve' : crt.status } 
                </button>
              ) : (
                <button className="w-[100px] h-[40px] text-yellow-500 font-bold border-4  rounded-xl">
                  {crt?.status}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
