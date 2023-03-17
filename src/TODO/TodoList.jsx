import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

//Todo.jsxからtaskList、setTaskListの値を受け取る
export const TodoList = ({ taskList, setTaskList }) => {
  //onClickでhandleDeleteを発火させる
  const handleDelete = (id) => {
    //タスクの削除
    //taskListにfilter()を使用し、条件式に合うものを取り出すよう命令
    //taskListから取り出した値をtaskに代入する
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleCompleted = (id) => {
    //取り消し線の追加
    setTaskList(
      //map()でtaskListから一つずつ取り出しtaskに定義する
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="todoList">
      <div className="todos">
        {/* map()でtaskListから一つずつ取り出しtaskに定義する */}
        {taskList.map((task, index) => (
          <div className={` ${task.completed ? "completed" : ""}`} key={index}>
            <div className="todotext">
              <span>{task.text}</span>
            </div>
            <div className="todoicons">
              <button>
                <i
                  className="checkbutton"
                  onClick={() => handleCompleted(task.id)}
                  
                >
                  <CheckIcon />
                </i>
                <i
                  className="deletebutton button"
                  onClick={() => handleDelete(task.id)}
                >
                  <DeleteIcon />
                </i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
