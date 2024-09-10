<template>
    <v-container>
      <v-row>
        <v-col class="pa-0 pt-3 ps-3" cols="12" md="6">
          <v-card class="px-4 py-4 " elevation="0">
                <div :class="mdAndDown ? 'flex-column text-center' : ''"     class="d-flex justify-space-between ">
                    <span class="text-subtitle-2 font-weight-medium mt-2">Not a member? You can book too.</span>
                    <v-btn class="rounded-lg font-weight-medium" size="small" slim="0" text=" Become a member and save a lot!"  flat outlined  style=" border: 1px solid #123873; color:#123873; text-transform:none">
                
                </v-btn>
                </div>
            <v-card-text class="pa-0 py-3">
              <span class="text-caption">Enter your cell phone number and click on "Send code". A unique code will be sent to you. Enter this code and apply your member price.</span>
            </v-card-text>
  
            <v-form>
            <label class="text-subtitle-2 font-weight-medium" for="#">Phone Number</label>
            <div   :class="mdAndDown ? 'flex-column' : ''" class="d-flex my-2">
                    <v-text-field  max-width="270px" id="text-field" class="rounded-lg" hide-details="true" variant="outlined" outlined  style="border: 1px solid black;"></v-text-field>
                    <v-btn :max-width="mdAndDown ? '270px' : '100px'" :class="mdAndDown ? '' : 'ms-2'"   class="rounded-lg" id="button">Send Code</v-btn>

            </div>
           
                <label class="text-subtitle-2 font-weight-medium" for="#">Code</label>
                <div :class="mdAndDown ? 'flex-column' : ''" class="d-flex my-2">
                  <v-text-field max-width="150px" class="rounded-lg" hide-details="true"   variant="outlined"   style="border: 1px solid black;"></v-text-field>
                  <v-btn :max-width="mdAndDown ? '150px' : '100px'" :class="mdAndDown ? '' : 'ms-2'"  class="rounded-lg" id="button" >Check Code</v-btn>
                </div>
            </v-form>
          </v-card>
        </v-col>
  
        <v-col cols="12" md="6">
          <v-card class="pa-1 mx-1" elevation="0">
            <v-card-title class="text-h6 font-weight-bold text-center" style="color:#123873">Trip Details</v-card-title>
            <v-card-text class="pa-0">
              <div class="d-flex justify-space-between" v-for="(itemDetail, index) in tripDetails" :key="index">
                <span class="text-caption my-1">{{ itemDetail.name }}:</span> 
                <span class="text-subtitle-2 font-weight-bold my-1">{{ itemDetail.info }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useDisplay } from 'vuetify'
  const {mdAndDown} = useDisplay()
  const name = "TripDetails"
  const tripDetails = [
          { name: 'Boat', info: 'Vantage 22' },
          { name: 'Passengers', info: '40' },
          { name: 'Date', info: '1/9/2024' },
          { name: 'Time', info: '06:00 - 08:00' },
          { name: 'Total Minutes', info: '120' },
          { name: 'Lake', info: 'Memphrémagog' },
          { name: 'Dock', info: 'North' },
          { name: 'City', info: 'Hồ Chí Minh' }
        ]
  </script>
  
  <style scoped>
#button {
    text-transform: none;
    background: #BBBBBB;
    color:  white; 
    height: 30px;
    
} 

::v-deep .v-field__field {
  height: 30px;
  max-height: 30px;
}

::v-deep .v-text-field input {
  padding-top: 0;
  padding-bottom: 24px;
}



  </style>
  