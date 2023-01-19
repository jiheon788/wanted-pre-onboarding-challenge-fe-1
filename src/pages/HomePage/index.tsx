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
import { useMutation, useQuery } from 'react-query';
import { queryClient } from 'lib/queryClient';

function HomePage() {
  const navigate = useNavigate();
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!token.getToken('token')) {
      navigate('/auth');
    }
  }, []);

  useEffect(() => {
    console.log(index);
  }, [index]);

  const onClickAddBtn = () => {
    setIsCreate(!isCreate);
  };

  const onClickUpdateBtn = () => {
    setIsUpdate(!isUpdate);
  };

  const { mutate } = useMutation(deleteTodo);

  const onClickDeleteBtn = () => {
    const accessToken = token.getToken('token');
    const id = data[index].id;
    mutate(
      { accessToken, id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['getTodos'] });
          setIndex(0);
        },
      },
    );
  };

  const { status, data, error }: any = useQuery({
    queryKey: ['getTodos'],
    queryFn: () =>
      getTodos(token.getToken('token')).then((response) =>
        response.data.data.reverse(),
      ),
  });

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
