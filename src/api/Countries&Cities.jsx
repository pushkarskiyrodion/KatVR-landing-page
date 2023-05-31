const BASE_URL = "https://countriesnow.space/api/v0.1";

export const getCities = async (selectedCounty) => {
  return await fetch(BASE_URL + "/countries/cities", {
    method: "POST",
    body: JSON.stringify({ country: selectedCounty }),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
};

export const getCountries = async () => {
  return await fetch(BASE_URL + "/countries").then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
};
