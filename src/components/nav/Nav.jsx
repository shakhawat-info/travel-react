import React from "react";
import "./nav.css";
import Button from "../Uitlites/button/Button";

const Nav = () => {
  // nav bar items
  const navItem = ["home", "pages", "travel", "blog", "shop", "lements"];

  // nav icons
  const navIcon = [
    "svg/message.svg",
    "svg/send.svg",
    "svg/love.svg",
    "svg/plus.svg",
  ];

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-box">
          {/* logo */}
          <Button type={"link"} content={"images/logo.png"} icon={true} />

          {/* nav items/links */}
          <ul className="navigator">
            {navItem.map((item , index) => (
              <Button key={index} type={"link"} style={"navlink"} content={item} />
            ))}
          </ul>

          {/* nav icons */}
          <ul className="navicon">
            {navIcon.map((item , index) => <li> <Button key={index * 5} type={"link"} content={item} icon={true} /> </li>)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
