import AdminLoginForm from "../../components/Forms/AdminLoginForm";
import { useCookies } from "react-cookie";
import {useNavigate} from 'react-router'
import axios from "axios";
const AdminLogin = () => {
  // const navigate = useNavigate();
 
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-800">
      <div className="p-4 w-[43em] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-9 dark:bg-gray-800 dark:border-gray-700">
        
        <AdminLoginForm  />
      </div>
    </div>
  );
};
export default AdminLogin;
