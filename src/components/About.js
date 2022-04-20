import React, { useState } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import "react-bootstrap";
import "../assets/css/style.css";
// import Me from "../assets/img/Me.png";

function About() {
  const [pages] = useState([{ name: "about me" }]);
  const [currentPage] = useState(pages[0]);

  return (
    <div className=" d-flex p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto border gunmetal mint-cream d-flex flex-wrap row container-fluid">
            <div>
              {/* <img src={Me} className="img-fluid mt-5" /> */}
            </div>
            <div>
              <div>
                <hr />
                <h1 className="text-center">
                  {capitalizeFirstLetter(currentPage.name)}
                </h1>
                <br />
                <h3 className="text-center">
                  <u> Who am I? </u>
                </h3>
                <p className="text-left">
                  {" "}
                    My name is Chris Fabra nd this will be my about section.
                </p>
                <h3 className="text-center">
                  <u> Goals.</u>
                </h3>
                <p className="text-left">
                  my goals here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
