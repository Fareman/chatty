import React from 'react';
import Label from '../../atoms/label';
import Input from '../../atoms/input';
import './style.scss';

type InputBlockProps = {
  placeholder: string;
  text: string;
  type?: 'text';
  isError?: boolean;
};

const InputBlock: React.FC<InputBlockProps> = ({ text, placeholder, type, isError }) => {
  return (
    <div className="InputBlock">
      <Label text={text} />
      <Input type={type} placeholder={placeholder} isError={isError} />
    </div>
  );
};

InputBlock.defaultProps = {
  type: 'text',
  isError: false,
};

export default InputBlock;
