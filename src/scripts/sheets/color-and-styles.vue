<template>
	<v-container>
		<v-row class="flex-child">
			<v-col
				class="d-flex"
				cols="12"
				md="4"
			>
				<v-sheet
					class="d-flex"
					color="grey lighten-3"
					height="424"
				>
					<SheetFooter>#1: (3r x 2c)</SheetFooter>
				</v-sheet>
			</v-col>

			<v-col
				class="d-flex"
				cols="12"
				md="4"
			>
				<v-row>
					<v-col cols="6">
						<v-sheet
							class="d-flex"
							color="green lighten-3"
							height="150"
						>
							<SheetFooter>#2: (1r x 1c)</SheetFooter>
						</v-sheet>
					</v-col>
					<v-col cols="6">
						<v-sheet
							class="d-flex"
							color="yellow lighten-3"
							height="150"
						>
							<SheetFooter>#3: (1r x 1c)</SheetFooter>
						</v-sheet>
					</v-col>
					<v-col cols="12">
						<v-sheet
							class="d-flex"
							color="red lighten-3"
							height="250"
						>
							<SheetFooter>#5: (2r x 2c)</SheetFooter>
						</v-sheet>
					</v-col>
				</v-row>
			</v-col>
			<v-col
				cols="6"
				md="2"
			>
				<v-sheet
					class="d-flex"
					color="teal lighten-3"
					height="300"
				>
					<SheetFooter>#4: (2r x 1c)</SheetFooter>
				</v-sheet>
			</v-col>
			<v-col
				class="d-flex"
				cols="6"
				md="2"
			>
				<v-sheet
					class="d-flex mt-auto"
					color="purple lighten-3"
					height="300"
				>
					<SheetFooter>#6: (2r x 1c)</SheetFooter>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
/*
Colors & sizes
Sheets and components based on then can have different sizes and colors.
*/

export default {
  components: {
    SheetFooter: {
      functional: true,

      render (h, { children }) {
        return h(
          'v-sheet',
          {
            staticClass: 'mt-auto align-center justify-center d-flex',
            props: {
              color: 'rgba(0, 0, 0, .36)',
              dark: true,
              height: 50
            }
          },
          children
        );
      }
    }
  }
};
</script>
