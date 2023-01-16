import { PrimaryButton } from './style';

interface IProps {
  title: string;
  handleEvent: any;
}

const PrimaryCallbackButton = ({ title, handleEvent }: IProps) => {
  return (
    <PrimaryButton type="button" onClick={handleEvent}>
      {title}
    </PrimaryButton>
  );
};

export default PrimaryCallbackButton;
