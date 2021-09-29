import logo from './logo.svg';
import './App.css';


const Header = () => {
 return (
  <header>
    <h1>Tesfaye Atomsa</h1>
  </header>
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
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
