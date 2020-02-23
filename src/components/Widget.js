import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import { tempConvert, iconConvert } from '../service/helper';
import { weatherImg } from '../config/endPoints';

const Widget = props => {
  // destructing props
  let { weatherData, title, temperatureType, windDisplay } = props.data;
  let {
    name,
    main: { temp },
    weather: [{ icon }],
    wind: { speed }
  } = weatherData;

  let iconSource = iconConvert(icon);
  let temperature = tempConvert(temperatureType, temp);

  return (
    <Card className="shadow rounded mx-auto mx-3 widget-card">
      <Card.Body>
        <Row>
          <Card.Title className="h4 ml-3 font-weight-bold">
            {title ? title : 'title of widget'}
          </Card.Title>
        </Row>
        <Row>
          <Col xs={5}>
            <Image
              className=" widget-card__img mt-3"
              src={`${weatherImg}${iconSource}@2x.png`}
              rounded
            />
          </Col>
          <Col xs={7}>
            <Card.Text className="font-weight-light mt-3 mb-0">
              {name}
            </Card.Text>
            <Card.Text className="font-weight-bolder my-0 widget-card__temperature">
              {temperature}
            </Card.Text>
            <Card.Text>
              {windDisplay === 'hide' ? '' : `Wind  ${speed} m/s`}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Widget;
