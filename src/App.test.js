import {render, screen} from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

describe("App component" , () => {
  describe("Routing", () => {
    const setup = () => render(<BrowserRouter><App /></BrowserRouter>);
    test.each`
    path              |      componentTestId
    ${"/"}            |      ${"Home-component"}
    ${"/courses"}     |      ${"List-component"}
    ${"/teachers"}    |      ${"List-component"}
    ${"/courses/:id"} |      ${"DetailView-component"}
    ${"/teachers/:id"}|      ${"DetailView-component"}
    ${"/add"}         |      ${"AddForm-component"}


    `(
      "show $componentTestId when path is $path",
      ({path, componentTestId}) => {
        window.history.pushState({}, "", path);
        setup();
        const elem = screen.queryByTestId(componentTestId);
        expect(elem).toBeInTheDocument()
      }
    );
  })
})