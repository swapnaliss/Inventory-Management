import React from "react";
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

import Aux from "../../../../hoc/_Aux";

class FormsElements extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Add New Item</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                          type="name"
                          placeholder="Enter Item Name"
                        />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Unit</Form.Label>
                        <Form.Control type="" placeholder="Unit" />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="" placeholder="Brand" />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Selling Price</Form.Label>
                        <Form.Control type="" placeholder="Sell" />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="2" />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Reorder Point</Form.Label>
                        <Form.Control type="" placeholder="Reorder" />
                      </Form.Group>
                      

                      <Button variant="primary">Submit</Button>
                    </Form>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Dimensions</Form.Label>
                      <Form.Control type="" placeholder="Dimension" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Weight</Form.Label>
                      <Form.Control type="" placeholder="Weight" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Manufacturer</Form.Label>
                      <Form.Control as="textarea" rows="2" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Cost Price</Form.Label>
                      <Form.Control type="" placeholder="Cost" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Opening Stock</Form.Label>
                      <Form.Control type="" placeholder="Stock" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Prefered Vendor</Form.Label>
                      <Form.Control type="" placeholder="Vendor" />
                    </Form.Group>
                  </Col>
              
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default FormsElements;
