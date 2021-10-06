import './App.css';
//import React, { useState, useEffect, useReducer } from 'react';
import React, { useState, useEffect } from 'react';
import {Routes, Route } from "react-router-dom";
import {Home, About, Event, Contact, NotFound, Services, CompanyHistory, Location} from "./pages.js"
// const Header = () => {
//  return (
//   <header>
//     <h1>Tesfaye Atomsa</h1>
//   </header>
//  )
// }

// const Main = (props) => {
//   return (
//     <section>
//       <img 
//         src="https://github.com/tenesami.png" 
//         height={200} style={{borderRadius: "50%"}}
//         alt="github Avator"
//       />
//     <h3> The following list are my {props.tesfaye}</h3>
    
//     <ul style={{textAlign: "left"}}>
//       {myQulaityObj.map((quality) => <li key={quality.id}>{quality.myquality}</li>)}
//     </ul>
//   </section>
//   ) 
// }

// const Footer = (props) => {
//    return (
//    <h4> &reg; copyright {props.year} </h4>
//    )
//  }


//  const myQuality = [
//   "creative thinker", "inspied worker", "well performer under presser"
// ];

// const myQulaityObj = myQuality.map((quality, i) => ({id: i, myquality: quality}));
// //console.log(myQulaityObj);

// function App({login}) {

//   const [skill, setSkill] = useState("JS");
//   //console.log(`one of my skills is ${skill}`);

//   useEffect(() => {
//     console.log(`${skill} one of my skills `)
//   },[skill]);

 
//   const [expriance, setExperiance] = useState("rails")
//   //console.log(`I am experianced with ${expriance}`);

//   useEffect(() => {
//     console.log(`I am experianced with ${expriance} framework`);
//   },[expriance]);


//   const [check, toggle] = useReducer(
//     (check) => !check,
//     false
//   );





//  function App({login}) {
//   const [data, setData] = useState(null);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

  
//   useEffect(() => {
//     if(!login) return;
//     setLoading(true);
    
//     fetch(`https://api.github.com/users/${login}`)
//     .then(resp => resp.json())
//     .then(setData)
//     .then(() => setLoading(false)) //after updating the data it set to false;
//     .catch(setError);
//   },[login]) //calls login anytime data changes

//    if(loading) return <h1>Loading...</h1>
//    if(error) 
//    return <pre>{JSON.stringify(error, null, 2)} </pre>;
//    if(!data) return null;
  
//     return (
//     <div>
//       <h2>{data.login}</h2>
//       <h2>{data.name}</h2>
//       <p>{data.location}</p>
//       <img alt={data.login} src={data.avatar_url} />
//     </div>
//     );
    
//   }
  





  // return (
  //   <div className="App">
  //     <Header />

  //     <Main tesfaye={"quality"} myQuality={myQulaityObj}/>

  //     <button onClick={() => (setSkill('JavaScript'))}>Skills</button>
  //     <button onClick={() => (setExperiance('React'))}>Experiance</button>
      
  //     <input 
  //     type="checkbox"
  //     value={check}
  //     onChange={toggle}
  //     />


  //     {check ? 'checked' : 'not checked'}



  //     <Footer year={new Date().getFullYear()}/>
  //   </div>
  //);
//}



function App(){
  return(
    <>
    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}>
            
              <Route path="services" element={<Services />}/>
              <Route path="history" element={<CompanyHistory />}/>
              <Route path="location" element={<Location />}/>
          </Route>



          <Route path="/events" element={<Event/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
    </Routes>
      <h1>
        Hello React Testing Library
      </h1>
    </>
  )
}

export default App;
