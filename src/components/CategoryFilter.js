import React from 'react'
import { connect } from 'react-redux'
import { categoryFilter } from '../actions'

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = (props) => {

  const onHandleChange = (e) => {
    console.log(e.target.value);
    props.categoryFilter(e.target.value);
  }


  return (
    <select name="categories" onChange={(e) => onHandleChange(e)} >
      {categories.map(c => <option key={`select-${c}`} value={c}>{c}</option>)}
    </select>
  )
};

export default connect(null, { categoryFilter })(CategoryFilter);