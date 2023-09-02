const deleteContactApi = async (id, token) => {
  const URL = `http://localhost:5001/api/contacts/${id}`;
  const response = await fetch(URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
  return response;
};

export default deleteContactApi;
