import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import List from "./List";

describe("List component" , () => {
  test("Expect heading to be Courses when type is courses" , () => {
    render(
    <BrowserRouter>
    <List type="courses"/>
    </BrowserRouter>)
    const listHeading = screen.getByTitle("list-heading");
    expect(listHeading).toHaveTextContent(/courses/i); 
  })
  describe("List heading", () => {
    test("Expect heading to be Teachers when type is teachers" , () => {
      render(
      <BrowserRouter>
      <List type="teachers"/>
      </BrowserRouter>)
      const listHeading = screen.getByTitle("list-heading");
      expect(listHeading).toHaveTextContent(/teachers/i); 
    })
    test("Expect a list of li items in the list after fetch" , async() => {
      render(
      <BrowserRouter>
      <List data={[{title: "math"},{title: "biology"}]}type="courses"/>
      </BrowserRouter>)
      const listItems = await screen.findAllByRole("listitem");
      expect(listItems).not.toHaveLength(0); 
    })
  })
  test("Expect all list-items to get a button" , async() => {
    render(
    <BrowserRouter>
    <List data={[{title: "math"},{title: "biology"}]}type="courses"/>
    </BrowserRouter>)
    const listItems = await screen.findAllByRole("listitem");
    const buttons = await screen.findAllByRole("button");
    expect(buttons).toHaveLength(listItems.length); 
  })
})