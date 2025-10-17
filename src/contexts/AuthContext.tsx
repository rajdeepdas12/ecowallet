import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type UserType = "public" | "ngo" | "company" | null;

interface User {
  email: string;
  type: UserType;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, type: UserType) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("ecowallet_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password: string, type: UserType) => {
    const newUser = {
      email,
      type: type!,
      name: email.split("@")[0],
    };
    setUser(newUser);
    localStorage.setItem("ecowallet_user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ecowallet_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
