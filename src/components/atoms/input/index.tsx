import React, { useState } from 'react';
import './style.scss';
import classnames from 'classnames';

type InputProps = {
  placeholder: string;
  type?: 'text' | 'password';
  isError?: boolean;
};

const Input: React.FC<InputProps> = ({ type, placeholder, isError }) => {
  const [ON, setON] = useState(false);
  const isON = (value: string): void => (value === '' ? setON(false) : setON(true));

  return (
    <div className={classnames({ input__wrapper: isError })}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(event) => isON(event.target.value)}
        className={classnames('input', { _err: isError }, { _isOn: ON })}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  isError: false,
};

export default Input;
