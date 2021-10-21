import React from 'react';
import './style.scss';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ type, disabled, text, onClick }) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className="button">
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'submit',
  disabled: true,
  text: '',
};

export default Button;
