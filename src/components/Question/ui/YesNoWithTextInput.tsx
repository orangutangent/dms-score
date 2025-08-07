import React from 'react';
import Radio from '../../ui/Radio';
import Textarea from '../../ui/Textarea';

interface YesNoWithTextInputProps {
  selectedValue: 'yes' | 'no' | null;
  details: string;
  onSelectionChange: (value: 'yes' | 'no') => void;
  onDetailsChange: (value: string) => void;
  followUpQuestion?: string;
}

const YesNoWithTextInput: React.FC<YesNoWithTextInputProps> = ({ 
  selectedValue, 
  details, 
  onSelectionChange, 
  onDetailsChange,
  followUpQuestion
}) => {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <div className="flex flex-col gap-4">
        <Radio 
          name="yes-no-text"
          label="Да"
          checked={selectedValue === 'yes'}
          onChange={() => onSelectionChange('yes')}
        />
        <Radio 
          name="yes-no-text"
          label="Нет"
          checked={selectedValue === 'no'}
          onChange={() => onSelectionChange('no')}
        />
      </div>
      {selectedValue === 'yes' && (
        <Textarea 
          placeholder={followUpQuestion || 'Объясните почему'}
          value={details}
          onChange={(e) => onDetailsChange(e.target.value)}
        />
      )}
    </div>
  );
};

export default YesNoWithTextInput;
