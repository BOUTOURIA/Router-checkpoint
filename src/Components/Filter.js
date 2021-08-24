import React from 'react';

const Filter = ({ mySearch }) => {
  const serchHandler = (e) => {
    mySearch(e.target.value);
  };

  return (
    <div>
      <label className="filte-label">Filter: </label>
      <input className="filte-input" type="text" onChange={serchHandler} />
    </div>
  );
};

export default Filter;