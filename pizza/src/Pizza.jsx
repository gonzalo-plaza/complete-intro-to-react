const Pizza = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img
        src={props.image ?? "https://picsum.photos/250"}
        alt={props.name}
        width={250}
        height={250}
      />
    </div>
  );
};

export default Pizza;
