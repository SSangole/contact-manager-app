import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Contacts from "./routes/Contacts";
import { styled } from "styled-components";
function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/contacts" Component={Contacts} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: white;
`;
export default App;
