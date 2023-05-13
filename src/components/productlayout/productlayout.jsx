import './productlayout.css';
import logoName from '../../assets/SonA12.png';






function productlayout  (props) {
  return(
    <div className="wrappperProduct" >
     
      <button className='ProductName'> {props.nameProduct} xin chào</button>
     
     

    </div>
  );
}
  export default productlayout;