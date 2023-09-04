import React, { useState } from "react";
import { deletePortfolio, getAllPortfolio } from "../api/Portfolio";
import { toast } from "react-hot-toast";
import Modal from "./Modal";
import Loader from "../componets/Loader";
import DeleteModal from "./DeleteModal";
import ToasterComponent from "../componets/Toaster";

const Portfolio = () => {
  const [portfolios, setPortfolios] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteSelected, setDeleteSelected] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);


  const fetchPortfolios = () => {
    setLoading(true);
    getAllPortfolio().then((res) => {
      console.log(res);
      if (res?.status === 200) {
        setPortfolios(res?.data?.portfolioData);
      } else {
        toast.error("Could not load portfolio data!", { id: 'toast'});
      }
    });
    setLoading(false);
  };
  React.useEffect(() => {
    fetchPortfolios();
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [selected, setSetselected] = useState({
    _id: null,
    title: "",
    company: "",
    location: "",
    status: "",
    image: null,
    imageUrl: "",
  });

  const toggleModal = (val) => {
    setOpenModal(val);
  };

  const handleNewPortfolio = (newPortfolio) => {
    setPortfolios(portfolios.concat(newPortfolio));
  };

  const handleUpdatedPortfolio = (existingPortfolio) => {
    setPortfolios(
      portfolios
        .filter((x) => x._id !== existingPortfolio._id)
        .concat(existingPortfolio)
    );
  };

  const handlePortfolioClick = (portfolio) => {
    setSetselected({ ...portfolio, image: null });
    console.log(selected);
    setOpenModal(true);
  };

  const handleDelete = async (portfolio) => {
    handleCancelDelete();
    setLoading(true);
    await deletePortfolio(portfolio._id).then((res) => {
      if (res?.status === 200) {
        setPortfolios(portfolios.filter(x => x._id !== res?.data?.deletedPortfolio?._id));
        toast.success(res?.data?.message, { id: 'toast'});
      } else {
        toast.error(res?.data?.messag || 'Internal Server Error!', { id: 'toast'});
      }
    })

    setLoading(false);
  }

  const handleDeleteModal = (portfolio) => {
    setDeleteModal(true);
    setDeleteSelected(portfolio);
  }
  const handleCancelDelete = () => {
    setDeleteModal(false);
    setDeleteSelected(null);
  }

  const handleNewPortfolioModal = () => {
    setSetselected({
      _id: null,
      title: "",
      company: "",
      location: "",
      status: "",
      image: null,
      imageUrl: "",
    });
    setOpenModal(true);
  };
  return (
    <>
      {loading && <Loader />}
      <ToasterComponent/>
      {deleteModal && deleteSelected !== null && <DeleteModal handleCancel={handleCancelDelete} entity={'Portfolio'} handleDelete={handleDelete} data={deleteSelected}/>}
      <div className="flex-1 px-2 sm:px-0 min-h-screen">
        <Modal
          openModal={openModal}
          toggleModal={toggleModal}
          handleNewPortfolio={handleNewPortfolio}
          handleUpdatedPortfolio={handleUpdatedPortfolio}
          selected={selected}
        />

        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-extralight text-white/50">Portfolio</h3>
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
          <div
            onClick={() => handleNewPortfolioModal()}
            className="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover"
          >
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
              Add Portfolio
            </p>
          </div>

          {portfolios.length !== 0 &&
            portfolios.map((portfolio) => (
              <div
                key={portfolio.title}
                className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover"
              >
                <img
                  className="w-20 h-20 object-cover object-center rounded-full"
                  src={portfolio.imageUrl}
                  onClick={() => handlePortfolioClick(portfolio)}
                  alt="not-loaded"
                />
                <h4 className="text-white text-xl capitalize text-center">
                  {portfolio.title}
                </h4>
                <p className="text-white/75">{portfolio.company}</p>
                <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                  {portfolio.status}
                  <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                </p>
                <p className="text-white/50 absolute bottom-2 text-sm">
                  {portfolio.location}
                </p>

                <div className="absolute top-0 right-2">
                  <button onClick={() => handleDeleteModal(portfolio)} className="inline-flex items-center px-2 py-2 bg-transparent hover:bg-red-700 hover:text-white transition duration-300 ease-in-out text-red-700 text-sm font-medium rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                    
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
