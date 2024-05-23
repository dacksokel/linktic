<script lang="ts">
  export let data;

  function findCategories(category_id: number = 1) {
    const category = data.Categories.find(
      (category: any) => category_id === category.id
    );
    return category.name;
  }

  function handleCategoryChange(event: any) {
    const categoryId = event.target.value;
    if (categoryId) {
      window.location.href = `/products/${categoryId}`;
    }
  }

</script>

<div class="text-center text-4xl text-">Products</div>

<div>
  <a href="/products/add-product">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
    >
      Add Product
    </button>
  </a>
</div>

<!-- table of products -->
<div class="flex m-3 p-5 content-center w-full">
  <label
    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    for="grid-state"
  >
    Category
  </label>
  <select name="byCategory"  on:change={handleCategoryChange}>
    <option value="">Select a category</option>
    {#each data.Categories as category}
      <option value={category.id}>
          {category.name}</option>
    {/each}
  </select>
</div>

<div class="flex m-3 p-5 content-center w-full">
  <table class="table-fixed w-full">
    <thead>
      <tr>
        <th class="w-1/2 px-4 py-2">Name</th>
        <th class="w-1/4 px-4 py-2">Price</th>
        <th class="w-1/4 px-4 py-2">Stock</th>
        <th class="w-1/4 px-4 py-2">Category</th>
        <th class="w-1/4 px-4 py-2">Description</th>
      </tr>
    </thead>
    <tbody>
      {#each data.Products as product}
        <tr>
          <td class="border px-4 py-2">{product.name}</td>
          <td class="border px-4 py-2">{product.price}</td>
          <td class="border px-4 py-2">{product.stock_quantity}</td>
          <td class="border px-4 py-2">{findCategories(product.category_id)}</td>
          <td class="border px-4 py-2">{product.description}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
