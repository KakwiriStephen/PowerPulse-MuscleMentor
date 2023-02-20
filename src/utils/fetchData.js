export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bfb091e166mshb29c6a59b5e5ff1p13efb8jsne749332f279b",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
