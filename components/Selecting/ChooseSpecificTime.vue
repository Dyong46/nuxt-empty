<template>
    <v-container class="pa-4">
   <v-card    class="pa-3 me-1 ">
      <v-row>
        <v-col v-for="(info, index) in infoList" :key="index" cols="12" lg="2"  md="3" sm="4"  >
         <div class="d-flex  ">
          <v-icon  class=" me-1 "  v-if="index === 0 || index === 3">{{ info.icon }}</v-icon>  
          <span class="text-body-1 font-weight-bold">{{ info.name }}</span> 
          <span v-if="index === 0">
               <a class="text-body-1" href="#">{{ info.text }}</a>
          </span>
          <span class="ms-2 text-body-1" v-else> 
            {{ info.text }}
          </span>
         </div>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col v-for="(info2, index2) in infoList2" :key="index2" cols="12"  lg="2"  md="3" sm="4" >
          <div  class="d-flex">
            <strong> {{ info2.name }} </strong> 
                  <span class="text-body-1" v-if="index2 === 0">
            <a class="ms-2" href="#">{{ info2.text }}</a>
           </span>
           <span class="text-body-1 ms-2" v-else> 
            {{ info2.text }}
           </span>
          </div>
                  
        </v-col>
      </v-row>
   
     

        <v-table>
          <thead>
            <tr>
              <th id="table" style="border:none"></th>
              <th class="font-weight-black text-body-1 pl-16" id="table"> Member</th>
              <th class="font-weight-black text-body-1" id="table">Non-member</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(time, index) in times" :key="index">
              <td id="table" style="width: 210px; border-right:2px solid #123873;">
                <v-btn flat class="mx-auto text-lg-subtitle-1 text-xs-caption" height="40px" rounded="lg"  style="border: 2px solid #123873; color:#123873;">
                  <v-icon  size="x-large" class="font-weight-black ">mdi-clock-outline</v-icon>  
                  <span >{{ time }}</span>
                </v-btn>
              </td>
              <td  class="text-subtitle-1 pl-16" id="table">{{ prices[index] }}</td>
              <td class="text-subtitle-1 text-center" id="table">{{ prices[index] }}</td>
            </tr>
          </tbody>
        </v-table>

     
   </v-card>
    </v-container>
  </template>
  
  <script setup>
    
import { useDisplay } from 'vuetify'

const { xs, mdAndDown } = useDisplay() 

const infoList = [
      {icon: "mdi-calendar-month", text: "1/9/2024" },
      {name: 'City' ,text: "Ho Chi Minh" },
      {name: 'Lake', text: " Memphremagog" },

      {icon: "mdi-account", text: "40 Passagers" },
      {name: 'Licenses ', text: 'A'}

    ]
const  infoList2 = [
      {name: 'Boat', text: "Vantage 22" },
      {name: 'Dock', text: " North" },
      {name: 'HP' ,text: " 100" },
      {name: 'Primary',text: "Brown" },
      {name: 'Secondary' ,text: " Brown" }
      ]
const times = [
      "01:10 - 02:00", "06:00 - 08:00", "08:15 - 10:15", 
      "10:30 - 12:30", "12:45 - 14:45", "15:00 - 17:00", 
      "17:15 - 19:15", "19:30 - 21:30"
    ]
const prices = ["87.00$/h", "87.00$/h", "87.00$/h", "87.00$/h", "87.00$/h", "87.00$/h", "87.00$/h", "87.00$/h"]

  </script>
  
  <style scoped>
  .font-weight-bold {
    font-weight: bold;
  }

  #table {
    border: none;
    color: #123873;
  }
  ::v-deep .v-table > .v-table__wrapper > table {
    width: auto;
  }
  </style>
  