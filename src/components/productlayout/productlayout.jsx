import './productlayout.css';
import logoName from '../../assets/SonA12.png';






function productlayout  (props) {
  return(
    <div className="wrappperProduct" >
     
      <button className='ProductName'> {props.nameProduct} BLACK ROUGE V5</button>
     
     

    </div>
  );
}
  export default productlayout;