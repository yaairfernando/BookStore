import React, { Component } from 'react';
import PropType from 'prop-types';
import { createBook } from '../actions'
import { connect } from 'react-redux'

const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

class BooksForm extends Component {
  state = {
    input: ''
  }

  onHandleSubmit = (e) => {
    console.log("SUBMIT")
    e.preventDefault();
    const book = {
      id: Math.random(),
      title: this.state.input,
      category: 'Action'
    }
    this.props.createBook(book);
  }

  onHandleSelect = (e) => {
    
  }

  render() {
    return (
      <form onSubmit={(e) => this.onHandleSubmit(e)}>
        <div className="form-group">
          <label>
            Title:
            <input type="text" value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
          </label>
        </div>
        <div className="form-group">
          <label>Categories:</label>
          <select>
            {categories.map((c, index) => {
              return <option onChange={(e) => this.onHandleSelect(e)} key={`select-${index}`}>{c}</option>
            })}
          </select>
        </div>
        <button>Add Button</button>
      </form>
    );
  }
}

export default connect(null, { createBook })(BooksForm);
