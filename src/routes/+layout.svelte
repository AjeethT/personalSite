<div class="navigation">
<div class="navigationArea">
<a href="{pages[currentPage].url}"><button on:click={leftClick}  id="prevPage">&lt;</button></a>
<span id="pageName">{pages[currentPage].name}</span>
<a href="{pages[currentPage].url}"><button on:click={rightClick}  id="nextPage">&gt;</button></a>
</div>
<div class="changeLang">
    <button on:click="{()=>{
        changeLang("en");
    }}" style="text-decoration:{isEngSelected}" id="engButton">Eng</button>
    <button on:click="{()=>{
        changeLang("ta");
    }}" style="text-decoration:{isTaSelected}" id="tamilButton">தமிழ்</button>
</div>
</div>
<slot/>
<Footer/>

<style>
    .navigation{
        color: white;
        width: 100%;
        background-image: url('/static/bgImage.png');
        z-index: 100;
        display: flex;
        background-color: #0b1f3f;
    }

    #nextPage, #prevPage,#engButton,#tamilButton{
        text-decoration: none;
        color: white;
    }

    .changeLang{
        font-size: small;
        display: flex;
        justify-content: end;
    }   

    .changeLang button{
        background-color: transparent;
        border: none;
    }

    .navigationArea{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        width: 100%;
    }

    #pageName{
        font-size: 2em;
        text-decoration: underline;
    }

    button{
        font-size: 2em;
        background-color: transparent;
        border: none;
    }
    button:hover{
        cursor: pointer; 
    }

</style>

<script>
    import Footer from './Footer.svelte';
    import {setContext} from 'svelte';
    import getI18nStore from '../lib/i18n.js';
    import { getContext } from "svelte";

    setContext('i18n', getI18nStore());

    let isEngSelected="underline";
    let isTaSelected="none";
    
    const i18n = getContext("i18n");

    $: pages= [
        {name: $i18n.t("home"), url: "/"},
        {name: $i18n.t("about"), url: "/about"}
    ];

    let currentPage=0;
    let language='en';


    function leftClick() {
        if(currentPage<pages.length-1)
        currentPage=pages.length-1;
        else
        currentPage=currentPage-1;
    }

    function rightClick() {

        if(currentPage<pages.length-1)
        currentPage=currentPage+1;
        else
        currentPage=0;
    }

    /**
   * @param {string} lang
   */

    function changeLang(lang){
        if(lang=="en"){
            isEngSelected="underline";
            isTaSelected="none";    
            $i18n.changeLanguage("en");
        }
        else{
            isEngSelected="none";
            isTaSelected="underline";
            $i18n.changeLanguage("ta");
        }
    }
</script>