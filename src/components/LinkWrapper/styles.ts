import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100; // o do leaflet é 1000, e ele tem q ficar acima então...
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;

  svg {
    transition: color 0.3 ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
