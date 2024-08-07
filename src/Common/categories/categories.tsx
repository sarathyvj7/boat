import "./categories.css";
interface categoriesTypes {
  imagePic: string;
  budsName: string;
}

const CateGories = (props: categoriesTypes) => {
  return (
    <div className="gat-bar">
      <img src={props.imagePic} alt="" />
      <p className="buds-bar">{props.budsName}</p>
    </div>
  );
};
export default CateGories;
