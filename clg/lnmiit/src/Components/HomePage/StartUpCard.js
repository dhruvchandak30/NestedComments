import { Link } from "react-router-dom";
import "./StartUpCard.css";
const StartUpCard = (props) => {
  console.log(props);
  props = props.data;
  return (
    <div className="StartUpCardDiv">
      <img src={props.img} alt={props.title}></img>
      <h1 className="StartUpCardHeading">{props.title}</h1>
      <p className="StartUpCardDesc">{props.Desc}</p>
      <Link to={props.url} className="StartupVisitWebsite">Visit Website</Link>
    </div>
  );
};
export default StartUpCard;
