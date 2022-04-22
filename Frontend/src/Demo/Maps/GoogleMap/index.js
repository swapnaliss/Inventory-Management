import React from 'react';
import {Row, Col, Card, Form, InputGroup, Button} from 'react-bootstrap';
import {Map, Marker, GoogleApiWrapper, InfoWindow, Polyline, Polygon}  from 'google-maps-react';

import Aux from "../../../hoc/_Aux";

const polygon = [
    { lat: 21.2105052, lng: 72.8653491 },
    { lat: 21.2206445, lng: 72.8704506 },
    { lat: 21.2183091, lng: 72.8631228 }
];

class GoogleMap extends React.Component {

    state = {
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false,
        position: null
    };

    onMarkerClick = (props, marker) =>
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });

    onInfoWindowClose = () =>
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });

    onMapClicked = () => {
        if (this.state.showingInfoWindow)
            this.setState({
                activeMarker: null,
                showingInfoWindow: false
            });
    };

    componentDidMount() {
        this.renderAutoComplete();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps.map) this.renderAutoComplete();
    }

    onSubmit(e) {
        e.preventDefault();
    }

    renderAutoComplete() {
        const { google, map } = this.props;

        if (!google || !map) return;

        const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
        autocomplete.bindTo('bounds', map);

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();

            if (!place.geometry) return;

            if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
            else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }

            this.setState({ position: place.geometry.location });
        });
    }


    render() {
        const { position } = this.state;

        return (
          <Aux>
            <Row>
              <Col xl={6}>
                  <Card>
                    <Card.Body>
                      <h6 className="mb-4">Daily Sales</h6>
                      <div className="row d-flex align-items-center">
                        <div className="col-9">
                          <h3 className="f-w-300 d-flex align-items-center m-b-0">
                            <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{" "}
                            $249.95
                          </h3>
                        </div>

                        <div className="col-3 text-right">
                          <p className="m-b-0">50%</p>
                        </div>
                      </div>
                      <div
                        className="progress m-t-30"
                        style={{ height: "7px" }}
                      >
                        <div
                          className="progress-bar progress-c-theme"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </Card.Body>
                </Card>
              </Col>
              <Col xl={6}>
                <Card></Card>
              </Col>
              <Col xl={6}>
                <Card></Card>
              </Col>
              <Col xl={6}>
                <Card></Card>
              </Col>
              <Col xl={6}>
                <Card></Card>
              </Col>
              <Col xl={6}>
                <Card></Card>
              </Col>
            </Row>
          </Aux>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'
})(GoogleMap);