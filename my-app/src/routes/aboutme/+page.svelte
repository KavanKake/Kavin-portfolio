<script>
    import Footer from "../../lib/Components/Footer.svelte"
    import picture from "$lib/assets/aboutme.jpg"
</script>



<div class="spacer"></div>

<div class="aboutme">
    <div class="section_1">
        <div class="conteiner">
            <img src="{picture}" alt="Kavin Lokeswaran">
        </div>

    </div>

    <div class="section_2">
        <div class="overskrift">
            <h1>About me</h1>
        </div>
        <div class="underoverskrift">
            <h3>Kavin Lokeswaran - IT student</h3>
        </div>

        <div class="tekst">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget dignissim odio. Duis imperdiet consectetur orci, eget imperdiet diam tempus non. Integer mi enim, ornare ullamcorper hendrerit nec, ornare eu odio. Vivamus pretium diam et purus accumsan, ac ullamcorper ligula maximus. Morbi blandit purus diam. Nunc et quam nunc. Curabitur a placerat leo. Aenean nec velit ultricies, mollis nibh vel, rutrum arcu. Aenean id lacinia purus, et sagittis lacus.</p>
        </div>
    </div>
    
</div>

<div class="mini_spacer"></div>

<Footer/>






<style>
    .spacer{
        height: 10em;
    }

    .mini_spacer{
        height: 5.5em;
    }

    .aboutme{
        display: flex;
        flex-direction: row;
        gap: 7.5em;
    }

    .section_1{
        display: flex;
        margin-left: 1em;
        align-items: center;
    }

    .conteiner{
        display: flex;
        width: auto;
        height:35em;
        border: 3px solid #024D98;
    }

    .overskrift{
        display: flex;
        flex-direction: column;
        text-align: left;
        font-size: 2.5em;
        font-family: "industry-inc-stencil", sans-serif;
    }

    .underoverskrift{
        display: flex;
        flex-direction: column;
        text-align: left;
        font-size: 1.75em;
        font-family: coolvetica;
        color: #024D98;
    }

    .tekst{
        display: flex;
        flex-direction: column;
        text-align: left;
        font-size: 1.5em;
        width: 30em;
        font-family: coolvetica;
    }

    h1{
        margin: 0;
    }

    h3{
        margin: 0;
    }
</style>

