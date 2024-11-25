import React, {useState, useEffect} from "react";
import {User} from "lucide-react";
import SettingSection from "./SettingSection";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:5000/api/auth/profile", {
                    headers: {Authorization: `Bearer ${token}`},
                });
                setUser(response.data);
            } catch (err) {
                console.error("Error fetching user data:", err);
            }
        };

        fetchUser();
    }, []);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <SettingSection icon={User} title={"Profile"}>
            <div className="flex flex-col sm:flex-row items-center mb-6">
                {/* Placeholder for user image */}
                <img
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`} // Dynamic avatar
                    alt="Profile"
                    className="rounded-full w-20 h-20 object-cover mr-4"
                />

                <div>
                    <h3 className="text-lg font-semibold text-gray-100">{user.name}</h3>
                    <p className="text-gray-400">{user.email}</p>
                </div>
            </div>

            <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
                Edit Profile
            </button>
        </SettingSection>
    );
};

export default Profile;
