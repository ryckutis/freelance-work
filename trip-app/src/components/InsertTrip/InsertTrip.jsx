import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { createTrip } from '../../api-calls';
import { PiAirplaneTilt } from 'react-icons/pi';
import {
  Button,
  Heading,
  Input,
  Label,
  StyledForm,
} from './insert-trip.styled';

export default function InsertTrip() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createTrip(destination, date, duration, imageUrl);
      alert('Trip added successfully!');
      setDestination('');
      setDate('');
      setDuration('');
      setImageUrl('');
      navigate('/');
    } catch (error) {
      alert('Error adding trip ¯_(ツ)_/¯');
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Heading>
        Plan your trip <PiAirplaneTilt />
      </Heading>
      <Label>
        Destination:
        <Input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter destination"
          required
        />
      </Label>
      <br />
      <Label>
        Date:
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={`${new Date().toISOString().split('T')[0]}`}
          required
        />
      </Label>
      <br />
      <Label>
        Duration(days):
        <Input
          type="number"
          min="1"
          step="1"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Enter duration(days)"
          required
        />
      </Label>
      <br />
      <Label>
        Image URL:
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        or paste image's address here:
        <Input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image address"
          required
        />
      </Label>
      <br />
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
}
