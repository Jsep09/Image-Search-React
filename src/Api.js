import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID i9_EjIBum9w9D25XrT3heVuvN5kKI9CBXDmNqGqUBfc",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
