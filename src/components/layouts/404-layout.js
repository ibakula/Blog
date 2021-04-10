export default function PageNotFound() {
  return (
    <div style={{height:"25em"}} className="w-100 bg-dark pt-sm-5 pt-3 pb-sm-5 pb-5 text-center">
      <h3 className="display-4 text-warning">Page not found!</h3>
      <p className="display-5 text-white">The page you have requested could not be found.</p>
    </div>
  );
}

export default function ContentNotFound() {
  return (
    <Row>
      <div class="w-100 pl-3 pr-3 pt-3 pb-3">
        <p class="lead">Sorry, there are currently no new articles added...</p>
      </div>
    </Row>
  );
}