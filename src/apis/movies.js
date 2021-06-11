import axios from 'axios';



 export default async function getJSONresponse(json) {
    let json = [];
    let url = json;
    await axios.get(url).then((response) => {
      if (response.data) {
        json = response.data;
      }
    }).catch((err) => {
      console.log('getJSON error', err);
    });
    return json;
  }