const baseUrl = process.env.NODE_ENV === "production" 
  ? 'https://pasar.web.id' 
  : 'http://localhost:3000';

export default baseUrl;