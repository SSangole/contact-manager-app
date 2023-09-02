const URL = "http://localhost:5001/api/contacts";
const createContactApi = async (name, email, phone, token) => {
  const reqBody = {
    name: name,
    email: email,
    phone: phone,
  };

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(reqBody),
  }).then((res) => res.json());
  return response;
};

export default createContactApi;
