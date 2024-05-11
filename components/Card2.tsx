import React from 'react';

const Card2 = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <section>
        <article className='card'>
          <header className='card-header'>
            <p>Sep 11th 2020</p>
            <h2>Never forget</h2>
          </header>

          <div className='card-author'>
            <a className='author-avatar' href='#'>
              <img src='avatar.png' />
            </a>
            <svg className='half-circle' viewBox='0 0 106 57'>
              <path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4'></path>
            </svg>

            <div className='author-name'>
              <div className='author-name-prefix'>Author</div>
              Jeff Delaney
            </div>
          </div>
          <div className='tags'>
            <a href='#'>html</a>
            <a href='#'>css</a>
            <a href='#'>web-dev</a>
          </div>
        </article>
      </section>
      <style jsx>{`
        .card {
          height: 350px;
          width: 400px;
          min-width: 250px;
          padding: 1.5rem;
          border-radius: 16px;
          background: #17141d;
          box-shadow: -1rem 0 3rem #000;
          display: flex;
          flex-direction: column;
          transition: 0.2s;
          margin: 0;
          scroll-snap-align: start;
          clear: both;
          position: relative;
        }

        .card:focus-within ~ .card,
        .card:hover ~ .card {
          transform: translateX(130px);
        }

        .card:hover {
          transform: translateY(-1rem);
        }

        .card:not(:first-child) {
          margin-left: -130px;
        }

        .card-header {
          margin-bottom: auto;
        }

        .card-header p {
          font-size: 14px;
          margin: 0 0 1rem;
          color: #7a7a8c;
        }

        .card-header h2 {
          font-size: 20px;
          margin: 0.25rem 0 auto;
          text-decoration: none;
          color: inherit;
          border: 0;
          display: inline-block;
          cursor: pointer;
        }

        .card-header h2:hover {
          background: linear-gradient(90deg, #ff8a00, #e52e71);
          text-shadow: none;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }

        .card-author {
          margin: 3rem 0 0;
          display: grid;
          grid-template-columns: 75px 1fr;
          align-items: center;
          position: relative;
        }

        .author-avatar {
          grid-area: auto;
          align-self: start;
          position: relative;
          box-sizing: border-box;
        }

        .author-avatar img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          filter: grayscale(100%);
          display: block;
          overflow: hidden;
          margin: 16px 10px;
        }

        .author-name {
          grid-area: auto;
          box-sizing: border-box;
        }

        .author-name-prefix {
          font-style: normal;
          font-weight: 700;
          color: #7a7a8c;
        }

        .half-circle {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 48px;
          fill: none;
          stroke: #ff8a00;
          stroke-width: 8;
          stroke-linecap: round;
          pointer-events: none;
        }

        .tags {
          margin: 1rem 0 2rem;
          padding: 0.5rem 0 1rem;
          line-height: 2;
          margin-bottom: 0;
        }

        .tags a {
          font-style: normal;
          font-weight: 700;
          font-size: 0.5rem;
          color: #7a7a8c;
          text-transform: uppercase;
          font-size: 0.66rem;
          border: 3px solid #28242f;
          border-radius: 2rem;
          padding: 0.2rem 0.85rem 0.25rem;
          position: relative;
        }

        .tags a:hover {
          background: linear-gradient(90deg, #ff8a00, #e52e71);
          text-shadow: none;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-box-decoration-break: clone;
          background-clip: text;
          border-color: white;
        }
      `}</style>
    </>
  );
};
export default Card2;
