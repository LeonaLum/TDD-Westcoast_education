import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddForm from "./AddForm";

describe("AddForm component", () => {

  const setup = () => render(<AddForm />);
  
  test("Form includes heading with textcontent Add new", () => {
    setup();
    const heading = screen.getByRole("heading", {name: /Add new/i});
    expect(heading).toBeInTheDocument();
  });
  test("Form includes legend text with: what do you want to add?", () => {
    setup();
    const legendElement = screen.getByRole("heading", {name: /What do you want to add?/i});
    expect(legendElement).toHaveTextContent("What do you want to add?");
  });
  test("Show add course form when clicking on radiobutton for courses", () => {
    setup();
    const buttonCourse = screen.getByLabelText(/A course/i);
    userEvent.click(buttonCourse);
    const coursesForm = screen.getByTestId("course-section");
    expect(buttonCourse).toBeInTheDocument();
    expect(coursesForm).toBeInTheDocument();
  });
  test("Show add teacher form when clicking on radiobutton for teacher", () => {
    setup();
    const buttonTeacher = screen.getByLabelText(/A teacher/i);
    userEvent.click(buttonTeacher);
    const teacherForm = screen.getByTestId("teacher-section");
    expect(buttonTeacher).toBeInTheDocument();
    expect(teacherForm).toBeInTheDocument();
  });

})