import React, { useState } from 'react';
import { Headers, Button, BackButton } from '../../app.styles';
import { useHistory } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = ({ tab, setTab }) => {
  let history = useHistory();
  const [currenTab, setCurrentTab] = useState(tab);
  const handlePosts = (e) => {
    e.stopPropagation();
    const { value } = e.target;
    setCurrentTab(value);
    setTab(value);
    history.push('/');
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    <Headers>
      <BackButton onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </BackButton>
      <Button onClick={handlePosts} currenTab={currenTab} value='popular'>
        Popular
      </Button>
      <Button onClick={handlePosts} currenTab={currenTab} value='new'>
        New
      </Button>
    </Headers>
  );
};
