import { useState } from "react";
import "./App.css";
import Login from "./Login";

function App() {
  const [id, setId] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <Login
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        buttonText="입력"
      />
      <Login
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        buttonText="등록"
      />
      <Login
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        buttonText="하하"
      />
    </div>
  );
}

export default App;
