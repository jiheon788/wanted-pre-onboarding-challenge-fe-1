import { useState } from 'react';
import { createTodo } from '../../lib/apis/todos';
import token from 'lib/token';
import {
  CreateContainer,
  CreateInput,
  CreateTextArea,
  CreateButton,
} from './style';
import PrimaryCallbackButton from 'components/common/PrimaryCallbackButton/intex';

interface ICreateFormProps {
  setIsCreate: (isCreate: boolean) => void;
  loadTodos: () => void;
  setIndex: (index: number) => void;
}

const CreateForm = ({ setIsCreate, loadTodos, setIndex }: ICreateFormProps) => {
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
    <CreateContainer>
      <CreateInput
        id="title"
        name="title"
        type="title"
        placeholder="제목을 입력하세요."
        value={todoData.title}
        onChange={onChangeTodoData}
      />
      <CreateTextArea
        id="content"
        name="content"
        placeholder="본문을 입력하세요."
        value={todoData.content}
        onChange={onChangeTodoData}
      />
      <PrimaryCallbackButton title="작성하기" handleEvent={onClickCreateBtn} />
    </CreateContainer>
  );
};

export default CreateForm;
