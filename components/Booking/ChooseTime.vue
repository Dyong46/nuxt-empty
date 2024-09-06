<template>
	<div class="px-2 py-3">
		<v-card class="px-2 py-3 mb-3" elevation="0" rounded="lg" v-for="(lake, index) in lakes" :key="index">
      <v-card-title class="text-h5 font-weight-bold">
				Lake {{ lake.name }} - Dock {{ lake.dock }}
			</v-card-title>
			<div>
				<div class="ps-4 mb-4" v-for="(boat, subIndex) in lake.boat" :key="`${index}-${subIndex}`">
					<v-layout class="mb-3">
						<div style="width: 250px;"><span class="font-weight-bold">Boat</span> {{ boat.name }}</div>
						<div style="width: 250px;"><v-icon class="font-weight-bold" icon="mdi-account-outline"/> 40</div>
						<div><span class="font-weight-bold">HP</span> 100</div>
					</v-layout>
					
					<div class="d-flex flex-nowrap overflow-x-auto">
						<v-btn 
							v-for="n in 7" 
							:key="`${index}-${subIndex}-${n}`"
							prepend-icon="mdi-calendar-check-outline"
							class="ms-2" 
							variant="outlined"
							@click="handleClick(boat.name, n)"
							:class="color(boat.name, n)"
						>
							{{ n }}/9/2024
						</v-btn>
					</div>
				</div>
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
			],
			selectedDate: null,
		}
	},
	methods: {
		handleClick(boatName, day) {
			this.selectedDate = `${boatName}.${day}`;
		},
		color(boatName, day) {
			return this.selectedDate === `${boatName}.${day}` ? "bg-blue" : "";
		}
	}
};
</script>