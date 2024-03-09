<div class="footerArea">
    <div>
        <ul><span id="footerHeaders">{$i18n.t("general")}</span>
            <li><a href="/">{$i18n.t("home")}</a></li>
            <li><a href="/about">{$i18n.t("about")}</a></li>
        </ul>
    </div>
    <div>
        <ul><span id="footerHeaders">{$i18n.t("links")}</span>
            <li><a href="https://www.linkedin.com/in/ajeeth-thangarasu/" target="_blank">{$i18n.t("linkedIn")}</a></li>
            <li><a href="https://github.com/AjeethT" target="_blank">{$i18n.t("github")}</a></li>
        </ul>   
    </div>
</div>

<script>
    import i18next from "../lib/i18n.js";
    import { getContext } from "svelte";

    const i18n = getContext("i18n");
</script>

<style>
    .footerArea{
        display: flex;
        background-color: #f2f2f2;
        width: 100%;
        position: absolute;
        overflow: hidden;
        bottom: 0;
    }
    .footerArea div{
        padding: 20px;
    }

    ul{
        list-style-type: none;
    }

    #footerHeaders{
        font-size: 1.5em;
    }

    a{
        text-decoration: none;
        color: black;
    }
</style>