import React, { useEffect, useState } from "react";
import {
  addPartnerImage,
  deletePartnerImage,
  getAllPartnerImagees,
} from "../api/Partner";
import { toast } from "react-hot-toast";
import Loader from "../componets/Loader";
import ToasterComponent from "../componets/Toaster";

const Partners = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true)
    await getAllPartnerImagees().then((res) => {
      if (res?.status === 200) {
        setImages(res?.data?.imageData);
      } else {
        toast.error(res?.data?.message || "Internal Server Error!", {
          id: "toast",
        });
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Check if a file was selected
    if (!file) {
      toast.error("Please select a file.", { id: "toast" });
      return;
    }

    // Check file format (you can add more formats as needed)
    const allowedFormats = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedFormats.includes(file.type)) {
      toast.error(
        "Invalid file format. Please upload a JPEG, PNG, or GIF image.",
        { id: "toast" }
      );
      return;
    }

    // Check file size (4 MB limit)
    const maxSizeInBytes = 4 * 1024 * 1024; // 4 MB
    if (file.size > maxSizeInBytes) {
      toast.error("File size exceeds the 4 MB limit.", { id: "toast" });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);

    setImage(file);
  };

  const handleUploadImage = async () => {
    setLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("image", image);

    await addPartnerImage(formDataToSend).then((res) => {
      if (res?.status === 201) {
        setImages(images.concat(res?.data?.newImage));
        toast.success(res?.data?.message, { id: "toast" });
        handleCancelUpload();
      } else {
        toast.error(res?.data?.message || "Internal Server Error!", {
          id: "toast",
        });
      }
    });
    setLoading(false);
  };

  const handleCancelUpload = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleDelete = (img) => {
    setLoading(true);
    deletePartnerImage(img._id).then((res) => {
      if (res?.status === 200) {
        setImages(images.filter((x) => x._id !== res?.data?.deletedImage?._id));
        toast.success(res?.data?.message, { id: "toast" });
      } else {
        toast.error(res?.data?.message || "Internal Server Error!", {
          id: "toast",
        });
      }
    });
    setLoading(false);
  };
  return (
    <>
      {loading && <Loader />}

      <ToasterComponent />
      <div className="flex-1 px-2 sm:px-0 min-h-screen">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-extralight text-white/50">Partner</h3>
          <div className="inline-flex items-center space-x-2">
            <p className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </p>
            <p className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </p>
          </div>
        </div>
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
            {imagePreview && (
              <>
                <img
                  className="w-32 h-32 object-cover object-center"
                  src={imagePreview}
                  alt="not-loaded"
                />

                <div className="absolute bottom-2 p-2 flex justify-between items-center">
                  <button
                    className="cursor-pointer hover:opacity-80 items-center shadow-md mx-1 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
  rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
 focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                    onClick={handleUploadImage}
                  >
                    UPLOAD
                  </button>
                  <button
                    className="items-center shadow-md mx-1 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
  rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
 focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                    onClick={handleCancelUpload}
                  >
                    CANCEL
                  </button>
                </div>
              </>
            )}
            {!imagePreview && (
              <label htmlFor="image">
                <input
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  name="image"
                  className="hidden"
                />
                <p
                  className="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </p>
                <p
                  className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"
                  href="#"
                >
                  New Image
                </p>
              </label>
            )}
          </div>

          {images &&
            images.map((img) => (
              <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                <img
                  className="w-32 h-32 object-cover object-center"
                  src={img.imageUrl}
                  alt="not-loaded"
                />

                <div className="absolute bottom-2">
                  <button
                    onClick={() => handleDelete(img)}
                    className="inline-flex items-center px-4 py-2 bg-transparent hover:bg-red-700 hover:text-white transition duration-300 ease-in-out text-red-700 text-sm font-medium rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
