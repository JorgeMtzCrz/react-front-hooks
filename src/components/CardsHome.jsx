import React from 'react'
import useSWR from 'swr'
import { ACTIVE_URL, ALL_FETCHER } from '../services/card_service'


import LoadScreen from './Loading'

// User STYLING
import '../assets/css/home.css'
import { Link } from 'react-router-dom'


function CardsHome(props) {
  const { data, mutate } = useSWR(ACTIVE_URL, ALL_FETCHER)
  const cards = data && data.cards

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  if(!cards) return <LoadScreen />
  return (
    <>
    <div className="cards-home">
        {
          cards.map((e,i)=>{
            return(
            <>
            <div key={i} className="card-home">
              <div className="image-card">
                <img   src={e.img} alt="cards" />
                <div key={i}  className="text-card">
                  <h3 className={ i === 0 || i === 3 ? "title-blue":"title-green"}>{e.title}</h3>
                  <h5 className="subtitle-card">{e.subtitle}</h5>
                  <p className="description-card">{e.description}</p>
                <Link to={`//${e.url}`} target='_blank'><button className={i === 0 || i === 3 ? "button-card-blue":"button-card-green"}>SEE MORE</button></Link>
                </div>
              </div>
            </div>
            </>
            )
          })
        }


    </div>

    </>
  );
}

export default CardsHome;
