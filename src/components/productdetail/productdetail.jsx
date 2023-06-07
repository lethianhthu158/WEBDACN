import './productdetail.css'
import logoName from '../../assets/SonA12.png';
import { Link } from 'react-router-dom';





function productdetail  (props) {
  return(
    <Link className="Link" to="/product-detail">
    <div className="wrappperProductdetail" >
     
      <div className='Background-ProducdetailtName'> {props.nameProduct} 
      <div className='ProducdetailtName'>
      <div className='Name-product'>Black Rouge Air Fit</div>
      <div className='Price-product'>$150.0</div>
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
  export default productdetail;