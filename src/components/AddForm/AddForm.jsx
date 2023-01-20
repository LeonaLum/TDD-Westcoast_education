
import { useState, useContext, useRef } from "react";
import Button from "../Button/Button";
import StatesContext from "../../store/states-context";

import Modal from "../Modal/Modal";

const AddForm = () => {

const [teacher, setTeacher] = useState(false);
const [course, setCourse] = useState(false);

let {showModal, setShowModal, courses, teachers} = useContext(StatesContext);

let firstNameRef = useRef();
let lastNameRef = useRef();
let personalNrRef = useRef();
let emailRef = useRef();
let phoneNrRef = useRef();
let skillsRef = useRef();

let courseNumberRef = useRef();
let titleRef = useRef();
let firstLengthRef = useRef();
let secondLengthRef = useRef();
let descriptionRef = useRef();

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

const validate = () => {

}


const submitData = (e, choice) => {
  e.preventDefault();
  if(choice == "courses"){
    let objPackage = { 
      id: courses.length + 1,
      title: titleRef.current.value,
      courseNumber: courseNumberRef.current.value,
      length: firstLengthRef.current.value + " " + "-" + " " + secondLengthRef.current.value,
      description: descriptionRef.current.value,
      startDate: firstLengthRef.current.value
    }

    fetch(`http://localhost:8000/courses`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(objPackage)
    });
  } 
  else if(choice == "teachers"){
    let objPackage = {
      id: teachers.length + 1,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      personalNr: personalNrRef.current.value,
      email: emailRef.current.value,
      phoneNr: phoneNrRef.current.value,
      skills: skillsRef.current.value}

    fetch(`http://localhost:8000/teachers`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(objPackage)    
    });
  }
  setShowModal(true);
  formRef.current.reset();
}

  return ( 
    <>
    {showModal && <Modal message="The data was saved" btnMessage="ok"/>}
    <form className="add-form" ref={formRef} data-testid="AddForm-component">
      <h2>Add new</h2>
      <section className="form-section">
        <legend role="heading">What do you want to add?</legend>
          <section className="field-section">
              <label htmlFor="teacher">A Teacher</label>
              <input type="radio" name="choice" id="teacher" value="teacher" onClick={() => choice("teacher")}/>
          </section>
          <section className="field-section">
              <label htmlFor="course">A course</label>
              <input type="radio" name="choice" id="course" value="course" onClick={() => choice("course")} />
          </section>
      </section>

      {course && 
        <section className="form-section" data-testid="course-section">
          <h3>Add a new course</h3>
          <section className="field-section">
              <label htmlFor="courseNumber">Coursenumber:</label>
              <input type="text" id="courseNumber" name="courseNumber" ref={courseNumberRef}/>
          </section>
          <section className="field-section">
              <label htmlFor="title">Course title:</label>
              <input type="text" id="title" name="title" ref={titleRef}/>
          </section>
          <section className="field-section">
              <label htmlFor="length">Course length:</label>
              <input type="date" id="length" name="length" ref={firstLengthRef}/>
              <input type="date" id="length" name="length" ref={secondLengthRef}/>
          </section>
          <section className="field-section">
              <label htmlFor="description">Description of the course:</label>
              <input type="text" id="description" name="description" ref={descriptionRef}/>
          </section>
          <footer className="form-footer">
            <Button text="Submit" func={(e) => submitData(e, 
              "courses")}/>
          </footer>
        </section>
      }

      {teacher && 
        <section className="form-section" data-testid="teacher-section">
          <h3>Add a new teacher</h3>
          <section className="field-section">
              <label htmlFor="firstName">Firstname:</label>
              <input type="text" id="firstName" name="firstName" ref={firstNameRef}/>
          </section>
          <section className="field-section">
              <label htmlFor="lastName">Lastname:</label>
              <input type="text" id="lasName" name="lastName" ref={lastNameRef}/>
          </section>
          <section className="field-section">
              <label htmlFor="personalNr">Personal number:</label>
              <input type="text" id="personalNr" name="personalNr" ref={personalNrRef}/>
          </section>
          <section className="field-section">
              <label htmlFor="email">email:</label>
              <input type="text" id="email" name="email" ref={emailRef}/>
          </section>
          <section className="field-section">
              <label htmlFor="phoneNr">Phone number:</label>
              <input type="text" id="phoneNe" name="phoneNr" ref={phoneNrRef}/>
          </section>
          <section className="field-section">
              <label htmlFor="skills">Skills:</label>
              <input type="text" id="skills" name="skills" ref={skillsRef}/>
          </section>
          <footer className="form-footer">
            <Button 
            text="Submit" 
            func={(e) => submitData(e, "teachers")}
            disabled={validate()}/>
          </footer>
        </section>
      }

    </form>
    </>
   );
}
 
export default AddForm;