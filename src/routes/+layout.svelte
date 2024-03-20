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
    { name: $i18n.t("home"), url: "/", selected: true},
    { name: $i18n.t("about"), url: "/about", selected: false},
  ];

  /**
   * @param {any} event
   */
  function handleChangeURL(event){
    console.log(event);
    if(event == "home"){
      pages[0].selected = true;
      pages[1].selected = false;
  }
  else if(event == "about"){
      pages[0].selected = false;
      pages[1].selected = true;
  }
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
      <ul class="flex flex-row">
        <li class="ml-10"><a href="/" on:click={()=>handleChangeURL('home')} class={pages[0].selected?"underline":""}>{pages[0].name}</a></li>
        <li class="ml-10"><a href="/about" on:click={()=>handleChangeURL('about')}  class={pages[1].selected?"underline":""}>{pages[1].name}</a></li>
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
    <Footer on:changeEvent={handleChangeURL} />
  </div>
</div>

<style>
    .navigationArea {
      color: #bacbff;
      background-color: rgb(10,25,47,0.8);
    }
</style>
