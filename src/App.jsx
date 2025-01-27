import {login,logout} from './store/authSlice';
import {useDispatch} from 'react-redux';
import {useState,useEffect} from 'react';
import authService from './appwrite/auth';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const[loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData));
      }else{
        dispatch(logout());
      }
    }).finally(()=>{
      setLoading(false);
    })
  },[dispatch])
  return !loading ? (
    <div className="flex flex-wrap content-between min-h-screen bg-gray-400">
      <div className="w-full block">
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null;
}

export default App;
