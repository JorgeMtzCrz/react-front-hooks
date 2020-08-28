import React from 'react'
import useSWR from 'swr'
import { ACTIVE_URL, ALL_FETCHER } from '../services/banner_service'


function OfferSection(props) {
  const { data, mutate } = useSWR(ACTIVE_URL, ALL_FETCHER)
  const banners = data && data.banners

  if(!banners)return <h4>Loading...</h4>
  return (
    <>
    {
      banners.map((e,i)=>{
        return(
        <div key={i}  className="offerSection">
          <div className="image-offer">
            <img width="100%" height="100%" src={e.img} alt={e.title}/>
          </div>
          <div className="color-offer">
          </div>
          <div className="text-offer">
            <p className="title-offer">{e.title}</p>
            <p className="subtitle-offer">{e.subtitle}</p>
            <button className="button-offer">SEE MORE</button>
          </div>
        </div>
        )
      })
    }
    <div className="testi-spacer"></div>

    </>
  );
}

export default OfferSection;
