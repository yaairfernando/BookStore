import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: 'Action' };

    this.handleChange = this.handleChange.bind(this);
    this.selectHandleChange = this.selectHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { props: { createBook }, state: { title, category } } = this;
    const book = {
      id: Math.random().toString(),
      title,
      category,
    };
    createBook(book);
    this.setState({ title: '' });
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  selectHandleChange(event) {
    this.setState({ category: event.target.value });
  }

  render() {
    const { state: { title } } = this;
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="title">
            Title:
            <input type="text" value={title} onChange={this.handleChange} name="title" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="categories">
            Categories:
            <select name="categories" onChange={e => this.selectHandleChange(e)}>
              {categories.map(c => <option key={`select-${c}`} value={c}>{c}</option>)}
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
