import './App.css';


const Header = () => {
 return (
  <header>
    <h1>Tesfaye Atomsa</h1>
  </header>
 )
}

const Main = (props) => {
  return (
    <section>

      <img 
        src="https://github.com/tenesami.png" 
        height={200} style={{borderRadius: "50%"}}
        alt="github profile photo"
      />
    <h3> The following list are my {props.me}</h3>
    
    <ul style={{textAlign: "left"}}>
      {myQulaityObj.map((quality) => <li key={quality.id}>{quality.myquality}</li>)}
    </ul>
  </section>
  ) 
}

const Footer = (props) => {
   return (
   <h4> &reg; copyright {props.year} </h4>
   )
 }


 const myQuality = [
  "creative thinker", "inspied worker", "well performer under presser"
];

const myQulaityObj = myQuality.map((quality, i) => ({id: i, myquality: quality}));
console.log(myQulaityObj);

function App() {
  return (
    <div className="App">
      <Header />
      <Main me={"quality"} />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
