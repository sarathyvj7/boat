import { useLocation } from "react-router-dom";
import { HeadPhones } from "../../Common/Data/HeadPhones";
import "./Info.css";
const Info = () => {
  let location = useLocation();
  let data = HeadPhones.filter((item) => item.id === location.state.key);

  console.log(data);

  if (data.length > 0) {
    return (
      <section className="product-info">
        <div className="info-bars">
          <img className="image-info" src={data[0].imageurl} alt="" />
          <div>
            <h5 className="name-info">{data[0].name}</h5>
            <p>
              Wireless Earbuds with ANC up to 32dB, Quad Mics ENx™ Tech, 60
              Hours Playback
            </p>
            <div className="price-offer">
              <p>{data[0].price}</p>
              <del>
                <p>{data[0].discont}</p>
              </del>

              <p>{data[0].offer}</p>
            </div>
            <div>
              <p>{data[0].colour}</p>
            </div>
            <div>
              <h5>{data[0].delivery}</h5>
            </div>
            <div className="container-info">
              <div className="inb">
                <input className="input-info" type="text" />
                <button className="button-info">Change</button>
              </div>
              <br />
              <h5 className="freed-info">{data[0].freed}</h5>
            </div>
            <br />
            <div className="info-box">
              <div className="box1info">{data[0].items}</div>
              <div className="box2info"></div>
              <div className="box3info"></div>
            </div>
          </div>
        </div>
      </section>
    );
  } else return <div>hello</div>;
};
export default Info;
