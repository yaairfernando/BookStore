import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { props: { createBook }, state: { value } } = this;
    const input = document.getElementsByName('title')[0];
    input.value = '';
    e.preventDefault();
    const book = {
      id: Math.random(),
      title: value,
      category: 'Action',
    };
    createBook(book);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { state: { value } } = this;
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="title">
            Title:
            <input type="text" value={value} onChange={this.handleChange} name="title" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="categories">
            Categories:
            <select name="categories">
              {categories.map(c => <option onChange={e => this.onHandleSelect(e)} key={`select-${c}`}>{c}</option>)}
            </select>
          </label>

        </div>
        <button type="submit">Add Button</button>
      </form>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};


export default connect(null, { createBook })(BookForm);
