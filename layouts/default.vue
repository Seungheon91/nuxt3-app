<script setup lang="ts"></script>

<template>
  <div class="flex h-screen w-screen bg-gray-200">
    <aside class="w-[250px] bg-slate-800">
      <div class="bg-slate-900 p-2 flex items-center justify-center">
        <img class="w-32" src="@/assets/images/Logo.svg" alt="이지스원 로고" />
      </div>
      <nav class="p-2 text-md text-[#99a2ba]">
        <ul>
          <li
            class="p-2.5 px-4 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-gray-700"
          >
            <Icon name="ic:baseline-dashboard" color="white" size="24" />
            <span class="ml-4">대시보드</span>
          </li>
          <li
            class="p-2.5 px-4 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-gray-700"
          >
            <Icon name="ic:baseline-dashboard" color="white" size="24" />
            <span class="ml-4">대시보드</span>
          </li>
          <li
            class="p-2.5 px-4 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-gray-700"
          >
            <Icon name="ic:baseline-dashboard" color="white" size="24" />
            <span class="ml-4">대시보드</span>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="flex-col w-full">
      <header class="px-6 py-5 border-slate-200 border-b-2 bg-white">
        <div class="flex justify-end"><div>header</div></div>
      </header>
      <main class="p-6"><slot /></main>
    </div>
  </div>

  <!-- <Sidebar /> -->
  <!-- <div><slot /></div> -->
</template>
