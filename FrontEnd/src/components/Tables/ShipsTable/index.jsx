import { useState } from "react";
import Modal from "../../Modals";
import ConfirmDeleteShip from "../../Modals/ConfirmDeleteShip";
import EditShip from "../../Modals/EditShip";
import { FetchData } from "../../../Hooks/query";

const UrbanCenterTable = () => {
  const [open, setIsOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [center, setCenterId] = useState();

  // const { query } = FetchData("urbanCenter");

  return (
    <div>
      <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-md sm:rounded-lg">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  ship Name
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  capacity
                </th>
                <th scope="col" className="relative py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {query &&
                query.data?.map((center, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {center.ship}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {center.capacity}
                    </td>
                 
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <div className="space-x-3">
                        <button
                          type="button"
                          onClick={() => {
                            setIsOpen(!open);
                            setCenterId(center._id);
                          }}
                          className=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800"
                        >
                          delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))} */}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  ship
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  24432
                </td>

                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <div className="space-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(!open);
                        setCenterId("fdsf");
                      }}
                      className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setOpenDelete(!openDelete);
                       
                      }}
                      className=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800"
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ConfirmDeleteShip
          isOpen={openDelete}
          title="Delete Center"
          setIsOpen={setOpenDelete}
  
        />

        <Modal
          isOpen={open}
          title="edit"
          setIsOpen={setIsOpen}
          component={
            <EditShip
            
              isOpen={open}
              setIsOpen={setIsOpen}
            />
          }
        />
      </div>
    </div>
  );
};
export default UrbanCenterTable;
