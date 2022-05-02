// import React from "react";
// import {
//   Row,
//   Col,
//   Card,
//   Form,
//   Button,
//   InputGroup,
//   FormControl,
//   DropdownButton,
//   Dropdown,
// } from "react-bootstrap";
// import { useEffect, useState, useDispatch } from "react";
// import {  useSelector } from "react-redux";
// import { createItemsAction } from "../../../../store/actions/itemAction";
// import { useNavigate } from "react-router-dom";

// import Aux from "../../../../hoc/_Aux";
// function CreateItems({ a }) {
//   const [itemName, setItemName] = useState("");
//   const [unit, setUnit] = useState("");
//   const [dimensions, setDimensions] = useState(false);
//   const [weight, setWeight] = useState(false);
//   const [manufacturer, setManufacturer] = useState(false);
//   const [brand, setBrand] = useState(false);
//   const [selingPrice, setSelingPrice] = useState(false);
//   const [costPrice, setCostPrice] = useState(false);
//   const [description, setDescription] = useState(false);
//   const [openingStock, setOpeningStock] = useState(false);
//   const [reorderPoint, setReorderPoint] = useState(false);
//   const [preferedVendor, setPreferedVendor] = useState(false);

//   const dispatch = useDispatch();

//   const itemsCreate = useSelector((state) => state.itemsCreate);
//   const { loading, error, cource } = itemsCreate;
//   const navigate = useNavigate();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setError(false);

//     dispatch(
//       createItemsAction(
//         itemName,
//         unit,
//         dimensions,
//         weight,
//         manufacturer,
//         brand,
//         selingPrice,
//         costPrice,
//         description,
//         openingStock,
//         reorderPoint,
//         preferedVendor
//       )
//     );
//     if (
//       !itemName ||
//       !unit ||
//       !dimensions ||
//       !weight ||
//       !manufacturer ||
//       !brand ||
//       !selingPrice ||
//       !costPrice ||
//       !description ||
//       !openingStock ||
//       !reorderPoint ||
//       !preferedVendor
//     ) {
//       setError(true);
//     } else {
//       navigate("/items");
//     }
//   };

//   useEffect(() => {}, []);
//  const items = () => {
//   return (
//     <Aux>
//       <Row>
//         <Col>
//           <Card>
//             <Card.Header>
//               <Card.Title as="h5">Add New Item</Card.Title>
//             </Card.Header>
//             <Card.Body>
//               <Row>
//                 <Col md={6}>
//                   <Form>
//                     <Form.Group controlId="formBasicEmail">
//                       <Form.Label>Item Name</Form.Label>
//                       <Form.Control
//                         type="name"
//                         placeholder="Enter Item Name"
//                         onChange={(e) => setItemName(e.target.value)}
//                       />
//                     </Form.Group>

//                     <Form.Group controlId="formBasicPassword">
//                       <Form.Label>Unit</Form.Label>
//                       <Form.Control
//                         type=""
//                         placeholder="Unit"
//                         onChange={(e) => setUnit(e.target.value)}
//                       />
//                     </Form.Group>
//                     <Form.Group controlId="formBasicPassword">
//                       <Form.Label>Brand</Form.Label>
//                       <Form.Control
//                         type=""
//                         placeholder="Brand"
//                         onChange={(e) => setBrand(e.target.value)}
//                       />
//                     </Form.Group>
//                     <Form.Group controlId="exampleForm.ControlSelect1">
//                       <Form.Label>Selling Price</Form.Label>
//                       <Form.Control
//                         type=""
//                         placeholder="Sell"
//                         onChange={(e) => setSelingPrice(e.target.value)}
//                       />
//                     </Form.Group>
//                     <Form.Group controlId="exampleForm.ControlSelect1">
//                       <Form.Label>Description</Form.Label>
//                       <Form.Control
//                         as="textarea"
//                         rows="2"
//                         onChange={(e) => setDescription(e.target.value)}
//                       />
//                     </Form.Group>
//                     <Form.Group controlId="exampleForm.ControlSelect1">
//                       <Form.Label>Reorder Point</Form.Label>
//                       <Form.Control
//                         type=""
//                         placeholder="Reorder"
//                         onChange={(e) => setReorderPoint(e.target.value)}
//                       />
//                     </Form.Group>

//                     <Button
//                       variant="primary"
//                       variant="solid"
//                       bg="#0D74FF"
//                       color="white"
//                       _hover={{}}
//                       onClick={submitHandler}
//                     >
//                       Submit
//                     </Button>
//                   </Form>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="exampleForm.ControlInput1">
//                     <Form.Label>Dimensions</Form.Label>
//                     <Form.Control
//                       type=""
//                       placeholder="Dimension"
//                       onChange={(e) => setDimensions(e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group controlId="exampleForm.ControlSelect1">
//                     <Form.Label>Weight</Form.Label>
//                     <Form.Control
//                       type=""
//                       placeholder="Weight"
//                       onChange={(e) => setWeight(e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group controlId="exampleForm.ControlTextarea1">
//                     <Form.Label>Manufacturer</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows="2"
//                       onChange={(e) => setManufacturer(e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group controlId="exampleForm.ControlSelect1">
//                     <Form.Label>Cost Price</Form.Label>
//                     <Form.Control
//                       type=""
//                       placeholder="Cost"
//                       onChange={(e) => setCostPrice(e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group controlId="exampleForm.ControlSelect1">
//                     <Form.Label>Opening Stock</Form.Label>
//                     <Form.Control
//                       type=""
//                       placeholder="Stock"
//                       onChange={(e) => setOpeningStock(e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group controlId="exampleForm.ControlSelect1">
//                     <Form.Label>Prefered Vendor</Form.Label>
//                     <Form.Control
//                       type=""
//                       placeholder="Vendor"
//                       onChange={(e) => setPreferedVendor(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Aux>
//   );
// }
// }

// export default items

import React from 'react'
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { useEffect, useState, useDispatch } from "react";
import {  useSelector } from "react-redux";
import { createItemsAction } from "../../../../store/actions/itemAction";
import { useNavigate } from "react-router-dom";

// import Aux from "../../../../hoc/_Aux";

export const items = () => {
  return (
    <div>items</div>
  )
}


