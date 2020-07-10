import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Jonas Adam</strong>
            <span>@adam_jonas</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Em que ano eu estou?</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              20
            </Status>
            <Status>
              <RetweetIcon />
              20
            </Status>
            <Status>
              <LikeIcon />
              99
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
