import React, { Component } from 'react';
import Widget from './Widget';
import { Row, Container, Form, Col } from 'react-bootstrap';
import Spinner from './Spinner';
import { LIGHT_THEME, DARK_THEME } from '../config/constant';
import { connect } from 'react-redux';
import {
  changeTitle,
  changeWind,
  changeTemp,
  getWeather,
  loadWeather
} from '../actions/actionCreators';

class Editor extends Component {
  async componentDidMount() {
    const { getWeather, loadWeather } = this.props;
    // check if the data has been stored before or not
    const weatherData = JSON.parse(localStorage.getItem('weatherData'));
    if (!weatherData) {
      await getWeather();
    } else {
      loadWeather(weatherData);
    }
  }

  render() {
    const {
      changeTitle,
      changeWind,
      changeTemp,
      weather: { isLoading }
    } = this.props;
    return isLoading ? (
      <Spinner />
    ) : (
      <Container className={`container  p-3 m-xs-0 ${LIGHT_THEME}`}>
        <Row>
          <Col className="col" xs={12} sm={5}>
            <Form.Group onChange={e => changeTitle(e.target.value)}>
              <Form.Label className="h3 m-3 font-weight-bold">Title</Form.Label>
              <Form.Control
                name="title"
                maxLength="25"
                type="text"
                placeholder="title of widget"
              />
            </Form.Group>
            <Form.Group
              className="m-3"
              onChange={e => changeTemp(e.target.value)}
            >
              <Form.Label className="font-weight-bold">Temperature</Form.Label>
              <Form.Row className="ml-2">
                <Form.Check
                  inline
                  defaultChecked
                  type="radio"
                  label="C"
                  name="temperatureType"
                  value="celsius"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="F"
                  name="temperatureType"
                  value="fahrenheit"
                />
              </Form.Row>
            </Form.Group>
            <Form.Group
              className="m-3"
              onChange={e => changeWind(e.target.value)}
            >
              <Form.Label className="font-weight-bold">Wind</Form.Label>
              <Form.Row className="ml-2">
                <Form.Check
                  inline
                  defaultChecked
                  type="radio"
                  label="On"
                  name="windDisplay"
                  value="display"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Off"
                  name="windDisplay"
                  value="hide"
                />
              </Form.Row>
            </Form.Group>
          </Col>
          <Col xs={12} sm={7} className="py-5">
            <Widget data={this.props.weather} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

const mapDispatchToProps = {
  changeTitle,
  changeWind,
  changeTemp,
  getWeather,
  loadWeather
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
