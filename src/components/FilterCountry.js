import React, { Component } from 'react';
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

class FilterCountry extends Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.filter(selectedOption.value)
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Filter by country..."
        styles={customStyles}
      />
    );
  }
}

export default FilterCountry;
