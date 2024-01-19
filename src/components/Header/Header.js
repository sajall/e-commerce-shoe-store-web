
import { useState } from 'react';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';



export function Header() {

    const [mydropdown, setMydropdown] = useState(true);
    const navigate =useNavigate()

    const showDropdown = () => {

        setMydropdown(!mydropdown)

    }

    const user = JSON.parse(localStorage.getItem('user'));

    return (

        <header>
            <div id='one'>
                <img src="logo.webp" alt="" />
                <ul id="list">
                    {!user? 
                    <Link to='/login'>
                    <li>Log in</li>
                    </Link>
                    : null
                    }
                    {/* <li>Admin Panel</li> */}
                    <Link to='/home'>Home</Link>
                    {user? 
                 <Link to='/completed-orders'>
                  <li><b>Completed Orders</b></li>
                 </Link> : null
                }
                 {user?
                    <Link to='/pending-orders'>
                        <li>Pending Orders</li>
                    </Link>
                    : null
                 } 
                  {user?
                    < li onClick={showDropdown} id='dropdownparent' >Brands
                        <ul id='dropdown' className={mydropdown == true ? 'show' : 'hidden'}>
                            <li>Addidas</li>
                            <li>Nike</li>
                            <li>Service</li>
                            <li>Bata</li>
                        </ul>
                    </li>: null
                }  
                </ul>
            </div>
            <div id='two'>
                <ul>
                    {user? 
                    <li> <button onClick={()=>{
                        localStorage.clear();
                        navigate('/')
                    }}><b>Log out</b></button> </li>
                    : null
                }
                {user? 
                <l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i><img src="user.png" alt="" /></l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i>
                :null
                }
                    {/* <li>img</li> */}
                </ul>

            </div>

        </header>

    );
}
