import { updateTodo } from "../lib/apis/todos";
const UpdateForm = ({
  todos,
  setTodos,
  index,
  setIsUpdate
}) => {

  const onChangeFormData = (name, index) => (event) => {
    let newArr = todos.map((item, i) => {
      if (index == i) {
        return { ...item, [name]: event.target.value };
      } else {
        return item;
      }
    });
    setTodos(newArr);
  };

  const onClickSubmitBtn = () => {
    updateTodo(
      localStorage.getItem('token'),
      todos[index].title,
      todos[index].content,
      todos[index].id,
    );

    setIsUpdate(false);
  }
  

  return (
    <form className="auth-section">
      <input
        id="title"
        name="title"
        type="title"
        value={todos[index].title}
        onChange={onChangeFormData("title", index)}
        className=" w-100"
      />

      <textarea
        id="content"
        name="content"
        type="content"
        value={todos[index].content}
        onChange={onChangeFormData("content", index)}
        className=" w-100"
      />

      <button 
        type="button" 
        onClick={()=>{
          onClickSubmitBtn();
        }}
        className="primary-btn w-100"
      >
        수정하기
      </button>
    </form>
  )
}

export default UpdateForm;