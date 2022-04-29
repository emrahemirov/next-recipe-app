import useTranslation from 'next-translate/useTranslation';
//Component
import FollowContainer from './follow-container/FollowContainer';
import ContactContainer from './contact-container/ContactContainer';
import ContentContainer from './content-container/ContentContainer';
//Style
import { StyledFooter, LeftContainer } from './Footer.styled';

const Footer = () => {
  const { t } = useTranslation();

  const followHeader = t('footer:follow');
  const contactHeader = t('footer:contact');

  return (
    <StyledFooter direction='row' axisX='space-between' axisY='flex-start'>
      <LeftContainer direction='row' axisX='center'>
        <FollowContainer>{followHeader}</FollowContainer>
        <ContactContainer>{contactHeader}</ContactContainer>
      </LeftContainer>

      <ContentContainer />
    </StyledFooter>
  );
};

export default Footer;
