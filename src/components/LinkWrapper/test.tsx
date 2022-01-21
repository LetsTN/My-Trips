import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/">LINK</LinkWrapper>)

    const children = screen.getByRole('link', { name: /link/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/')
  })
})
