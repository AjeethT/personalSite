<script>
    import { Tooltip } from "flowbite-svelte";
    import { Modal, Listgroup } from "flowbite-svelte";
    import { tools } from "$lib/skillData";
    import { getContext } from "svelte";
  
    let defaultModal = false;
    const i18n = getContext("i18n");
  
    let toolList = tools;
  
    let currentModal = { title: "", description: "", list: [""], imgSrc: "" };
    /**
     * @param {any} skill
     */
    function openModal(skill) {
      defaultModal = true;
  
      switch (skill) {
        case "VSCode":
          currentModal = toolList[0];
          break;
        case "VS":
          currentModal = toolList[1];
          break;
        case "SSMS":
          currentModal = toolList[2];
          break;
        case "MSOffice":
          currentModal = toolList[3];
          break;
        case "Git":
          currentModal = toolList[4];
          break;
      }
    }
  </script>
  
  <div>
    <ul class="flex flex-row">
      <li class="px-3">
        <button on:click={() => openModal("VSCode")}>Visual Studio Code</button>
      </li>
      <li class="px-3">
        <button on:click={() => openModal("VS")}>Visual Studio</button>
      </li>
      <li class="px-3">
        <button on:click={() => openModal("SSMS")}>SQL Server Management Studio</button>
      </li>
      <li class="px-3">
        <button on:click={() => openModal("MSOffice")}>MS Office tools</button>
      </li>
      <li class="px-3">
        <button on:click={() => openModal("Git")}>Git</button>
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
  