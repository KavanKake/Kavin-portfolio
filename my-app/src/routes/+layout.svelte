<nav>
    <h1>Logo_placeholder</h1>
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
            <a class = "contactme" href="/Contactme">Contact me</a>
        </li>
    </ul>
</nav>

<slot/>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    ul {
        display: flex;
        list-style: none; 
        text-decoration: none;
        font-size: 1.5em;   
    }

    li {
        margin-right: 40px;
        text-decoration: none;
    }

    h1 {
        margin: 0;
        font-size: 1.5em;
        margin-left: 20px;
    } 

    a {
        font-family: coolvetica;
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

