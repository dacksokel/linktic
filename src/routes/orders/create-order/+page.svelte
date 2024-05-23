<script lang="ts">
  import ProductsCars from "./products-cards.svelte";
  import ClientName from "./clientName.svelte";

  export let data;
  let clientName: string;

  async function createOrder() {
    const responseClienteName = await fetch("create-order/clientName", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

   const res = await responseClienteName.json();
   clientName = res.clientName
    console.log(clientName);
    if (!clientName || clientName === "") {
      alert("please insert a Name or your email");
    }

    const responseCreateOrder = await fetch("create-order/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resCreateOrder  = await responseCreateOrder.json()
    

  }
</script>

<ClientName {clientName}/>

<div class="w-50 md:w-1/2 px-3 mb-6 md:mb-0">
  <button class="btn btn-green-buy" on:click={() => createOrder()}
    >Create Order/Buy</button
  >
</div>

<ProductsCars {data} />

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-green-buy {
    @apply bg-green-500 text-white;
  }
  .btn-green-buy:hover {
    @apply bg-green-700;
  }
</style>
