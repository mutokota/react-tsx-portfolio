import "../CSS/todo.css";
import InputForm from "./InputForm";
import TodoList from "./TodoList";
import { useState } from "react";

export const Todo = () => {
  //useState()でstate変数→taskList, setTaskListを配列に定義
  //taskListに情報が入っていく
  //setTaskListは情報を更新する際に使用する
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      {/* taskList, setTaskListの値をInputForm、TodoListに渡す*/}
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default Todo;
