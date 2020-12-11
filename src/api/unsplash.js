import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID x6IAG1R4LyWAL6eKw8lCDDWh5UNs9pdK7VdaldsLuss'
  }
})
