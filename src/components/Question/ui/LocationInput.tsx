import React from 'react';
import Select from '../../ui/Select';
import Input from '../../ui/Input';
import countries from '../../../countries.json';
import { useLocale, useTranslations } from 'next-intl';

interface LocationInputProps {
  country: string;
  region: string;
  onCountryChange: (value: string) => void;
  onRegionChange: (value: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ country, region, onCountryChange, onRegionChange }) => {
  const locale = useLocale();
  const t = useTranslations("HardcodedQuestions"); // Assuming you'll add these keys there

  return (
    <div className="flex flex-col gap-6 mt-6">
      <Select value={country} onChange={(e) => onCountryChange(e.target.value)}>
        <option value="" disabled>{t("selectCountryPlaceholder")}</option>
        {countries.map((c) => (
          <option key={c.en} value={c.en}>{c[locale as keyof typeof c]}</option>
        ))}
      </Select>
      <Input 
        placeholder={t("regionPlaceholder")}
        value={region}
        onChange={(e) => onRegionChange(e.target.value)}
      />
    </div>
  );
};

export default LocationInput;
