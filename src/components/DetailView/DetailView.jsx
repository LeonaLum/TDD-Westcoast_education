import { useParams, useLocation } from "react-router-dom";
import { useContext, useEffect,useState  } from "react";
import StatesContext from "../../store/states-context";

import Button from "../Button/Button";



const DetailView = () => {

  const location = window.location;
  const {id} = useParams();

  const type = location.pathname.includes("courses") ? "courses" :
  location.pathname.includes("teachers") ? "teachers" :
  "";

  const [objectData, setObjectData] = useState("inget");

  const fetchData = () => {
    fetch(`http://localhost:8000/${type}/${id}`)
    .then(response => response.json())
    .then(data => setObjectData(data));
  }

  useEffect(() => {
    fetchData();
  }, [])


  const handleKey = (key) => {
    return key.toLowerCase();
  }

  return ( 
    <section className="detail-view" data-testid="DetailView-component">
        <ul className="detail-list">
        <h2>Details about the {type == "courses" ? "course" : "teacher"}</h2>

        {objectData && (
        <li className="list-item" key={objectData.id}>
             {
             Object.entries(objectData).map((entry, index) => (
              entry[0] == "id" ? "":
              (
                <p>
                  <strong>
                  <span>{handleKey(entry[0])}</span>:
                  </strong> 
                  <span className="info">{entry[1]}</span>
                </p>
              )
             ))
             }
          <footer className="li-footer" data-testid="footer">
            {type == "courses" &&
              <Button  text={"Take course"} data-testid="footer-button"  />
            }
           </footer>
        </li>
        )
      }
        </ul>

    </section>
   );
}
 
export default DetailView;