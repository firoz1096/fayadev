import '../src/custom.scss';
import AboutHome from './components/AboutHome';
import ContactHome from './components/ContactHome';
import HomeCoverContent from './components/HomeCoverContent';
import MainHeader from './components/MainHeader';
import MiniFooter from './components/MiniFooter';
// import OurClients from './components/OurClients';
import Portfolio from './components/Portfolio';
import ServicesHome from './components/ServicesHome';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';




function App() {
  return (
    <div className="App">
<>


<div id='home' className='bg_home_section'>
<MainHeader/>
<HomeCoverContent />
</div>

<AboutHome />
<ServicesHome />
<Portfolio />
<StatsSection />
<ContactHome />
<Testimonials />
<MiniFooter />

  </>


    </div>
  );
}

export default App;
