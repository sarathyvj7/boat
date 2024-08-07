import "./exploreBest.css";
interface cardtypes {
  imageUrl: string;
  name: string;
  price: string;
  offer: string;
  discount: string;
  noisecollection: string;
  bestSeller?: string;
}
const ExploreBest = (props: cardtypes) => {
  return (
    <div className="card-bar">
      <p className="bestsel-card">{props.bestSeller}</p>
      <img className="image-card" src={props.imageUrl} alt="" />

      <h5 className="collection-card">{props.noisecollection}</h5>
      <div>
        <h5 className="title-card">{props.name}</h5>
      </div>

      <div className="cardof-bar">
        <h5 className="price-card">{props.price}</h5>
        <del className="del-card">
          <p className="dels-card">{props.offer}</p>
        </del>
        <p className="dis-card">{props.discount}</p>
        <button className="add-card">AddToCart</button>
      </div>
    </div>
  );
};
export default ExploreBest;
