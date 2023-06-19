import Navigation from "./components/Navigation"
import desktop from './assets/data/intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png'
import Mobile from './assets/data/intro-section-with-dropdown-navigation-main/images/image-hero-mobile.png'
import audiophile from './assets/data/intro-section-with-dropdown-navigation-main/images/client-audiophile.svg'
import databiz from './assets/data/intro-section-with-dropdown-navigation-main/images/client-databiz.svg'
import maker from './assets/data/intro-section-with-dropdown-navigation-main/images/client-maker.svg'
import meet from './assets/data/intro-section-with-dropdown-navigation-main/images/client-meet.svg'
import './App.css'

function App() {

  return (
    <>
      <main className="containerApi">
        <Navigation />
        <section className="container">
          <article >
            <div className="container-body">
              <div className="title">
                <h1 >Make remote work </h1>

              </div>
              <p>  Get your team in sync, no matter your location. Streamline processes,
                create team rituals, and watch productivity soar.
              </p>
              <div className="section-button" >
                <button className="Button-Home"> Learn more</button>
              </div>
              <div className="container-fotter">
                <div><img src={databiz} alt="sponsored" /></div>
                <div><img src={audiophile} alt="sponsored" /></div>
                <div><img src={meet} alt="sponsored" /></div>
                <div><img src={maker} alt="sponsored" /></div>
              </div>
            </div>
          </article>
          <picture >
            <source srcSet={Mobile} media="(max-width: 768px)" />
            <img src={desktop} alt="imagen" />
          </picture>


        </section >
      </main >

    </>
  )
}

export default App
