<script lang="ts">
  export let clientName: string;
</script>

<div class="w-50 md:w-1/2 px-3 mb-6 md:mb-0">
  <label
    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    for="grid-first-name"
  >
    Insert Email
  </label>
  <input
    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="email"
    placeholder=" ingrese un email "
    name="name"
    value={clientName ?? ""}
    on:keydown={async (e) => {
      if (e.key !== "Enter") return;

      const input = e.currentTarget;
      const clientName = input.value;

      if(!clientName.includes('@')){
        alert('please insert an email valid')
      }
      const response = await fetch("create-order/clientName", {
        method: "POST",
        body: JSON.stringify({ clientName }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      await response.json();
    }}
  />
  <p class="text-red-500 text-3xl italic">
    Please fill out this field and press ENTER for save the name.
  </p>
</div>
