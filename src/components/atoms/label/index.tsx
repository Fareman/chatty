import React from 'react';

type LabelProps = {
  text?: string;
};

const Label: React.FC<LabelProps> = ({ text }) => {
  return <label className="label">{text}</label>;
};

Label.defaultProps = {
  text: '',
};

export default Label;
