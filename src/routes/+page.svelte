<script lang="ts">
  export let data
</script>

<h1 class="text-3xl font-bold underline">
Welcome
</h1>



<div class=" flex m-3 p-5 content-center w-full">
  <table class="table-fixed">
    <thead>
      <tr>
        <th class="w-1/4 px-4 py-2">Customer</th>
        <th class="w-1/4 px-4 py-2">Total Orders</th>
      </tr>
    </thead>
    <tbody>
      {#each data.Customer as customer}
        <tr>
          <td class="border px-4 py-2">{customer.email}</td>
          <td class="border px-4 py-2">{customer.orders_count[0].count}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>