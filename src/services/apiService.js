import httpService from "./httpService";

const apiEndPoint = "http://localhost:3000/api/getEventsData"; 

/* Ideally api endpoint should be kept in environment variables  
as the URL will be different for QA and Prod
*/

export function getEvents() {
  return httpService.get(apiEndPoint);
}

export default {
  getEvents,
}