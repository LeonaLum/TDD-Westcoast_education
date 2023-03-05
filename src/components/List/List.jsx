import { useContext } from "react";
import Button from "../Button/Button";
import StatesContext from "../../store/states-context";

const List = ({data, type }) => {

  let {navigateToPage} = useContext(StatesContext);

  return ( 
     <ul className="list" data-testid="List-component">
      <h2 title="list-heading">
        {type ? type.toUpperCase() : "List"}
      </h2>

      {data && data.map((item, i) => (
        <li className="list-item" key={item["id"]}>
             {
             Object.keys(item).map((key, index) => (
              key == "title" ? (<h3>{item[key]}</h3>) :
              key == "startDate" ? (<p>{`${key}: ${item[key]}`}</p>) :
              key == "firstName" ? (<h3>{`${item["firstName"]} ${item["lastName"]}`}</h3>) :
              key == "skills" ? (
              <p>{`${key}: ${item["skills"]}`}</p>
              ) : ("")
             ))
             
             }

          <footer className="li-footer">
            <Button 
              text="See more" 
              func={() => navigateToPage(`/${type}/${item.id}`)}
              minWidth="100%"
            />
           </footer>
        </li>
        ))
      }
     </ul>
   );
}
 
export default List;