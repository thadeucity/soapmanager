import React, {
  ReactElement,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import { FiAlertCircle } from 'react-icons/fi';

import { InputGroup, Container, Error } from './styles';

interface Props<T> {
  name: string;
  title: string;
  columns?: number;
  label?: string;
  multiline?: T;
}

type InputProps = JSX.IntrinsicElements['input'] & Props<false>;
type TextAreaProps = JSX.IntrinsicElements['textarea'] & Props<true>;

export default function Input({
  name,
  title,
  columns,
  label,
  multiline = false,
  ...rest
}: InputProps | TextAreaProps): ReactElement {
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!ref.current?.value);
  }, []);

  useEffect(() => {
    if (ref.current) {
      registerField({ name: fieldName, ref: ref.current, path: 'value' });
    }
  }, [ref.current, fieldName]);

  const props = {
    ...rest,
    ref,
    id: fieldName,
    name: fieldName,
    'aria-label': fieldName,
    defaultValue,
  };

  const columnSpan = columns || 14;

  return (
    <InputGroup columns={columnSpan}>
      <span>{title}</span>
      <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        {label && <label htmlFor={fieldName}>{label}</label>}

        {multiline ? (
          <textarea
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...(props as TextAreaProps)}
          />
        ) : (
          <input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...(props as InputProps)}
          />
        )}

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Container>
    </InputGroup>
  );
}
