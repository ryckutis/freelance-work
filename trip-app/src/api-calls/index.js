import axios from 'axios';

const ENDPOINT = 'https://64943d970da866a953676752.mockapi.io/tripnation/trips';

export async function getAllTrips() {
  try {
    const resp = await axios.get(ENDPOINT);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createTrip(destination, date, duration, imageUrl) {
  try {
    const resp = await axios.post(ENDPOINT, {
      destination,
      date,
      duration,
      imageUrl,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTripById(id) {
  try {
    const response = await fetch(ENDPOINT + `/${id}`);
    const trip = await response.json();
    return trip;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTripById(id) {
  try {
    const resp = await axios.delete(ENDPOINT + `/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
