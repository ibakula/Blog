import PropTypes from 'prop-types';

export default function LoaderStripe(props) {
  const multipliedWidth = 5 * ('widthMultiplier' in props ? props.widthMultiplier : 1);

  const multipliedHeight = 1.7 * ('heightMultiplier' in props ? props.heightMultiplier : 1);

  
  const style = { 
    width: (multipliedWidth + "em"),
    height: (multipliedHeight + "em"),
    backgroundColor: ('bgColor' in props ? props.bgColor : "#eeeeee")
  };

  return (
    <div style={style} className="mt-3" />
  );
};

LoaderStripe.propTypes = {
  widthMultiplier: PropTypes.number,
  heightMultiplier: PropTypes.number,
  bgColor: PropTypes.string
};