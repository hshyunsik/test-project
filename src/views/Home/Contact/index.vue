<template>
  <v-row align="center" justify="center" class="container--max">
    <v-col class="text-center">
      <h1 class="align--center margin--top container_rows--right">
        Like what you see? Get in touch:
      </h1>
      <div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <!-- <v-container style="display:flex; flex-wrap:wrap"> -->
          <v-container>
            <!-- <v-col cols="12" md="6" id="contactText"
              ><div>Like what you see? Feel free to get in touch:</div>
              <div>Send me an email</div>
              <div>Send me an email</div></v-col
            > -->
            <!-- <v-col cols="12" md="6"> -->
            <v-row>
              <!-- <v-col cols="12" md="12">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>
              </v-col> -->

              <!-- <v-col cols="12" md="6">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col> -->
            </v-row>

            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="subject"
                  label="Subject"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12">
                <v-textarea
                  name="input-7-1"
                  label="Your Message"
                  v-model="message"
                  :rules="[rules.required]"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12">
                <v-btn
                  block
                  primary
                  color="indigo"
                  :dark="valid"
                  @click="openMail"
                  :disabled="!valid"
                >
                  <v-icon>mdi-email</v-icon>
                  Mail me
                </v-btn>
              </v-col>
            </v-row>
            <!-- </v-col> -->
          </v-container>
        </v-form>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
// import { ValidationProvider } from 'vee-validate';

export default {
  name: 'Contact',
  components: {
    // ValidationProvider
  },
  data() {
    return {
      valid: true,
      // name: null,
      subject: null,
      message: null,
      rules: {
        required: (value: string) => !!value || 'Required.'
      }
    };
  },
  methods: {
    async openMail() {
      const valid = await this.validate();
      console.log(valid);
      if (!(this as any).valid) {
        return;
      }
      const mail = 'h.s.hyunsik@gmail.com';
      window.open(
        `mailto:${mail}?subject=${(this as any).subject}&body=${
          (this as any).message
        }`
      );
    },
    validate(): boolean {
      return (this as any).$refs.form.validate();
    },
    reset() {
      (this as any).$refs.form.reset();
    },
    resetValidation() {
      (this as any).$refs.form.resetValidation();
    }
  }
};
</script>

<style lang="scss" scoped>
#contactText {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: baseline;
}
</style>
