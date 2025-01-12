import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {onAuthStateChangedListener, createUserDocumentFromAuth} from "./utils/firebase/firebase.utils";
import {Routes, Route } from 'react-router-dom';
import Home from "./components/Routes/Home/home.component";
import Navigation from './components/Routes/Navigation/navigation.component';
import Authentication from './components/Routes/authentication/authentication.component';
// import CategoryItem from "./components/category-item/category-item.component";
import Shop from './components/shop/shop.component';
import Checkout from './components/Routes/checkout/checkout.component';
import { setCurrentUser } from "./store/user/user.reducer";

const App = ()=> {
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user)=> {
      console.log('Auth state changed:', user);
        if (user){
          createUserDocumentFromAuth(user);
            createUserDocumentFromAuth(user);
        }
        console.log(setCurrentUser(user)); // Logging the action creator
       dispatch(setCurrentUser(user));
    })
    return unsubscribe
},[]);

  return (
  <Routes>
  <Route path='/' element={<Navigation/>} >
  <Route index element={ <Home />} />
  <Route path='shop/*' element={ <Shop /> }/> 
  <Route path='auth' element={ <Authentication /> }/>
  <Route path='checkout' element={ <Checkout /> }/>
  </Route> 
  </Routes>
  );
}

export default App;