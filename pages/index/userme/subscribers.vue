<template>
  <div>
    <div class="mb-8 text-center color-363636f">
      <h4 class="font-semibold size-18">My subscribers</h4>
    </div>
    <div
      class="flex w-full whatitis align-center justify-between pb-2 border-b mb-8 space-x-8"
    >
      <div class="w-full xl:w-5/12 lg:w-1/2 md:w-8/12 sm:w-9/12 self-end">
        <Searchbarsimple placeholder="Search a subscriber..." />
      </div>
    </div>
    <Listsubscribers />
  </div>
</template>

<script>
export default {
  name: 'Subss',
}
</script>
