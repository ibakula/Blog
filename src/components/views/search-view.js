
export default function SearchView(props) {
  return (
    <div>
      {props.results.length == 0 && <div>Sorry, no matches have been found for your inquiry.</div>}
      {props.results.map(result => {
        return (
          <div>{result}</div>
        );
      })}
    </div>
  );
};