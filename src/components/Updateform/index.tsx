import { updateTodo } from '../../lib/apis/todos';
import token from 'lib/token';
import { UpdateContainer, UpdateInput, UpdateTextArea } from './style';
import PrimaryCallbackButton from 'components/common/PrimaryCallbackButton/intex';
import { useMutation } from 'react-query';
import { queryClient } from 'lib/queryClient';
import { useState } from 'react';
import { KEYS } from 'constants/queries.constant';
import { STORAGE_KEY } from 'constants/token.constant';

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

  const { mutate } = useMutation(updateTodo);

  const onClickUpdateBtn = () => {
    const accessToken = token.getToken(STORAGE_KEY);
    const title = todo.title;
    const content = todo.content;

    mutate(
      { accessToken, title, content, id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [KEYS.GET_TODOS] });
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
