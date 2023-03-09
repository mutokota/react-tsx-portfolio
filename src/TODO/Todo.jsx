import "../CSS/todo.css";
import InputForm from "./InputForm";
import TodoList from "./TodoList";
import { useState } from "react";
import FadeInUp from "../COMPONENT/FadeInUp";

export const Todo = () => {
  //useState()でstate変数→taskList, setTaskListを配列に定義
  //taskListに情報が入っていく
  //setTaskListは情報を更新する際に使用する
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      <FadeInUp>
        {/* taskList, setTaskListの値をInputForm、TodoListに渡す*/}
        <InputForm taskList={taskList} setTaskList={setTaskList} />
        <TodoList taskList={taskList} setTaskList={setTaskList} />
      </FadeInUp>
    </div>
  );
};

export default Todo;
