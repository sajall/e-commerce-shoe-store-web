
import { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';



export function Header() {
    
    const [mydropdown, setMydropdown] = useState(false);

    const showDropdown = ()=>{
        
        setMydropdown(!mydropdown)
        
    }

    return (

        <header>
            <div id='one'>
                <img src="logo.webp" alt="" />
                <ul id="list">
                    <li>Log in</li>
                    <li>Admin Panel</li>
                    <Link to='/home'>Home</Link>
                    <li><b>Completed Orders</b></li>
                    <li>Pending Orders</li>
                    < li onClick={showDropdown} id='dropdownparent' >Brands
                        <ul id='dropdown' className={mydropdown == true ? 'show' : 'hidden'}>
                            <li>Addidas</li>
                            <li>Nike</li>
                            <li>Service</li>
                            <li>Bata</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id='two'>
                <ul>
                    <li> <b>Log out</b></li>
                    <li><img src="user.png" alt="" /></li>
                    {/* <li>img</li> */}
                </ul>

            </div>

        </header>

    );
}
