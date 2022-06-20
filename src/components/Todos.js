import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllTodos } from "../services/actions/todosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h2>Todos App</h2>
      {isLoading && <h3>Loading......</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id}>
                <h1>Todo Number : {todo.userId}</h1>
                <h4>Title : {todo.title}</h4>
                <h4>{todo.id}</h4>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
