import "./productCard.css";
interface ProductTypes {
  imageUrl: string;
  name: string;
  price: string;
  offer: string;
  discount: string;
  bestSeller: string;
  playback: string;
  raiting: string;
}
const ProductCard = (props: ProductTypes) => {
  return (
    <div className="box_container">
      <div>
        <div className="text">{props.bestSeller}</div>
        <img className="imaged" src={props.imageUrl} />

        <p className="play-bar">{props.playback}</p>
        <div>
          <h5 className="name-container">{props.name}</h5>
        </div>
        <div>
          <div className="first-bar">
            <h5 className="pice-card">{props.price}</h5>

            <del>
              <p className="del-bar">{props.offer}</p>
            </del>
            <p className="discount-bar">{props.discount}</p>
            <button className="add-bar">Addtocart</button>

            {/* <p>{props.raiting}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
