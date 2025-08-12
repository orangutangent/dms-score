"use client";

import Input from "@/components/ui/Input";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

type Contacts = {
  name: string;
  affiliation: string;
  email: string;
  tel: string;
};

type Props = {
  onContactsChange: (contacts: Contacts) => void;
  initialContacts: Contacts;
};

export const ContactsInput = ({ onContactsChange, initialContacts }: Props) => {
  const t = useTranslations();
  const [contacts, setContacts] = useState(initialContacts);

  useEffect(() => {
    onContactsChange(contacts);
  }, [contacts, onContactsChange]);

  const handleChange = (field: keyof Contacts, value: string) => {
    setContacts((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-4  rounded-lg">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            {t("HardcodedQuestions.contactsName")}
          </label>
          <Input
            id="name"
            value={contacts.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label
            htmlFor="affiliation"
            className="block text-sm font-medium text-gray-700"
          >
            {t("HardcodedQuestions.contactsAffiliation")}
          </label>
          <Input
            id="affiliation"
            value={contacts.affiliation}
            onChange={(e) => handleChange("affiliation", e.target.value)}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {t("HardcodedQuestions.contactsEmail")}
          </label>
          <Input
            id="email"
            type="email"
            value={contacts.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label
            htmlFor="tel"
            className="block text-sm font-medium text-gray-700"
          >
            {t("HardcodedQuestions.contactsTel")}
          </label>
          <Input
            id="tel"
            value={contacts.tel}
            onChange={(e) => handleChange("tel", e.target.value)}
            className="mt-1 block w-full"
          />
        </div>
      </div>
    </div>
  );
};
