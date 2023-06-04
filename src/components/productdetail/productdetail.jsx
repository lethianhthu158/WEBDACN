import './productdetail.css'
import logoName from '../../assets/SonA12.png';






function productdetail  (props) {
  return(
    <div className="wrappperProductdetail" >
     
      <button className='ProducdetailtName'> {props.nameProduct} 
      <div className='Name-product'>Black Rouge Air Fit</div>
      <div className='Price-product'>$150.0</div>
      <div className='wrapper-button'>
        <div className="wrapper-star">
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <div className="wrapper-love">
            <button className="button-love"><i class="far fa-heart"></i></button>

        </div>
        </div></button>
     
     

    </div>
  );
}
  export default productdetail;