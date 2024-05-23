<script lang="ts">
  import Form from "./form.svelte";

  export let data;
  export let form;
</script>

<div class="text-center text-4xl">Add New Products</div>

<Form {data} {form} />

{#if form?.success}
  <p>Added new Product! 🥳</p>
{/if}
