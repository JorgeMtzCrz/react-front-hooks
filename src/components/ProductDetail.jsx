import React from 'react'
import useSWR from 'swr'
import NavbarSolid from './NavbarSolid';
import { ALL_HDTVS, ALL_FETCHER } from '../services/products_service'
import Footer from './Footer';
import BannerEmail from './BannerEmail';
import {MyContext} from '../CartContext'
import bullet from '../assets/images/bullet.png'

// USER STYLING
import '../assets/css/prodPages.css'

// IMAGES
import stock from '../assets/images/lap.png'
import { Link } from 'react-router-dom';

//const baseURL = 'http://localhost:3000/product'
const baseURL = 'https://bestdealtest.herokuapp.com/product'



function ProductDetail(props) {
  const { data } = useSWR(`${baseURL}/detail/${props.match.params.id}`, ALL_FETCHER)
  const product = data && data.product
  if(!product) return <h4>Loading...</h4>
  console.log(product)
  return (
    <>
    <NavbarSolid/>
    <div className="discount-green">
    <p>50% OFF in all store!</p>
    <p>SHOP NOW!</p>
    </div>
    <div className="detail-product">
      <MyContext.Consumer>

          {({addToCart})=>
              <>
                <div className="detail-box">
                  <div className="image-detail"> <img height="410px" width="720px" src={product.img} alt={product.title}/> </div>
                  <div className="title-detail">
                    <p className="title-price">${product.price}</p>
                    <p className="title-product">{product.title}</p>
                    <p className="description-product">{product.description}</p>
                    <button onClick={()=> addToCart(product)} className="button-detail-product">RESERVE</button>
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
                           <img width="80px" src={bullet} alt={e.titleSpecification}/>
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
