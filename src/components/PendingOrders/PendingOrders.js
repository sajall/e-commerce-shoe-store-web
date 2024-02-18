    import { useEffect, useState } from "react";
    import { GET_ALL_ORDERS } from "../../GraphQL/Query";
    import { useQuery } from "@apollo/client";




    export function PendingOrders() {


    const [orders, setOrders] = useState([]);
    const {loading , error , data } = useQuery(GET_ALL_ORDERS);


    useEffect(() => {

     if(data){
        console.log(data.getAllOrders , 'allorders');
        setOrders(data.getAllOrders);   
     }

    }, [ data]);

  
    console.log(error , 'this is pending order error');
    if (loading) return <div className="min-h-[800px]">
    <h1 className="text-2xl font-bold">LOADING....</h1>;
    </div>
  
    


    const user = JSON.parse(localStorage.getItem("user"));


    //   const updateStatus = async (id)=>{
       
    //     try {
    //         await loginUser ({
    //           variables: {
    //             _id:id
    //             status:
    //           }
    //         });
    
    //         console.log('User Logged in successfully!');
    //       } catch (err) {
    //         console.error('user Login failed:', err);
    //       }

    //   }

    return (

        <div className="min-h-[100vh] w-[85vw] m-auto mt-[30px]">
            {
                error ?
                <div>{error.message}</div>
                : null
            }
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
                        src={item?.images[0]}
                    />
                    <div className=" w-[350px] flex flex-col gap-3">
                        
                        <h1 className="text-sm font-bold">{item?.name}</h1>
                        <div className="flex gap-5 text-gray-700 text-sm font-medium ">
                        <p>Size: {item.size}</p>
                        <p className="flex grow" >Quantity: {item.quantity}</p>
                        <p>Price: {item.price}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>

                <div className="ml-[150px] flex flex-col gap-4 items-end">
                <p className="font-bold text-sm">Sub-Total :{crt?.subtotal}</p>
                {user.isAdmin ? (
                    <button      className="w-[100px] h-[40px] text-green-500 font-bold border-2 rounded-xl">
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

    // onClick={()=>updateStatus(crt._id )}  
  