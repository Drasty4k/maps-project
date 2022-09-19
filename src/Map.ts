// Instructions to every other class
// on how they can be an argument to "addMarker"
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const mapDiv = document.getElementById(divId) as HTMLElement;

    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });
  }
}
