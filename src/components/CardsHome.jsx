import React from 'react'
import useSWR from 'swr'
import '../assets/css/home.css'
import { ALL_URL, ALL_FETCHER } from '../services/card_service'

function CardsHome(props) {
  const { data, mutate } = useSWR(ALL_URL, ALL_FETCHER)
  const cards = data && data.cards

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  if(!cards) return <h4>Loading...</h4>
  return (
    <>
    <div className="cards-home">
        {
          cards.map((e,i)=>{
            return(
            <>
            <div className="card-home">
              <div className="image-card">
                <img src={e.img} alt="cards" width="50%" height="100%"/>
                <div className="text-card">
                  <h3 className={ i === 0 || i === 3 ? "title-blue":"title-green"}>{e.title}</h3>
                  <h5 className="subtitle-card">{e.subtitle}</h5>
                  <p className="description-card">{e.description}</p>
                  <button className={i === 0 || i === 3 ? "button-card-blue":"button-card-green"}>SEE MORE</button>
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
