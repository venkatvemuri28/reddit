import React from 'react';
import moment from 'moment';
import fallback from '../../images/placeholder.png';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Title,
  Content,
  Image,
  TimeStamp,
  Emotion,
  PostPannel,
  Description,
  Meta,
} from './post.styles';

export const Post = ({ post }) => {
  let { data } = post;
  let {
    domain,
    permalink,
    title,
    public_description: description,
    created_utc: created,
    thumbnail,
    icon_img,
    ups: likes,
    author,
    num_comments: comments,

    subreddit_name_prefixed: subreddit,
  } = data;
  if (thumbnail === 'self') thumbnail = fallback;

  return (
    <PostPannel>
      {likes >= 0 && (
        <Emotion>
          <FontAwesomeIcon icon={faThumbsUp} />
          {likes}
        </Emotion>
      )}
      <Image src={thumbnail || icon_img} width='80' height='80'></Image>
      <Content>
        <Title>
          <a href={permalink}>{title}</a>({domain})
        </Title>
        <Meta>
          <TimeStamp>
            <b>Submitted </b>
            {moment.unix(created).fromNow()}

            <b> by: </b>
            {author || 'unknown'}
            <b> to </b>
            <a href={subreddit}> {subreddit}</a>
          </TimeStamp>
        </Meta>
        <Description>{description}</Description>
        {comments && (
          <Meta>
            <b>{comments} comments</b>
          </Meta>
        )}
      </Content>
    </PostPannel>
  );
};
