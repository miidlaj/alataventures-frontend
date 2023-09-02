/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { getAllPartnerImagees } from "../api/Partner";

const Partner = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    await getAllPartnerImagees().then((res) => {
      if (res?.status === 200) {
        setImages(res?.data?.imageData);
      }
    });
  };

  useEffect(() => {
    fetchImages();
  }, [images]);

  return (
    <>
      <section className="partner-area">
        <div className="">
          <div className="sec-title text-center">
            <p>Our Partners</p>
          </div>
          <div className="row">
            <div className="partner-slider">
              <div className="slide-track">
                {images.length !== 0 &&
                  images.map((img) => (
                    <div className="slide">
                      <img src={img.imageUrl} height={100} width={250} alt="" />
                    </div>
                  ))}

                {images.length !== 0 &&
                  images.map((img) => (
                    <div className="slide">
                      <img src={img.imageUrl} height={100} width={250} alt="" />
                    </div>
                  ))}

                {images.length === 0 && (
                  <>
                    <div className="slide">
                      <img
                        src="assets/images/brand/brand-1.png"
                        height={100}
                        width={250}
                        alt=""
                      />
                    </div>
                    <div className="slide">
                      <img
                        src="assets/images/brand/brand-2.png"
                        alt="Awesome Image"
                        height={100}
                        width={250}
                      />
                    </div>
                    <div className="slide">
                      <img
                        src="assets/images/brand/brand-3.png"
                        alt="Awesome Image"
                        height={100}
                        width={250}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
