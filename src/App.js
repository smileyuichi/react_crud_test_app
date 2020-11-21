function App() {
  return (
    <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => console.log("I'm clicked.")} />;
    </div>
  )
}

export default App;
