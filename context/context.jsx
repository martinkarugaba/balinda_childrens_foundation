import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { latestCauses } from '../src/data/latest_causes';
import reducer from './reducer';

const defaultState = {
  latestCauses: latestCauses,
};

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleClick = (buttonName) => {
    dispatch({ type: 'HANDLE_CLICK', payload: buttonName });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;