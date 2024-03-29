import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as TodoActions from '../store/actions/todo';

const AddTodo = ({ addTodo }) => {
  let input;

  return (
    <div className="AddTodo">
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = '';
        } }
      >
        <input ref={ (node) => { input = node; } } />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(TodoActions.addTodo(text)) });

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddTodo);
