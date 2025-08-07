import React from 'react';
import Textarea from '../../ui/Textarea';

interface FinalThoughtsInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const FinalThoughtsInput: React.FC<FinalThoughtsInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="mt-6">
      <Textarea 
        placeholder={placeholder || 'Введите свои пожелания'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default FinalThoughtsInput;
