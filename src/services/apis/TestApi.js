import axios from 'axios';

export default class TestApi {
  getFoo () {
      axios.get('/api/foo').then((response) => {
          console.log(response.data);
      });
  }
}