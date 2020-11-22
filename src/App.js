
// function App() {
//   return (
//     <div>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => console.log("I'm clicked.")} />;
//     </div>
//   )
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
