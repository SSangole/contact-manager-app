const URL = "http://localhost:5001/api/contacts";

const contactsApi = async (authToken) => {
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  }).then((res) => res.json());
  return response;
};

export default contactsApi;
