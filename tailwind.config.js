/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/admin/Dashboard.jsx",
    "./src/admin/AdminNav.jsx",
    "./src/admin/Gallery.jsx",
    "./src/admin/Portfolio.jsx",
    "./src/admin/Partner.jsx",
    "./src/admin/Login.jsx",
    "./src/admin/Modal.jsx",
    "./src/admin/DeleteModal.jsx",

     // Add your exclusions here
     "!./src/pages/GalleryPage.jsx", 
     "!./src/pages/Home.jsx",
     "!./src/components/Navbar.jsx",
     "!./src/components/About.jsx",
     "!./src/components/Contact.jsx",
     "!./src/components/Footer.jsx",
     "!./src/components/Partner.jsx",
     "!./src/components/Portfolio.jsx",
     "!./src/components/Slider.jsx",


  ],
  theme: {
    extend: {},
  },
  plugins: [],
}