import { useState } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <div style={{ display: "inline-flex", flexDirection: "row-reverse" }}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{
            padding: "4px",
          }}
        />
        <button style={{ padding: "4px", marginLeft: "10px" }}>입력</button>
      </div>
      <div style={{ display: "inline-flex", flexDirection: "row-reverse" }}>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{
            padding: "4px",
          }}
        />
        <button style={{ padding: "4px", marginLeft: "10px" }}>등록</button>
      </div>
      <div style={{ display: "inline-flex", flexDirection: "row-reverse" }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "4px",
          }}
        />
        <button style={{ padding: "4px", marginLeft: "10px" }}>하하</button>
      </div>
    </div>
  );
}

export default App;
