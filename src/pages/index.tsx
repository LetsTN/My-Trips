import dynamic from 'next/dynamic'

// usa o dynamic imports para não incluir um módulo no lado do servidor (SSR)
// fazendo isso nesse caso pq o mapa tem o window, que funciona só no browser
// sem isso vai quebrar falando que o window n existe (mas existe, só no browser)
const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return <Map />
}
