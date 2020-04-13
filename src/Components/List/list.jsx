import React from 'react';
import moment from 'moment';
import { useGetHook } from '../APIS/datahook';
import { getPopularPosts } from '../APIS/apis';

import { formatNumbers } from '../../Utils/helpers';
import {
  Title,
  Content,
  Group,
  TimeStamp,
  PostPannel,
  Description,
  Meta,
} from '../Post/post.styles';

export const List = ({ tab }) => {
  const { isLoading, data } = useGetHook(getPopularPosts, tab);
  return (
    <>
      {!isLoading &&
        data &&
        data.children.map((item, i) => {
          return <ListItem key={i} item={item.data} />;
        })}
    </>
  );
};

export const ListItem = ({ item }) => {
  const {
    title,
    url,
    public_description: description,
    created_utc: created,
    display_name_prefixed: prefix,
    subscribers,
    user_is_subscriber: isSub,
  } = item;

  return (
    <PostPannel>
      <Group isSub={isSub}>
        {isSub && <span>Leave</span>}
        {!isSub && <span>Join</span>}
      </Group>
      <Content>
        <Title>
          <a href={url}>
            {prefix}: {title}
          </a>
        </Title>

        {description && <Description>{description}</Description>}
        {subscribers && (
          <Meta>
            <TimeStamp>
              {formatNumbers(subscribers)} subscribers , a community for
              {moment.unix(created).fromNow()}
            </TimeStamp>
          </Meta>
        )}
      </Content>
    </PostPannel>
  );
};
