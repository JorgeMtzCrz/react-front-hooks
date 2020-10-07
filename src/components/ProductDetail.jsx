import React from 'react'
import useSWR from 'swr'
import NavbarSolid from './NavbarSolid';
import { ALL_FETCHER } from '../services/products_service'
import Footer from './Footer';
import BannerEmail from './BannerEmail';
import {MyContext} from '../CartContext'
import bullet from '../assets/images/bullet.png'
import LoadScreen from './Loading'
import ReactTooltip from 'react-tooltip'

// USER STYLING
import '../assets/css/prodDetail.css'
import { Link } from 'react-router-dom';
import tooltip from '../assets/images/toolquest.svg'

// IMAGES

const baseURL = 'http://localhost:3000/product'
//const baseURL = 'https://bestdealtest.herokuapp.com/product'
//const baseURL = 'https://bestdealapp.herokuapp.com/product'



function ProductDetail(props) {
  const { data } = useSWR(`${baseURL}/detail/${props.match.params.id}`, ALL_FETCHER)
  const product = data && data.product
  if(!product) return <LoadScreen />
  return (
    <>
    <NavbarSolid/>
    <div className="discount-green">
      <p>RESERVE ONLINE, PAY IN PERSON</p>
      <p>Shop eco. Shop Smart</p>
    </div>
    <div className="detail-product">
      <MyContext.Consumer>

          {({addToCart})=>
              <>
                <div className="detail-box">
                  <div className="image-detail">
                    <img src={product.img} alt={product.title}/>
                  </div>
                  <div className="title-detail">
                    <p className="title-price">${product.price}</p>
                    <p className="title-product">{product.title}</p>
                    <p className="description-product">{product.description}</p>
                    <div className="tooltip-content">
                    <button onClick={()=> addToCart(product)} className="button-detail-product">RESERVE</button>
                    <p data-tip="Reserve your product, come to the store, pay and pick them up. <br> Or choose a delivery date and time and pay when
                     you receive them. <br> We will soon have an online payment solution that avoids fraud."><img style={{margin:'10px'}} width="25px" src={tooltip} alt={"tooltip-src"+product._id} id={`tooltip`} /> </p>
                    </div>
                    <ReactTooltip effect="solid" multiline/>
                    <br />
                    <p>If you're curious about our payment options <Link to="/payment-options">CLICK HERE</Link> to learn more. </p>
                  </div>
                </div>
                <div className="specification-product">
                  <div className="specifications">
                    SPECIFICATIONS
                  </div>
                  <div className="specifications-bullets">
                      {product.specifications.map(e=>{
                        return(
                          <div className="bullet">
                           <img src={bullet} width="10%" alt={e.titleSpecification}/>
                           <p className="title-bullet">{e.titleSpecification.toUpperCase()}</p>
                           <p className="description-bullet">{e.descriptionProduct}</p>
                          </div>
                        )

                      })}
                  </div>
                </div>
              </>
          }
      </MyContext.Consumer>

    </div>
    <BannerEmail/>
    <Footer/>

    </>
  );
}

export default ProductDetail;
