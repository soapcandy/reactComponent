function Login({ type, value, onChange, buttonText }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "row-reverse" }}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{
          padding: "4px",
        }}
      />
      <button style={{ padding: "4px", marginLeft: "10px" }}>
        {buttonText}
      </button>
    </div>
  );
}

export default Login;
