import React from "react"
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from "react-google-places-autocomplete"

// const ButtonWraper = styled("div")(() => ({
//   paddingTop: "30px",
//   input: {
//     height: "40px",
//   },
// }))

interface NewMapProps {
  onChange: any
}

const NewMap: React.FC<NewMapProps> = (props) => {
  const { onChange } = props
  const handleSelect = (place: any) => {
    console.log(place)
    geocodeByPlaceId(place.value.place_id)
      .then((results: any[]) => getLatLng(results[0]))
      .then(({ lat, lng }: any) => {
        onChange(place.label, lat, lng)
      })
  }
  return (
    <div className='pt-1 search-location-input'>
      <GooglePlacesAutocomplete
        selectProps={{
          onChange: handleSelect,
          placeholder: "Search Places...",
        }}
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      />
    </div>
  )
}

export default NewMap
