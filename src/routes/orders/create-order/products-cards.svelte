<script lang="ts">
  export let data: any;

  let total_amount: number;
  let quantities = new Array(data.Products.length).fill(0);

  async function addItem(index: number) {
    quantities[index] += 1;
    const product = data.Products.find(
      (product: any, indexP: number) => index === indexP
    );
    product.amount = quantities[index];

    const response = await fetch("create-order/addToCar", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    console.log(res);
    total_amount = res.total_amount;
  }

  async function removeItem(index: number) {
    if (quantities[index] > 0) {
      quantities[index] -= 1;
      const product = data.Products.find(
        (product: any, indexP: number) => index === indexP
      );
      product.amount = quantities[index];

      const response = await fetch("create-order/addToCar", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();

      total_amount = res.total_amount;
    }
  }
</script>

<div>
  Amout of products for create the order: {total_amount ?? 0}
</div>

<div class="flex flex-wrap mb-4">
  {#each data.Products as product, index}
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <!-- title -->
        <div class="font-bold text-xl mb-2">{product.name}</div>

        <!-- description -->
        <p class="text-gray-700 text-base">
          {product.description}
        </p>
      </div>

      <!-- categories, price, stock -->
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{product.category_id}</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{product.price}</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{product.stock_quantity}</span
        >
      </div>

      <!-- quantity -->
      <div class="px-6 pt-4 pb-2">
        <p>
          quantities {quantities[index]}
        </p>
        <p>
          <button class="btn btn-blue" on:click={() => addItem(index)}
            >+ Add</button
          >
          <button class="btn btn-red" on:click={() => removeItem(index)}
            >- Remove</button
          >
        </p>
      </div>
      <!-- button for add to the car -->
      <div class="px-6 pt-4 pb-2">
        <button class="btn btn-green">Add to Car</button>
      </div>
    </div>
  {/each}
</div>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-red {
    @apply bg-red-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
  .btn-red:hover {
    @apply bg-red-700;
  }

  .btn-green {
    @apply bg-green-500 text-white;
  }
  .btn-green:hover {
    @apply bg-green-700;
  }
</style>
