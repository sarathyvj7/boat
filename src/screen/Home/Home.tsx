import { Button, Carousel, Tab, Tabs } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";

import image1 from "../../assets/home.webp.jpg";
import "./Home.css";
import image2 from "../../assets/home2.jpg";
import image3 from "../../assets/homepage3.jpg";
import image4 from "../../assets/homepage4.jpg";
import ProductCard from "../../Common/Productcard/ProductCard";
import CateGories from "../../Common/categories/categories";

import NewStyle from "../../Common/newstyle/newstyle";
import BestSeller from "../../Common/bestseller/BestSeller";
import TopPicks from "../../Common/TopPicks/TopPicks";
import ExploreBest from "../../Common/explore/exploreBest";

const Home = () => {
  const array = [
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745",
      name: "Nirvana Ion",
      price: " ₹1,999",
      offer: " ₹ 7990",
      discount: "75%off",
      bestSeller: "✍Engraving Available",
      playback: "120 Hoursplayback",
      raiting: "5.0 | 77",
    },
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
      name: "Airdopes131",
      price: "₹999",
      offer: " ₹2990",
      discount: "73%off",
      bestSeller: "✍Engraving Available",
      playback: "42 Hoursplayback",
      raiting: "",
    },
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
      name: "Airdopes161",
      price: "₹999",
      offer: " ₹ 2490",
      discount: "64%off",
      bestSeller: "✍Engraving Available",
      playback: "40 Hoursplayback",
      raiting: "",
    },
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141.png?v=1703145765",
      name: "Airdopes141",
      price: "₹999",
      offer: " ₹ 4490 ",
      discount: "76%off",
      bestSeller: "✍Engraving Available",
      playback: " 42Hoursplayback",
      raiting: "",
    },
  ];
  const categories = [
    {
      imagePic:
        "https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
      budsName: "True wireless Earbuds",
    },
    {
      imagePic:
        "https://www.boat-lifestyle.com/cdn/shop/files/Neckbands_bc6343f4-622f-4ebd-bb36-205643c3bf78_small.png?v=1684842854",
      budsName: "Neckbands",
    },
    {
      imagePic:
        "https://www.boat-lifestyle.com/cdn/shop/files/Smartwatches_88f12bcf-24bd-4e3a-aacb-ecc204f62179_small.png?v=1684842853",
      budsName: "Smart Watches",
    },
    {
      imagePic:
        "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854",
      budsName: "Wireless Headphones",
    },
    {
      imagePic:
        "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Speaker_small.png?v=1684842854",
      budsName: "Wirles Speakers",
    },
    {
      imagePic:
        "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Headphones_small.png?v=1684842854",
      budsName: "Wired Headphones",
    },
    {
      imagePic:
        "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Earphones_small.png?v=1684842854",
      budsName: "Wired Earphones",
    },
  ];
  const explorebest = [
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/280_lr.png?v=1721292483",

      name: "Airdopes 280Anc",
      price: "₹1,229",
      offer: "₹6,999",
      discount: "81% off",
      noisecollection: "noisecollection",
      bestSeller: "✍Engraving Available",
    },
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/SPACE_LR.png?v=1721232197",

      name: "Nirvana Space",
      price: "₹1,999",
      offer: "₹7,999",
      discount: "75% off",
      noisecollection: "noisecollection",
      bestSeller: "✍Engraving Available",
    },
    {
      imageUrl:
        "https://www.boat-lifestyle.com/cdn/shop/files/Artboard1-3_e352783b-418d-485e-be36-47134a6599c7_300x.png?v=1721238348",

      name: "Rockez 255 Z plus",
      price: "₹1,299",
      offer: "₹4,990",
      discount: "74 %off",
      noisecollection: "50Hrsplayback",
      bestSeller: "✍Engraving Available",
    },
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD161_Elite_Main_1.png?v=1721116186",

      name: "Airdopes 161 elite space",
      price: "₹1,499",
      offer: "₹6,999",
      discount: "79% off",
      noisecollection: "noisecollection",
      bestSeller: "✍Engraving Available",
    },
  ];

  const topPick = [
    {
      imageUrL:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ION_ANC__1.jpg?v=1703228258",
      name: "Nirvana Ion ANC ",
      price: "₹2,499",
      discount: "₹9,999",
      offer: "75%",
      collection: "Noise Cancellation",
      important: "✍Engraving Available",
    },
    {
      imageUrL:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745",
      name: "Nirvana Iron",
      discount: "₹1,999",
      price: "₹7,990",
      offer: "75%",
      collection: "12Hours Playback",
      important: "✍Engraving Available",
    },
    {
      imageUrL:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
      name: "Airdopes 131",
      price: "₹899",
      discount: "₹2990",
      offer: "70%",
      collection: "60 Hoursplayback",
      important: "✍Engraving Available",
    },
    {
      imageUrL:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917",
      name: "Airdopes 131pro",
      price: "₹1,149",
      discount: "₹2,990",
      offer: "62%",
      collection: "40Hours playback",
      important: "✍Engraving Available",
    },
  ];
  const newstyle = [
    {
      imageUrl:
        "https://www.boat-lifestyle.com/cdn/shop/files/shreyas-chronos-new.png?v=1696843687",
      name: "For Fitness",
      view: "saada",
    },
    {
      imageUrl:
        "https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349",
      name: "For Parties",
      view: "saada",
    },
    {
      imageUrl:
        "https://www.boat-lifestyle.com/cdn/shop/files/Yjaiswal_1.png?v=1717055950",
      name: "For Work",
      view: "saada",
    },
    {
      imageUrl:
        "https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658",
      name: "For Audiophlies",
      view: "saada",
    },
  ];
  const Seller = [
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Supreme_1.jpg?v=1711262453",
      name: "Airdopes Supreme",
      price: "₹1,499",
      offer: "₹5,990",
      discount: "75%",
      addvantage: "50hours Playback",
      test: "✍Engraving Available",
    },
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call_2.webp?v=1698984630",
      name: "Storm call 2",
      price: "₹999",
      offer: "₹6,999",
      discount: "86%",
      addvantage: "BT Calling",
      test: "✍Engraving Available",
    },
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917",
      name: "Airdopes 131 pro",
      price: "₹1,149",
      offer: "₹2,990",
      discount: "62%",
      addvantage: "45Hours Playback",
      test: "✍Engraving Available",
    },
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Airdopes-381.jpg?v=1682576552",
      name: "Airdopes 381",
      price: "₹2,099",
      offer: "₹4,990",
      discount: "56%",
      addvantage: "20Hours Playback",
      test: "✍Engraving Available",
    },
  ];
  return (
    <main>
      <section>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="main_images"
              src="https://www.boat-lifestyle.com/cdn/shop/files/SR-WEB_3_1600x.jpg?v=1721791435"
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="main_images"
              src="https://www.boat-lifestyle.com/cdn/shop/files/261-WEB_1600x.jpg?v=1722234620"
              alt="Second slide"
            />
            {/* <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="main_images"
              src="https://www.boat-lifestyle.com/cdn/shop/files/MONSOON-SALE-WEB_1_1440x.jpg?v=1721750339"
              alt="Third slide"
            />
            {/* <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100main_images"
              src={image4}
              alt="fourth slide"
            />
            {/* <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        ;
      </section>
      <section className="deals">
        <div className="information">
          <p className="style1">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123"
              alt=""
            />
            <p>
              <span className="war"> 1 year</span> Warranty
            </p>
          </p>
          <p className="style2">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123"
              alt=""
            />
            <h5 className="offer-bar">
              {" "}
              7-day{" "}
              <span
                className="span1
            "
              >
                Replacement
              </span>
            </h5>
          </p>
          <p className="style3">
            {" "}
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123"
              alt=""
            />
            <h5 className="offer-bar"> Free express Delivery*</h5>
          </p>
          <p className="style4">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123"
              alt=""
            />{" "}
            <h5 className="offer-bar"> GSt Billing</h5>
          </p>
        </div>
      </section>

      <div className="main2">
        <h5 className="hr">Summer Sale</h5>
        <img
          className="summer-sale"
          src="https://www.boat-lifestyle.com/cdn/shop/files/Strip_Web-2_1600x.png?v=1721822576"
          alt=""
        />
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {array.map((item) => {
          return (
            <ProductCard
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              offer={item.offer}
              discount={item.discount}
              bestSeller={item.bestSeller}
              playback={item.playback}
              raiting={item.raiting}
            />
          );
        })}
      </div>
      <br />
      <div>
        <h3>Shop by Categories</h3>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          font: "15px",
        }}
      >
        {categories.map((item: any) => {
          return (
            <CateGories imagePic={item.imagePic} budsName={item.budsName} />
          );
        })}
      </div>
      <div>
        <div className="view-bar">
          <h4>Top Picks For You</h4>
          <a href="viewall">
            viewall <FaArrowRight />
          </a>
        </div>

        <div>
          {" "}
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="New Launches" title="Explore Bestsellers">
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {explorebest.map((item: any) => {
                  return (
                    <ExploreBest
                      imageUrl={item.imageUrl}
                      name={item.name}
                      price={item.price}
                      discount={item.discount}
                      bestSeller={item.bestSeller}
                      offer={item.offer}
                      noisecollection={item.noisecollection}
                      // bestSeller={item.bestSeller}
                      // playback={item.playback}
                      // raiting={item.raiting} // noisecollection={item.noisecollection}
                    />
                  );
                })}
              </div>
            </Tab>
            <Tab eventKey=" Top Picks For You" title=" Top Picks For You">
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {topPick.map((item) => {
                  return (
                    <TopPicks
                      imageUrL={item.imageUrL}
                      name={item.name}
                      price={item.price}
                      discount={item.discount}
                      offer={item.offer}
                      collection={item.collection}
                      important={item.important}
                    />
                  );
                })}
              </div>
            </Tab>
            <Tab eventKey="Recently Viewd" title="Recently Viewd"></Tab>
          </Tabs>
        </div>
      </div>
      <div>
        <div />
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {newstyle.map((item: any) => {
          return (
            <NewStyle
              imageUrl={item.imageUrl}
              name={item.name}
              view={item.view}
            />
          );
        })}
        ;
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h4>Best Of boAt</h4>
        <h5>Best Seller</h5>
        <div style={{ display: "flex", justifyContent: "space-evenly " }}>
          {Seller.map((item: any) => {
            return (
              <BestSeller
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
                offer={item.offer}
                discount={item.discount}
                advantage={item.addvantage}
                test={item.test}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
