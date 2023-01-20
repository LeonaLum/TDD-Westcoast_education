import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DetailView from "./DetailView";

describe("DetailView component" , () => {
  test("Expect Detailview to render a li item with details after data is fetched" , async () => {
    render(<DetailView />)
    const details = await screen.findByRole("listitem");
    expect(details).toBeInTheDocument();
  })
  

})