const getDataFromApi = () => {
  return fetch('https://michael-scott-quote.herokuapp.com/v1/random/1')
    .then((response) => response.json()
      .then((data) => {
        return data;
      })
    );
};

export default getDataFromApi;
