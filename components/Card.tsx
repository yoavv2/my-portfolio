import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import Rive from '@rive-app/react-canvas';

interface CardProps {
  name: string;
  html_url: string;
  description: string;
  languages: string[];
  language: string;
  created_at: string;
  homepage?: string; // Optional
  setRepoName: (repoName: string) => void;
}
// responsiveness 

const RIVE_AVATAR = '/rive/avatar1.riv';

const Card = styled.article`
  width: 90%;
  max-width: 800px;
  min-width: 300px;
  padding: 1.5rem;
  border-radius: 16px;
  background: #17141d;
  box-shadow: -1rem 0 3rem #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensure content fills the space */
  transition: 0.3s;
  margin: 0 0 20px 0;
  position: relative;
  z-index: 1;
  min-height: 500px; /* Set a minimum height to ensure consistency */

  /* Make all cards stretch to the same height */
  flex: 1;

  &:hover {
    transform: translateY(-1rem);
    z-index: 5;
  }

  @media (min-width: 640px) {
    margin-left: -130px;

    &:hover ~ article {
      transform: translateX(130px);
    }
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

  @media (max-width: 640px) {
    h2 {
      font-size: 18px;
    }
  }
`;
const CardAuthor = styled.div`
  margin: 3rem 0 0;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  position: relative;

  @media (max-width: 640px) {
    grid-template-columns: 60px 1fr;
    margin-top: 1.5rem;
  }
`;
const AuthorAvatar = styled.a`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    filter: grayscale(100%);
    display: block;
    margin: 16px 10px;

    @media (max-width: 640px) {
      width: 35px;
      height: 35px;
    }
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
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 100%;
  overflow: hidden;

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

    @media (max-width: 640px) {
      font-size: 0.6rem;
      padding: 0.2rem 0.75rem;
    }
  }
`;
const CardComponent: React.FC<CardProps> = ({
  name,
  html_url,
  description,
  languages = [], // Default value as empty array if undefined
  created_at,
  setRepoName,
  homepage,
}) => {
  return (
    <Card onClick={() => setRepoName(name)}>
      <CardHeader>
        <p>{format(parseISO(created_at), 'MMMM dd, yyyy')}</p>
        <h2>{name.split('-').join(' ')}</h2>
        <p>{description}</p>
        {homepage && (
          <a href={homepage} target='_blank' rel='noopener noreferrer'>
            VIEW PROJECT
          </a>
        )}
        <a href={html_url} target='_blank' rel='noopener noreferrer'>
          VIEW CODE
        </a>
      </CardHeader>
      <CardAuthor>
        <AuthorAvatar href='#'>
          <Rive
            src={RIVE_AVATAR}
            className='filter-shadow-lg absolute block w-10 h-10 overflow-hidden bg-white rounded-full left-2.5 bottom-4 '
          />
        </AuthorAvatar>
        <HalfCircle viewBox='0 0 106 57'>
          <path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4' />
        </HalfCircle>
        <AuthorName>
          <div className='author-name-prefix'>Author</div>
          Yoav Hevroni
        </AuthorName>
      </CardAuthor>
      <Tags>
        {Object.keys(languages).map((lang, index) => (
          <a key={index} href='#'>
            {lang}
          </a>
        ))}
      </Tags>
    </Card>
  );
};

export default CardComponent;
