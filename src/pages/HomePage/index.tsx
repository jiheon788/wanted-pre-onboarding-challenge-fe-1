import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreateForm from '../../components/CreateForm';
import UpdateForm from '../../components/Updateform';
import DetailForm from '../../components/DetailForm';
import TodoList from '../../components/TodoList';
import { getTodos, deleteTodo } from '../../lib/apis/todos';
import token from 'lib/token';
import { MainContainer, Container, ToolBox, Icon } from './style';
import { ITodo } from 'types/todo.type';
import { useQuery } from 'react-query';

function HomePage() {
  const navigate = useNavigate();
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!token.getToken('token')) {
      navigate('/auth');
    } else {
      loadTodos();
    }
  }, []);

  const loadTodos = () => {
    getTodos(token.getToken('token')).then((response) => {
      setTodos(response.data.data.reverse());
    });
  };

  const onClickAddBtn = () => {
    setIsCreate(!isCreate);
  };

  const onClickUpdateBtn = () => {
    setIsUpdate(!isUpdate);
  };

  const onClickDeleteBtn = () => {
    deleteTodo(token.getToken('token'), todos[index].id).then((_) => {
      loadTodos();
      setIndex(0);
    });
  };

  interface IResponse {
    status: any;
    data: any;
    error: any;
  }

  const { status, data, error }: IResponse = useQuery('todos', () =>
    getTodos(token.getToken('token')),
  );

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {token.getToken('token') ? (
        <MainContainer>
          <Container>
            {isCreate ? (
              <CreateForm
                setIsCreate={setIsCreate}
                loadTodos={loadTodos}
                setIndex={setIndex}
              />
            ) : (
              <>
                {isUpdate ? (
                  <UpdateForm
                    todos={todos}
                    setTodos={setTodos}
                    index={index}
                    setIsUpdate={setIsUpdate}
                  />
                ) : (
                  <>
                    {todos.length > 0 ? (
                      <DetailForm
                        title={todos[index].title}
                        content={todos[index].content}
                      />
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </>
            )}
            <TodoList todos={data.data.data.reverse()} setIndex={setIndex} />
          </Container>

          <ToolBox className="tool-box">
            {isCreate ? (
              <Icon
                className="material-symbols-outlined"
                onClick={() => {
                  setIsCreate(false);
                }}
              >
                close
              </Icon>
            ) : (
              <Icon
                className="material-symbols-outlined"
                onClick={() => {
                  onClickAddBtn();
                }}
              >
                add
              </Icon>
            )}

            {isUpdate ? (
              <Icon
                className="material-symbols-outlined"
                onClick={() => {
                  setIsUpdate(false);
                }}
              >
                close
              </Icon>
            ) : (
              <Icon
                className="material-symbols-outlined"
                onClick={() => {
                  onClickUpdateBtn();
                }}
              >
                edit
              </Icon>
            )}

            <Icon
              onClick={() => {
                onClickDeleteBtn();
              }}
              className="material-symbols-outlined"
            >
              delete
            </Icon>

            <Icon
              onClick={() => {
                token.removeToken('token');
                window.location.reload();
              }}
              className="material-symbols-outlined"
            >
              logout
            </Icon>
          </ToolBox>
        </MainContainer>
      ) : (
        <></>
      )}
    </>
  );
}

export default HomePage;
