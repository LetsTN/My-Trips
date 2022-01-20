import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'My favorite place',
      slug: 'my-favorite-place',
      location: {
        lat: -42.4201,
        lng: -69.6969
      }
    }

    render(<Map places={[place]} />)

    expect(screen.getByTitle(/my favorite place/i)).toBeInTheDocument()
  })

  it('should render with the marker in correct places', () => {
    const place1 = {
      id: '1',
      name: 'My favorite place',
      slug: 'my-favorite-place',
      location: {
        lat: -42.4201,
        lng: -69.6969
      }
    }

    const place2 = {
      id: '2',
      name: 'My second favorite place',
      slug: 'my-second-favorite-place-2',
      location: {
        lat: -23.5489,
        lng: -46.6388
      }
    }

    render(<Map places={[place1, place2]} />)

    expect(screen.getByTitle(/my favorite place/i)).toBeInTheDocument()
    expect(screen.getByTitle(/my second favorite place/i)).toBeInTheDocument()
  })
})
