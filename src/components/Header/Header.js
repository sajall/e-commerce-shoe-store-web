
import { useEffect, useState } from 'react';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';



export function Header() {


    const [selectedFlvr, setSelectedFlvr] = useState("");
    console.log(selectedFlvr, 'selectedFlvr');

    const catg = ['Brands','Bata', 'Gucci', 'Addidas', 'Nike']

    const [mydropdown, setMydropdown] = useState(false);
    const navigate = useNavigate()

    const showDropdown = () => {


        setMydropdown((prev) => !prev);

    }

    // function onChangeCategory(){
        
    // }
useEffect(()=>{
    navigate(`/category/${selectedFlvr.toLowerCase()}`)
},[selectedFlvr])


    const user = JSON.parse(localStorage.getItem('user'));

    return (

        <header>
            <div id='one'>
                <img src="logo.webp" alt="" />
                <ul id="list">
                    {!user ?
                        <Link to='/login'>
                            <li>Log in</li>
                        </Link>
                        : null
                    }
                    {/* <li>Admin Panel</li> */}
                    {user ?
                        <Link to='/home'>Home</Link>
                        : null
                    }
                    {user ?
                        <Link to='/completed-orders'>
                            <li><b>Completed Orders</b></li>
                        </Link> : null
                    }
                    {user ?
                        <Link to='/pending-orders'>
                            <li>Pending Orders</li>
                        </Link>
                        : null
                    }
                    {/* {user ?
                        < li onClick={showDropdown} id='dropdownparent' >Brands
                            <ul id='dropdown' className={mydropdown ? 'show' : 'hidden'}>
                                <li>Addidas</li>
                                <li>Nike</li>
                                <li>Service</li>
                                <li>Bata</li>
                            </ul>
                        </li> : null
                    } */}
                </ul>


{user?
                <select
                
                onChange={(e) => {
                    setSelectedFlvr(e.target.value)
                    
                }}
                className="p-2.5 text-gray-500 bg-white  rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >


                    {catg.map((flv) => (
                        <option
                        key={flv}
                        value={flv}
                       
                        >
                            {flv}
                        </option>
                    ))}
                </select>
                :null
                }
            </div>
            <div id='two'>
                <ul>
                    {user ?
                        <li> <button onClick={() => {
                            localStorage.clear();
                            navigate('/')
                        }}><b>Log out</b></button> </li>
                        : null
                    }
                    {user ?
                        <img src="user.png" alt="" />
                        : null
                    }
                    {/* <li>img</li> */}
                </ul>

            </div>

        </header>

    );
}
