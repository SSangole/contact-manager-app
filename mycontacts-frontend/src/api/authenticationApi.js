const URL = "http://localhost:5001/api/users/current";

const authenticationApi = async (authToken) => {
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((res) => res.json());

  return response;
};

export default authenticationApi;
