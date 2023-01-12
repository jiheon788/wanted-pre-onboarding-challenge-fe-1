import { DetailContainer, Title } from './style';

interface IDetailFormProps {
  title: string;
  content: string;
}

const DetailForm = ({ title = '', content = '' }: IDetailFormProps) => {
  return (
    <DetailContainer>
      <Title>{title}</Title>
      <p>{content}</p>
    </DetailContainer>
  );
};

export default DetailForm;
