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
  height: 500px;
  flex: 1;
  cursor: pointer;
  z-index: ${({ isFlipped }) => (isFlipped ? 10 : 1)};
  // Increase z-index when flipped

  &::after {
    content: '↺';
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    opacity: 0;
    transform: rotate(0deg);
    transition: all 0.3s ease;
    color: #ff8a00;
  }

  &:hover::after {
    opacity: 1;
    transform: rotate(180deg);
  }

  /* Pulse animation on hover */
  &:hover {
    box-shadow: 0 0 0 2px #ff8a00;
    animation: pulse 2s infinite;
    z-index: 5;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 138, 0, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(255, 138, 0, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 138, 0, 0);
    }
  }

  /* In mobile view, adjust z-index when flipped */
  @media (max-width: 640px) {
    z-index: ${({ isFlipped }) => (isFlipped ? 10 : 1)};
    height: 500px;
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

const FlipIndicator = styled.div<{ isFlipped: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: ${({ isFlipped }) => (isFlipped ? '#e52e71' : '#ff8a00')};
  color: white;
  font-size: 0.75rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  z-index: 2;
  min-width: 140px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Fix text orientation when flipped */
  transform-style: preserve-3d;
  backface-visibility: visible;

  /* Create two separate elements for front and back text */
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    padding: inherit;
    white-space: nowrap;
  }

  &::before {
    content: 'See README ↺';
    transform: ${({ isFlipped }) =>
      isFlipped
        ? 'translate(-50%, -50%) rotateY(180deg)'
        : 'translate(-50%, -50%) rotateY(0)'};
    opacity: ${({ isFlipped }) => (isFlipped ? 0 : 1)};
  }

  &::after {
    content: 'Back to Card';
    transform: ${({ isFlipped }) =>
      isFlipped
        ? 'translate(-50%, -50%) rotateY(0)'
        : 'translate(-50%, -50%) rotateY(180deg)'};
    opacity: ${({ isFlipped }) => (isFlipped ? 1 : 0)};
  }

  &:hover {
    opacity: 1;
  }
`;

const CardInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  transition: transform 0.8s ease, height 0.8s ease;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  height: ${({ isFlipped }) => (isFlipped ? 'auto' : '100%')};
  z-index: 1;
`;

const CardFront = styled.div`
  border-radius: 16px;
  min-height: 300px;
  padding: 1rem;
  background: #17141d;
  box-shadow: -1rem 0 3rem #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 640px) {
    margin-left: 0;
    transform: none;
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
  right: 0;
  bottom: 0;
  min-width: 300px;
  padding: 1.5rem;
  border-radius: 16px;
  background: #17141d;
  box-shadow: 1rem 0 3rem #000;
  display: flex;
  flex-direction: column;
  transform: rotateY(180deg);
  overflow: hidden;
  z-index: 1; // Match CardInner z-index

  .readme-content {
    flex: 1;
    overflow-y: auto;
    padding-right: 10px;
    padding-top: 2rem; // Add space for the FlipIndicator

    /* Customize scrollbar */
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #28242f;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #7a7a8c;
      border-radius: 4px;
    }
  }

  @media (max-width: 640px) {
    z-index: 10;
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
    margin-bottom: 1rem;
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

const ActionLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;

  a {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.2s ease;

    &.view-project {
      background: linear-gradient(90deg, #ff8a00, #e52e71);
      color: white;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(229, 46, 113, 0.3);
      }
    }

    &.view-code {
      border: 2px solid #7a7a8c;
      color: #7a7a8c;

      &:hover {
        border-color: #ff8a00;
        color: #ff8a00;
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: 640px) {
    a {
      padding: 0.4rem 0.8rem;
      font-size: 0.75rem;
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
      <FlipIndicator isFlipped={isFlipped} />
      <CardInner isFlipped={isFlipped}>
        <CardFront>
          <CardHeader>
            <p>{format(parseISO(created_at), 'MMMM dd, yyyy')}</p>
            <h2>{name.split('-').join(' ')}</h2>
            <p>{description}</p>
            <ActionLinks>
              {homepage && (
                <a
                  href={homepage}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='view-project'
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>
              )}
              <a
                href={html_url}
                target='_blank'
                rel='noopener noreferrer'
                className='view-code'
                onClick={(e) => e.stopPropagation()}
              >
                View Code
              </a>
            </ActionLinks>
          </CardHeader>
          <CardAuthor>
            <AuthorAvatar href='#'>
              <Rive
                src={RIVE_AVATAR}
                className='filter-shadow-lg absolute left-2.5 bottom-4 block h-10 w-10 overflow-hidden rounded-full bg-white '
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
          </CardHeader>
          <div className='readme-content'>
            <ReactMarkdown>{readme}</ReactMarkdown>
          </div>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default CardComponent;
