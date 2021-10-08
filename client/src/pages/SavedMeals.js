import React from 'react';
import { Container, Row, Col, Carousel, Button, Modal } from 'react-materialize';
import Meal from './Meal';

const SavedMeals = () => {
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Semptember", "October", "November", "December"]

  function getDates(startDate, daysToAdd) {
    var dates = [];
    for (let i = 0; i <= daysToAdd; i++) {
        const currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
        dates.push(days[currentDate.getDay()] + ", " + months[currentDate.getMonth()] + " " + currentDate.getDate());
    }
    return dates;
  }

  const dates = getDates(new Date(), 6);

  return (
    <div>
      <div className="meal-plan-header">
        <p>My Meal Plan</p>
        <Modal
            actions={<Button modal="close" className="waves-effect">Close</Button>}
            trigger={<Button className="waves-effect red lighten-2">+</Button>}
          >
            <Meal />
        </Modal>
      </div>
      <div className="diet-carousel">
        <div className="prev carousel-arrow teal-text">&#10094;</div>
        <Carousel carouselId="meal-plan-swipeable" className="center carousel-div" options={{fullWidth: true, noWrap: true, indicators: false}}>
          {dates.map(date => (
            <div className="teal white-text meal-box" key={date}>
              <h2>{date}</h2>
              <div className="meal-day">
                <Container>
                  <Row>
                    <Col s={12} m={6}>
                      <h3>Breakfast</h3>
                      <p>Ham and Eggs</p>
                    </Col>
                    <Col s={12} m={6}>
                      <h3>Lunch</h3>
                      <p>BLT</p>
                    </Col>
                    <Col s={12} m={6}>
                      <h3>Dinner</h3>
                      <p>Lamp Chops</p>
                    </Col>
                    <Col s={12} m={6}>
                      <h3>Snacks</h3>
                      <p>Banana</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          ))}
        </Carousel>
      <div className="next carousel-arrow teal-text">&#10095;</div>
    </div>
    </div>
  )
}

export default SavedMeals;