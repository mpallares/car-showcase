export const fetchCars = async () => {
  const headers = {
    'X-RapidAPI-Key': '8ff895a489msha3d401a8cb00febp11cd39jsn016e1d95b8ae',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    { headers: headers }
  );

  const result = await response.json();

  return result;
};
