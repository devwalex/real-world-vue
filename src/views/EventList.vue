<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
export default {
  components: { EventCard },
  data() {
    return {
      events: []
    }
  },
  async created() {
    try {
      const response = await EventService.getEvents()
      this.events = response.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style></style>
