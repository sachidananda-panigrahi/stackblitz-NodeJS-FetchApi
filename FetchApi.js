const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

function doRequest() {
  fetch(
    'https://6b79-123-253-161-162.ngrok-free.app/api/add?num1=0&num2=2',
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
}

function getValuesAsString(n, add) {
  const output1 = [];
  const output2 = [];
  doRequest();
  for (let i = 0; i <= n; i++) {
    output1.push(i);
    output2.push(i + add);
  }

  return [output1.join(','), output2.join(',')];
}

function FetchApi() {
  // Test with n=5 and add=2
  const [result1, result2] = getValuesAsString(5, 2);
  console.log(result1);
  console.log(result2);
}

module.exports = { FetchApi };
