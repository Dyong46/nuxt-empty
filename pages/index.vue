<template>
	<v-layout class="px-5" justify-center align-center>
			<v-col cols="3" flex-grow-0 flex-shrink-0>
				<stepper-nav ref="stepper"></stepper-nav>
			</v-col>
		<v-col cols="9">
			<v-sheet class="pa-1" rounded="lg" color="#F5F5F5">
				<div class="d-flex align-center">
					<h2 class="my-4 ml-3" style="color: #123873;">Selected Trip</h2>
					<v-spacer></v-spacer>
					<v-btn :disabled="currentStep < 2" @click="back" style="background-color: white;" class="font-weight-bold d-flex py-5 mr-4 rounded-lg" :color="currentStep >= 2 ? '#0085A1' : ''" variant="text"> 
						<v-icon class="mr-1" size="20" start>mdi-chevron-left</v-icon>
						back
					</v-btn>
					<v-btn @click="next" style="background-color: white;" class="font-weight-bold d-flex py-5 rounded-lg" color="#0085A1" variant="text"> 
						next
						<v-icon class="ml-1" size="20" end>mdi-chevron-right</v-icon>
					</v-btn>
				</div>
				<booking-choose-time />
			</v-sheet>
		</v-col>
	</v-layout>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
	name: "IndexPage",
	computed: {
		...mapFields("booking", ["currentStep"])
	},
	methods: {
		back () {
			this.$refs.stepper.prevStep()
		},
		next () {
			this.$refs.stepper.nextStep()
		},
	}
};
</script>