import React, { useContext, useEffect, useState } from "react";
// import PropTypes from 'prop-types'
import axios from "axios";
import { API_TODO_APP } from "../../../configs/api";
const TodoAppContext = React.createContext();

export const useTodoAppContext = () => {
  return useContext(TodoAppContext);
};

const ListTodoProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get(API_TODO_APP.tasks).then((res) => {
      setTasks(res.data);
    });
  }, []);

  const data = {
    tasks,
    ...props,
  };
  return (
    <TodoAppContext.Provider value={data}>
      {props.children}
    </TodoAppContext.Provider>
  );
};

//ListTodoProvider.defaultProps = {}

//ListTodoProvider.propTypes = {}

export default React.memo(ListTodoProvider);
