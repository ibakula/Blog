
export default function SearchView(props) {
  if (props.init) {
    return (
      <div>Loading data...</div>
    );
  }

  return (
    <div>
      {props.results.map(result => {
        return (
          <div>{result}</div>
        );
      })}
    </div>
  );
};