import './App.css';
import { useState } from 'react';

function App() {

  const [form, setFrom] = useState({});



  // form handling form
  const handleForm = (e) => {
    console.log("working...");
    setFrom(
      {
        ...form,
        [e.target.name]: e.target.value,
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit...");
  
    fetch('http://localhost:8080/demo',{method: 'POST',
    body: JSON.stringify(form),
    headers:{
      'Content-Type':'application/json'
    }
  
  })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Fetch request failed with status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };
  
  
  return (
    <div className=" sm:text-2xl text-white gap-7 bg-red-600 flex flex-col justify-center items-center h-screen" >
      <p className="text-4xl font-bold p-4 hover:underline">FullStack Testing </p>


      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="userName">User Name</label>

        <input onChange={handleForm} name="userName" className="p-2 text-black" placeholder="Enter UserName" type="text" required />

        <label htmlFor="password">Password</label>
        <input onChange={handleForm} name="password" type="password" className="p-2 text-black" placeholder="Enter Password" required />


        <input type="submit"  className="bg-blue-500 p-2 hover:bg-blue-600  focus:border-2 " value="Submit" />
      </form>

    </div>
  );
}

export default App;
