export interface createTodoParam {
  accessToken: any;
  title: string;
  content: string;
}

export interface getTodoParam {
  accessToken: any;
  id: string;
}

export interface updateTodoParam {
  accessToken: any;
  title: string;
  content: string;
  id: string;
}
