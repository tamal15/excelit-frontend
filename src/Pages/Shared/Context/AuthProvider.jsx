import { createContext } from 'react';
import PropTypes from "prop-types";
import useFirebase from '../../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const AllContext = useFirebase();

    return (
        <AuthContext.Provider value={AllContext}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
