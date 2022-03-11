import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './App.css';
import Routes from './Routes';

import GlobalStyle from "./Styles/global"


function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;


