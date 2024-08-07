import "./newstyle.css";
interface newcardTypes {
  imageUrl: string;
  name: string;
  view: string;
}
const NewStyle = (props: newcardTypes) => {
  return (
    <div className="image-style">
      <img src={props.imageUrl} alt="" />
      <div className="box-style">
        <h4 className="name-style">{props.name}</h4>
      </div>
    </div>
  );
};
export default NewStyle;
