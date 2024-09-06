<template>
    <v-sheet width="100%" height="auto" class="pa-3 rounded-lg" color="#F5F5F5">
        <v-card class="rounded-lg" style="color: #123873;" height="100%" width="100%" flat>
            <h3 class="ml-5 mt-4 mb-3">Rent A Boat</h3>
            <v-stepper-vertical v-model="currentStep" flat hide-actions>
                <v-stepper-vertical-item
                    v-for="(item, index) in steps"
                    :key="index"
                    :complete="currentStep > index + 1"
                    complete-icon="mdi-check-circle-outline"
                    icon="mdi-progress-check"
                    :value="index + 1"
                    style="color: #123873;"
                >
                <template v-slot:title>
                    <div style="font-size: 12px;" class="ml-1 font-weight-bold">STEP {{ index + 1 }}</div>                
                </template>
                <template v-slot:subtitle>
                    <div style="white-space: nowrap; overflow: hidden; font-weight: 600; font-size: 14px;" class="mt-1 ml-1">{{ item.text }}</div>                
                </template>
                </v-stepper-vertical-item>
            </v-stepper-vertical>
            <div class="d-flex my-4 flex-column align-center font-weight-bold">
                <div style="color: #0085A1;">Having problem?</div>
                <v-btn style="border-width: 2px;" variant="outlined" height="40px" class="text-none px-3 font-weight-black rounded-lg mt-2">Contact Us</v-btn>
            </div>
        </v-card>
    </v-sheet>
</template>
  
<script>
import { mapFields } from "vuex-map-fields";
import { VStepperVertical, VStepperVerticalItem } from 'vuetify/labs/VStepperVertical'
export default {
    components: {
        VStepperVertical,
        VStepperVerticalItem,
    },
    name: "StepperNav",
    data() {
        return {
            finished: false,
            steps: [
                {
                    text: "Choose Time"
                },
                {
                    text: "Selected Trip"
                },
                {
                    text: "Confirm Your Trip Details"
                },
                {
                    text: "Terms of use"
                },
            ],
        };
    },
    computed: {
		...mapFields("booking", ["currentStep"])
	},
    methods: {
        nextStep() {
            if (this.currentStep < this.steps.length) {
                this.currentStep++;
            }
        },
        prevStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
            }
        }
    }
};
</script>
<style scoped>
::v-deep .v-expansion-panel-title {
    padding-right: 0px;
    padding-left: 10px;
}
::v-deep .v-stepper-vertical-item__avatar {
    background: transparent !important;
}
::v-deep .v-avatar {
    color: #BBBBBB;
}
::v-deep .v-avatar .v-icon {
  font-size: 1.6rem;
}
.v-expansion-panel--active ::v-deep .v-avatar {
    color: #0085A1;
}
::v-deep .v-expansion-panel {
    height: 70px;
}
.v-stepper-vertical-item--complete ::v-deep .v-avatar {
    color: #23B100;
}
.v-stepper-vertical-item--complete::before {
    background: #23B100;
}
::v-deep .v-expansion-panel::before {
    height: calc(100% - 40px);
    top: 50px;
    left: 21px;
}
</style>
