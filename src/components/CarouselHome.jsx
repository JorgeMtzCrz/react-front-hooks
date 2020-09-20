import React, {useEffect} from 'react'
import useSWR from 'swr'
import { Carousel } from 'react-responsive-carousel';
import { ACTIVE_URL, ALL_FETCHER } from '../services/header_service'


// USER STYLING
import '../assets/css/home.css'


function CarouselHome(props) {

  const { data, mutate } = useSWR(ACTIVE_URL, ALL_FETCHER)
  const headers = data && data.headers

  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  if(!headers)return <h4>Loading...</h4>
  return (
    <>
    <Carousel autoPlay showThumbs={false} showStatus={false} className="mb-5 mt-5">
    {
      headers.map((e,i)=>{
        return(
        <div key={i} className="carousel-group-container" >
            <div className="carousel-img-mobile" >
              <img alt={e.subtitle} width="100%" src={e.img} />
            </div>
            <div className="carousel-container">
              <h2 className="title-header">{e.title}</h2>
              <h3 className="subtitle-header">{e.subtitle}</h3>
              <p className="description-header">{e.description}</p>
              <button className="button-header">SEE MORE</button>
            </div>
            <div className="carousel-img" >
              <img alt={e.subtitle} width="100%" src={e.img} />
            </div>
        </div>
        )
      })
    }
    </Carousel>

    </>
  );
}

export default CarouselHome;
