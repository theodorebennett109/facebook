<style scoped lang="scss" src="./dashboard.scss"></style>
<script lang="ts" src="./dashboard.ts"></script>
<template>
  <div class="[ dashboard ][ grid ]">
    <!-- Titlebar -->

    <section class="[ sticky top-0 ]"><Titlebar /></section>

    <div class="[ flex ]">
      <!-- Sidebar Navigation Bar-->
      <section
        class="[ sidebarSection fixed left-0 ][ overflow-x-auto ][ h-sidebarH ]"
      >
        <Sidebar />
      </section>
      <!-- Body -->

      <div class="[ w-full ][ ml-16 899:mr-300 1159:ml-300 ][ px-8 py-4 ]">
        <transition name="fade">
          <router-view />
        </transition>
      </div>
      <!-- Right side panel -->
      <section
        class="[ fixed right-0 ][ sidebarSection ][ overflow-x-auto ][ h-sidebarH ][ 899:flex hidden ]"
      >
        <RightSidePanel />
      </section>
    </div>
    <!-- Footer -->
  </div>
</template>
