import React from 'react';
import { Card, VerticalTable } from '../../Shared';
import images from '../../../assets';
import ContactContainer from './ContactContainer';
import ContactIcon from './ContactIcon';
import ContactTitle from './ContactTitle';

export default function ContactCard({ user = {} }) {
  const contactData = [
    user?.cell && {
      label: <ContactIcon src={images.phone} alt="phone" />,
      value: user.cell,
    },
    user?.email && {
      label: <ContactIcon src={images.mail} alt="email" />,
      value: user.email,
    },
  ];

  return (
    <ContactContainer>
      <Card pad>
        <ContactTitle>Contact</ContactTitle>
        <VerticalTable dataSet={contactData} small />
      </Card>
    </ContactContainer>
  );
}
