<script>
  import i18next from "../lib/i18n.js";
  import { getContext } from "svelte";

  const i18n = getContext("i18n");
</script>

<div class="mainBody">
  <h1>{$i18n.t("myHeader")}</h1>
  <h2>{$i18n.t("welcomeText")}</h2>
  <div class="myContext">
    <p>{$i18n.t("myContext")}</p>
  </div>
  <div class="moreLinks">
    <button>
      {$i18n.t("moreAboutMe")}
    </button>
    <button>
      {$i18n.t("myProjects")}
    </button>
    <button>
      {$i18n.t("contactMe")}
    </button>
  </div>
</div>

<style>
  .mainBody {
    font-size: 1.5em;
    text-align: center;
    width: 75%;
    height: 100vh;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
    background-color: #0b1f3f;
    border-radius: 50px;
  }

  .mainBody h1 {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 100;
    font-stretch: ultra-expanded;
    color: #42a99a;
  }

  .moreLinks button {
    color: #42a99a;
    padding: 10px;
    background-color: #0b1f3f;
    text-decoration: none;
    border: #42a99a 1px solid;
    font-weight: 400;
    border-radius: 2%;
  }

  .moreLinks button {
    text-decoration: none;
  }

  .moreLinks button:hover {
    cursor: pointer;
    background-color: transparent;
    color: white;
  }
</style>
