import axios from 'axios';

export const getHotPosts = (limit = 10) => {
  const url = `https://www.reddit.com/r/funny/hot.json?limit=${limit}`;
  return axios.get(url);
};

export const getPopularPosts = (limit = 10, tab = 'popular') => {
  const url = `https://www.reddit.com/subreddits/${tab}.json?limit=${limit}`;

  return axios.get(url);
};

export const getSubReddits = (limit = 10, path) => {
  const url = `https://www.reddit.com/${path}.json?limit=${limit}`;

  return axios.get(url);
};
