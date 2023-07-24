import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllTrips } from '../../api-calls';
import { GiClick } from 'react-icons/gi';
import {
  DataLabel,
  DateDuration,
  Destination,
  TripsContainer,
} from './trips-list.styled';

export default function TripsList() {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllTrips();
      setTrips(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <TripsContainer>
      {trips.length ? (
        <p>There are no trips. Create a new one.</p>
      ) : (
        trips.map((trip) => (
          <Link to={`/trip/${trip.id}`} key={trip.id}>
            <DataLabel>Destination:</DataLabel>
            <Destination>{trip.destination}</Destination>
            <DataLabel>Trip date:</DataLabel>
            <DateDuration>{trip.date}</DateDuration>
            <DataLabel>Trip duration:</DataLabel>
            <DateDuration>{trip.duration} day(s)</DateDuration>
            <span>
              <GiClick />
            </span>
          </Link>
        ))
      )}
    </TripsContainer>
  );
}
