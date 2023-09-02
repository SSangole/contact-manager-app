const URL = "http://localhost:5001/api/users/login";
const loginApi = async (email, password) => {
  const reqBody = {
    email: email,
    password: password,
  };

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  }).then((res) => res.json());

  const data = response.accessToken;

  return data;
};

export default loginApi;
