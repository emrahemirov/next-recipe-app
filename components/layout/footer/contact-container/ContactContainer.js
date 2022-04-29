//Style
import {
  StyledContactContainer,
  Header,
  Text
} from './ContactContainer.styled';

const ContactContainer = ({ children }) => {
  return (
    <StyledContactContainer>
      <Header>{children}</Header>
      <Text>example@email.com</Text>
      <Text>1234 567 89 01</Text>
    </StyledContactContainer>
  );
};

export default ContactContainer;
