import "./TopPicks.css";
interface topickscard {
  imageUrL: string;
  name: string;
  price: string;
  discount: string;
  offer: string;
  collection: string;
  important: string;
}
const TopPicks = (props: topickscard) => {
  return (
    <div className="box-card">
      <div>
        <div className="tips-imt">{props.important}</div>

        <img className="image-tips" src={props.imageUrL} alt="" />
        <p className="collection-tips">{props.collection}</p>
      </div>
      <div className="tips-name">
        <h5>{props.name}</h5>
      </div>
      <div className="tips-bar">
        <h5>{props.price}</h5>
        <del className="tips-del">
          <p>{props.discount}</p>
        </del>
        <p className="tips-offer">{props.offer}</p>
        <button className="tips-add">Add To Cart</button>
      </div>
    </div>
  );
};
export default TopPicks;
