import styled from 'styled-components';

export const Title = styled.div`
  background: #fafafa;
  border: 1px solid #ccc;
  margin: 5px 0px;
  padding: 5px;
  border-radius: 5px;
  text-align: left;
  font-size: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Image = styled.img`
  margin: 0 10px 0;
  min-width: 80px;
`;

export const TimeStamp = styled.div`
  color: #888;
  font-size: 10px;
`;

export const Author = styled.div``;

export const PostPannel = styled.div`
  display: flex;
  border: 1px solid #ccc;
  margin: 5px 10px;
  border-radius: 5px;
  padding: 6px 4px;
  width: 800px;
  align-items: center;
  background: white;
`;

export const Description = styled.div`
  background: #fafafa;
  border: 1px solid #ccc;
  margin: 5px 0px;
  padding: 5px;
  border-radius: 5px;
  text-align: left;
  font-size: 12px;
`;
export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;
export const Emotion = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: gray;
  justify-content: center;
  align-items: center;
`;
export const Group = styled.div`
  min-width: 100px;
  display: flex;
  margin: 0 8px 0 0;
  flex-direction: column;
  justify-content: initial;
  align-items: flex-end;
  & > span {
    color: white;
    border: 1px;
    font-weight: 900;
    font-size: 10px;
    margin: 6px 0 0 0;
    text-align: center;
    padding: 0px 10px;
    background: ${({ isSub }) => (!isSub ? 'green' : 'red')};
  }
`;
