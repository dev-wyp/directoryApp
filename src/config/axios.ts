import axios from 'axios';

export const api = axios.create({
    headers: {
        // 'X-RapidAPI-Key': '13155bdebdmsh39b9aeb4e6e3d5ep1555f1jsn4229a45f7403',
        // 'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
        'content-type': 'application/vnd.amadeus+json ',
        // 'Cache-Control': 'no-cache',
        // 'Access-Control-Allow-Origin': '*',
        // Accept: 'application/json',
        // "X-Request-Id": 'b3627020-6f20-4bce-9182-8a846ca602ac',
        // 'Timing-Allow-Origin': 'https://www.tripadvisor.com'
        // 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTc2NzczNjAsImlkZW50aXR5IjozLCJuYmYiOjE1MTc2NzczNjAsImV4cCI6MTUxNzY3OTE2MH0.ytSqQj3VDymEaJz9EIdskWELwDQZRD1Dbo6TuHaPz9U'
        'Authorization': 'Bearer XMv1yR9o6OGzOd7HqprpMV1eIWRA'


    },
});





// const options = {
//     method: 'GET',
//     url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels',
//     params: {
//       geoId: '294191',
//       checkIn: '2024-05-26',
//       checkOut: '2024-05-26',
//       pageNumber: '1',
//       currencyCode: 'USD'
//     },
//     headers: {
//       'X-RapidAPI-Key': '13155bdebdmsh39b9aeb4e6e3d5ep1555f1jsn4229a45f7403',
//       'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
//     }
//   };
  
//   try {
//       const response = await axios.request(options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }