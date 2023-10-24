<script setup lang="ts"></script>

<template>
  <div class="flex h-screen w-screen bg-gray-50">
    <aside class="w-[300px] bg-slate-800">
      <div class="bg-slate-900 p-2 flex items-center justify-center">
        <img src="@/assets/images/Logo.svg" alt="이지스원 로고" />
      </div>
      <nav class="p-6 text-md text-[#99a2ba]">
        <ul>
          <li class="my-2">
            <Icon name="ic:baseline-dashboard" color="white" size="24" />
            대시보드
          </li>
        </ul>
      </nav>
    </aside>
    <div class="flex-col w-full">
      <header class="px-2 py-4">header</header>
      <main><slot /></main>
    </div>
  </div>

  <!-- <Sidebar /> -->
  <!-- <div><slot /></div> -->
</template>
