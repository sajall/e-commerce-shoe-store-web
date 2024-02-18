
import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const [selectedFlvr, setSelectedFlvr] = useState("");
  const catg = ["Brands", "Bata", "Gucci", "Addidas", "Nike"];
  const [mydropdown, setMydropdown] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const showDropdown = () => {
    setMydropdown((prev) => !prev);
  };

  const handleFlavorChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedFlvr(selectedValue);
    navigate(`/category/${selectedValue}`);
  };


  const token = localStorage.getItem("token");

  return (
    <header>
      <div id="one">
        <img src="logo.webp" alt="" />
        <ul id="list">
          {!token ? (
            <Link to="/login">
              <li>Log in</li>
            </Link>
          ) : null}
          {token ? <Link to="/home">Home</Link> : null}
          {token ? (
            <Link to="/completed-orders">
              <li>
                <b>Completed Orders</b>
              </li>
            </Link>
          ) : null}
          {token ? (
            <Link to="/pending-orders">
              <li>Pending Orders</li>
            </Link>
          ) : null}
        </ul>

        {token ? (
          <select
            onChange={handleFlavorChange}
            className="p-2.5 text-gray-500 bg-white m-5  rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            {catg.map((flv) => (
              <option key={flv} value={flv}>
                {flv}
              </option>
            ))}
          </select>
        ) : null}

      
      </div>
      <div id="two">
        <ul>
          {token ? (
            <li>
              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/"); // Navigate to the home page
                }}
              >
                <b>Log out</b>
              </button>
            </li>
          ) : null}
          {token ? <img src="user.png" alt="" /> : null}
        </ul>
      </div>
    </header>
  );
}
