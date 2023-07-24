<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
<template>
  <div class="[ home ]">
    <div class="[ flex justify-center ]">
      <!-- Feed -->
      <div class="[ w-500 bg-white h-full rounded-lg ]">
        <!-- Story/Reel -->
        <div class="[ w-full h-300 ][ rounded-lg ][ px-4 ]">
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
                <i :class="topic.icon"></i>
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
                <img class="[ w-112.5px h-200 rounded-lg ]" :src="pic" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
