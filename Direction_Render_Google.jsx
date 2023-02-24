 async function calculateRoute() {
     
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
          origin: `${userGet.pickup_point}`,
          destination:`${userGet.destination}`,
          // eslint-disable-next-line no-undef
          travelMode:  google.maps.TravelMode.DRIVING,
        })
        console.log(results)
        setDirectionsResponse(results)
        // setDistance(results.routes[0].legs[0].distance.text)
        // setDuration(results.routes[0].legs[0].duration.text)
      }
      useEffect(()=>{
calculateRoute()
console.log("ronak")
      },[userGet])
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey:"AIzaSyB2oQ55HQnBvIYio0GoNwucmPRKzoxusaw" ,
        libraries: ["places"],
      });
    
      if (!isLoaded) {
        return <>....Loading</>;
      }
    
