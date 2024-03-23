<script>
  import { Tooltip } from "flowbite-svelte";
  import { Modal, Listgroup } from "flowbite-svelte";
  import { bTechs } from "$lib/skillData";
  import { getContext } from "svelte";

  let defaultModal = false;
  const i18n = getContext("i18n");

  let bTechList = bTechs;

  let currentModal = { title: "", description: "", list: [""], imgSrc: "" };
  /**
   * @param {any} skill
   */
  function openModal(skill) {
    defaultModal = true;

    switch (skill) {
      case "NodeJS":
        currentModal = bTechList[0];
        break;
      case "DotNetCore":
        currentModal = bTechList[1];
        break;
      case "Gin":
        currentModal = bTechList[2];
        break;
    }
  }
</script>

<div>
  <ul class="flex flex-row">
    <li class="px-3">
      <button on:click={() => openModal("NodeJS")}>NodeJS</button>
    </li>
    <li class="px-3">
      <button on:click={() => openModal("DotNetCore")}>. Net Core</button>
    </li>
    <li class="px-3">
      <button on:click={() => openModal("Gin")}>Gin Framework</button>
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
