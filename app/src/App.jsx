import Form from "./component/Form";
import LandingPage from "./component/Home";

import { Route, Routes } from "react-router";
import LandingPage from "./component/Home";
import Button from "./component/Button";
import Badge from "./component/Badge";
import {Card} from "./component/Card";
import Form from "./component/Form";
//import Calculator from "./component/Calculator";

function App(){
  return(
    <>
      {/* <div>
        <Calculator />
      </div> */}
      <Routes>
          <Route path="/" element={<LandingPage />}>
              <Route path="button" element={<Button />} />
              <Route path="badge" element={<Badge />} />
              <Route path="card" element={<Card />} />
          </Route>
      </Routes>
    
    </>
  )
}


export default App;