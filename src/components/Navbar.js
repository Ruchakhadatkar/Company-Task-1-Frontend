import React from "react";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary " >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#" style={{fontWeight:"600", fontSize:"20px"}}>
            Pizza App
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
               About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Category
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{height:"46px", marginTop:"7px"}}
            />
            <button class="btn btn-outline-success" type="submit" style={{fontSize:"20px" , width:'62px'}}>
            <IoSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
