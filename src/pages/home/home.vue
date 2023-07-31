<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
<template>
  <div class="[ home ][ h-full ]">
    <div class="[ flex justify-center ]">
      <!-- Feed -->
      <div class="[ w-500 h-full rounded-lg ]">
        <!-- Story/Reel -->
        <div class="[ w-full h-300 ][ rounded-lg ][ px-4 ][ bg-white ]">
          <div class="[ flex ][ py-1 ]">
            <div
              v-for="(topic, index) in topics"
              :key="index"
              class="[ h-60px w-1/2 ]"
            >
              <span
                class="[ h-full flex justify-center items-center ][ cursor-pointer ][ rounded-lg ]"
                @click="setActive(topic)"
                :class="{
                  'hover:bg-#f0f2f5': !topic.isActive,
                  '[ text-#1877f2 ]': topic.isActive,
                }"
              >
                <i class="[ text-xl ]" :class="topic.icon"></i>
                <span class="[ text-15 font-semibold ][ ml-3 ]">{{
                  topic.name
                }}</span>
              </span>
              <div
                :class="{
                  ' border-2 border-#1877f2  hover:bg-transparent ':
                    topic.isActive,
                }"
              ></div>
            </div>
          </div>

          <!-- pics -->
          <div class="" v-for="(topic, index) in topics" :key="index">
            <div v-if="topic.isActive" class="[ flex ][ py-4 ]">
              <span
                class="[ mr-2 ]"
                v-for="(pic, index) in topic.pics"
                :key="index"
              >
                <img
                  class="[ w-112.5px h-200 rounded-lg ][ cursor-pointer ]"
                  :src="pic"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>

        <!-- What's on your mind? -->
        <div
          class="[ w-full h-125px ][ rounded-lg ][ px-4 py-3 mt-4 ][ bg-white ]"
        >
          <div class="[ flex ]">
            <img
              class="[ rounded-full ][ h-10 w-10 ][ mr-4 ]"
              src="@/assets/icon/theoicon.jpg"
              alt=""
            />

            <b-field class="[ w-full ]">
              <b-input
                rounded
                expanded
                placeholder="What is on your mind, Theodore?"
              >
              </b-input>
            </b-field>
          </div>

          <!-- divider -->
          <div class="[ border-gray-400 border-t my-3 ]"></div>
          <!-- photo, video, feelings -->
          <div class="[ w-full flex ]">
            <span
              class="[ hover:bg-#e4e6eb rounded-lg w-1/3 cursor-pointer h-10 flex justify-center items-center ]"
            >
              <i class="[ text-2xl text-red-600 ] fa-solid fa-video"></i>
              <span class="[ text-15 font-medium ][ ml-2 ]"
                >Live video</span
              ></span
            >
            <span
              class="[ hover:bg-#e4e6eb rounded-lg w-1/3 cursor-pointer h-10 flex justify-center items-center ]"
            >
              <i class="[ text-2xl text-green-500 ] fa-solid fa-images"></i>
              <span class="[ text-15 font-medium ][ ml-2 ]">
                Photo/video</span
              ></span
            >
            <span
              class="[ hover:bg-#e4e6eb rounded-lg w-1/3 cursor-pointer h-10 flex justify-center items-center ]"
            >
              <i
                class="[ text-2xl text-yellow-500 ] fa-solid fa-face-laugh"
              ></i>
              <span class="[ text-15 font-medium ][ ml-2 ]"
                >Feeling/activity</span
              ></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
