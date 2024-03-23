<script>
    import { Tooltip } from "flowbite-svelte";
    import { Modal, Listgroup } from "flowbite-svelte";
    import { dTechs } from "$lib/skillData";
    import { getContext } from "svelte";
  
    let defaultModal = false;
    const i18n = getContext("i18n");
  
    let dTechList = dTechs;
  
    let currentModal = { title: "", description: "", list: [""], imgSrc: "" };
    /**
     * @param {any} skill
     */
    function openModal(skill) {
      defaultModal = true;
  
      switch (skill) {
        case "MSSQL":
          currentModal = dTechList[0];
          break;
        case "Postgresql":
          currentModal = dTechList[1];
          break;
        case "MongoDB":
          currentModal = dTechList[2];
          break;
      }
    }
  </script>
  
  <div>
    <ul class="flex flex-row">
      <li class="px-3">
        <button on:click={() => openModal("MSSQL")}>MS SQL</button>
      </li>
      <li class="px-3">
        <button on:click={() => openModal("Postgresql")}>PostgreSQL</button>
      </li>
      <li class="px-3">
        <button on:click={() => openModal("MongoDB")}>Mongo DB</button>
      </li>
    </ul>
    <Modal bind:open={defaultModal}>
      <img src={currentModal.imgSrc} class="w-[40px] h-[40px]" alt="C#" />
      <Tooltip type="auto">{currentModal.title}</Tooltip>
      <p>{$i18n.t(currentModal.description)}</p>
      <Listgroup items={currentModal.list} let:item class="w-full"
        >{item}</Listgroup
      >
    </Modal>
  </div>
  