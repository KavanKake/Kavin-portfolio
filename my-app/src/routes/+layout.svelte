<script>
    import img from "$lib/assets/logobackground0.png";
</script>


<nav>
    <img class= "logo-navbar" src={img} alt="logo"/>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/projects">Projects</a>
        </li>
        <li>
            <a href="/aboutme">About me</a>
        </li>
        <li>
            <a href="/extrapages">Extra pages</a>
        </li>
        <li>
            <a class = "contactme" href="/contactme">Contact me</a>
        </li>
    </ul>  
</nav>




<slot/>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;   
        background-color: whitesmoke 

    }
    ul {
        display: flex;
        list-style: none; 
        text-decoration: none;
        font-size: 1.45em;   
    }

    li {
        margin-right: 40px;
        text-decoration: none;
    }

    .logo-navbar {
        width: 80px;
        height: auto;
        margin-left: 7.5em;
        scale: 1.5;
    } 

    a {
        font-family: coolvetica;
        font-size: 1.2em;
        text-decoration: none;
        color: black;
    }

    .contactme {
        margin-right: 20px;
        color: white;
        background-color: #024D98;
        border-radius: 10px;
        padding: 10px;
    }
</style>

