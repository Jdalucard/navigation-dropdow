import useMyhook from "./Mihook.jsx"
import styles from "./styles.module.css";
import logo from "../assets/data/images/logo.svg";
import arrowDown from "../assets/data/images/icon-arrow-down.svg"
import arrowUp from "../assets/data/images/icon-arrow-up.svg"
import Todo from '../assets/data/images/icon-todo.svg'
import Calendar from '../assets/data/images/icon-calendar.svg'
import Reminders from '../assets/data/images/icon-reminders.svg'
import Planning from '../assets/data/images/icon-planning.svg'
import menu from '../assets/data/images/icon-menu.svg'
import close from '../assets/data/images/icon-close-menu.svg'


const Navigation = () => {
  const { hadletoogle, activate, handleactivate, toogle, responsive, hadletoogleresponsive, } = useMyhook()

  return (

    <>
      <section className={styles.Menu}>
        <div><img src={logo} alt="Milogo" /></div>
        <div className={styles.menuContainer}>
          <section className={styles.group}>

            <div className={styles.containerToogle}>
              <div onClick={() => hadletoogle()} className={styles.containerbutton}>
                <button >Feactures</button>
                {toogle ? <img src={arrowUp} alt="arrowUp" /> : <img src={arrowDown} alt="arrowDown" />}

              </div>
              {toogle &&
                <div className={styles.toogle}>
                  <ul >
                    <div className={styles.menuImg}>
                      <img src={Todo} alt="icontodo" />
                      <li>Todo list</li>
                    </div>

                    <div className={styles.menuImg}>
                      <img src={Calendar} alt="icontodo" />
                      <li>Calendar</li>
                    </div>
                    <div className={styles.menuImg}>
                      <img src={Reminders} alt="icontodo" />
                      <li>Reminders</li>
                    </div>
                    <div className={styles.menuImg}>
                      <img src={Planning} alt="icontodo" />
                      <li>Planning</li>
                    </div>

                  </ul>
                </div>
              }
            </div>
            <div className={styles.containerActivate}>
              <div onClick={() => handleactivate()} className={styles.containerbutton}>
                <button >Company</button>
                {activate ? <img src={arrowUp} alt="arrowUp" /> : <img src={arrowDown} alt="arrowDown" />}
              </div>
              {activate &&
                <div className={styles.activate}>
                  <ul >
                    <li>History</li>
                    <li>OurTeam</li>
                    <li>Blog</li>
                  </ul>
                </div>}
            </div>
            <button>Careers</button>
            <button>About</button>
          </section>
          <section className={styles.group2}>
            <button>Login </button>
            <button className={styles.register}>Register</button>

          </section>

        </div>
      </section>

      {/* responsiveMenu */}

      <div className={styles.menuResponsive}>
        <div className={styles.homeresponsive}>
          <div><img src={logo} alt="Milogo" /></div>
          <div className={styles.hamburguesa} onClick={() => hadletoogleresponsive()}><img src={menu} alt="hamburguesa" />      </div>
        </div>

        {responsive &&
          <div className={styles.containerResponsive}>

            <div onClick={() => hadletoogleresponsive()} className={styles.close}><img src={close} alt="close" /></div>

            <div className={styles.insideMenu}>
              <div onClick={() => hadletoogle()} className={styles.containerbutton}>
                <button >Feactures</button>
                {toogle ? <img src={arrowUp} alt="arrowUp" /> : <img src={arrowDown} alt="arrowDown" />}

              </div>
              {toogle &&

                <div className={styles.insideFeactures}>
                  <ul >
                    <div className={styles.menuresponsiveImg}>
                      <img src={Todo} alt="icontodo" />
                      <li>Todo list</li>
                    </div>

                    <div className={styles.menuresponsiveImg}>
                      <img src={Calendar} alt="icontodo" />
                      <li>Calendar</li>
                    </div>
                    <div className={styles.menuresponsiveImg}>
                      <img src={Reminders} alt="icontodo" />
                      <li>Reminders</li>
                    </div>
                    <div className={styles.menuresponsiveImg}>
                      <img src={Planning} alt="icontodo" />
                      <li>Planning</li>
                    </div>
                  </ul>
                </div>

              }
              <div className={styles.insideCompany}>
                <div onClick={() => handleactivate()} className={styles.containerbutton}>
                  <button >Company</button>
                  {activate ? <img src={arrowUp} alt="arrowUp" /> : <img src={arrowDown} alt="arrowDown" />}
                </div>
                {activate &&
                  <div className={styles.companylist}>
                    <ul >
                      <li>History</li>
                      <li>OurTeam</li>
                      <li>Blog</li>
                    </ul>
                  </div>}
              </div>
              <button>Careers</button>
              <button>About</button>

              <section className={styles.insidelogin}>
                <button>Login </button>
                <button className={styles.register}>Register</button>

              </section>
            </div>
          </div>}
      </div>





    </>
  )
}

export default Navigation