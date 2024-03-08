<div class="navigation">
<a href="{pages[currentPage].url}"><button on:click={leftClick}>&lt;</button></a>
<span id="pageName">{pages[currentPage].name}</span>
<a href="{pages[currentPage].url}"><button on:click={rightClick}>&gt;</button></a>
</div>

<slot/>
<Footer/>

<style>

    .navigation{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    #pageName{
        font-size: 2em;
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
    
    let pages= [
        {name: "Home", url: "/"},
        {name: "About", url: "/about"}
    ];

    let currentPage=0;

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
</script>