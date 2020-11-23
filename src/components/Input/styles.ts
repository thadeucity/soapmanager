import styled from 'styled-components';

import Tooltip from '../Tooltip';

interface InputGroupProps {
  columns: number;
}

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const InputGroup = styled.div<InputGroupProps>`
  width: 100%;

  grid-column: span ${props => props.columns};

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.grayText};
  }
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 40px;

  border: 1px solid
    ${props => {
      if (props.isFocused) {
        return props.theme.colors.primary;
      }
      if (props.isErrored) {
        return '#c53030';
      }
      return props.theme.colors.inputBorder;
    }};
  background: ${props => props.theme.colors.input};
  border-radius: 8px;

  display: flex;
  align-items: center;

  padding: 0 8px;

  input,
  textarea {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    resize: none;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
