/* eslint-disable react/prop-types */
const Org = (props) => {
  return (
    <div className="organization-service org">
      <img src={props.url} alt={props.title} />
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Org;
