import product from "./product"
import Name from "./components/Name"
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import Card from 'react-bootstrap/Card';
import { CardBody,Button } from "react-bootstrap";

function App() {  
  const firstName="Moadth"
  return (
    <div className="App d-flex full-height mt-5" style={{alignItems:"center" ,flexDirection:"column"}}>
      <Card style={{width:"18rem", boxShadow:"4px 4px 10px black", borderRadius:"10px"}}>
        <Image/>
        <Card.Body>
          <Name/>
          <Description/>
          <Price/>
          <div className="d-flex justify-content-center mt-3">
            <Button variant="primary">Buy Now</Button>
          </div>
        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        {firstName?(
          <>
            <p style={{fontWeight:"bold"}}>Hello, {firstName}!</p>
            <img src="/wave.png" style={{width:"5vw"}}/>)
          </>):
          (<p>Hello, there!</p>)}
      </div>
    </div>
  );
}

export default App;
