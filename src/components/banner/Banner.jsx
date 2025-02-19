import React from "react";
import "./banner.css";
import Button from "../Uitlites/button/Button";
import Input from "../Uitlites/inputbox/Input";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="bnr-box">
          <h1>
            <span>choose</span>
            <span>the perfect</span>
            <span>destination.</span>
          </h1>
          <p className="bnr-line">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
          </p>
          <div className="bnrsearch">
            <Input icon={'svg/search.svg'}/>
            <Button
              type={"link"}
              icon={true}
              content={"svg/bnrlocation.svg"}
              ref={"https://www.google.com/maps/"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
