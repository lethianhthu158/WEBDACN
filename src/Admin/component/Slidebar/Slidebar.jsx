import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import MainDash from '../MainDash/MainDash';
import "./Slidebar.css"
import Logo from "../assets/Logoweb.png";
import ProductManage from '../ProductManage/ProductManage';
import Addproduct from '../AddProduct/AddProduct';
import ProductWarehouse from '../ProductWarehouse/ProductWarehouse';

function Slidebar() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
       
        <Col className="Tab-Sidebar" sm={3}>
          <img className="logo" src={Logo}/>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link className="menuItem" eventKey="first"><i class="fas fa-home-alt"></i>Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="menuItem" eventKey="second"><i class="far fa-list-alt"></i>Bill </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="menuItem" eventKey="third"><i class="fas fa-warehouse"></i>Product </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first"><MainDash/></Tab.Pane>
            <Tab.Pane eventKey="second"><ProductManage/></Tab.Pane>
            <Tab.Pane eventKey="third"><ProductWarehouse/></Tab.Pane>
            
           
            
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Slidebar;