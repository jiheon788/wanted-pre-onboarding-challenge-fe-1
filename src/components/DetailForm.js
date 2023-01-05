const DetailForm = ({
  title = "",
  content = ""
}) => {
  return (
    <div className="auth-section">
      <input
        type="text"
        id="title"
        name="title"
        placeholder="title"
        value={title}
        className="w-100"
        disabled
      /> 
      <textarea
        type="text"
        placeholder="content"
        name="content"
        id="content"
        value={content}
        className="w-100"
        disabled
      />
    </div>
  )
}

export default DetailForm;