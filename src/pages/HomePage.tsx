import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreateForm from '../components/CreateForm';
import UpdateForm from '../components/Updateform';
import DetailForm from '../components/DetailForm';
import TodoList from '../components/TodoList';
import { getTodos, deleteTodo } from '../lib/apis/todos';
import token from 'lib/token';

export type ITodo = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

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

  return (
    <>
      {token.getToken('token') ? (
        <div className="main-separator">
          <div className="container">
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
            <TodoList todos={todos} setIndex={setIndex} />
          </div>

          <div className="tool-box">
            {isCreate ? (
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  setIsCreate(false);
                }}
              >
                close
              </span>
            ) : (
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  onClickAddBtn();
                }}
              >
                add
              </span>
            )}

            {isUpdate ? (
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  setIsUpdate(false);
                }}
              >
                close
              </span>
            ) : (
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  onClickUpdateBtn();
                }}
              >
                edit
              </span>
            )}

            <span
              onClick={() => {
                onClickDeleteBtn();
              }}
              className="material-symbols-outlined"
            >
              delete
            </span>

            <span
              onClick={() => {
                token.removeToken('token');
                window.location.reload();
              }}
              className="material-symbols-outlined"
            >
              logout
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default HomePage;
