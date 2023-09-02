const URL = "http://localhost:5001/api/users/register";

const registerApi = async (username, email, password) => {
  const reqBody = {
    username: username,
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
  console.log(response);
  return response;
};

export default registerApi;
