import { useState } from 'react';
import { createTodo } from '../lib/apis/todos';
import token from 'lib/token';

interface ICreateFormProps {
  setIsCreate: (isCreate: boolean) => void;
  loadTodos: () => void;
  setIndex: (index: number) => void;
}

function CreateForm({ setIsCreate, loadTodos, setIndex }: ICreateFormProps) {
  const [todoData, setTodoData] = useState({
    title: '',

    content: '',
  });

  const onChangeTodoData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTodoData({
      ...todoData,
      [event.target.name]: event.target.value,
    });
  };

  const onClickCreateBtn = () => {
    createTodo(token.getToken('token'), todoData.title, todoData.content);
    loadTodos();
    setIndex(0);
    setIsCreate(false);
  };
  return (
    <form className="auth-section">
      <input
        id="title"
        name="title"
        type="title"
        placeholder="제목을 입력하세요."
        value={todoData.title}
        onChange={onChangeTodoData}
        className=" w-100"
      />
      <textarea
        id="content"
        name="content"
        placeholder="본문을 입력하세요."
        value={todoData.content}
        onChange={onChangeTodoData}
        className=" w-100"
      />
      <button
        type="button"
        onClick={() => {
          onClickCreateBtn();
        }}
        className="primary-btn w-100"
      >
        작성하기
      </button>
    </form>
  );
}

export default CreateForm;
