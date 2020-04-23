import React from 'react';
import moment from 'moment';
import { useGetHook } from '../APIS/datahook';
import { getPopularPosts, getSearchResults } from '../APIS/apis';

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

export const List = ({ tab, searchKey }) => {
  if (searchKey) return <Search searchKey={searchKey} />;
  return <ListHome tab={tab} searchKey={searchKey} />;
};

export const Search = ({ searchKey }) => {
  const { isLoading, data } = useGetHook(getSearchResults, searchKey);
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

export const ListHome = ({ tab, searchKey }) => {
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
