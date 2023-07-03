import React from 'react';

export const Filter = ({ value, changeValue }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" value={value} name="filter" onChange={changeValue} />
      </label>
    </>
  );
};
