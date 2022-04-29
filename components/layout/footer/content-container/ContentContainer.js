import { v4 as uuidv4 } from 'uuid';
//Lib
import { footerContents } from '../../../../lib/footerContents';
//Style
import { StyledContentContainer, Text } from './ContentContainer.styled';

const ContentContainer = () => {
  return (
    <StyledContentContainer>
      {footerContents.map(footerContent => {
        return <Text key={uuidv4()}>{footerContent}</Text>;
      })}
    </StyledContentContainer>
  );
};

export default ContentContainer;
