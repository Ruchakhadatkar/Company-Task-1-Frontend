import React from "react";
import Navbar from "../components/Navbar";
import PizzaImg from "../Assets/pizza-img.jpg";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="cards mt-4 d-flex flex-wrap  justify-content-evenly ">
        <div
          class="card "
          style={{
            width: "22rem",
            height: "23rem",
            marginTop: "3.5rem",
            borderRadius: "4px",
          }}
        >
          <img
            src={PizzaImg}
            class="card-img-top p-3 rounded"
            style={{ height: "22rem" }}
          />
          <div class="card-body" style={{paddingTop:"0px" , textAlign:"center"}}>
            <h5 class="card-title" style={{fontWeight:"600"}}>Pizza</h5>

            <a href="#" class="btn btn-primary" style={{width:"14rem", fontWeight:"600"}}>
              Add to cart
            </a>
          </div>
        </div>

        <div
          class="card "
          style={{
            width: "22rem",
            height: "23rem",
            marginTop: "3.5rem",
            borderRadius: "4px",
          }}
        >
          <img
            src={PizzaImg}
            class="card-img-top p-3 rounded"
            style={{ height: "22rem" }}
          />
          <div class="card-body" style={{paddingTop:"0px" , textAlign:"center"}}>
            <h5 class="card-title" style={{fontWeight:"600"}}>Pizza</h5>

            <a href="#" class="btn btn-primary" style={{width:"14rem", fontWeight:"600"}}>
              Add to cart
            </a>
          </div>
        </div>

        <div
          class="card "
          style={{
            width: "22rem",
            height: "23rem",
            marginTop: "3.5rem",
            borderRadius: "4px",
          }}
        >
          <img
            src={PizzaImg}
            class="card-img-top p-3 rounded"
            style={{ height: "22rem" }}
          />
          <div class="card-body" style={{paddingTop:"0px" , textAlign:"center"}}>
            <h5 class="card-title" style={{fontWeight:"600"}}>Pizza</h5>

            <a href="#" class="btn btn-primary" style={{width:"14rem", fontWeight:"600"}}>
              Add to cart
            </a>
          </div>
        </div>

       
      

       
      </div>
    </>
  );
};

export default HomePage;
