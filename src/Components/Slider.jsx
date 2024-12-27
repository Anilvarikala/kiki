// // import React from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/js/bootstrap.bundle.min";

// // const Slider = ({ images }) => {
// //   return (
// //     <div
// //       id="carouselExampleControls"
// //       className="carousel slide"
// //       data-bs-ride="carousel"
// //     >
// //       <div className="carousel-inner">
// //         {images.map((image, index) => (
// //           <div
// //             key={index}
// //             className={`carousel-item ${index === 0 ? "active" : ""}`}
// //           >
// //             <img src={image.src} className="d-block w-100" alt={image.alt} />
// //             <div className="carousel-caption d-none d-md-block text-start" style={{ top: "8%", left: "2%" }}>
// //               <h1 style={{color:"black",font:"bolder"}}>{image.heading}</h1>
// //               <p >{image.p1}</p>
// //               <p>{image.p2}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <button
// //         className="carousel-control-prev"
// //         type="button"
// //         data-bs-target="#carouselExampleControls"
// //         data-bs-slide="prev"
// //       >
// //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
// //         <span className="visually-hidden">Previous</span>
// //       </button>
// //       <button
// //         className="carousel-control-next"
// //         type="button"
// //         data-bs-target="#carouselExampleControls"
// //         data-bs-slide="next"
// //       >
// //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
// //         <span className="visually-hidden">Next</span>
// //       </button>
// //     </div>
// //   );
// // };

// // export default Slider;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

// const Slider = ({ images }) => {
//   return (

//     <div
//       id="carouselExampleControls"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       <div className="carousel-inner">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`carousel-item ${index === 0 ? "active" : ""}`}
//           >
//             <img src={image.src} className="d-block w-100" alt={image.alt} />
//             <div
//               className="carousel-caption d-none d-md-block text-start"
//               style={{ top: "8%", left: "2%" }}
//             >
//               {/* <h1 style={{ fontSize: "3rem", fontWeight: "bolder", marginBottom: "0.2rem", color: "black" }}>
//                 {image.heading}
//               </h1> */}
//               <p style={{ color: "orange", marginTop: "0.2rem" }}>{image.p1}</p>
//               <p style={{ color: "orange" }}>{image.p2}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleControls"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleControls"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Slider;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Slider = ({ images }) => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={image.src} className="d-block w-100" alt={image.alt} />
            <div
              className="carousel-caption d-none d-md-block text-start"
              style={{ top: "8%", left: "2%" }}
            >
              <p style={{ color: "orange", marginTop: "0.2rem" }}>{image.p1}</p>
              <p style={{ color: "orange" }}>{image.p2}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
