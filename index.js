var Typer = {
    text: `<span id="a">ritik_agarwal@dev</span>:<span id="b">~</span><span id="c">$</span> git clone my_profile
    <span id="a">ritik_agarwal@dev</span>:<span id="b">~</span><span id="c">$</span> cd my_profile
    <span id="a">ritik_agarwal@dev</span>:<span id="b">~</span><span id="c">$</span> git run TechBuddy
    <span id="a">TechBuddy</span>:<span id="b">~</span><span id="c">$</span> 🚀 Uploading Portfolio of Ritik Agarwal<!-- slightdelayhere-->.<!-- slightdelayhere-->.<!-- slightdelayhere-->.<!-- slightdelayhere-->.<!-- slightdelayhere-->.<!-- slightdelayhere-->.

    <span>👾 <strong>Welcome to my matrix!</strong> 👾</span>
    <span>Hi, I’m <strong>Ritik Agarwal</strong> ✌️</span>
    <span>A <strong>Developer</strong> | <strong>Competitive Programmer</strong> | <strong>Tech Enthusiast</strong></span>

    <hr/>

    <span><strong>My Motto:</strong></span>
    <span>"To become a successful expert in the field of Information Technology by channelizing my technical knowledge and skills to ensure personal and professional growth, and to contribute to the prosperity of the organization."</span>

    <hr/>

    <span>🎓 <strong>Education:</strong></span>
    <span>- B.Tech in <strong>Information Technology, 2022</strong></span>
    <span>- <strong>G L Bajaj Institute of Technology and Management, Greater Noida</strong></span>

    <span>💼 <strong>Current Role:</strong></span>
    <span>- Software Engineer @ <strong>ShipBob</strong></span>
    <span>- Ex-Amazon</span>
    <span>- Intern Experience: 1+ years (<strong>Pluang Technology, MiQ Digital</strong>)</span>

    <hr/>

    <span><strong>Experience & Expertise:</strong></span>
    <span>- Backend Development</span>
    <span>- Frontend Development</span>
    <span>- Databases</span>
    <span>- Data Structures and Algorithms</span>
    <span>- System Design</span>

    <span><strong>Technical Proficiency:</strong></span>
    <span>- Frontend: <strong>Vue.js, React.js</strong></span>
    <span>- Backend: <strong>ASP.NET, Spring Boot, Node.js (Express), Django</strong></span>
    <span>- Databases & Tools: <strong>MySQL, REST APIs, Kafka, Redis</strong></span>
    <span>- Other Skills: <strong>Microservices, Azure, Git, Agile</strong></span>

    <hr/>

    <span>👨‍💻 <strong>Competitive Programming:</strong></span>
    <span>- <a href="https://leetcode.com/ritikagarwal47/" target="_blank">Leetcode</a>: Knight (Rating: 1891)</span>
    <span>- <a href="https://www.codechef.com/users/ritikagarwal47" target="_blank">CodeChef</a>: 4⭐ (Rating: 1955)</span>
    <span>- <a href="https://codeforces.com/profile/ritikagarwal" target="_blank">Codeforces</a>: Specialist (Rating: 1562)</span>

    <hr/>

    <span>🌟 <strong>Looking for Opportunities:</strong></span>
    <span>I’m actively exploring roles and opportunities to work on challenging and innovative projects.</span>
    <span>📩 <strong>Reach me:</strong> <a href="mailto:ritikagarwal470@gmail.com">ritikagarwal470@gmail.com</a></span>
    <span>📜 <strong>[Download Resume](<a href="https://drive.google.com/file/d/1A_cutvpG_n6cJIKJnwlO_dc-DblEXu7V/view?usp=sharing" target="_blank">here</a>)</strong></span>

    <span>🌐 <strong>Connect with Me:</strong></span>
    <span>- <a href="https://github.com/ritikagarwal47" target="_blank">GitHub</a></span>
    <span>- <a href="https://www.linkedin.com/in/ritikagarwal470/" target="_blank">LinkedIn</a></span>

    <hr/>

    <span>Thank you for stopping by!</span>

    <span id="a">TechBuddy</span>:<span id="b">~</span><span id="c">$</span> exit`,
    accessCountimer: null,
    index: 0,
    speed: 2,
    accessCount: 0,
    deniedCount: 0,
    content: function() {
        return $("#console").html();
    },

    write: function(str) {
        $("#console").append(str);
        return false;
    },

    addText: function(key) {
        // Remaining logic remains unchanged...
    },

    updLstChr: function() {
        var cont = this.content();

        if (cont.substring(cont.length - 1, cont.length) == "|")
            $("#console").html($("#console").html().substring(0, cont.length - 1));
        else
            this.write("|");
    }
}

function replaceUrls(text) {
    var http = text.indexOf("http://");
    var space = text.indexOf(".me ", http);

    if (space != -1) {
        var url = text.slice(http, space - 1);
        return text.replace(url, "<a href=\"" + url + "\">" + url + "</a>");
    } else {
        return text;
    }
}

Typer.speed = 3;

var timer = setInterval("t();", 30);

function t() {
    Typer.addText({ "keyCode": 123748 });

    if (Typer.index > Typer.text.length) {
        clearInterval(timer);
    }
}
