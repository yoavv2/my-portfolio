import React from 'react';
import styled from 'styled-components';

const CardList = styled.section`
  display: flex;
  padding: 3rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }
  &::-webkit-scrollbar-track {
    background: linear-gradient(
      90deg,
      #201c29,
      #201c29 1px,
      #17141d 0,
      #17141d
    );
  }
`;

const Card = styled.article`
  height: 350px;
  width: 400px;
  min-width: 250px;
  padding: 1.5rem;
  border-radius: 16px;
  background: #17141d;
  box-shadow: -1rem 0 3rem #000;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  margin: 0;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-1rem);
    z-index: 5; /* Bring the card to the front on hover */
  }

  &:not(:first-child) {
    margin-left: -130px; /* Overlap the previous card */
  }

  &:hover ~ article {
    transform: translateX(
      130px
    ); /* Push the next cards away slightly when hovered */
  }
`;

const CardHeader = styled.header`
  margin-bottom: auto;
  p {
    font-size: 14px;
    margin: 0 0 1rem;
    color: #7a7a8c;
  }
  h2 {
    font-size: 20px;
    margin: 0.25rem 0 auto;
    color: inherit;
    cursor: pointer;
    &:hover {
      background: linear-gradient(90deg, #ff8a00, #e52e71);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
`;

const CardAuthor = styled.div`
  margin: 3rem 0 0;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  position: relative;
`;

const AuthorAvatar = styled.a`
  position: relative;
  box-sizing: border-box;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    filter: grayscale(100%);
    display: block;
    overflow: hidden;
    margin: 16px 10px;
  }
`;

const AuthorName = styled.div`
  .author-name-prefix {
    font-weight: 700;
    color: #7a7a8c;
  }
`;

const HalfCircle = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 48px;
  fill: none;
  stroke: #ff8a00;
  stroke-width: 8;
  stroke-linecap: round;
`;

const Tags = styled.div`
  margin: 1rem 0 2rem;
  padding: 0.5rem 0 1rem;
  line-height: 2;
  a {
    font-weight: 700;
    font-size: 0.66rem;
    color: #7a7a8c;
    text-transform: uppercase;
    border: 3px solid #28242f;
    border-radius: 2rem;
    padding: 0.2rem 0.85rem 0.25rem;
    position: relative;
    &:hover {
      background: linear-gradient(90deg, #ff8a00, #e52e71);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      border-color: white;
    }
  }
`;

const CardComponent = () => {
  return (
    // <CardList>
    <Card>
      <CardHeader>
        <p>Sep 11th 2020</p>
        <h2>Never forget</h2>
      </CardHeader>
      <CardAuthor>
        <AuthorAvatar href='#'>
          <img src='avatar.png' alt='Author Avatar' />
        </AuthorAvatar>
        <HalfCircle viewBox='0 0 106 57'>
          <path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4' />
        </HalfCircle>
        <AuthorName>
          <div className='author-name-prefix'>Author</div>
          Jeff Delaney
        </AuthorName>
      </CardAuthor>
      <Tags>
        <a href='#'>html</a>
        <a href='#'>css</a>
        <a href='#'>web-dev</a>
      </Tags>
    </Card>
  );
};

export default CardComponent;
