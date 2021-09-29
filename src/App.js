import logo from './logo.svg';
import './App.css';


const Header = () => {
 return (
  <header>
    <h1>Tesfaye Atomsa</h1>
  </header>
 )
}

const myQulaity = [
  "creative thinker", "inspied worker", "well performer under presser"
]

myQulaity.map(qulity => console.log(qulity))

const Main = (props) => {
  return (
    <section>
    <h3> I am {props.me}</h3>
    <ul>
      {myQulaity.map(qulity => <li>{qulity}</li>)}
    </ul>
  </section>
  ) 
}




const Footer = (props) => {
   return (
   <h4> &reg; copyright {props.year} </h4>
   )
 }

function App() {
  return (
    <div className="App">
      <Header />
      <Main me={"problem solver"} />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
