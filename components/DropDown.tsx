import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface SelectedOption {
  name: string;
  color: string;
}

interface DropDownProps {
  array?: SelectedOption[];
}

const initialOption = { name: '', color: '' };

// Helper function to convert hex to rgb
const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
    '255, 255, 255';
};

const StyledContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const StyledHeader = styled(motion.div)`
  padding: 0.8em 1.2em;
  color: white;
  font-weight: 500;
  font-size: 1.1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
`;

const StyledList = styled(motion.ul)`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  padding: 0.5rem;
  margin: 0;
  list-style: none;
  background: rgba(30, 30, 30, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
              0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 20;
  max-height: 15rem;
  overflow-y: auto;
  
  /* Styled scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

const StyledItem = styled(motion.li)<{ $color?: string }>`
  padding: 0.8em 1.2em;
  margin: 0.3em;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.4rem;
  transition: all 0.2s ease;
  background: ${props => props.$color ? `rgba(${hexToRgb(props.$color)}, 0.2)` : 'transparent'};

  &:hover {
    background: ${props => props.$color ? `rgba(${hexToRgb(props.$color)}, 0.3)` : 'rgba(255, 255, 255, 0.1)'};
    transform: translateX(4px);
  }
`;

const listVariants = {
  hidden: { 
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 }
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 }
  }
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.2
    }
  })
};

const DropDown: React.FC<DropDownProps> = ({ 
  array = [
    { name: 'Apple', color: '#ff4d4d' },
    { name: 'Orange', color: '#ff9f40' },
    { name: 'Banana', color: '#ffed4a' },
    { name: 'Mango', color: '#48bb78' },
  ]
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<SelectedOption>(initialOption);
  
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: SelectedOption) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <StyledContainer>
      <StyledHeader
        onClick={toggling}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          background: selectedOption.color 
            ? `rgba(${hexToRgb(selectedOption.color)}, 0.3)`
            : 'rgba(255, 255, 255, 0.1)'
        }}
      >
        {selectedOption.name || 'Choose'}
      </StyledHeader>

      <AnimatePresence>
        {isOpen && (
          <StyledList
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={listVariants}
          >
            {array.map((option, i) => (
              <StyledItem
                key={option.name}
                $color={option.color}
                onClick={() => onOptionClicked(option)}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                {option.name}
              </StyledItem>
            ))}
          </StyledList>
        )}
      </AnimatePresence>
    </StyledContainer>
  );
};

export default DropDown;
