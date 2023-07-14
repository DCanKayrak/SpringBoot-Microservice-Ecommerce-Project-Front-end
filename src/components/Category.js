import {React,useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function Category() {

  const { slug } = useParams();
  const [category, setCategory] = useState({});

  function getCategory(slug) {
    let url = '/api/v1/categories/' + slug;

    fetch(url)
      .then(result => result.json())
      .then(result => setCategory(result))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getCategory(slug);
  },[slug]);

  return (
    <div>
      <div className='category-container'>
        <div className='category-title'>
          <p className='text-black'>{category.name}</p>
        </div>
        <hr></hr>
        <div className='category-items'>
        { 
            category.products && category.products.map((product) => (
              <div className='card-container'>
                <a href={'/product/' + product.slug}>
                  <div class="card">
                    <div class="card-img"><img src={product.imageUrl} className='.img' height="190px"></img></div>
                    <div class="card-title">{product.name}</div>
                    <hr class="card-divider" />
                    <div className="card-footer">

                      <div className="card-price"><div className='card-oldPrice'><span className='text-lined'>{product.price} TL</span>- <span className='card-discount'>-%{product.discountRate}</span></div> {product.afterDiscount} <span>TL</span></div>
                      <button className="card-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))
          }
          </div>
      </div>
    </div>
  )
}
