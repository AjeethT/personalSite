<script>
  import Footer from "./Footer.svelte";
  import { setContext } from "svelte";
  import getI18nStore from "../lib/i18n.js";
  import { getContext } from "svelte";
  import "../tailwind.css";

  setContext("i18n", getI18nStore());

  let isEngSelected = "underline";
  let isTaSelected = "none";

  const i18n = getContext("i18n");

  $: pages = [
    { name: $i18n.t("home"), url: "/" },
    { name: $i18n.t("about"), url: "/about" },
  ];

  let currentPage = 0;
  let language = "en";

  function leftClick() {
    if (currentPage < pages.length - 1) currentPage = pages.length - 1;
    else currentPage = currentPage - 1;
  }

  function rightClick() {
    if (currentPage < pages.length - 1) currentPage = currentPage + 1;
    else currentPage = 0;
  }

  /**
   * @param {string} lang
   */

  function changeLang(lang) {
    if (lang == "en") {
      isEngSelected = "underline";
      isTaSelected = "none";
      $i18n.changeLanguage("en");
    } else {
      isEngSelected = "none";
      isTaSelected = "underline";
      $i18n.changeLanguage("ta");
    }
  }
</script>

<div class="flex flex-col">
  <div class="h-14 flex flex-row justify-between items-center text-xl navigationArea px-10">
    <div>
      <ul class="flex flex-row justify-between">
        <li><a href={pages[currentPage].url}
          class="px-10"><button on:click={leftClick} id="prevPage" >&lt;</button>
      </a></li>
      <li><span id="pageName" class="px-10">{pages[currentPage].name}</span>
      </li>
      <li>
      <a href={pages[currentPage].url}
        ><button on:click={rightClick} id="nextPage" class="px-10">&gt;</button></a
      ></li>
    </ul>
    </div>
    <div class="changeLang">
      <button
        on:click={() => {
          changeLang("en");
        }}
        style="text-decoration:{isEngSelected}"
        id="engButton">Eng</button
      >
      <button
        on:click={() => {
          changeLang("ta");
        }}
        style="text-decoration:{isTaSelected}"
        id="tamilButton">தமிழ்</button
      >
    </div>
  </div>
  <div class="basis-2/4 h-auto">
    <slot />
  </div>
  <div class="basis-52">
    <Footer />
  </div>
</div>

<style>
    .navigationArea {
      color: #bacbff;
      background-color: rgb(10,25,47,0.8);
    }
</style>
