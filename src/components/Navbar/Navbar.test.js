import {render, screen} from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from 'react-router-dom';

describe("Navbar component" , () => {
  test("Expect navbar to be in the document" , () => {
     render(<BrowserRouter><Navbar/></BrowserRouter>)
     const navbarComponent = screen.getByRole("navigation");
     expect(navbarComponent).toBeInTheDocument();
  })
  test("Expect navbar to have a home link" , () => {
    render(<BrowserRouter><Navbar/></BrowserRouter>)
    const homeLink = screen.getByRole("link", {name: /home/i});
    expect(homeLink).toBeInTheDocument();
  })
  test("Expect navbar to have a courses link" , () => {
    render(<BrowserRouter><Navbar/></BrowserRouter>)
    const coursesLink = screen.getByRole("link", {name: /courses/i});
    expect(coursesLink).toBeInTheDocument();
  })
  test("Expect navbar to have a teachers link" , () => {
    render(<BrowserRouter><Navbar/></BrowserRouter>)
    const teachersLink = screen.getByRole("link", {name: /teachers/i});
    expect(teachersLink).toBeInTheDocument();
  })
  test("Expect navbar to have a add link" , () => {
    render(<BrowserRouter><Navbar/></BrowserRouter>)
    const addLink = screen.getByRole("link", {name: /add course or teacher/i});
    expect(addLink).toBeInTheDocument();
  })
})