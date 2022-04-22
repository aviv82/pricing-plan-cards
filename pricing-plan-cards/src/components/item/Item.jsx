import "./Item.css";

export const Item = ({ sub }) => {
  return sub.map((ele, index) => (
    <div key={index} className="icon1">
      <i className="gg-check-o"></i>
      <h4>{ele}</h4>
    </div>
  ));
};
