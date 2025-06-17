import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from '../redux/login/loginSlice';

const Proj4 = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className="container text-center mt-5">
      <h2>Proj4: Login Status Toggle</h2>

      <p className="fs-4">
        {isLoggedIn ? ' Welcome, User!' : ' Please log in'}
      </p>

      <button className="btn btn-primary" onClick={() => dispatch(toggleLogin())}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Proj4;
