import React, { Component } from 'react';
import Widget from './Widget';
import { Row, Container, Form, Col } from 'react-bootstrap';
import Spinner from './Spinner';
import axios from 'axios';
import { weatherEndPoint, weatherKey } from '../config/endPoints';
import { LIGHT_THEME, DARK_THEME } from '../config/constant';

class Editor extends Component {
  state = {
    isLoading: true,
    theme: LIGHT_THEME,
    weatherData: '',
    title: '',
    temperatureType: 'celsius',
    windDisplay: 'display'
  };

  componentDidMount() {
    // check if the data has been stored before or not
    const weatherData = JSON.parse(localStorage.getItem('weatherData'));
    if (!weatherData) this.getWeather();
    else this.loadWeather(weatherData);
  }

  // use callback function to fetch weather data based on the former lat/lon
  getWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        axios
          .get(
            `${weatherEndPoint}lat=${lat}&lon=${lon}&units=metric&appid=${weatherKey}`
          )
          .then(res => {
            // remove spinner and store into localStorage after fetching
            this.setState({ weatherData: res.data, isLoading: false });
            localStorage.setItem('weatherData', JSON.stringify(res.data));
          })
          .catch(() => alert('Error fetching new weather'));
      });
    } else {
      alert('Browser does not support Geolocation api');
    }
  };

  // get weather from localStorage
  loadWeather = weatherData => {
    this.setState({ weatherData: weatherData, isLoading: false });
  };

  // handle multiple changes based on event name
  handleChange(e) {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  // change theme
  handleSwitch(e) {
    let currentTheme = this.state.theme;
    let newTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    this.setState({ theme: newTheme });
  }

  render() {
    return this.state.isLoading ? (
      <Spinner />
    ) : (
      <Container className={`container p-3 m-xs-0 ${this.state.theme}`}>
        <Row>
          <Col className="col" xs={12} sm={5}>
            <Form.Group onChange={e => this.handleChange(e)}>
              <Form.Label className="h3 m-3 font-weight-bold">Title</Form.Label>
              <Form.Control
                name="title"
                maxLength="25"
                type="text"
                placeholder="title of widget"
              />
            </Form.Group>
            <Form.Group className="m-3" onChange={e => this.handleChange(e)}>
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

            <Form.Group className="m-3" onChange={e => this.handleChange(e)}>
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
              <Form.Label className="font-weight-bold mt-3  ">
                Light / Dark theme
              </Form.Label>
              <Form.Row className="ml-2">
                <Form.Check
                  onChange={e => this.handleSwitch(e)}
                  type="switch"
                  id="theme-switch"
                  label=""
                />
              </Form.Row>
            </Form.Group>
          </Col>
          <Col xs={12} sm={7} className="py-5">
            <Widget data={this.state} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Editor;
