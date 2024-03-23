<script>
    import { Tooltip } from "flowbite-svelte";
    import { Modal, Listgroup } from "flowbite-svelte";
    import { fTechs } from "$lib/skillData";
    import {getContext} from "svelte";
  
    let defaultModal = false;
    const i18n = getContext("i18n");
  
    let fTechList = fTechs;
  
    let currentModal = { title: "", description: "", list: [""], imgSrc: "" };
    /**
     * @param {any} skill
     */
    function openModal(skill) {
      defaultModal = true;
  
      switch (skill) {
        case "ReactJS":
          currentModal = fTechList[0];
          break;
        case "Redux":
          currentModal = fTechList[1];
          break;
        case "NextJS":
          currentModal = fTechList[2];
          break;
        case "TailwindCSS":
          currentModal = fTechList[3];
          break;
        case "Svelte":
          currentModal = fTechList[4];
          break;
        case "UWP":
          currentModal = fTechList[5];
          break;
        case "TypeScript":
          currentModal = fTechList[6];
          break;
      }
    }
  </script>
  
  <div>
    <ul class="flex flex-row">
      <li class="px-3"><button on:click={() => openModal("ReactJS")}>ReactJS</button></li>
      <li class="px-3">
        <button on:click={() => openModal("Redux")}>Redux</button>
      </li>
      <li class="px-3">
        <button on:click={() => openModal("NextJS")}>NextJS</button>
      </li>
      <li class="px-3">
        <button on:click={() => openModal("TailwindCSS")}>TailwindCSS</button>
      </li>
      <li class="px-3">
        <button on:click={() => openModal("Svelte")}>Svelte</button>
      </li>
      <li class="px-3">
        <button on:click={() => openModal("UWP")}>UWP FrameWork</button>
      </li>
      <li class="px-3">
        <button on:click={() => openModal("TypeScript")}>TypeScript</button>
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
  