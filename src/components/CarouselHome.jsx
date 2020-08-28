import React, {useEffect} from 'react'
import useSWR from 'swr'
import { Carousel } from 'react-responsive-carousel';
import { ACTIVE_URL, ALL_FETCHER } from '../services/header_service'



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
        <div key={i} style={{display: "flex", width:"100%", height:"340px", backgroundColor:"white"}}>
                  <div style={{width:"50%", display:"flex", alignContent:"flexStart", flexDirection:"column"}}>
                    <h2 className="title-header">{e.title}</h2>
                    <h3 className="subtitle-header">{e.subtitle}</h3>
                    <p className="description-header">{e.description}</p>
                    <button className="button-header">SEE MORE</button>
                  </div>
                  <div style={{width:"50%"}}>
                  <img alt="" width="100%" height="350px" src={e.img} />
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
