import { useState } from "react";
//Todo.jsxからtaskList、setTaskListの値を受け取る
export const InputForm = ({ taskList, setTaskList }) => {
  //useState()useState()でstate変数→inputText, setInputTextを空文字に定義
  const [inputText, setInputText] = useState("");

  const handleSumit = (e) => {
    //preventDefault()によって、フォームの既定の動作であるページのリロードがキャンセルされる
    e.preventDefault();
    //タスクを追加する
    //setTaskListを使い情報を更新する
    //taskListに対してid,text,completedの情報を追加する
    //formで入力されたテキストがinputTextされ、inputTextをtaskListに格納する
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false,
      },
    ]);
    //setInputText("")にする事でformで文字入力が終わった後にリセットするよう命令
    setInputText("");
  };

  const handleChenge = (e) => {
    //e.target.valueでイベントが発生している要素と、その内容の情報を取得している
    setInputText(e.target.value);
  };
  return (
    <div>
      {/* formを送信した時にhandleSumitが発火 */}
      <form onSubmit={handleSumit}>
        <input type="text" onChange={handleChenge} value={inputText} />
        <button>
          <i></i>
        </button>
      </form>
    </div>
  );
};

export default InputForm;
