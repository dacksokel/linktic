<script lang="ts">



  export let data;
  export let form;
</script>

<form  method="POST" action="?/addProduct">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-first-name"
      >
        Product Name
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        placeholder="Laptop Msi "
        name="name"
        value={form?.name ?? '' }
      />
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-1 md:w-1/2">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-last-name"
      >
        Price
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="number"
        placeholder="20"
        name="price"
        value={form?.price}
      />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="stock quantity"
      >
        Stock Quantity
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="number"
        placeholder="99"
        value={form?.stock_quantity}
        name="stock_quantity"
      />
    </div>
    <div class="w-full px-3">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="description"
      >
        Description
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder=" added the description of the product or sample description"
        value={form?.description ?? ' '}
        name="description"
      />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-state"
      >
        Category
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={form?.category}
          name="category"
        >
        <option value="">Select a category</option>
          {#each data.Category as category}
            <option value={category.id}>{category.name}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>

  {#if form?.missing}
    <p class="text-2xl text-center text-red-400">This field is required</p>
  {/if}

  <button type="submit">+ Add Product</button>
</form>
