import NavBar from './components/header/NavBar';
import style from './app.module.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <div className={style.app}>
        <NavBar/>
        <Layout>
          <Home/>
        </Layout>
    </div>
  );
}

export default App;
