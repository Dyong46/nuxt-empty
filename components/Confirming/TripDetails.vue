<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="px-4 py-4" elevation="0">
                <div class="d-flex justify-space-between flex-wrap">
                    <span class="text-caption mt-2"><strong>Not a member? You can book too.</strong></span>
                    <v-btn size="small" slim="0" text=" Become a member and save a lot!" class="rounded-lg " flat outlined  style=" border: 2px solid #123873; color:#123873">
                
                </v-btn>
                </div>
            <v-card-text class="pa-0 py-3">
              <span class="text-caption">Enter your cell phone number and click on "Send code". A unique code will be sent to you. Enter this code and apply your member price.</span>
            </v-card-text>
  
            <v-form>
            <label for="#">Phone Number</label>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field class="rounded-lg"  hide-details="true" variant="solo" outlined density="comfortable" style="border: 2.5px solid black"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" >
                    <v-btn  id="button"  class=" mt-1">Send Code</v-btn>

                </v-col>
            </v-row>
           
                <label for="#">Code</label>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field class="rounded-lg" hide-details="true"  max-width="210px" variant="solo" outlined density="comfortable" style="border: 2.5px solid black;"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
              <v-btn id="button"  class=" mt-1">Check Code</v-btn>
                    </v-col>
                </v-row>
            </v-form>
          </v-card>
        </v-col>
  
        <v-col cols="12" md="6">
          <v-card class="px-4 py-4" elevation="0">
            <v-card-title class="text-h5 text-center" style="color:#123873">Trip Details</v-card-title>
            <v-card-text>
              <div class="d-flex justify-space-between" v-for="(itemDetail, index) in tripDetails" :key="index">
                {{ itemDetail.name }}: <strong>{{ itemDetail.info }}</strong>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "TripDetails",
    data() {
      return {
        tripDetails: [
          { name: 'Boat', info: 'Vantage 22' },
          { name: 'Passengers', info: '40' },
          { name: 'Date', info: '1/9/2024' },
          { name: 'Time', info: '06:00 - 08:00' },
          { name: 'Total Minutes', info: '120' },
          { name: 'Lake', info: 'Memphrémagog' },
          { name: 'Dock', info: 'North' },
          { name: 'City', info: 'Hồ Chí Minh' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
    #button {
        text-transform: none;
        background: #BBBBBB;
        color:  white;
        
    }



  </style>
  