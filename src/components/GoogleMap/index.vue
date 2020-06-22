<template>
  <div>
    <!-- <div>
      <gmap-autocomplete @place_changed="setPlace"> </gmap-autocomplete>
      <v-btn @click="addMarker" color="#e0e0e0">Add</v-btn>
    </div> -->
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
// https://www.digitalocean.com/community/tutorials/vuejs-vue-google-maps
export default {
  name: 'GoogleMap',
  data() {
    return {
      // default to montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 52.0704978, lng: 4.300699899999999 },
      markers: [{ position: { lat: 52.0704978, lng: 4.300699899999999 } }],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
