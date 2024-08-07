import "./BestSeller.css";
interface bestCard {
  imageUrl: string;
  name: string;
  price: string;
  offer: string;
  discount: string;
  advantage: string;
  test: string;
}
const BestSeller = (props: bestCard) => {
  return (
    <div className="best-bar">
      <div>
        <div className="test">{props.test}</div>
        <img className="image-best" src={props.imageUrl} alt="" />

        <h5 className="best-addvantage">{props.advantage}</h5>
        <div>
          <h5>{props.name}</h5>
        </div>
        <div className="best-container">
          <h6 className="best-price">{props.price}</h6>
          <del>
            <p className="best-offer">{props.offer}</p>
          </del>
          <p className="bestd-color">{props.discount}</p>
          <button className="best-button">Addtocard</button>
        </div>
      </div>
    </div>
  );
};
export default BestSeller;
