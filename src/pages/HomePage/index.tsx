import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CreateForm from '../../components/CreateForm';
import UpdateForm from '../../components/Updateform';
import DetailForm from '../../components/DetailForm';
import TodoList from '../../components/TodoList';
import token from 'lib/token';
import { MainContainer, Container } from './style';
import { STORAGE_KEY } from 'constants/token.constant';
import { useGetTodosQuery } from 'queries/todo.query';
import { useRecoilState } from 'recoil';
import { isCreateState, isUpdateState, indexState } from 'recoil/states';
import ToolBox from 'components/ToolBox';

function HomePage() {
  const navigate = useNavigate();
  const [isCreate, setIsCreate] = useRecoilState(isCreateState);
  const [isUpdate, setIsUpdate] = useRecoilState(isUpdateState);
  const [index, setIndex] = useRecoilState(indexState);

  useEffect(() => {
    if (!token.getToken(STORAGE_KEY)) {
      navigate('/auth');
    }
  }, []);

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
            <ToolBox />
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
