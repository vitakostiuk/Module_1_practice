const Pokemon = props => {
  console.log(props);
  return (
    <div>
      <img src={props.url} alt={props.title} width="100" />
      <h2>Имя: {props.title}</h2>
      <p>ID: {props.id}</p>
    </div>
  );
};

export default Pokemon;
