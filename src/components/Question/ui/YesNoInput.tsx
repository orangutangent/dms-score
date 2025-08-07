import React from 'react';
import Radio from '../../ui/Radio';

interface YesNoInputProps {
  selectedValue: 'yes' | 'no' | null;
  onChange: (value: 'yes' | 'no') => void;
}

const YesNoInput: React.FC<YesNoInputProps> = ({ selectedValue, onChange }) => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <Radio 
        name="yes-no"
        label="Да"
        checked={selectedValue === 'yes'}
        onChange={() => onChange('yes')}
      />
      <Radio 
        name="yes-no"
        label="Нет"
        checked={selectedValue === 'no'}
        onChange={() => onChange('no')}
      />
    </div>
  );
};

export default YesNoInput;
