import { ToolBoxDiv, IconSpan } from './style';
import { useRecoilState } from 'recoil';
import { isCreateState, isUpdateState, indexState } from 'recoil/states';
import token from 'lib/token';
import { STORAGE_KEY } from 'constants/token.constant';
import { useDeleteTodosMutation, useGetTodosQuery } from 'queries/todo.query';
import { queryClient } from 'lib/queryClient';
import { queryKeys } from 'constants/queries.constant';

const ToolBox = () => {
  const [isCreate, setIsCreate] = useRecoilState(isCreateState);
  const [isUpdate, setIsUpdate] = useRecoilState(isUpdateState);
  const [index, setIndex] = useRecoilState(indexState);
  const { data } = useGetTodosQuery();
  const deleteTodoMutation = useDeleteTodosMutation();

  const onClickDeleteBtn = () => {
    const accessToken = token.getToken(STORAGE_KEY);
    const id = data[index].id;
    deleteTodoMutation.mutate(
      {
        accessToken,
        id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [queryKeys.TODOS_DATA] });
          setIndex(0);
        },
      },
    );
  };

  return (
    <ToolBoxDiv>
      {isCreate ? (
        <IconSpan
          className="material-symbols-outlined"
          onClick={() => {
            setIsCreate(false);
          }}
        >
          close
        </IconSpan>
      ) : (
        <IconSpan
          className="material-symbols-outlined"
          onClick={() => {
            setIsCreate(!isCreate);
          }}
        >
          add
        </IconSpan>
      )}

      {isUpdate ? (
        <IconSpan
          className="material-symbols-outlined"
          onClick={() => {
            setIsUpdate(false);
          }}
        >
          close
        </IconSpan>
      ) : (
        <IconSpan
          className="material-symbols-outlined"
          onClick={() => {
            setIsUpdate(!isUpdate);
          }}
        >
          edit
        </IconSpan>
      )}

      <IconSpan
        onClick={() => {
          onClickDeleteBtn();
        }}
        className="material-symbols-outlined"
      >
        delete
      </IconSpan>

      <IconSpan
        onClick={() => {
          token.removeToken(STORAGE_KEY);
          window.location.reload();
        }}
        className="material-symbols-outlined"
      >
        logout
      </IconSpan>
    </ToolBoxDiv>
  );
};

export default ToolBox;
