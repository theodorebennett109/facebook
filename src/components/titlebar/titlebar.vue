<style scoped lang="scss" src="./titlebar.scss"></style>
<script lang="ts" src="./titlebar.ts"></script>
<template>
  <div class="[ titlebar ][ h-56 px-4 ][ bg-white shadow-lg ]">
    <div class="[ flex justify-between ][ h-full ]">
      <!-- Logo -->
      <div class="[ flex items-center ][ cursor-pointer 1159:w-300 w-32 ]">
        <p class="[ text-3xl font-extrabold text-#1877f2 ]">facebook</p>
      </div>

      <!-- Search -->
      <div
        class="[ hidden 899:flex items-center ][ cursor-pointer w-full justify-center ]"
      >
        <b-field class="[ w-500 1744px:w-680 justify-center ]" type="is-dark">
          <b-autocomplete
            class="[ w-full ]"
            expanded
            custom-class="[ search ]"
            rounded
            placeholder="Search Facebook"
            icon="fa-solid fa-magnifying-glass"
          >
            <!-- <template #empty>No results found</template> -->
          </b-autocomplete>
        </b-field>
      </div>
      <!-- Search icon -->
      <div
        class="[ flex 899:hidden items-center ][ cursor-pointer w-full justify-start mx-5 ]"
      >
        <span
          class="[ w-10 h-10 flex justify-center items-center rounded-full bg-#f5f6f7 ]"
          ><i class="[ fa-solid fa-magnifying-glass ]"></i
        ></span>
      </div>

      <!-- Right section -->
      <div class="[ w-40 1159:w-360 flex ][ justify-end items-center ]">
        <!-- Messenger -->
        <div
          class="[ cursor-pointer h-10 w-10 rounded-full bg-#e4e6eb flex justify-center items-center ]"
        >
          <i class="[ text-xl text-black ] fa-brands fa-facebook-messenger"></i>
        </div>
        <!-- Notification -->
        <div
          class="[ cursor-pointer h-10 w-10 rounded-full bg-#e4e6eb flex justify-center items-center ][ mx-2 ]"
        >
          <i class="[ text-xl text-black ] fa-solid fa-bell"></i>

          <!-- Value for notification -->
          <span
            class="[ absolute w-5 h-5 rounded-full bg-#e41e3f text-white ml-22px mb-8 text-13 flex justify-center items-center ]"
            >1</span
          >
        </div>
        <!-- User -->
        <div
          class="[ h-10 w-10 rounded-full bg-#e4e6eb flex justify-center items-center ][ cursor-pointer ]"
        >
          <img
            class="[ rounded-full ]"
            src="@/assets/icon/theoicon.jpg"
            alt=""
          />

          <span
            class="[ border-2 border-white ][ absolute w-3 h-3 rounded-full bg-#e4e6eb ml-5 mt-5 text-11 flex justify-center items-center ]"
          >
            <i class="[ text-8px text-black ] fa-solid fa-chevron-down"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
