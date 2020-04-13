import React from 'react';
import { Post } from '../Post/post';
import { useLocation } from 'react-router-dom';
import { getSubReddits } from '../APIS/apis';
import { useSubRedditHook } from '../APIS/datahook';

export const Posts = () => {
  let { pathname } = useLocation();
  pathname = pathname.substring(1, pathname.length - 1);
  const { isLoading, data } = useSubRedditHook(getSubReddits, 10, pathname);
  const { children: list } = data;
  return (
    <>
      {!isLoading &&
        list &&
        list.map((post, i) => {
          return <Post key={i} post={post}></Post>;
        })}
    </>
  );
};
