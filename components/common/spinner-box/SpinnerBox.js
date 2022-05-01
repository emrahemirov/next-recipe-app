import useTranslation from 'next-translate/useTranslation';
//Style
import { StyledSpinnerBox, Spinner, Text } from './SpinnerBox.styled';

const SpinnerBox = () => {
  const { t } = useTranslation();

  return (
    <StyledSpinnerBox direction='column' axisX='center' axisY='center'>
      <Spinner />
      <Text>{t('spinner:text')}</Text>
    </StyledSpinnerBox>
  );
};

export default SpinnerBox;
