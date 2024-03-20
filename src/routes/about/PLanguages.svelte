<script>
    import { Tooltip } from 'flowbite-svelte';
    import { Modal } from 'flowbite-svelte';
    let defaultModal = false;
</script>


<div class="flex flex-col">
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
    <Modal bind:open={defaultModal}>
        <ul>
            <li>Work Experience</li>
            <li>ASP.NET Web API</li>
            <li>ASP.NET MVC</li>
        </ul>
    </Modal>
</div>