import PropTypes from 'prop-types';

export default function LoaderStripe(props) {
  const multipliedWidth = 5 * ('widthMultiplier' in props ? props.widthMultiplier : 1);
  const multipliedHeight = 1.7 * ('heightMultiplier' in props ? props.heightMultiplier : 1);

  const style = { 
    width: (multipliedWidth + "em"),
    height: (multipliedHeight + "em"),
    backgroundColor: ('bgColor' in props ? props.bgColor : "#eeeeee")
  };

  'style' in props && Object.assign(style, props.style); 

  return (
    <div style={style} className={'className' in props ? props.overrideClassName == true ? `${props.className}` : `${props.className} mt-3` : "mt-3"} />
  );
};

LoaderStripe.propTypes = {
  widthMultiplier: PropTypes.number,
  heightMultiplier: PropTypes.number,
  bgColor: PropTypes.string
};