import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage"; // Import the LoginPage

// PrivateRoute Wrapper
const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token"); // Check for authentication token
    return token ? children : <Navigate to="/login"/>;
};

function App() {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem("token");

    // Check if the current route is the login page
    const isLoginPage = location.pathname === "/login";

    return (
        <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
            {/* Conditional BG */}
            {!isLoginPage && (
                <div className="fixed inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"/>
                    <div className="absolute inset-0 backdrop-blur-sm"/>
                </div>
            )}

            {/* Sidebar: Render only if authenticated and not on login page */}
            {isAuthenticated && !isLoginPage && <Sidebar/>}

            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage/>}/>

                {/* Private Routes */}
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <OverviewPage/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/products"
                    element={
                        <PrivateRoute>
                            <ProductsPage/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/users"
                    element={
                        <PrivateRoute>
                            <UsersPage/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/sales"
                    element={
                        <PrivateRoute>
                            <SalesPage/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/orders"
                    element={
                        <PrivateRoute>
                            <OrdersPage/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/analytics"
                    element={
                        <PrivateRoute>
                            <AnalyticsPage/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <PrivateRoute>
                            <SettingsPage/>
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
