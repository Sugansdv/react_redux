import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../../redux/actions/quoteActions';

const QuoteGenerator = () => {
  const dispatch = useDispatch();
  const { quote, loading, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      
      <div className="card shadow">
        <div className="card-body text-center">
          <h2 className="mb-4">Mini Project 1: Random Quote Generator</h2>

          {loading && <div className="alert alert-info">Loading...</div>}
          {error && <div className="alert alert-danger">Error: {error}</div>}

          {quote && (
            <blockquote className="blockquote">
              <p className="mb-3 fs-4">“{quote.quote}”</p>
              <footer className="blockquote-footer text-muted">{quote.author}</footer>
            </blockquote>
          )}

          <button className="btn btn-primary mt-4" onClick={() => dispatch(fetchQuote())}>
            New Quote
          </button>
          </div>
        </div>
    </div>
  );
};

export default QuoteGenerator;
