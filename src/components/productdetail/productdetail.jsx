import './productdetail.css'
import logoName from '../../assets/SonA12.png';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {app} from "../../firebase/firebase"
import { useState, useEffect } from 'react';



function Productdetail  (props) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const storage = getStorage(app);
    var storageRef = ref(storage, "white.jpg"); 
    if(props.image != null) {
      storageRef = ref(storage, props.image);
    }
    console.log(props.productId);
    getDownloadURL(storageRef).then((url) => {
      setImageUrl(url);
    });
  }, [props.image]);
  return(
    <Link state={{ nameProduct: props.nameProduct, price : props.price, image: props.image, description:props.description, productId: props.productId }} to="/product-detail">
    <div className="wrappperProductdetail" style={{ backgroundImage: `url(${imageUrl})` }}>
     
      <div className='Background-ProducdetailtName'>  
      <div className='ProducdetailtName'>
      <div className='Name-product'>{props.nameProduct}</div>
      <div className='Price-product'>${props.price}</div>
      <div className='wrapper-button'>
        <div className="wrapper-star">
            <i class="StarIcon far fa-star"></i>
            <i class="StarIcon far fa-star"></i>
            <i class="StarIcon far fa-star"></i>
            <i class="StarIcon far fa-star"></i>
            <i class="StarIcon far fa-star"></i>
        </div>
        <div className="wrapper-love">
        
            <button className="button love"><i class="Buttondetail far fa-heart"></i></button>
            <button className="button cart"><i class="Buttondetail fas fa-shopping-cart"></i></button>

        </div>
        </div></div>
      </div>
     
     

    </div>
    </Link>
  );
}
  export default Productdetail;