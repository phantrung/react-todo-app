import React from "react";
import ListTodo from "./ListTodo";
import ListTodoProvider from "./ListTodoProvider";
// import PropTypes from 'prop-types'

const TodoApp = (props) => {
  return (
    <ListTodoProvider>
      <ListTodo />
    </ListTodoProvider>
  );
};

//TodoApp.defaultProps = {}

//TodoApp.propTypes = {}

export default React.memo(TodoApp);
