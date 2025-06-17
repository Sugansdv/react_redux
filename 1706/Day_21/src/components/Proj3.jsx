import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

const Proj3 = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  React.useEffect(() => {
    document.body.className = ''; 
    if (mode === 'dark') {
      document.body.classList.add('bg-dark', 'text-white');
    } else {
      document.body.classList.add('bg-light', 'text-dark');
    }
  }, [mode]);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Mini Project 3: Theme Switcher</h2>
      <div className="text-center">
        <p>Current Theme: <strong>{mode.toUpperCase()}</strong></p>
        <button className="btn btn-outline-primary" onClick={() => dispatch(toggleTheme())}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Proj3;
