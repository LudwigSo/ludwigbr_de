<template>
  <div class="contact">
    <v-list three-line>
      <v-subheader>Wie Sie mich erreichen</v-subheader>
      <v-divider> </v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Mail</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>
            <div v-html="mailElement"></div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider> </v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Telefon</v-list-item-title>
          <div class="list-content">aus Deutschland</div>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>
            <div v-html="telephoneNationalElement"></div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider> </v-divider>
           
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Telefon</v-list-item-title>
          <div class="list-content">international</div>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>
            <div v-html="telephoneInternationalElement"></div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import ContactConfig from './ContactConfig'

@Component
export default class Contact extends Vue {
  mailElement: string = ContactConfig.generateMailElement();
  telephoneNationalElement: string = ContactConfig.generateTelephoneElement(true);
  telephoneInternationalElement: string = ContactConfig.generateTelephoneElement(false);
}
</script>

<style scoped>
</style>
