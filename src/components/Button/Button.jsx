const Button = ({text, func}) => {
  return ( 

    <button  className="button" onClick={func}>
      {text ? text : "Button"}
    </button>
   );
}
 
export default Button;