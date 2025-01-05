var Typer = {
    text: `<span id="a">ritik_agarwal@dev</span>:<span id="b">~</span><span id="c">$</span> git clone my_profile<!-- kjsdfhkjdhsfkjdshfkj -->
    <span id="a">ritik_agarwal@dev</span>:<span id="b">~</span><span id="c">$</span> cd my_profile<!-- kjsdfhkjdhsfkjdshfkj -->
	<span id="a">ritik_agarwal@dev</span>:<span id="b">~</span><span id="c">$</span> git <!-- kjsdfhkjdhsfkjdshfkj -->run TechBuddy<!-- laglaglaglaglaglaglaglaglaglaglaglag -->
	<span id="a">TechBuddy</span>:<span id="b">~</span><span id="c">$</span></span> 🚀 Uploading Portfolio of Ritik Agarwal <!-- slightdelayhere-->.<!-- slightdelayhere-->.<!-- slightdelayhere-->.<!-- slightdelayhere-->.<!-- slightdelayhere-->.<!-- slightdelayhere-->.<span id="k"></span>

	<span>👾 Welcome to my matrix! 👾! 
    I'm <span id="a">Ritik Agarwal✌️</span></span>
	<span>  A Developer | Competitive Programmer | Tech Enthusiast</span>
	
    ---
    
	My motto:
    "<span id="k">To become a successful expert in the field of Information Technology by channelizing my technical knowledge and skills to ensure personal and professional growth and to contribute to the prosperity of the organization.</span>" <!-- sjkfhskjf -->
    
    ---

    🎓 Education:
	<span>- B.Tech in <span id="a">Information Technology, 2022 </span>
    <span id="a">G L Bajaj Institute of Technology and Management, Greater Noida</span>
	
    💼 Current Role:
    <span> - Software Engineer @ <span id="a"> ShipBob  </span>
        - <span id="a">Ex-Amazon  </span>
        - Intern Experience: 1+ years ( <span id="a"> Pluang Technology, MiQ Digital </span>)<span>

    ---

    Experience & Expertise:
    - <span id="a"> Backend Development  </span>
    - <span id="a">Frontend Development  </span>
    - <span id="a">Databases  </span>
    - <span id="a">Data structures and Algorithms </span>
    - <span id="a">System Design, etc </span>

    Technical Proficiency:
    <span>- Frontend: <span id="a"> Vue.js, React.js </span>
    - Backend:  <span id="a">ASP.NET, Spring Boot, Node.js (Express), Django  </span>
    - Databases & Tools: <span id="a"> MySQL, REST APIs, Kafka, Redis,  </span>
    - Other Skills: <span id="a"> Microservices, Azure, Git , Agile  </span>
    - worked on several interesting projects in organizations</span>
	
    Consistent Competitive Programming:
	<span>- <a href="https://leetcode.com/ritikagarwal47/" target="_blank">Leetcode </a>👨‍💻: Knight (Rating: 1891)  
    - <a href="https://www.codechef.com/users/ritikagarwal47" target="_blank">Codechef</a>: 4⭐ (Rating: 1955)  
    - <a href="https://codeforces.com/profile/ritikagarwal" target="_blank">Codeforces</a>: Specialist (Rating: 1562)  </span>

    🌟 Looking for Opportunities:
    <span>I’m actively exploring roles and opportunities where I can work on challenging and innovative projects.  
    </span>
    <span> 📩 Reach me: <!-- longlonglongcomment --><a href="mailto:ritikagarwal470@gmail.com"> ritikagarwal470@gmail.com</a>
    📜 [Download Resume](<a href="https://drive.google.com/file/d/1DWfLF67HuOx88oujGUaQDTOeh3kKCh0L/view?usp=sharing" target="_blank">here</a>)   </span>
    
    🌐 Connect with Me:
    <span>- <a href="https://github.com/ritikagarwal47" target="_blank">Github</a>  
    - <a href="https://www.linkedin.com/in/ritikagarwal470/" target="_blank">LinkedIn</a>
    
    ---

	Thank you for stopping by! 
    
	<span id="a">TechBuddy</span>:<span id="b">~</span><span id="c">$</span> exit<!-- kjsdfhkjdhsfkjdshfkj -->
	`,
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

        if (key.keyCode == 18) {
            Typer.accessCount++;

            if (Typer.accessCount >= 3) {
                Typer.makeAccess();
            }
        } else if (key.keyCode == 20) {
            Typer.deniedCount++;

            if (Typer.deniedCount >= 3) {
                Typer.makeDenied();
            }
        } else if (key.keyCode == 27) {
            Typer.hidepop();
        } else if (Typer.text) {
            var cont = Typer.content();
            if (cont.substring(cont.length - 1, cont.length) == "|")
                $("#console").html($("#console").html().substring(0, cont.length - 1));
            if (key.keyCode != 8) {
                Typer.index += Typer.speed;
            } else {
                if (Typer.index > 0)
                    Typer.index -= Typer.speed;
            }
            var text = Typer.text.substring(0, Typer.index)
            var rtn = new RegExp("\n", "g");

            $("#console").html(text.replace(rtn, "<br/>"));
            window.scrollBy(0, 50);
        }

        if (key.preventDefault && key.keyCode != 122) {
            key.preventDefault()
        };

        if (key.keyCode != 122) { // otherway prevent keys default behavior
            key.returnValue = false;
        }
    },

    updLstChr: function() {
        var cont = this.content();

        if (cont.substring(cont.length - 1, cont.length) == "|")
            $("#console").html($("#console").html().substring(0, cont.length - 1));

        else
            this.write("|"); // else write it
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
