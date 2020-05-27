import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.test = '';
  }

  render() {
    const { props: { book: { id, title, category }, handleRemoveBook } } = this;
    const { book } = this.props;
    return (
      <tr>
        <th>{id}</th>
        <th>{title}</th>
        <th>{category}</th>
        <th>
          <button onClick={() => handleRemoveBook(book)} type="button">Delete</button>
        </th>
      </tr>
    );
  }
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
