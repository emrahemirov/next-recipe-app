//Style
import { StyledSpinnerBox, Spinner } from './SpinnerBox.styled';

const SpinnerBox = () => {
  return (
    <StyledSpinnerBox direction='column' axisX='center' axisY='center'>
      <Spinner />
    </StyledSpinnerBox>
  );
};

export default SpinnerBox;
