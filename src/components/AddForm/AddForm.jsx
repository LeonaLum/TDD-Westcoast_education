
import { useState, useContext, useRef } from "react";
import Button from "../Button/Button";
import StatesContext from "../../store/states-context";

import Modal from "../Modal/Modal";

const AddForm = () => {

const [teacher, setTeacher] = useState(false);
const [course, setCourse] = useState(false);
const [courseRefs, setCourseRefs] = useState([]);
const [teacherRefs, setTeacherRefs] = useState([]);
const [validationText, setValidationText] = useState(false);
let {showModal, setShowModal, courses, teachers, navigateToPage} = useContext(StatesContext);

let formRef = useRef();

const choice = (choice) => {
  if(choice == "teacher") {
    setTeacher(true);
    setCourse(false);
    return choice;
  }
  else if(choice == "course"){
    setCourse(true);
    setTeacher(false);
    return choice;
  }
}

let postData = (choice, object) => {
  fetch(`http://localhost:8000/${choice}`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(object)    
      }); 
}

let checkInputValues = (choice) => {
     let accepted = true;
     choice.forEach((element) => {
        if(element.value === ""){
          accepted = false
        }
     })
     return accepted
  }


const submitData = (e, choice) => {
  e.preventDefault();
  console.log(courseRefs)
  if(choice == "courses"){
    if(checkInputValues(courseRefs) == true){
      let objPackage = { 
        id: courses.length + 1,
        courseNumber: courseRefs[0].value,
        title: courseRefs[1].value,
        length: courseRefs[2].value + " " + "-" + " " + courseRefs[3].value,
        description: courseRefs[4].value,
        startDate: courseRefs[2].value
      }
      postData(choice, objPackage);  
      setCourseRefs([]);
      formRef.current.reset();
      setShowModal(true);
    }
    else{
      setCourseRefs([]);
      setValidationText(true);
      console.log("we got problems")
    } 
  } 
  if(choice == "teachers"){
    if(checkInputValues(teacherRefs) == true){
      let objPackage = {
        id: teachers.length + 1,
        firstName: teacherRefs[0].value,
        lastName: teacherRefs[1].value,
        personalNr: teacherRefs[2].value,
        email: teacherRefs[3].value,
        phoneNr: teacherRefs[4].value,
        skills: teacherRefs[5].value,
      }
      postData(choice, objPackage); 
      setTeacherRefs([]);
      formRef.current.reset();
      setShowModal(true);
    }   
    else{
      setTeacherRefs([]);
      setValidationText(true);
      console.log("we got problems")
    } 
  }
  
}

  return ( 
    <>
    {showModal && <Modal message="The data was saved!" btnText="ok" func={() => navigateToPage(teacher ? "teachers" : "courses")}/>}
    <form className="add-form" ref={formRef} data-testid="AddForm-component">
      <h2>Add new</h2>
      <section className="form-section">
        <legend role="heading">What do you want to add?</legend>
          <section className="field-section choice">
              <div className="radio-choices">
                <label htmlFor="teacher">A Teacher</label>
                <input type="radio" name="choice" id="teacher" value="teacher" onClick={() => choice("teacher")}/>
              </div>
              <div className="radio-choices border">
                <label htmlFor="course">A course</label>
                <input type="radio" name="choice" id="course" value="course" onClick={() => choice("course")} />
              </div>
          </section>
      </section>

      {course && 
        <section className="form-section" data-testid="course-section">
          <h3>Add a new course</h3>
          <section className="field-section">
              <label htmlFor="courseNumber">Coursenumber:</label>
              <input type="text" 
                     id="courseNumber" 
                     name="courseNumber" 
                     ref={(element) => courseRefs.push(element)}
                     required/>
          </section>
          <section className="field-section">
              <label htmlFor="title">Course title:</label>
              <input type="text" 
                     id="title" 
                     name="title" 
                     ref={(element) => courseRefs.push(element)}
                     required/>
          </section>
          <section className="field-section">
              <label htmlFor="length">Course length:</label>
                <div className="multiple-inputs">
                <input type="date" id="length" name="length" ref={(element) => courseRefs.push(element)} required/>
                <input type="date" id="length" name="length" ref={(element) => courseRefs.push(element)} required/>
              </div>
          </section>
          <section className="field-section description">
              <label htmlFor="description">Description of the course:</label>
              <textarea
                     id="description" 
                     name="description" 
                     ref={(element) => courseRefs.push(element)}
                     />
          </section>
          <footer className="form-footer">
          {validationText && <div className="validation-text">Please fill in all fields!</div>}
            <Button text="Submit" 
                    func={(e) => submitData(e,"courses")}
                    type={"submit"}/>
          </footer>
        </section>
      }

      {teacher && 
        <section className="form-section" data-testid="teacher-section">
          <h3>Add a new teacher</h3>
          <section className="field-section">
              <label htmlFor="firstName">Firstname:</label>
              <input type="text" id="firstName" name="firstName" ref={(element) => teacherRefs.push(element)}
              required maxLength={30}/>
          </section>
          <section className="field-section">
              <label htmlFor="lastName">Lastname:</label>
              <input type="text" id="lasName" name="lastName" ref={(element) => teacherRefs.push(element)}
              required/>
          </section>
          <section className="field-section">
              <label htmlFor="personalNr">Personal number:</label>
              <input type="text" id="personalNr" name="personalNr" ref={(element) => teacherRefs.push(element)}
              required/>
          </section>
          <section className="field-section">
              <label htmlFor="email">email:</label>
              <input type="text" id="email" name="email" ref={(element) => teacherRefs.push(element)}
              required/>
          </section>
          <section className="field-section">
              <label htmlFor="phoneNr">Phone number:</label>
              <input type="text" id="phoneNe" name="phoneNr" ref={(element) => teacherRefs.push(element)}
              required/>
          </section>
          <section className="field-section">
              <label htmlFor="skills">Skills:</label>
              <input type="text" id="skills" name="skills" ref={(element) => teacherRefs.push(element)}
              required/>
          </section>
          <footer className="form-footer">
            <p className="validation-text">{validationText ? "Please fill in all fields!" : ""}</p>
            <Button 
            text="Submit" 
            func={(e) => submitData(e, "teachers")}
            />
          </footer>
        </section>
      }
    </form>
    </>
   );
}
 
export default AddForm;