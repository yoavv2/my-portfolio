import React from 'react';
import Styled from 'styled-components';

interface SelectedOption {
  name: string;
  color: string;
}
const initialOption = { name: '', color: '' };

const DropDownContainer = Styled.div`
  width: min(100% - rem, 70rem);
  margin-inline: auto;
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DropDownHeader = Styled.div`
  padding: 0.5em;
  margin-bottom: 1em;
  color: black;
  font-weight: 500;
  font-size: 1.3rem;
  width: 10.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: groove 6px #3faffa;
  border-radius: 1em;
  cursor: pointer;
`;

const DropDownList = Styled.ul`
  padding: 0;
  margin: 0;
  border: groove 6px #3faffa;
  border-radius: 6%;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  background-color: #fafafa;
  &:first-child {
    padding-top: 0.8em;
  }
`;
const ListItem = Styled.li`
  color: black;
  list-style: none;
  width: 10em;
  border-radius: 1em;
  margin-bottom: 0.8em;
  padding: 0.5em;
  margin: 0.5em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #3faffa;
  }
`;

const DropDown = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] =
    React.useState<SelectedOption>(initialOption);
  const toggling = () => setIsOpen(!isOpen);

  const array = [
    { name: 'Apple', color: 'red' },
    { name: 'Orange', color: 'orange' },
    { name: 'banana', color: 'yellow' },
    { name: 'Mango', color: 'green' },
  ];
  const onOptionClicked = (value: SelectedOption) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader
        onClick={toggling}
        style={{
          background: selectedOption.color ? selectedOption.color : '#fff',
        }}
      >
        {selectedOption.name || 'Choose'}
      </DropDownHeader>

      {isOpen && (
        <DropDownList>
          {array.map((option) => (
            <ListItem
              style={{ background: option.color }}
              key={option.name}
              onClick={() => onOptionClicked(option)}
            >
              {option.name}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  );
};

export default DropDown;
