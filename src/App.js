
// function App() {
//   return (
//     <div>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => console.log("I'm clicked.")} />;
//     </div>
//   )
// }

const App = () => {
  const profiles = [
    {name: "Taro",age:10},
    {name: "Hanako",age:8},
    {name: "Yuichi"},
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
      
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name},and { props.age} years old! </div>
}

User.defaultProps = {
  age: 1
}

export default App;
