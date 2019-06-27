import fetch from 'isomorphic-unfetch'
import toast from './toast'

let postData = data => {
    let url = 'http://localhost:3000/data'
    console.log(data)
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
      .then(function(response){
          console.log('Success:', response)
      })
      .then(toast())
      .catch(error => console.error('Error:', error));
}


export default postData