// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useEffect } from "react";
// const About = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to the top of the page when the component renders
//   }, []);
//   return (
//     <>
//       <Navbar></Navbar>
//       <div class="container">
//         <h3 class="m-2">About Us</h3>
//         <div class="pt-4 body-lg m-2">
//           Kiki.com is a product of a technology-driven company focused on
//           revolutionizing the waste management sector. Our platform operates on
//           a SaaS (Software as a Service) model, designed to create a seamless
//           marketplace for shopkeepers and individuals to trade scrap materials
//           such as steel, plastic, paper, and books. Through our innovative
//           approach, we aim to streamline the process of recycling and promote
//           sustainability by offering a simple, efficient way to reduce waste and
//           contribute to a cleaner environment.
//         </div>
//       </div>

//       <div class="container">
//         <h4 class="pt-10 m-2 fg-default-2">Founders Message</h4>
//         <h5 class="pt-4 m-2 fg-success-1 text-primary">
//           “Waste is never a waste, it's rather an opportunity to something new”
//         </h5>
//         <div class="pt-6 row">
//           <div class="col">
//             <div class="body-lg">
//               ............
//               {/* Mr. Anurag Asati, who co-founded The Kabadiwala with Kavindra
//               Raghuwanshi in 2014 always wanted to do something out of the box
//               but he had never anticipated something as bizarre as “waste” would
//               drive him to bring the solution until he detected the biggest
//               loopholes associated with waste management sector. */}
//             </div>
//             {/* <div class="body-lg">
//               The unorganized sector made it a task for him to sell his own
//               household scrap, it is then that he decided to infuse technology
//               into the sector making it easy for thousands of consumers to sell
//               scrap online.
//             </div>
//             <div class="body-lg">
//               But, this wasn’t enough to mark a significant impact, on
//               households, The Kabadiwala gradually started catering to small to
//               big businesses, corporates to institutions with their Extended
//               Producer Responsibility (EPR), assisted the state government in
//               managing the city’s huge dumps at The material recovery facility
//               (MRF Centers) through involving waste workers from the informal
//               sector, helping them earn the wage they deserve. Today, The
//               Kabadiwala has become a one-stop solution to every waste chaos.
//             </div> */}
//           </div>
//         </div>
//       </div>

//       <div class="container">
//         <h4 class="pt-10 m-2 fg-default-2">Our Core Values</h4>
//         <div class="pt-4 m-2 row d-flex justify-content-between">
//           <div class="me-lg-7 mt-4 p-8 col-lg-3 col-12 flex-grow-1 rounded-6 container-bg-2">
//             <h5 class="pt-6 px-4  fg-success-1">Vision</h5>
//             <div class="px-4 body-lg p-3 mb-2  text-white">
//               To become the leading platform for scrap recycling, transforming
//               how communities and businesses manage waste, fostering a circular
//               economy where every recyclable material finds its way back into
//               use, and contributing to a cleaner, greener world.
//             </div>
//           </div>
//           <div class="me-lg-7 mt-4 p-8 col-lg-3 col-12 flex-grow-1 rounded-6 container-bg-2">
//             <h5 class="pt-4 px-4 fg-success-1">Mission</h5>
//             <div class="px-4 body-lg">
//               To empower individuals and businesses to efficiently recycle waste
//               materials by providing a seamless platform that connects customers
//               and shopkeepers, fostering a sustainable and eco-friendly
//               community
//             </div>
//           </div>
//           <div class="me-lg-4 mt-4 p-8 col-lg-3 col-12 flex-grow-1 rounded-6 container-bg-2">
//             <h5 class="pt-4 px-4 fg-success-1">Target</h5>
//             <div class="px-4 body-lg">
//               To provide a user-friendly platform that simplifies the process of
//               buying and selling scrap materials, reducing waste, promoting
//               recycling, and fostering sustainability by connecting customers
//               and shopkeepers seamlessly
//             </div>
//           </div>

//           <div class="me-lg-4 mt-4 p-8 col-lg-3 col-12 flex-grow-1 rounded-6 container-bg-2">
//             <h5 class="pt-4 px-4 fg-success-1">Process</h5>
//             <div class="px-4 body-lg"></div>
//           </div>
//           <div class="me-lg-4 mt-4 p-8 col-lg-3 col-12 flex-grow-1 rounded-6 container-bg-2">
//             <h5 class="pt-4 px-4 fg-success-1">Process</h5>
//             <div class="px-4 body-lg"></div>
//           </div>
//           <div class="me-lg-4 mt-4 p-8 col-lg-3 col-12 flex-grow-1 rounded-6 container-bg-2">
//             <h5 class="pt-4 px-4 fg-success-1">Process</h5>
//             <div class="px-4 body-lg"></div>
//           </div>
//         </div>
//       </div>

//       <Footer></Footer>
//     </>
//   );
// };

// export default About;

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import "./About.css"; // Import CSS file for styling

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component renders
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-page">
        {/* Wrap the entire page content inside one main container */}
        <div className="about-container">
          <h3 className="about-heading">About Us</h3>
          <div className="about-body">
            Kiki.com is a product of a technology-driven company focused on
            revolutionizing the waste management sector. Our platform operates on
            a SaaS (Software as a Service) model, designed to create a seamless
            marketplace for shopkeepers and individuals to trade scrap materials
            such as steel, plastic, paper, and books. Through our innovative
            approach, we aim to streamline the process of recycling and promote
            sustainability by offering a simple, efficient way to reduce waste and
            contribute to a cleaner environment.
          </div>

          <div className="about-subsection">
            <h4 className="about-subheading">Founders Message</h4>
            <h5 className="quote text-primary" >
              “Waste is never a waste, it's rather an opportunity to do something new”
            </h5>
            <div className="founders-message">
              {/* Message from the founders */}
              ............
            </div>
          </div>

          <div className="about-subsection">
            <h4 className="about-subheading">Our Core Values</h4>
            <div className="core-values">
              <div className="value-box">
                <h5>Vision</h5>
                <p >
                  To become the leading platform for scrap recycling, transforming
                  how communities and businesses manage waste, fostering a circular
                  economy where every recyclable material finds its way back into
                  use, and contributing to a cleaner, greener world.
                </p>
              </div>
              <div className="value-box">
                <h5>Mission</h5>
                <p>
                  To empower individuals and businesses to efficiently recycle waste
                  materials by providing a seamless platform that connects customers
                  and shopkeepers, fostering a sustainable and eco-friendly community.
                </p>
              </div>
              <div className="value-box">
                <h5>Target</h5>
                <p>
                  To provide a user-friendly platform that simplifies the process of
                  buying and selling scrap materials, reducing waste, promoting
                  recycling, and fostering sustainability by connecting customers
                  and shopkeepers seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
