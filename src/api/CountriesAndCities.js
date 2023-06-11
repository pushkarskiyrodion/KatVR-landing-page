import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log(BASE_URL + "/countries/cities")

export const getCities = async (selectedCounty) => {
  return await axios
    .post(BASE_URL + "/countries/cities", {
      country: selectedCounty,
    })
    .then((response) => {
      if (response.data.error) {
        throw new Error();
      }

      return response.data;
    });
};

export const getCountries = async () => {
  return await axios.get(BASE_URL + "/countries").then((response) => {
    if (response.data.error) {
      throw new Error();
    }

    return response.data;
  });
};
