import React from "react";
import Navbar from "../components/Navbar";
import PizzaImg from "../Assets/pizza-img.jpg";
import cheeseCornPizza from "../Assets/chees-n-corn-pizza.jpg";
import margherita from "../Assets/Margherita-pizza-2.jpg";
import mexican from "../Assets/MEXICAN-GREEN-WAVE_0.jpg";
import paneer from "../Assets/paneerPizza.jpg";
import pepperoni from "../Assets/pepperoni-pizza.jpg";
import vegiePizza from "../Assets/vegPizza.jpg";
import whitepizza from "../Assets/whitePizza.jpg";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="cards mt-4 d-flex flex-wrap  justify-content-evenly ">
        <div
          class="card "
          style={{
            width: "18rem",
            height: "23rem",
            marginTop: "3.5rem",
            borderRadius: "4px",
          }}
        >
          <img
            src={margherita}
            class="card-img-top p-3 rounded"
            style={{ height: "22rem" }}
          />
          <div
            class="card-body"
            style={{ paddingTop: "0px", textAlign: "center" }}
          >
            <h5 class="card-title" style={{ fontWeight: "600" }}>
              Margherita Pizza
            </h5>

            <a
              href="#"
              class="btn btn-primary"
              style={{ width: "14rem", fontWeight: "600" }}
            >
              Add to cart
            </a>
          </div>
        </div>

        <div
          class="card "
          style={{
            width: "18rem",
            height: "23rem",
            marginTop: "3.5rem",
            borderRadius: "4px",
          }}
        >
          <img
            src={pepperoni}
            class="card-img-top p-3 rounded"
            style={{ height: "22rem" }}
          />
          <div
            class="card-body"
            style={{ paddingTop: "0px", textAlign: "center" }}
          >
            <h5 class="card-title" style={{ fontWeight: "600" }}>
              Pepperoni Pizza
            </h5>

            <a
              href="#"
              class="btn btn-primary"
              style={{ width: "14rem", fontWeight: "600" }}
            >
              Add to cart
            </a>
          </div>
        </div>

        <div
          class="card "
          style={{
            width: "18rem",
            height: "23rem",
            marginTop: "3.5rem",
            borderRadius: "4px",
          }}
        >
          <img
            src={paneer}
            class="card-img-top p-3 rounded"
            style={{ height: "22rem" }}
          />
          <div
            class="card-body"
            style={{ paddingTop: "0px", textAlign: "center" }}
          >
            <h5 class="card-title" style={{ fontWeight: "600" }}>
              Paneer Pizza
            </h5>

            <a
              href="#"
              class="btn btn-primary"
              style={{ width: "14rem", fontWeight: "600" }}
            >
              Add to cart
            </a>
          </div>
        </div>

        <div
          class="card "
          style={{
            width: "18rem",
            height: "23rem",
            marginTop: "3.5rem",
            borderRadius: "4px",
          }}
        >
          <img
            src={whitepizza}
            class="card-img-top p-3 rounded"
            style={{ height: "22rem" }}
          />
          <div
            class="card-body"
            style={{ paddingTop: "0px", textAlign: "center" }}
          >
            <h5 class="card-title" style={{ fontWeight: "600" }}>
              White Pizza
            </h5>

            <a
              href="#"
              class="btn btn-primary"
              style={{ width: "14rem", fontWeight: "600" }}
            >
              Add to cart
            </a>
          </div>
        </div>

        <div
          class="card "
          style={{
            width: "18rem",
            height: "23rem",
            marginTop: "3.5rem",
            borderRadius: "4px",
          }}
        >
          <img
            src={vegiePizza}
            class="card-img-top p-3 rounded"
            style={{ height: "22rem" }}
          />
          <div
            class="card-body"
            style={{ paddingTop: "0px", textAlign: "center" }}
          >
            <h5 class="card-title" style={{ fontWeight: "600" }}>
              Vegie Pizza
            </h5>

            <a
              href="#"
              class="btn btn-primary"
              style={{ width: "14rem", fontWeight: "600" }}
            >
              Add to cart
            </a>
          </div>
        </div>

        <div
          class="card "
          style={{
            width: "18rem",
            height: "23rem",
            marginTop: "3.5rem",
            borderRadius: "4px",
          }}
        >
          <img
            src={cheeseCornPizza}
            class="card-img-top p-3 rounded"
            style={{ height: "22rem" }}
          />
          <div
            class="card-body"
            style={{ paddingTop: "0px", textAlign: "center" }}
          >
            <h5 class="card-title" style={{ fontWeight: "600" }}>
              Cheese n Corn Pizza
            </h5>

            <a
              href="#"
              class="btn btn-primary"
              style={{ width: "14rem", fontWeight: "600" }}
            >
              Add to cart
            </a>
          </div>
        </div>

        <div
          class="card "
          style={{
            width: "18rem",
            height: "23rem",
            marginTop: "3.5rem",
            borderRadius: "4px",
          }}
        >
          <img
            src={mexican}
            class="card-img-top p-3 rounded"
            style={{ height: "22rem" }}
          />
          <div
            class="card-body"
            style={{ paddingTop: "0px", textAlign: "center" }}
          >
            <h5 class="card-title" style={{ fontWeight: "600" }}>
              Green Wave Pizza
            </h5>

            <a
              href="#"
              class="btn btn-primary"
              style={{ width: "14rem", fontWeight: "600" }}
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
