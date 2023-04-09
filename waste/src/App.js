
import './App.css';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import bg from './images.jpg'
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <img src={bg} class="bg"/> */}
      <Body/>
      <Footer/>

    </div>
  );
}

export default App;
