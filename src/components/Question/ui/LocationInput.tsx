import React from 'react';
import Select from '../../ui/Select';
import Input from '../../ui/Input';
import countries from '../../../countries.json';

interface LocationInputProps {
  country: string;
  region: string;
  onCountryChange: (value: string) => void;
  onRegionChange: (value: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ country, region, onCountryChange, onRegionChange }) => {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <Select value={country} onChange={(e) => onCountryChange(e.target.value)}>
        <option value="" disabled>Выберите страну</option>
        {countries.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </Select>
      <Input 
        placeholder="Укажите регион (Опционально)"
        value={region}
        onChange={(e) => onRegionChange(e.target.value)}
      />
    </div>
  );
};

export default LocationInput;