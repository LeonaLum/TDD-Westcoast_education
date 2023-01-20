import {getByTestId, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

describe("Home component" , () => {
  test("Show Home component", () => {
    render(<Home />)
    const homeComponent = screen.getByTestId("Home-component");
    expect(homeComponent).toBeInTheDocument();
  })
  

})