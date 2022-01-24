import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

// usa o dynamic imports para não incluir um módulo no lado do servidor (SSR)
// fazendo isso nesse caso pq o mapa tem o window, que funciona só no browser
// sem isso vai quebrar falando que o window n existe (mas existe, só no browser)
const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
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

  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={[place1, place2]} />
    </>
  )
}
