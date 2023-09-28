import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';

const URL = 'http://localhost:3001/rickandmorty/login/';
 

function App() {
   const location = useLocation();
   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);
   console.log(characters)

   const [access, setAccess] = useState(false);
   
   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)        
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message)
      }
   };
   useEffect(() => {
      !access && navigate('/');
   }, [access])

   
   const onSearch = async (id) => {
      
   const duplicated = characters.filter(character =>
      character.id === Number(id)
   )
      try { 
        const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            if(!duplicated.length) {
               setCharacters((oldCharacters) =>
                  [
                     ...oldCharacters,
                     data
                  ]
               )
            }
            else {
               alert('WARNING! This character already exists!')
            }
         }  
      } catch (error) {
         alert('WARNING! No character found with this ID!')
      }
      }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' ?  <Nav onSearch={onSearch} /> : null
         }
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> } />
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
   }
      // if(userData.email === email && userData.password === password) {
      //    setAccess(true);
      //    navigate('/home')
      // }




export default App;
