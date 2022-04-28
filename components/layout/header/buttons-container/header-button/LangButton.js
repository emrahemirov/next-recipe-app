import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import i18Config from '../../../../../i18n.json';
//Style
import { HeaderButton, ImageContainer } from './HeaderButton.styled';

const LangButton = () => {
  const router = useRouter();
  const { locales } = i18Config;
  const { lang } = useTranslation();

  return (
    <>
      {locales.map(lng => {
        if (lng === lang) return null;
        else {
          return (
            <HeaderButton
              key={lng}
              activeScale={true}
              onClick={() => {
                router.push(router.asPath, undefined, { locale: lng });
              }}
            >
              <ImageContainer direction='row' axisX='center'>
                <Image
                  src={`/icons/${lng}-flag.svg`}
                  alt='flag'
                  width='32'
                  height='32'
                />
              </ImageContainer>
            </HeaderButton>
          );
        }
      })}
    </>
  );
};

export default LangButton;
