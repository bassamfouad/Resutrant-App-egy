import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer jKNZPwKqhziWVR0Qp5_W2s9TemImbxt-tTQU9ujvnZOQRk6BN7WdzXE2YYuZc0ZpOuF2Z7hiQlkXWFO8ghPB89X26QSvN8aSslXLhMYIqhHBam3-NIcanr9WdlGDXnYx'
  }
});
