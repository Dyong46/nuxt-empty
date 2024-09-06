<template>
    <v-container class="pa-4">
   <v-card class="pa-3">
      <v-row>
        <v-col  v-for="(info, index) in infoList" :key="index" cols="12" md="3" lg="2">
          <v-icon v-if="index === 0 || index === 3" class="mr-2">{{ info.icon }}</v-icon>  
          <strong> {{ info.name }}</strong> 
           <span v-if="index === 0">
            <a class="text-body-1" href="#">{{ info.text }}</a>
           </span>
           <span class="ms-2 text-body-2" v-else> 
            {{ info.text }}
           </span>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col v-for="(info2, index2) in infoList2" :key="index2" cols="12" md="3" lg="2">
                  <strong> {{ info2.name }} </strong> 
                  <span class="text-body-1" v-if="index2 === 0">
            <a class="ms-2" href="#">{{ info2.text }}</a>
           </span>
           <span class="text-body-1" v-else> 
            {{ info2.text }}
           </span>
        </v-col>
      </v-row>
      
      <v-sheet width="40%">
        <v-row  class="mt-5">
      <v-col cols="12">
        <v-table >
          <thead>
            <tr>
              <th id="table" style="border:none"></th>
              <th class="font-weight-bold" id="table"> Member</th>
              <th class="font-weight-bold" id="table">Non-member</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(time, index) in times" :key="index">
              <td id="table" style="border-right:2px solid #123873">
                <v-btn class="font-weight-bold" rounded="lg" variant="outlined" style="border: 3px solid #123873; color:#123873;">
                    <v-icon size="x-large" class="font-weight-black">mdi-clock-outline</v-icon>  
                     <span class="ms-2">{{ time }}</span>
                </v-btn>
              </td>
              <td class="font-weight-bold" id="table">{{ prices[index] }}</td>
              <td class="font-weight-bold" id="table">{{ prices[index] }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
      </v-sheet>
  
     
   </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        infoList: [
          { icon: "mdi-calendar-month", text: "1/9/2024" },
          {  name: 'City' ,text: "Ho Chi Minh" },
          {   name: 'Lake', text: " Memphremagog" },

          { icon: "mdi-account", text: "40 Passagers" },
          {name: 'Licenses ', text: 'A'}
    
        ],
        infoList2: [
          {name: 'Boat', text: "Vantage 22" },
          {name: 'Dock', text: " North" },
          {name: 'HP' ,text: " 100" },
          {name: 'Primary',text: "Brown" },
          {name: 'Secondary' ,text: " Brown" }
          ],
        times: [
          "01:10 - 02:00", "06:00 - 08:00", "08:15 - 10:15", 
          "10:30 - 12:30", "12:45 - 14:45", "15:00 - 17:00", 
          "17:15 - 19:15", "19:30 - 21:30"
        ],
        prices: ["87.00", "87.00", "87.00", "87.00", "87.00", "87.00", "87.00", "87.00"]
      }
    }
  }
  </script>
  
  <style scoped>
  .font-weight-bold {
    font-weight: bold;
  }

  #table {
    border: none;
    color: #123873;
  }
  </style>
  