import { DetailContainer, Title } from './style';

interface IDetailFormProps {
  title: string;
  content: string;
}

const DetailForm = ({ title = 's', content = '' }: IDetailFormProps) => {
  return (
    <DetailContainer>
      <Title>{title}</Title>
      <p>{content}</p>
      dd
    </DetailContainer>
  );
};

export default DetailForm;
