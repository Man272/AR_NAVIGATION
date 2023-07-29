import './App.css';
import { Helmet } from 'react-helmet';
import BCBG from './assets/ARbl.png';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Footer from './components/footer';
import Banner from './components/banner';

function App() {
  return (
    <div className='app'>
    <Helmet>
      <title>AR NAVIGATION</title>
      <link rel="icon" type="image/png" href={BCBG} />
    </Helmet>
        <Banner/>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Footer />
    </div>
  );
}

export default App;
