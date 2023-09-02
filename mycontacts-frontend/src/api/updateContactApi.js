const updateContactApi = async (id, name, email, phone, token) => {
  const URL = `http://localhost:5001/api/contacts/${id}`;
  const reqBody = {
    name: name,
    email: email,
    phone: phone,
  };

  const response = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(reqBody),
  }).then((res) => res.json());

  return response;
};

export default updateContactApi;
