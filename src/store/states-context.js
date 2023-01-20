import { createContext, useState, useEffect } from "react";

const StatesContext = createContext({
  courses: [],
  teachers: []
});

export const StatesContextProvider = (props) => {
  const [courses, setCoursesData] = useState("");
  const [teachers, setTeachersData] = useState("");
  const [showModal, setShowModal] = useState(false);


  const fetchData = () => {
    fetch('http://localhost:8000/courses')
    .then(response => response.json())
    .then(data => setCoursesData(data));

    fetch('http://localhost:8000/teachers')
    .then(response => response.json())
    .then(data => setTeachersData(data));
  }

  useEffect(()=>{
    if(courses === "" || teachers === ""){
      fetchData();
    }
  }, [])


  return(
    <StatesContext.Provider value={{
      courses,
      teachers,
      showModal,
      setShowModal,
      fetchData
    }}>
      {props.children}
    </StatesContext.Provider>
  )
}

export default StatesContext;