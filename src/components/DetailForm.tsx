const DetailForm = ({ title = "", content = "" }) => {
  return (
    <div className="detail-section">
      <h1>{title}</h1>

      <p>{content}</p>
    </div>
  );
};

export default DetailForm;
