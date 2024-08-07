import { useNavigate } from "react-router-dom";
import "./ProductDetails.css";
interface viewProducts {
  id?: number;
  imageurl?: string;
  name: string;
  price: string;
  discount: string;
  offer?: string;
  details?: string;
  noisecollection?: string;
  charge?: string;
}
const ProductDetails = (props: viewProducts) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{}}
        onClick={() => {
          navigate("/productdetails", { state: { key: props.id } });
        }}
        className="product-cards "
      >
        <div>
          <img className="vproduct-img" src={props.imageurl} alt="" />
          <p className="noise-bar">{props.noisecollection}</p>
        </div>
        <div className="div-card">
          <h5 className="vpd-name">{props.name}</h5>
          <div className="vdiv">
            <h5>{props.price}</h5>
            <del className="dis-d">{props.discount}</del>
            <p className="off-d">{props.offer}</p>
          </div>
          <div className="small-text">
            <p>{props.details}</p>
            <p>{props.charge}</p>
            <button className="button-bar">Addtocart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
