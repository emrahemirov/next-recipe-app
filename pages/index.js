import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
//Component
import HomeSection from '../components/sections/home-section/HomeSection';

export default function HomePage() {
  const { t } = useTranslation();

  const pageTitle = t('homePage:pageTitle');

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <HomeSection />
    </>
  );
}
