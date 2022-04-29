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
            width='100%'
            height='100%'
            objectFit='contain'
          ></Image>
        </a>
      </Link>
    </StyledFollowItem>
  );
};

export default FollowItem;
