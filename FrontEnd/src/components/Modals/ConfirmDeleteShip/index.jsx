import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
const ConfirmDeleteShip = ({ isOpen, setIsOpen, shipId  }) => {
  // const queryClient = useQueryClient();
  // const deleteCenter = useMutation(
  //   (id) => axios.delete(`http://localhost:4000/api/urbanCenter/${id}`),
  //   {
  //     onSuccess: () => queryClient.invalidateQueries("urbanCenter"),
  //   }
  // );
  // const handleDelete = (id) => {
  //   deleteCenter.mutate(id, {
  //     onSuccess: () => {
  //       setIsOpen(!isOpen);
  //     },
  //   });
  // };
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto bg-gray-700 bg-opacity-50"
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl dark:bg-gray-700">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="p-6 pt-0 ">
                  <div className="pt-7 pb-3 font-semibold text-white text-xl">
                   Delete ship
                  </div>
                  <div className="w-1/2 h-2 bg-slate-300 rounded-md"></div>
                  <div className="p-6 pt-0 text-center">
                    <svg
                      className="mx-auto my-5 w-14 h-14 text-gray-400 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this ship ?
                    </h3>
                    <button
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
export default ConfirmDeleteShip;
