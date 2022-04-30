import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import useTranslation from 'next-translate/useTranslation';
//Lib
import { homePageImages } from '../../../lib/homePageImages';
import { homePageTexts } from '../../../lib/homePageTexts';
//Style
import {
  StyledHomeSection,
  ImageContainer,
  TextContainer
} from './HomeSection.styled';

const HomeSection = () => {
  const { t } = useTranslation();

  for (let i = 0; i < homePageTexts.length; i++) {
    homePageTexts[i].title = t(`homePage:textTitles.${i}`);
  }

  return (
    <StyledHomeSection>
      {homePageImages.map(homePageImage => {
        return (
          <ImageContainer
            key={uuidv4()}
            gridColumn={homePageImage.gridColumn}
            gridRow={homePageImage.gridRow}
          >
            <Image
              src={`/images/${homePageImage.imageTitle}.jpg`}
              alt={homePageImage.imageTitle}
              width='960'
              height='540'
            ></Image>
          </ImageContainer>
        );
      })}
      {homePageTexts.map(homePageText => {
        return (
          <TextContainer
            direction='row'
            axisX='center'
            axisY='center'
            key={uuidv4()}
            gridColumn={homePageText.gridColumn}
            gridRow={homePageText.gridRow}
          >
            {homePageText.title}
          </TextContainer>
        );
      })}
    </StyledHomeSection>
  );
};

export default HomeSection;
