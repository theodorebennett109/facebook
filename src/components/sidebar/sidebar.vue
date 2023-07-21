<style scoped lang="scss" src="./sidebar.scss"></style>
<script lang="ts" src="./sidebar.ts"></script>
<template>
  <div class="[ sidebar ][ w-16 1159:w-300 ][ py-4 ]">
    <div
      class="[ h-10 ][ mb-1 ][ cursor-pointer ]"
      v-for="icon in iconList"
      :key="icon.icon"
    >
      <div class="[ flex h-full ]">
        <!-- Active -->
        <span
          :class="[icon.isActive ? 'w-1 bg-#1877f2 rounded-r-xl' : 'w-1']"
        ></span>

        <!-- icon/image heading -->
        <div
          :class="[icon.hasImage ? 'px-3' : 'px-4']"
          class="[ w-full flex items-center justify-center 1159:justify-start ][ hover:bg-#e4e6e9 ][ ml-1 rounded-md ]"
          @click="selectIcon(icon)"
        >
          <i
            v-if="icon.hasImage == false"
            class="[ text-lg text-black ]"
            :class="[icon.isActive ? icon.icon + ' text-#1877f2' : icon.icon]"
          ></i>

          <!-- image -->
          <img
            v-else
            :src="icon.image"
            class="[ h-6 w-6 rounded-full ]"
            alt=""
          />

          <span
            class="[ hidden 1159:block text-15 text- font-medium text-black ][ ml-3 ]"
            >{{ icon.heading }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
