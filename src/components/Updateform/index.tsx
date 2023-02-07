import token from 'lib/token';
import { UpdateContainer, UpdateInput, UpdateTextArea } from './style';
import PrimaryCallbackButton from 'components/common/PrimaryCallbackButton/intex';
import { queryClient } from 'lib/queryClient';
import { useState } from 'react';
import { queryKeys } from 'constants/queries.constant';
import { STORAGE_KEY } from 'constants/token.constant';
import { useUpdateTodosMutation } from 'queries/todo.query';

interface IUpdateFormProps {
  id: string;
  title: string;
  content: string;
  setIsUpdate: (isUpdate: boolean) => void;
}

const UpdateForm = ({ id, title, content, setIsUpdate }: IUpdateFormProps) => {
  const [todo, setTodo] = useState({ title, content });

  const onChangeTodo = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value,
    });
  };

  const updateTodosMutation = useUpdateTodosMutation();

  const onClickUpdateBtn = () => {
    const accessToken = token.getToken(STORAGE_KEY);
    const title = todo.title;
    const content = todo.content;

    updateTodosMutation.mutate(
      {
        accessToken,
        title,
        content,
        id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [queryKeys.TODOS_DATA] });
          setIsUpdate(false);
        },
      },
    );
  };

  return (
    <UpdateContainer>
      <UpdateInput
        id="title"
        name="title"
        type="title"
        value={todo.title}
        onChange={onChangeTodo}
      />
      <UpdateTextArea
        id="content"
        name="content"
        value={todo.content}
        onChange={onChangeTodo}
      />

      <PrimaryCallbackButton title="수정하기" handleEvent={onClickUpdateBtn} />
    </UpdateContainer>
  );
};

export default UpdateForm;
