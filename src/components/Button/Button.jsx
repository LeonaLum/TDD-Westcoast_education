
let getCustomization = (color, bgColor, minHeight, minWidth, fontSize, fontWeight) => {
  return {
  color: color ? color : "",
  backgroundColor: bgColor ? bgColor : "",
  minHeight: minHeight ? minHeight : "",
  minWidth: minWidth ? minWidth : "",
  fontSize: fontSize ? fontSize : "",
  fontWeight: fontWeight ? fontWeight : ""
  }

}

const Button = ({
  text, func, color, bgColor, 
  minHeight, minWidth, fontSize, fontWeight, disabled}) => {
  return ( 

    <button  className="button" onClick={func}
             disabled={disabled}
             style={getCustomization(color, bgColor, minHeight, minWidth, fontSize, fontWeight)}
          >
      {text ? text : "Button"}
    </button>
   );
}
 
export default Button;