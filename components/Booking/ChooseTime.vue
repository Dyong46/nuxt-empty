<template>
	<div class="px-2 py-3">
		<v-card class="px-2 py-3 mb-3" elevation="0" rounded="lg" v-for="(lake, index) in lakes" :key="index">
      <v-card-title class="text-h5 font-weight-bold">
				Lake {{ lake.name }} - Dock {{ lake.dock }}
			</v-card-title>
      <div v-for="(boat, subIndex) in lake.boat" :key="`${index}-${subIndex}`">
				<span class="font-weight-bold">Boat</span> {{ boat.name }}
				<v-icon icon="mdi-account-outline"/>
				
			</div>
    </v-card>
	</div>
</template>

<script>
export default {
	name: "BookingChooseTime",
	data() {
		return {
			lakes: [
				{
					name: "Memphremagog",
					dock: "North Hatley",
					boat: [
						{
							name: "Vantage 22",
						},
						{
							name: "Quorum 23",
						}
					]
				},
				{
					name: "Memphremagog",
					dock: "North",
					boat: [
						{
							name: "Vantage 26",
						},
						{
							name: "Quorum 12",
						}
					]
				}
			]
		}
	}
};
</script>