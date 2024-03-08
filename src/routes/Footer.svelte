<div class="footerArea">
    <div>
        <ul><span id="footerHeaders">General</span>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
    <div>
        <ul><span id="footerHeaders">Links</span>
            <li><a href="a">LinkedIn</a></li>
            <li><a href="b">Github</a></li>
        </ul>   
    </div>
</div>

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