import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTripById } from '../../api-calls';
import { deleteTripById } from '../../api-calls';
import { BsPatchCheckFill } from 'react-icons/bs';
import {
  Button,
  ButtonContainer,
  Card,
  Container,
  Destination,
  Image,
  InfoLabel,
  InfoValue,
} from './selected-trip.styled';

export default function SelectedTrip() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [isBooked, setIsBooked] = useState(() => {
    const storedIsBooked = localStorage.getItem(`isBooked_${id}`);
    return storedIsBooked !== null ? JSON.parse(storedIsBooked) : false;
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsBooked = localStorage.getItem(`isBooked_${id}`);
    if (storedIsBooked !== null) {
      setIsBooked(JSON.parse(storedIsBooked));
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`isBooked_${id}`, JSON.stringify(isBooked));
  }, [id, isBooked]);

  useEffect(() => {
    async function fetchTrip() {
      const data = await getTripById(id);
      setTrip(data);
    }

    fetchTrip();
  }, [id]);

  if (!trip) {
    return <div>Loading...</div>;
  }

  const { destination, date, duration, imageUrl } = trip;

  function handleBookBtnClick() {
    setIsBooked((prevIsBooked) => !prevIsBooked);
  }

  async function handleDelete() {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this trip?'
    );
    if (confirmDelete) {
      try {
        await deleteTripById(id);
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <Card>
      <Container>
        <Destination>To {destination}</Destination>
        <InfoLabel>Trip date:</InfoLabel>
        <InfoValue>{date}</InfoValue>
        <InfoLabel>Trip duration:</InfoLabel>
        <InfoValue>{duration} day(s)</InfoValue>
        <Image src={imageUrl} alt="Trip's pic" />
        <ButtonContainer>
          <Button onClick={handleBookBtnClick}>
            {isBooked ? (
              <>
                Booked <BsPatchCheckFill />
              </>
            ) : (
              'Book'
            )}
          </Button>
          <Button onClick={handleDelete}>Delete</Button>
        </ButtonContainer>
      </Container>
    </Card>
  );
}
