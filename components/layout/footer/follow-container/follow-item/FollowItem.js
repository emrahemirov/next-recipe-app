import Image from 'next/image';
import Link from 'next/link';
//Style
import { StyledFollowItem } from './FollowItem.styled';

const FollowItem = ({ svgTitle, path }) => {
  return (
    <StyledFollowItem>
      <Link href={path} passHref>
        <a target='_blank'>
          <Image
            src={`/icons/${svgTitle}.svg`}
            alt='social media logo'
            width='30'
            height='30'
            objectFit='contain'
          ></Image>
        </a>
      </Link>
    </StyledFollowItem>
  );
};

export default FollowItem;
