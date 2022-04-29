//Component
import FollowItem from './follow-item/FollowItem';
//Lib
import { followItems } from '../../../../lib/followItems';
//Style
import {
  StyledFollowContainer,
  Header,
  SocialMediaContainer
} from './FollowContainer.styled';

const FollowContainer = ({ children }) => {
  return (
    <StyledFollowContainer direction='column'>
      <Header>{children}</Header>
      <SocialMediaContainer>
        {followItems.map(followItem => {
          return (
            <FollowItem
              key={followItem.svgTitle}
              path={followItem.path}
              svgTitle={followItem.svgTitle}
            />
          );
        })}
      </SocialMediaContainer>
    </StyledFollowContainer>
  );
};

export default FollowContainer;
