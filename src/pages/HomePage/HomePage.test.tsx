import { render, screen } from "@testing-library/react"
import HomePage from "./HomePage"

test("renders caption", () => {
  render(<HomePage />)
  const captionElement = screen.getByText(/Home Page/i)
  expect(captionElement).toBeInTheDocument()
})
