import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button component", () => {
  const setup = () => render(<Button />);

  test("Button should display text it is being passed", () =>{
    render(<Button text="button text"/>)
    const buttonElement = screen.getByRole("button");
    const displayedText = buttonElement.textContent;
    expect(displayedText).toBe("button text");
  })

});

  