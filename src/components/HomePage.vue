<script>
import Courses from '../components/faculty/courses.vue'

export default {
  name: 'HomePage',
  components: {
    Courses
  },
  data() {
    return {
      userType: ''
    }
  },
  mounted() {
    this.userType = localStorage.getItem('userType')
  }
}
</script>
<template>
  <Courses v-if="userType === 'faculty'" />
  <v-container v-else>
    <v-row>
      <v-col>
        <h1 class="display-2">UOGA - University of General Assembly</h1>
        <h2 class="subtitle-1">Empowering Minds, Shaping Futures</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2 class="headline">About UOGA</h2>
        <p class="body-1">
          At UOGA, we believe in fostering a dynamic learning environment that
          empowers students to excel in their chosen fields. With a commitment
          to academic excellence, innovation, and community engagement, UOGA
          stands as a beacon of education and opportunity.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2 class="headline">Why Choose UOGA?</h2>
        <v-list>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Exceptional Faculty</v-list-item-title>
                <v-list-item-subtitle>
                  Our distinguished faculty members are experts in their
                  respective fields, providing students with unparalleled
                  guidance and mentorship.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Cutting-edge Facilities</v-list-item-title>
                <v-list-item-subtitle>
                  UOGA boasts state-of-the-art facilities, laboratories, and
                  technology to ensure students have access to the resources
                  they need for a well-rounded education.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Global Community</v-list-item-title>
                <v-list-item-subtitle>
                  Join a diverse community of students from around the world,
                  fostering a rich multicultural experience and preparing you
                  for success in a globalized world.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>

    <!-- Add more sections as needed -->
  </v-container>
</template>
