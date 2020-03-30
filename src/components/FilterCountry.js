import React from 'react';
import Select from 'react-select';
import options from './../utils/CountryList';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: '12px'
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    maxWidth: 450,
    fontSize: '13px',
    fontWeight: 300,
    border: '1px solid rgba(0, 0, 0, 0.125)'
  }),
  container: (provided, state) => ({
    ...provided,
    display: 'inline-block',
    float: 'right',
    width: '100%',
    maxWidth: 450
  }),
}

function FilterCountry(props) {
  const { selected } = { selectedOption: null };

  const handleChange = (countryCode) => {
    props.filter(countryCode.value)
  };

  return (
    <Select
      value={selected}
      onChange={handleChange}
      options={options}
      placeholder="Filter by country..."
      styles={customStyles}
    />
  );
}

export default FilterCountry;
