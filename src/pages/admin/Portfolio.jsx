import React, { useState } from "react";
import { getAllPortfolio } from "../../api/Portfolio";
import PortfolioModal from "./PortfolioModal";
import { toast } from "react-hot-toast";

const Portfolio = () => {
  const [portfolios, setPortfolios] = React.useState([]);

  const fetchPortfolios = () => {
    getAllPortfolio().then((res) => {
      console.log(res);
      if (res?.status === 200) {
        setPortfolios(res?.data?.portfolioData);
      } else {
        toast.error("Could not load portfolio data!");
      }
    });
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
    setPortfolios((portfolios.filter(x => x._id !== existingPortfolio._id)).concat(existingPortfolio));
    
  };

  const handlePortfolioClick = (portfolio) => {
    setSetselected({...portfolio, image: null});
    console.log(selected);
    setOpenModal(true);
  }
  return (
    <>
      <PortfolioModal
        openModal={openModal}
        toggleModal={toggleModal}
        handleNewPortfolio={handleNewPortfolio}
        handleUpdatedPortfolio={handleUpdatedPortfolio}
        selected={selected}
      />
      <div className="flex-1 px-2 sm:px-0">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-extralight text-white/50">Portfolio</h3>
          <div className="inline-flex items-center space-x-2">
            <a
              className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
              href="#"
            >
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
            </a>
            <a
              className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
              href="#"
            >
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
            </a>
          </div>
        </div>
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div
            onClick={() => setOpenModal(true)}
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
              <div key={portfolio.title} onClick={() => handlePortfolioClick(portfolio)} className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                <img
                  className="w-20 h-20 object-cover object-center rounded-full"
                  src={portfolio.imageUrl}
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
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
