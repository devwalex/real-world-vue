import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user.js'
import event from '@/store/modules/event.js'
import notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    event,
    notification
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  }
})
