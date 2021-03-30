import React from "react";

const Footer = () => {
  return (
    <footer class="py-5" style={{ backgroundColor: "#568a7c" }}>
      <div class="row container ml-3 ml-md-5 ">
        <div class="col-0 col-lg-2"></div>
        <div class="col-12 col-sm-4 col-md">
          <p style={{ color: "white" }} class="d-block mb-3 text-muted">
            Coyright &copy; 2021 Pancho Fernandez
          </p>
        </div>
        <div class="col-12 col-sm-4  col-md">
          <h5 style={{ color: "white" }}> Contact</h5>
          <ul class="list-unstyled text-small" style={{ color: "white" }}>
            <li>
              <a class="text-muted" href="#">
                panchofern@gmail.com
              </a>
            </li>
            <li>
              <a
                style={{ color: "white" }}
                class="text-muted"
                target="_blank"
                href="https://github.com/Panchofdez"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-4 col-md">
          <h5 style={{ color: "white" }}>About</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="#">
                Toronto, Canada
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
