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
    .mainBody{
        font-size: 1.5em;
        text-align: center;
    }

    .moreLinks button{
        padding: 10px;
        background-color: #f2f2f2;
        text-decoration: none;
        border: black 1px solid;
        font-weight: 400;
        border-radius: 20px;
    }

    .moreLinks button {
        text-decoration: none;
    }
    
    .moreLinks button:hover{
        cursor: pointer;
        background-color:black ;
        color: white;
    }
</style>