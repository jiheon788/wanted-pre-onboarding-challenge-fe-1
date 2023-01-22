import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreateForm from '../../components/CreateForm';
import UpdateForm from '../../components/Updateform';
import DetailForm from '../../components/DetailForm';
import TodoList from '../../components/TodoList';
import token from 'lib/token';
import { MainContainer, Container, ToolBox, Icon } from './style';
import { queryClient } from 'lib/queryClient';
import { queryKeys } from 'constants/queries.constant';
import { STORAGE_KEY } from 'constants/token.constant';
import { useDeleteTodosMutation, useGetTodosQuery } from 'queries/todo.query';

function HomePage() {
  const navigate = useNavigate();
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!token.getToken(STORAGE_KEY)) {
      navigate('/auth');
    }
  }, []);

  const onClickAddBtn = () => {
    setIsCreate(!isCreate);
  };

  const onClickUpdateBtn = () => {
    setIsUpdate(!isUpdate);
  };

  const deleteTodoMutation = useDeleteTodosMutation();

  const onClickDeleteBtn = () => {
    const accessToken = token.getToken(STORAGE_KEY);
    const id = data[index].id;
    deleteTodoMutation.mutate(
      { accessToken, id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [queryKeys.TODOS_DATA] });
          setIndex(0);
        },
      },
    );
  };

  const { data, isSuccess } = useGetTodosQuery();

  if (isSuccess) {
    return (
      <>
        {token.getToken(STORAGE_KEY) ? (
          <MainContainer>
            <Container>
              {isCreate ? (
                <CreateForm setIsCreate={setIsCreate} setIndex={setIndex} />
              ) : (
                <>
                  {isUpdate ? (
                    <UpdateForm
                      id={data[index].id}
                      title={data[index].title}
                      content={data[index].content}
                      setIsUpdate={setIsUpdate}
                    />
                  ) : (
                    <DetailForm
                      title={data[index].title}
                      content={data[index].content}
                    />
                  )}
                </>
              )}

              <TodoList data={data} setIndex={setIndex} />
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
                  token.removeToken(STORAGE_KEY);
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

  return <h1>Loading..</h1>;
}

export default HomePage;
