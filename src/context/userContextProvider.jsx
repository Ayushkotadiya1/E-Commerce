// userContext.js
import{ useState } from 'react';
import UserContext from './useContext';

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantities, setQuantities] = useState({});

    return (
        <UserContext.Provider value={{ cart, setCart, quantities, setQuantities }}>
            {children}
        </UserContext.Provider>
    );
};
