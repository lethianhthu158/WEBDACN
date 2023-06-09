import './Headerproduct.css';
import logoName from '../../assets/SonA12.png';






function Headerproduct  (props) {
  return(
    <div className="HeaderProduct" >
     
      <button className='HeaderProductName'> {props.nameProduct} Lip</button>
     
     

    </div>
  );
}
  export default Headerproduct;