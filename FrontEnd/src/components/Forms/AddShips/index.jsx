import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import { MutateData } from "../../../Hooks/query";

const Ship = Yup.object().shape({
  shipName: Yup.string().min(2, "Too Short!").required("Required"),
  capacity: Yup.number().required("Required"),
});

const AddShipsForm = ({ setIsOpen, isOpen }) => {
  const { addMutation } = MutateData("ships", setIsOpen, isOpen);
  return (
    <Formik
      initialValues={{
        shipName: "",
        capacity: ""
      
      }}
      validationSchema={Ship}
      onSubmit={(values) => {
        // addMutation.mutate(values, {
        //   onSuccess: () => {
        //     setIsOpen(!isOpen);
        //   },
        // });
        console.log(values);
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div className="mt-4">
            <label
              htmlFor="shipName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              shipName
            </label>
            <Field
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="shipName"
            />
            {errors.shipName && touched.shipName ? (
              <div className="text-red-500 font-semibold dark:text-red-400">
                {errors.shipName}
              </div>
            ) : null}
          </div>
          <div className="mt-4">
            <label
              htmlFor="capacity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Capacity
            </label>
            <Field
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="capacity"
            />
            {errors.capacity && touched.capacity ? (
              <div className="text-red-500 font-semibold dark:text-red-400">
                {errors.capacity}
              </div>
            ) : null}
          </div>
          <div className="mt-8 flex justify-between">
            <button
              type="submit"
              className="w-[12em] text-green-900 bg-white border border-green-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-gray-700 dark:focus:ring-green-800"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="w-[12em] text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default AddShipsForm;
