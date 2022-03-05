import React, { useState } from 'react';
import styled from 'styled-components';

const DropDownContainer = styled.div`
  width: 20em;
  margin: 0 auto;
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DropDownHeader = styled.div`

  padding: 0.5em;
  margin-bottom:1em
  color: black;
  font-weight: 500;
  font-size: 1.3rem;
  width: 10.5em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: groove 6px #3faffa;
  border-radius: 1em;
`;

const DropDownListContainer = styled.div``;

const DropDownList = styled.ul`
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
const ListItem = styled.li`
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
interface DropDownProps {
  options: string[];
  onChange: (value: string) => void;
  selectedOption?: SelectedOption;
  placeholder?: string;
}
interface SelectedOption {
  name: string;
  color: string;
}

function DropDown({
  array = [
    { name: 'Apple', color: 'red' },
    { name: 'Orange', color: 'orange' },
    { name: 'banana', color: 'yellow' },
    { name: 'Mango', color: 'green' },
  ],
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggling = (): void => setIsOpen(!isOpen);
  const [selectedOption, setSelectedOption] = useState({
    name: '',
    color: 'blue',
  });

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
        // <DropDownListContainer>
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
        // </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default DropDown;
