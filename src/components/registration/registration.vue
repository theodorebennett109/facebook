<style scoped lang="scss" src="./registration.scss"></style>
<script lang="ts" src="./registration.ts"></script>
<template>
  <form class="[ pb-5 rounded-lg bg-white border ]" action="">
    <!-- Sign Up text -->
    <div class="[ py-4 ][ px-5 ]">
      <div class="[ flex justify-between items-center ]">
        <p class="[ font-bold text-3xl text-black ]">Sign Up</p>
        <i
          @click="toggleRegistrationModal(false)"
          class="fa-solid fa-xmark [ text-3xl ][ cursor-pointer ]"
        ></i>
      </div>
      <div>
        <p>It’s quick and easy.</p>
      </div>
    </div>
    <div class="[ border-black border-t ]"></div>

    <div class="[ flex ][ mt-4 ][ px-5 ]">
      <b-field
        custom-class="[ bg-#f5f6f ]"
        type="is-dark"
        class="[ mr-3 mb-0 ]"
      >
        <b-input
          custom-class="[ registration ]"
          placeholder="First name"
          v-model="firstName"
        ></b-input>
      </b-field>

      <b-field type="is-dark">
        <b-input
          custom-class="[ registration ]"
          placeholder="Last name"
          v-model="lastName"
        ></b-input>
      </b-field>
    </div>

    <div class="[ px-5 ][ my-3 ]">
      <b-field type="is-dark">
        <b-input
          custom-class="[ registration ]"
          placeholder="Mobile number or email"
          v-model="numOrEmail"
        ></b-input>
      </b-field>
    </div>

    <div class="[ px-5 ][ mt-5 mb-3 ]">
      <b-field type="is-dark">
        <b-input
          custom-class="[ registration ]"
          placeholder="Password"
          v-model="password"
        ></b-input>
      </b-field>

      <div class="[ flex items-center text-xs ]">
        <p class="[ mr-1 ]">Birthday</p>
        <i class="fa-solid fa-circle-question"></i>
      </div>

      <div class="[ flex justify-between ][ mb-3 ]">
        <b-field type="is-dark" class="[ w-1/3 mb-0 ]">
          <b-select expanded v-model="selectedMonth" placeholder="Month">
            <option
              v-for="(month, index) in months"
              :key="index"
              :value="index"
            >
              {{ month }}
            </option>
          </b-select>
        </b-field>
        <b-field type="is-dark" class="[ w-1/3 mb-0 ][ mx-3 ]">
          <b-select
            custom-class="[ registration ]"
            expanded
            v-model="selectedDay"
            placeholder="Day"
          >
            <option v-for="day in days" :key="day" :value="day">
              {{ day }}
            </option>
          </b-select></b-field
        >
        <b-field type="is-dark" class="[ w-1/3 mb-0 ]">
          <b-select expanded v-model="selectedYear" placeholder="Year">
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </b-select></b-field
        >
      </div>
      <!-- Gender -->
      <div class="[ flex items-center text-xs ]">
        <p class="[ mr-1 ]">Gender</p>
        <i class="fa-solid fa-circle-question"></i>
      </div>
      <div class="[ flex justify-between ]">
        <div
          @click="gender = 'male'"
          class="[ w-1/3 h-10 ][ border border-black ][ rounded ][ cursor-pointer ][ flex justify-between items-center pl-3 py-2 ]"
        >
          <p>Male</p>

          <b-radio
            v-model="gender"
            type="is-info"
            size="is-small"
            native-value="male"
          >
          </b-radio>
        </div>

        <div
          @click="gender = 'female'"
          class="[ w-1/3 h-10 ][ border border-black ][ rounded ][ cursor-pointer ][ flex justify-between items-center ][ mx-3 pl-3 py-2 ]"
        >
          <p>Female</p>

          <b-radio
            v-model="gender"
            type="is-info"
            size="is-small"
            native-value="female"
          >
          </b-radio>
        </div>

        <div
          @click="gender = 'custom'"
          class="[ w-1/3 h-10 ][ border border-black ][ rounded ][ cursor-pointer ][ flex justify-between items-center pl-3 py-2 ]"
        >
          <p>Custom</p>

          <b-radio
            v-model="gender"
            type="is-info"
            size="is-small"
            native-value="custom"
          >
          </b-radio>
        </div>
      </div>
      <!-- if custom is -->
      <b-field
        v-if="gender == 'custom'"
        type="is-dark"
        class="[ w-full ][ my-3 ]"
      >
        <b-select expanded v-model="pronoun" placeholder="Select your pronoun">
          <option value="she">She: "Wish her a happy birthday!"</option>
          <option value="he">He: "Wish him a happy birthday!"</option>
          <option value="they">They: "Wish them a happy birthday!"</option>
        </b-select>
      </b-field>

      <b-field v-if="gender == 'custom'" type="is-dark">
        <b-input
          custom-class="[ registration ]"
          placeholder="Gender (optional)"
          v-model="optionalGender"
        ></b-input>
      </b-field>
    </div>

    <div class="[ px-5 ]">
      <p class="[ text-11 font-light ]">
        People who use our service may have uploaded your contact information to
        Facebook.
        <a
          class="[ text-blue-700 hover:text-blue-700 font-normal hover:underline no-underline ]"
          href=""
          >Learn more.</a
        >
      </p>
    </div>

    <div class="[ px-5 ][ my-1 ]">
      <p class="[ text-11 font-light ]">
        By clicking Sign Up, you agree to our
        <a
          class="[ text-blue-700 hover:text-blue-700 font-normal hover:underline no-underline ]"
          href=""
          >Terms</a
        >
        ,
        <a
          class="[ text-blue-700 hover:text-blue-700 font-normal hover:underline no-underline ]"
          href=""
          >Privacy Policy</a
        >
        and
        <a
          class="[ text-blue-700 hover:text-blue-700 font-normal hover:underline no-underline ]"
          href=""
          >Cookies Policy</a
        >. You may receive SMS Notifications from us and can opt out any time.
      </p>
    </div>

    <div class="[ flex justify-center items-center mt-5 ]">
      <span
        class="[ rounded ][ cursor-pointer flex justify-center items-center bg-success hover:bg-darker-green ][ font-bold text-white ][ w-48 h-8 ]"
      >
        Sign Up</span
      >
    </div>
  </form>
</template>
