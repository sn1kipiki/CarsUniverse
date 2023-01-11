import React from "react";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div class="wrapper">
      <div class="head">
        <div class="header_some_info">
          <p class="header_info1">
            Сomfortable <span class="blue_text"> driving</span>
          </p>
          <p class="header_info2">CAR RENTAL</p>
        </div>
      </div>
      <div class="cards">
        <a id="section1"></a>
        <div class="card1">
          <img
            src="http://res2.weblium.site/res/5ebd017955744e0022918f1b/5ebd0de2fd2c730022eb6e4f_optimized_1658_c1442x901-108x67.webp"
            alt="car1"
          />
          <p class="name1">SUVs</p>
          <p class="info1">No obstacles on your way can spoil the trip.</p>
          <a class="btn1" href="/catalog">
            learn more{" "}
          </a>
        </div>
        <div class="card2">
          <img
            src="http://res2.weblium.site/res/5ebd017955744e0022918f1b/5ebd0e4343156a00217273f9_optimized_1600_c1391x791-104x59.webp"
            alt="car2"
          />
          <p class="name2">Sports Cars</p>
          <p class="info2">Feel what true speed and freedom are.</p>
          <a class="btn2" href="/catalog">
            learn more
          </a>
        </div>
        <div class="card3">
          <img
            src="http://res2.weblium.site/res/5ec7d3a15158a70022406b81/5ee23d8ff64360002239995c_optimized_1725_c1583x821-71x73.webp"
            alt="car3"
          />
          <p class="name3">Luxury</p>
          <p class="info3">Comfortable cars for demanding clients.</p>
          <a class="btn3" href="/catalog">
            learn more
          </a>
        </div>
      </div>
      <div class="about_us">
        <a id="section2"></a>
        <div class="card-">
          <h2 class="h2">About Us</h2>
          <p class="under_h1">
            We do everything for you to drive with maximum comfort!
          </p>
          <p class="info">
            Our company has been operating on the US car rental market for over
            10 years. You can rent a car for any purpose, from a business trip
            to conquering roads with difficult surfaces. <br />
            <br />
            We have several pick-up locations in New York so that you can take
            and leave the rented car in any convenient place. FASTCAR offers the
            most favorable conditions for car rental.
          </p>
        </div>
      </div>
      <div class="history_box">
        <a id="section3"></a>
        <div class="conteiner1">
          <h2 class="h2">Brief History</h2>
          <p class="under_h2">
            Our first office was opened 10 years ago. Throughout our history,
            we've worked hard to provide you with maximum comfort when traveling
            and moving around the city.
          </p>
        </div>
        <div class="cards_for_history">
          <div class="card_1">
            <img
              src="http://res2.weblium.site/res/5ebd017955744e0022918f1b/5ebd5d46a6c77800215eaf8e_optimized_1322_c1322x412-0x0_flop.webp"
              alt="history1"
            />
            <div class="text_align1">
              <p class="year">2010</p>
              <p class="info">
                Our CEO came up with the idea of creating a rental company with
                budget cars. We started with two used cars that were kept in the
                founder’s garage.
              </p>
            </div>
          </div>

          <div class="card_2">
            <img
              src="http://res2.weblium.site/res/5ebd017955744e0022918f1b/5ebd5f576ecbd30022d9da39_optimized_1684_c1560x587-91x25.webp"
              alt="history2"
            />
            <div class="text_align2">
              <p class="year2">2012</p>
              <p class="info2">
                The first expansion of FASTCAR took place. Customers were
                interested in renting cars, so we started to buy used cars in
                good condition and expanded the fleet to 15 cars.
              </p>
            </div>
          </div>

          <div class="card_3">
            <img
              src="http://res2.weblium.site/res/5ea7dd6a3e22d80022c1fdbe/5eaa9bf680f012002253ee44_optimized_1322_c1322x527-0x0.webp"
              alt="history3"
            />
            <div class="text_align3">
              <p class="year3">2015</p>
              <p class="info3">
                We opened new rental segments - business class and SUVs. We
                bought 5 new cars for each segment. Jaguar XJ, Ford Mustang GT,
                BMW 7-series joined our fleet.
              </p>
            </div>
          </div>

          <div class="card_4">
            <img
              src="http://res2.weblium.site/res/5ea7dd6a3e22d80022c1fdbe/5eaa9d93187773002236511e_optimized_1323_c1323x576-0x0.webp"
              alt="history4"
            />
            <div class="text_align4">
              <p class="year4">2019</p>
              <p class="info4">
                We completely reoriented to premium car rental. A segment of
                sports cars was added, we bought 4 sports cars including Ferrari
                430 Italia and Aston Martin Valkyrie.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------- */}
      <div class="price_box">
        <a id="section4"></a>
        <div class="text_pb">
          <p class="h2_pb">Clear Pricing</p>
          <p class="under_h2pb">
            You pay not for the model of the car but for its class. We offer not
            only the best luxury cars but also the most favorable conditions for
            any rental period.
          </p>
        </div>
        <div class="cards_pb">
          <div class="card_pb1">
            <div class="name_model">
              <p class="model_name">— SUVs</p>
            </div>
            <div class="price_card1">
              <p class="price_c1">
                <span class="dolar">$</span>150
              </p>
            </div>
            <div class="on_day">
              <p class="day_c1">per day</p>
            </div>
            <div class="list1">
              <ul>
                <li>
                  <p id="text_li">Ford Everest</p>
                </li>
                <li>
                  <p id="text_li">Nissan X-Trail</p>
                </li>
                <li>
                  <p id="text_li">Suzuki Escudo or similar</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card_pb2">
            <div class="img"></div>
            <div class="text_c2">
              <div class="name_mode2">
                <p class="model_name2">— LUXURY</p>
              </div>
              <div class="price_card2">
                <p class="price_c2">
                  <span class="dolar2">$</span>390
                </p>
              </div>
              <div class="on_day2">
                <p class="day_c2">per day</p>
              </div>
              <div class="list2">
                <ul>
                  <li>
                    <p id="text_li2">Lexus SX350</p>
                  </li>
                  <li>
                    <p id="text_li2">Jaguar XF</p>
                  </li>
                  <li>
                    <p id="text_li2">Audi A6 or similar</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card_pb3">
            <div class="name_model">
              <p class="model_name">— SUVs</p>
            </div>
            <div class="price_card1">
              <p class="price_c1">
                <span class="dolar">$</span>500
              </p>
            </div>
            <div class="on_day">
              <p class="day_c1">per day</p>
            </div>
            <div class="list1">
              <ul>
                <li>
                  <p id="text_li">McLaren Senna</p>
                </li>
                <li>
                  <p id="text_li">Porsche 911 GT2 RS</p>
                </li>
                <li>
                  <p id="text_li">Ford GT or similar</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="cars_month">
        <div class="header_text">
          <p class="orange_text">— best offer</p>
          <h2 class="h2_cm">Cars of the Month</h2>
          <p class="under_h2_cm">
            Contact us right now and take advantage of the special offer. Get
            10% when renting any car of the month, for any period!
          </p>
        </div>
        <div class="cards_month">
          <div class="card1_cm">
            <img
              src="https://bmwguide.ru/wp-content/uploads/2015/03/bmw-i8-01-small-1024x538.jpg"
              alt="car1"
            />
            <p class="name1_cm">BMW i8</p>
            <p class="under_name1">
              This car is for true speed fans! If you love a fast ride, this car
              is for you! Feel all its force!
            </p>
          </div>

          <div class="card2_cm">
            <img
              src="https://res2.weblium.site/res/5ebd017955744e0022918f1b/5ec3956ac5af2b00214fc798_optimized_1430_c1029x1261-342x350.webp"
              alt="car2"
            />
            <p class="name2_cm">Ford Everest</p>
            <p class="under_name2">
              This SUV is perfect for both the city and off-road. It has a
              spacious baggage compartment.
            </p>
          </div>

          <div class="card3_cm">
            <img
              width="100px"
              height="100px"
              src="https://res2.weblium.site/res/5ebd017955744e0022918f1b/5ec2a61167f33f0021e7a85d_optimized_1417_c1020x1273-397x340.webp"
              alt="car3"
            />
            <p class="name3_cm">Lexus SX350</p>
            <p class="under_name3">
              It's an elegant and comfortable business class car. Perfect for
              driving to a business meeting.
            </p>
          </div>
        </div>
        <div class="fofm_position">
          <div class="box">
            <a id="section5"></a>
            <form action="index.php" method="post">
              <div class="form_text">
                <div class="request">— SEND A REQUEST</div>
                <div class="question">Need to Rent a Luxury Car?</div>
                <div class="under_qeustion">
                  Complete the form below and we'll contact you as soon as
                  possible!
                </div>
              </div>
              <div class="form_input">
                <input
                  name="username"
                  type="text"
                  placeholder="Enter your full name"
                />
                <input
                  name="phonenumber"
                  type="tel"
                  placeholder="Enter your phone number"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your e-mail"
                />
                <input
                  name="massage"
                  type="text"
                  placeholder="Type your massage"
                />
              </div>
              <button type="submit" class="button_form">
                REQUEST A QUOTE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
