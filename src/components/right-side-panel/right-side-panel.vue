<style scoped lang="scss" src="./right-side-panel.scss"></style>
<script lang="ts" src="./right-side-panel.ts"></script>
<template>
  <div class="[ right-side-panel ][ p-4 w-300 ][ text-black ]">
    <div>
      <!-- Birthday -->
      <div>
        <div><p class="[ font-medium text-lg ]">Birthdays</p></div>
        <div class="[ flex ][ hover:bg-#e4e6e9 rounded-md p-4 cursor-pointer ]">
          <i class="[ text-3xl text-blue-500 mr-4 ] fa-solid fa-gift"></i>
          <div>
            <span class="[ text-15 ]">
              <span class="[ font-medium ]"> Shanice Brown</span>
              and
              <span class="[ font-medium ]"> Kevin Hart</span>
              has birthday today
            </span>
          </div>
        </div>
      </div>

      <!-- Contacts -->
      <div>
        <div class="[ flex justify-between ][ mt-5 mb-2 ]">
          <span class="[ font-medium text-lg ]">Contacts</span>

          <div class="[ flex ]">
            <span
              class="[ h-8 w-8 cursor-pointer flex justify-center items-center hover:bg-#e4e6eb rounded-full ]"
            >
              <i class="fa-solid fa-video"></i
            ></span>
            <span
              class="[ mx-3 h-8 w-8 cursor-pointer flex justify-center items-center hover:bg-#e4e6eb rounded-full ]"
            >
              <i class="fa-solid fa-magnifying-glass"></i
            ></span>
            <span
              class="[ h-8 w-8 cursor-pointer flex justify-center items-center hover:bg-#e4e6eb rounded-full ]"
            >
              <i class="fa-solid fa-ellipsis"></i
            ></span>
          </div>
        </div>

        <!-- Friends list -->
        <div v-for="(friend, index) in friends" :key="index">
          <div
            class="[ px-3 ][ flex ][ w-full flex items-center ][ hover:bg-#e4e6e9 ][ rounded-md ][ h-10 ][ cursor-pointer ]"
          >
            <div class="[ rounded-full flex justify-center ]">
              <img
                class="[ h-6 w-6 rounded-full ]"
                :src="friend.profilePic"
                alt=""
              />
              <span
                v-if="friend.online"
                class="[ border rounded-full h-2 w-2 bg-green-400 absolute ml-4 mt-4 ]"
              ></span>
            </div>
            <span class="[ text-15 font-medium text-black ][ ml-1 ]">
              {{ friend.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
