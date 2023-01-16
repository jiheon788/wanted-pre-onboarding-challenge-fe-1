import { QueryCache, QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  // 쿼리에 대해 성공, 실패 전처리
  queryCache: new QueryCache({
    onError: (error: any, query: any) => {
      console.log(error, query);
      if (query.state.data !== undefined) {
        alert(`에러!!: ${error.message}`);
      }
    },
    onSuccess: (data) => {
      console.log(data);
    },
  }),
});
