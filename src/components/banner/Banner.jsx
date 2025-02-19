import React from "react";
import "./banner.css";
import Button from "../Uitlites/button/Button";

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
          <form action="#">
            <label for="bnrlocate">
              <Button type={"submit"} icon={true} content={"svg/search.svg"} />
              <input
                type="text"
                id="bnrlocate"
                placeholder="enter your location"
              />
            </label>
            <Button
              type={"link"}
              icon={true}
              content={"svg/bnrlocation.svg"}
              ref={"https://www.google.com/maps/"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
