import React from "react";

const DeleteModal = ({ entity, handleDelete, handleCancel }) => {
  return (
    <>
      <main className="text-gray-900 overflow-hidden absolute top-0 bottom-0 right-0 left-0">
        <div className="relative px-4 h-full md:flex md:items-center md:justify-center">
          <div className="w-full h-full absolute z-10 " />
          <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
            <div className="md:flex items-center">
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p className="font-bold">Delete {entity}</p>
                
              </div>
            </div>
            <div className="text-center md:text-right mt-4 md:flex md:justify-end">
              <button
                onClick={handleDelete}
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
              >
                Delete
              </button>
              <button
                onClick={handleCancel}
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
    md:mt-0 md:order-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DeleteModal;
