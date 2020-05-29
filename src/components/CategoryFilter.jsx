import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { categoryFilter } from '../actions';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = props => {
  const onHandleChange = e => {
    props.categoryFilter(e.target.value);
  };


  return (
    <select name="categories" onChange={e => onHandleChange(e)}>
      {categories.map(c => <option key={`select-${c}`} value={c}>{c}</option>)}
    </select>
  );
};

CategoryFilter.propTypes = {
  categoryFilter: PropTypes.func.isRequired,
};

export default connect(null, { categoryFilter })(CategoryFilter);
