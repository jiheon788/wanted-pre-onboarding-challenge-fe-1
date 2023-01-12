import { ITodo } from 'pages/HomePage';
import { updateTodo } from '../../lib/apis/todos';
import token from 'lib/token';
import {
  UpdateContainer,
  UpdateInput,
  UpdateTextArea,
  UpdateButton,
} from './style';
interface IUpdateFormProps {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
  index: number;
  setIsUpdate: (isUpdate: boolean) => void;
}

const UpdateForm = ({
  todos,
  setTodos,
  index,
  setIsUpdate,
}: IUpdateFormProps) => {
  const onChangeFormData =
    (name: string, index: number) =>
    (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      let newArr = todos.map((item: ITodo, i: number) => {
        if (index === i) {
          return { ...item, [name]: event.target.value };
        } else {
          return item;
        }
      });
      setTodos(newArr);
    };

  const onClickSubmitBtn = () => {
    updateTodo(
      token.getToken('token'),
      todos[index].title,
      todos[index].content,
      todos[index].id,
    );
    setIsUpdate(false);
  };

  return (
    <UpdateContainer>
      <UpdateInput
        id="title"
        name="title"
        type="title"
        value={todos[index].title}
        onChange={onChangeFormData('title', index)}
      />
      <UpdateTextArea
        id="content"
        name="content"
        value={todos[index].content}
        onChange={onChangeFormData('content', index)}
      />
      <UpdateButton
        type="button"
        onClick={() => {
          onClickSubmitBtn();
        }}
        className="primary-btn w-100"
      >
        수정하기
      </UpdateButton>
    </UpdateContainer>
  );
};

export default UpdateForm;
