import {motion} from "framer-motion";
import {LogOut} from "lucide-react";
import {useNavigate} from "react-router-dom";

const LogoutSection = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the token from localStorage
        localStorage.removeItem("token");

        // Redirect to login page
        navigate("/login");
    };

    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
        >
            <div className="flex items-center mb-4">
                <LogOut className="text-indigo-400 mr-3" size={24}/>
                <h2 className="text-xl font-semibold text-gray-100">Logout</h2>
            </div>
            <p className="text-gray-300 mb-4">
                Click the button below to log out of your account.
            </p>
            <button
                onClick={handleLogout}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded
      transition duration-200"
            >
                Log Out
            </button>
        </motion.div>
    );
};

export default LogoutSection;
