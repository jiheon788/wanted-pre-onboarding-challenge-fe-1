const DetailForm = ({
  title = "",
  content = ""
}) => {
  return (
    <>
    <div>
      <h1 className="title">{title}</h1>
      <p className="content">{content}</p>
    </div>
    </>
  )
}

export default DetailForm;