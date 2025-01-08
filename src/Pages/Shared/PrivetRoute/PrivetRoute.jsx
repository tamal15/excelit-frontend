import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import useFirebase from '../../Hooks/useFirebase';

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useFirebase();

  if (isLoading) {
    return (
      <div className="flex justify-center w-full">
        {/* Add spinner or loading indicator here */}
        <p>Loading...</p>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

// Props validation
PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivetRoute;
