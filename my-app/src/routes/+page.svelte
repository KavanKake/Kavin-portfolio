<script>
    import github_white from "$lib/assets/github_white.png";
    import github_black from "$lib/assets/github_black.png";
    import insta_black from "$lib/assets/instagram_logo.png";
    import insta_white from "$lib/assets/instagram_white.png";
    import face from "$lib/assets/facebook_logo.png";
</script>




<div class="space"></div>
<h6 class="hello">Hello, my name is</h6>
<h1 class="myname">Kavin</h1>
<h1 class="myname">Lokeswaran</h1>



<div class="btns">

    <a class="button" href="https://github.com/KavanKake">
        <img class="logo" src={github_black} alt="button" />
    </a>

    <a class="button" href="https://www.instagram.com/kavin_lokeswaran_/">
        <img class="logo" src={insta_black} alt="button" />
    </a>

    <a class="button" href="https://www.facebook.com/profile.php?id=61550619093513">
        <img class="logo" src={face} alt="button" />
    </a>

</div>




<style>
    .space{
        height: 15em;
    }

    .hello{
        text-align: left;
        color: black;
        font-family: "coolvetica";
        font-size: 1.5em;   
        margin-bottom: 0.25em;
        margin-top: 0em;
        margin-left: 5.175em;

    }

    .myname{
        text-align: left;
        color: white;
        text-shadow: 0px 0px 10px #024D98,
                    0px 0px 10px #024D98,
                    0px 0px 20px #024D98,
                    0px 0px 30px #024D98,
                    0px 0px 40px #024D98;
        font-family: "industry-inc-stencil", sans-serif;
        font-weight: 750;
        font-size: 5em;   
        margin-bottom: 0em;
        margin-top: 0em;
        margin-left: 1.5em;
    }

    .btns{
        display: flex;
        flex-direction: row;
        gap: 2.5em;
        margin-left: 8em;
        margin-top: 2em;
    }

    .btns:has(.button:hover) .button:not(:hover){
        opacity: 0.8;
        scale: 0.8;
        filter: blur(4px);
        
    }

    .button{
        align-content: space-between;
        border: 3px solid #024D98;
        border-radius: 30%;
        padding: 0.5em;
        &:hover{
            scale: 1.2;
        }
    }

    .logo{
        width: 3em;
        height: auto;
    }
</style>



