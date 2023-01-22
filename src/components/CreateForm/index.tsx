import { useState } from 'react';
import token from 'lib/token';
import { CreateContainer, CreateInput, CreateTextArea } from './style';
import PrimaryCallbackButton from 'components/common/PrimaryCallbackButton/intex';
import { queryClient } from 'lib/queryClient';
import { STORAGE_KEY } from 'constants/token.constant';
import { queryKeys } from 'constants/queries.constant';
import { useCreateTodosMutation } from 'queries/todo.query';

interface ICreateFormProps {
  setIsCreate: (isCreate: boolean) => void;
  setIndex: (index: number) => void;
}

const CreateForm = ({ setIsCreate, setIndex }: ICreateFormProps) => {
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

  const createTodoMutation = useCreateTodosMutation();

  const onClickCreateBtn = () => {
    const accessToken = token.getToken(STORAGE_KEY);
    const title = todoData.title;
    const content = todoData.content;

    createTodoMutation.mutate(
      { accessToken, title, content },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [queryKeys.TODOS_DATA] });
          setIsCreate(false);
          setIndex(0);
        },
      },
    );
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
