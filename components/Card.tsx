import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import Rive from '@rive-app/react-canvas';
import ReactMarkdown from 'react-markdown';

interface CardProps {
  name: string;
  html_url: string;
  description: string;
  languages: string[];
  created_at: string;
  homepage?: string; // Optional
  setRepoName: (repoName: string) => void;
  readme: string;
}

const RIVE_AVATAR = '/rive/avatar1.riv';

// const CardContainer = styled.article<{ isFlipped: boolean }>`
// min-width: 100%;
// padding: 1rem; /* Adjust padding for smaller screens */
// border-radius: 16px;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// margin: 0 auto 20px; /* Center and adjust margins */
// flex: 1;
// transition: 0.3s;

// @media (min-width: 640px) {
//   min-width: 400px;
//   &:not(:first-child) {
//     margin-left: -130px;
//   }

//   &:hover {
//     transform: translateY(-1rem);
//     z-index: 5;
//   }
//   &:hover ~ article {
//     transform: translateX(130px);
//   }
// }
// `;
const CardContainer = styled.article<{ isFlipped: boolean }>`
  max-width: 800px;
  min-width: 300px;
  padding: 1.5rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 20px 0;
  position: relative;
  transition: 0.3s;
  min-height: ${({ isFlipped }) => (isFlipped ? 'auto' : '500px')};
  flex: 1;

  /* In mobile view, adjust z-index when flipped */
  @media (max-width: 640px) {
    z-index: ${({ isFlipped }) => (isFlipped ? 10 : 0)};
    min-height: ${({ isFlipped }) => (isFlipped ? '700px' : '500px')};
  }

  @media (min-width: 640px) {
    min-width: 400px;
    &:not(:first-child) {
      margin-left: -130px;
    }

    &:hover {
      transform: translateY(-1rem);
      z-index: 5;
    }

    &:hover ~ article {
      transform: translateX(130px);
    }
  }
`;

const CardInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  transition: transform 0.8s ease, height 0.8s ease;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  height: ${({ isFlipped }) => (isFlipped ? 'auto' : '100%')};
`;

const CardFront = styled.div`
  border-radius: 16px;
  min-height: 300px; //Reduce height for mobile
  padding: 1rem; /* Adjust padding for mobile */
  background: #17141d;
  box-shadow: -1rem 0 3rem #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 640px) {
    margin-left: 0; /* No negative margin on mobile */
    transform: none; // Remove hover effect on mobile
  }
  @media (min-width: 640px) {
    min-height: 500px;
  }
`;

const CardBack = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 300px;
  padding: 1.5rem;
  border-radius: 16px;
  background: #17141d;
  box-shadow: 1rem 0 3rem #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotateY(180deg);

  @media (max-width: 640px) {
    /* position: relative; */
    z-index: 10; /* Make sure the back is on top when flipped */
    min-width: 100%;
    max-width: 100%;
  }

  @media (min-width: 640px) {
    min-width: 400px;
  }
`;

const CardHeader = styled.header`
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
  }
  @media (max-width: 640px) {
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
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
  languages = [],
  created_at,
  setRepoName,
  homepage,
  readme,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = () => {
    setRepoName(name);
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer onClick={handleClick} isFlipped={isFlipped}>
      <CardInner isFlipped={isFlipped}>
        <CardFront>
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
        </CardFront>
        <CardBack>
          <CardHeader>
            <h2>{name.split('-').join(' ')} README</h2>

            <ReactMarkdown>{readme}</ReactMarkdown>
          </CardHeader>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default CardComponent;
