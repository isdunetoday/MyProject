import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// Sadece bileşenleri dışa aktarmak için ESLint kuralını devre dışı bırak.
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};
