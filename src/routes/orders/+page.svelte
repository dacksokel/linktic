<script lang="ts">
  export let data;
</script>

<div class="text-center text-4xl text-">Ordes</div>

<div>
  <a href="/orders/create-order">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
    >
      Create Order
    </button>
  </a>
</div>

<!-- table of orders -->

<div class=" flex m-3 p-5 content-center w-full">
  <table class="table-fixed">
    <thead>
      <tr>
        <th class="w-1/2 px-4 py-2">Order_id</th>
        <th class="w-1/4 px-4 py-2">Customer</th>
        <th class="w-1/4 px-4 py-2">Create</th>
        <th class="w-1/4 px-4 py-2">Product name</th>
        <th class="w-1/4 px-4 py-2">Product amount</th>
      </tr>
    </thead>
    <tbody>
      {#each data.Order as order}
        <tr>
          <td class="border px-4 py-2">{order.id}</td>
          <td class="border px-4 py-2">{order.Customer.email}</td>
          <td class="border px-4 py-2">{order.created_at.split("T")[0]}</td>
          <td class="border px-4 py-2">
            {#each order.Order_Product as products, index}
              <li>{products.Product.name}</li>
            {/each}
          </td>
          <td class="border px-4 py-2">{order.total_amount}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
