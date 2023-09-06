import React, { useEffect, useState } from "react";

import "./GalleryPage.css";
import { getAllImagees } from "../api/Gallery";
import { Toaster, toast } from "react-hot-toast";

const GalleryPage = () => {
  const [images, setImages] = useState([]);


  const fetchImages = () => {
    getAllImagees().then((res) => {
      if (res?.status === 200) {
        setImages(res?.data?.imageData);
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }
    });
  };

  useEffect(() => {
    fetchImages()
  
   
  }, [])
  
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <section className="portfolio-section" id="portfolio" style={{marginTop: "200px"}}>
        <div className="container-fluid">
        <div className="sec-title text-center">
            <div className="big-title black-clr">
              <h1>Gallery</h1>
            </div>
          </div>
          
          {/* <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Project Gallery</h2>
            </div>
          </div> */}
          
          <ul className="row portfolio-item">
            
            {images.length !== 0 && images.map((img) => (
                <li className="mix dev col-xl-3 col-md-4 col-12 col-sm-6 pd flex justify-center">
                <img
                  src={img.imageUrl}
                  itemProp="thumbnail"
                  alt="not loaded"
                />
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <p className="category">Click to zoom</p>                 
                    <a
                      data-fancybox="item"
                      title="click to zoom-in"
                      href={img.imageUrl}
                    >
                      <div className="magnify-icon">
                        <p>
                          <span>
                            <i className="fa fa-search" aria-hidden="true" />
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
