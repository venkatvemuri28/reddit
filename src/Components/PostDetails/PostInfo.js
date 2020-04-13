import React from 'react';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { getSubReddits } from '../APIS/apis';
import fallback from '../../images/placeholder.png';
import { useSubRedditHook } from '../APIS/datahook';
import { InfoPanel, VideoPanel } from './info.stlyes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import {
  Meta,
  Image,
  Title,
  Content,
  Emotion,
  TimeStamp,
} from '../Post/post.styles';

export const PostDetails = () => {
  let { pathname } = useLocation();
  pathname = pathname.substring(1, pathname.length - 1);
  const { isLoading, data } = useSubRedditHook(getSubReddits, 1, pathname);
  const [post] = data;
  let {
    title,
    thumbnail,
    created,
    author,
    ups: likes,
    url,
    post_hint: type,
    num_comments: commentCount,
  } = !isLoading && post && post.data.children[0].data;

  if (thumbnail === 'self') thumbnail = fallback;

  return (
    <>
      <InfoPanel>
        {likes >= 0 && (
          <Emotion>
            <FontAwesomeIcon icon={faThumbsUp} />
            {likes}
          </Emotion>
        )}
        <Image src={thumbnail} width='80' height='80'></Image>
        <Content>
          <Title>
            <a href={url}>{title}</a>
          </Title>
          <Meta>
            <TimeStamp>
              Submitted
              {moment.unix(created).fromNow()}
              by:
              {author || 'unknown'}
            </TimeStamp>
          </Meta>
          <Meta>
            <b>{commentCount} comments</b>
          </Meta>
        </Content>
      </InfoPanel>
      <VideoPanel>
        {type === 'image' && <Image src={url} width='400' height='400'></Image>}
        {type === 'hosted:video' && (
          <video width='400' height='400' controls>
            <source src={url} />
          </video>
        )}
        <a href={url}>go to the link</a>
      </VideoPanel>
    </>
  );
};
