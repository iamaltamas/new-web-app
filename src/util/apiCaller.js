// const API_URL = `http://localhost:8080`;
// const API_URL =
//   process.env.REACT_APP_API_URL || `https://apidev.scorechamp.app`;

// export default function callApi(endpoint, method = 'post', body) {
//   console.log('testing 1', endpoint);
//   console.log('testing 2', body);

//   // let token = window.localStorage.getItem('token')
//   //   ? window.localStorage.getItem('token')
//   //   : '';
//   let headers = {};
//   headers['content-type'] = 'application/json';
//   // if (token && token !== '') {
//   //   headers.Authorization = `Bearer ${token}`;
//   // }
//   return fetch(`${API_URL}/api/${endpoint}`, {
//     headers: headers,
//     method,
//     body: JSON.stringify(body),
//   })
//     .then(response => response.json().then(json => ({json, response})))
//     .then(({json, response}) => {
//       if (!response.ok) {
//         return Promise.reject(json);
//       }
//       return json;
//     })
//     .then(
//       response => response,
//       error => error,
//     );
// }

// const API_URL = `http://216.48.177.3/api`;
const API_URL = `http://ann-api.antcreatives.com/api`;

export default function callApi(path = '', method = '', body) {
  console.log('path==>', path, method, body);
  const requestProps = {
    method: method.toUpperCase(),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Token fc7e30dba3bc7a265e98c361eab4eb2c9ea279b5',
    },
  };
  if (body) requestProps.body = JSON.stringify(body);
  console.log('API_URL', API_URL + path, ' body ', body, ' method ', method);
  return fetch(API_URL + path, requestProps)
    .then(response => response.json())
    .then(response => {
      return response;
    });
}

export function autoCallApi(endpoint, method, body) {
  let options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Token fc7e30dba3bc7a265e98c361eab4eb2c9ea279b5',
    },
    method,
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  // console.log('options ', options);
  // console.log(' url   ', `${API_URL}/${endpoint}`);

  return fetch(`${API_URL}${endpoint}`, options)
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
      // toastr.showToast('Server Error!');
    });
}
