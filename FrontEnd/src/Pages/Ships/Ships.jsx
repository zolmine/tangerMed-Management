import { useState } from "react";
import AddShipsForm from "../../components/Forms/AddShips";
import Modal from "../../components/Modals";
import UrbanCenterTable from "../../components/Tables/ShipsTable";


const Ships = () => {
  const [open, setIsOpen] = useState(false);
  // Queries

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between">
        <div className="w-[100%]">
          <div className="flex justify-between items-center w-[98%]">
            <h1 className="text-4xl font-black  py-14">
              {" "}
              Manage Ships{" "}
            </h1>
            <button
              onClick={() => setIsOpen(!open)}
              type="button"
              className="h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Ship
            </button>
          </div>
          <UrbanCenterTable />
        </div>
        {/* <div className="w-[30] py-14">
          <StatManager
            role={"urbanCenter"}
            StatistiqueTitle={"Vaccin per region"}
          />
        </div> */}
      </div>

      <Modal
        isOpen={open}
        title={"Add Urban Center"}
        setIsOpen={setIsOpen}
        component={<AddShipsForm setIsOpen={setIsOpen} isOpen={open} />}
      />
    </div>
  );
};
export default Ships;
