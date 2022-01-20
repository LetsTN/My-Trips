type Place = {
  id: string
  name: string
  slug: string
  location: {
    lat: number
    lng: number
  }
}

export type MapProps = {
  places?: Place[]
}
