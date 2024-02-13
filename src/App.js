import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import { useSelector } from 'react-redux';
function App() {
  const isLogin = useSelector(state=>state.authenticate.isLogin);
  return (
    < >
    <Header/>
   {!isLogin ? <Auth/>:<Counter/>}
   
    </>
  );
}

export default App;
