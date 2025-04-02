import { UserContext } from "../context/UserContext";
import useStableState from "../hooks/useStableState";

export default function UserProvider({
    children,
}) {
    const [authData, setAuthData] = useStableState('auth', {});
    
    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    };

    const userLogoutHandler = () => {
        setAuthData({});
    };

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            {children}
        </UserContext.Provider>
    );
}
