import { render, screen } from "@testing-library/react"

import { Address } from "./index"

describe('<Address>', () => {
  test('should render address component'), () => {
    render(<Address/>);

    const addressElement = screen.getByRole('address');
    expect(addressElement).toBeInTheDocument();

    const addressText = screen.getByText(/400 University Drive Suite 200 Coral Gables, FL 33134 USA/i);
    expect(addressText).toBeInTheDocument();
  }
})