<script>
  import { Tooltip } from "flowbite-svelte";
  import { Modal, Listgroup } from "flowbite-svelte";
  import { pLanguage } from "$lib/skillData";

  let defaultModal = false;

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
    <p>{currentModal.description}</p>
    <Listgroup items={currentModal.list} let:item class="w-full"
      >{item}</Listgroup
    >
  </Modal>
</div>
<!-- <div class="flex flex-col">
    <div class="flex flex-row p-2">
    <p>Work Experience/Intermediate Experience - </p>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" class="w-[40px] h-[40px] hover:w-[50px] hover:h-[50px]" alt="C#" on:click={() => (defaultModal = true)}/>
    <Tooltip type="auto">C#</Tooltip>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" class="w-[40px] h-[40px] hover:w-[50px] hover:h-[50px]" alt="JS"/>
    <Tooltip type="auto">JavaScript</Tooltip>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" class="w-[40px] h-[40px] hover:w-[50px] hover:h-[50px]" alt="HTML"/>
    <Tooltip type="auto">HTML5</Tooltip>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" class="w-[40px] h-[40px] hover:w-[50px] hover:h-[50px]" alt="CSS"/>
    <Tooltip type="auto">CSS3</Tooltip>
    </div>
    <div class="flex flex-row p-2">
    <p>Learning Experience/Beginner Experience - </p>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" class="w-[40px] h-[40px] hover:w-[50px] hover:h-[50px]" alt="GoLang"/>
    <Tooltip type="auto">Go lang</Tooltip>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" class="w-[40px] h-[40px] hover:w-[50px] hover:h-[50px]" alt="C++"/>
    <Tooltip type="auto">C++</Tooltip>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" class="w-[40px] h-[40px] hover:w-[50px] hover:h-[50px]" alt="TS"/>
    <Tooltip type="auto">TypeScript</Tooltip>
    </div>
    
</div> -->
