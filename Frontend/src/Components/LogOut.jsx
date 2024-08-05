import { useAuth } from "../context/AuthProvider";

const LogOut = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        try {
            logout();
            alert("Logout Successfully");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <button 
                className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default LogOut;
