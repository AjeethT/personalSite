<script>
  import { Tooltip } from "flowbite-svelte";
  import { Modal, Listgroup } from "flowbite-svelte";
  import { pLanguage } from "$lib/skillData";
  import {getContext} from "svelte";

  let defaultModal = false;
  const i18n = getContext("i18n");

  let pLanguageList = pLanguage;

  let currentModal = { title: "", description: "", list: [""], imgSrc: "" };
  /**
   * @param {any} skill
   */
  function openModal(skill) {
    defaultModal = true;

    switch (skill) {
      case "C#":
        currentModal = pLanguageList[0];
        break;
      case "JavaScript":
        currentModal = pLanguageList[1];
        break;
      case "HTML5":
        currentModal = pLanguageList[2];
        break;
      case "CSS3":
        currentModal = pLanguageList[3];
        break;
      case "Golang":
        currentModal = pLanguageList[4];
        break;
      case "C++":
        currentModal = pLanguageList[5];
        break;
      case "TypeScript":
        currentModal = pLanguageList[6];
        break;
    }
  }
</script>

<div>
  <ul class="flex flex-row">
    <li class="px-3"><button on:click={() => openModal("C#")}>C#</button></li>
    <li class="px-3">
      <button on:click={() => openModal("JavaScript")}>JavaScript</button>
    </li>
    <li class="px-3">
      <button on:click={() => openModal("HTML5")}>HTML5</button>
    </li>
    <li class="px-3">
      <button on:click={() => openModal("CSS3")}>CSS3</button>
    </li>
    <li class="px-3">
      <button on:click={() => openModal("Golang")}>Go lang</button>
    </li>
    <li class="px-3"><button on:click={() => openModal("C++")}>C++</button></li>
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
