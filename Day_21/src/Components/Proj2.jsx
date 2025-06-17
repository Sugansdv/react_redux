import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

const Proj2 = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light';
  }, [theme]);

  return (
    <div className="container text-center mt-5">
      <h2>Proj2: Toggle Theme App</h2>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button className="btn btn-primary" onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Proj2;
