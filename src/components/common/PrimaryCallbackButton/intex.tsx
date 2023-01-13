import { PrimaryButton } from './style';

interface IProps {
  title: string;
  callback: any;
}

const PrimaryCallbackButton = ({ title, callback }: IProps) => {
  return (
    <PrimaryButton type="button" onClick={callback}>
      {title}
    </PrimaryButton>
  );
};

export default PrimaryCallbackButton;
