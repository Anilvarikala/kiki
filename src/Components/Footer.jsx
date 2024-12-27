import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
  };

  return (
    <footer className="footer bg-light text-dark py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
          
            <h5>About Us</h5>
            <p>
              Kiki.com is a product of a technology-driven company focused on
              revolutionizing the waste management sector.
            </p>
          </div>
 
          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link to="/SignUp" className="text-light">
                  Register
                </Link>
              </li> */}
              <li>
                <Link to="/ProfileFirst" className=" text-primary">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="text-primary"
              style={{ cursor: "pointer", }}
              onClick={handleClick}
            >
              Contact Us
            </h5>
            <p>
              <strong>Address:</strong> Yamnempet <br />
              <strong>Email:</strong> kiki@gmail.com <br />
              <strong>Phone:</strong> +91-123-456-7890
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="row mt-3">
          <div className="col text-center">
            <a href="#" className="text-light mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col text-center">
            <p>&copy; 2024 Kiki. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
