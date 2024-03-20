<script>
  import i18next from "../lib/i18n.js";
  import { getContext } from "svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  /**
   * @param {any} event
   */
  function handleChangeURL(event) {
    dispatch("changeEvent", event);
    console.log(event);
  }

  const i18n = getContext("i18n");
</script>

<div
  class="footerArea py-4 flex justify-start bg-[rgb(10,25,47,0.8)] h-[100%] text-[#bacbff]"
>
  <div class="mx-10">
    <ul>
      <span
        id="footerHeaders"
        class="text-xl font-semibold text-white underline underline-offset-8"
        >{$i18n.t("general")}</span
      >
      <li class="mt-2">
        <a href="/" class="hover:text-[#64ffda]" on:click={()=>{
            handleChangeURL('home');
        }}>{$i18n.t("home")}</a>
      </li>
      <li class="mt-1">
        <a href="/about" class="hover:text-[#64ffda]" on:click={()=>{
            handleChangeURL('about');
        }}>{$i18n.t("about")}</a>
      </li>
    </ul>
  </div>
  <div class="mx-10">
    <ul>
      <span
        id="footerHeaders"
        class="text-xl font-semibold text-white underline underline-offset-8"
        >{$i18n.t("links")}</span
      >
      <li class="mt-2">
        <a
          href="https://www.linkedin.com/in/ajeeth-thangarasu/"
          target="_blank"
          class="hover:text-[#64ffda]">{$i18n.t("linkedIn")}</a
        >
      </li>
      <li class="mt-1">
        <a
          href="https://github.com/AjeethT"
          target="_blank"
          class="hover:text-[#64ffda]">{$i18n.t("github")}</a
        >
      </li>
    </ul>
  </div>
</div>
