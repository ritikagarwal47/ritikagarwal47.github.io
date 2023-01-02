var Typer = {
    text: `<span id="a">ritik_agarwal@dev</span>:<span id="b">~</span><span id="c">$</span> git clone my_profile<!-- kjsdfhkjdhsfkjdshfkj -->
	<span id="a">ritik_agarwal@dev</span>:<span id="b">~</span><span id="c">$</span> cat <!-- kjsdfhkjdhsfkjdshfkj -->my_profile/introduction.txt<!-- laglaglaglaglaglaglaglaglaglaglaglag -->
	
	<span> Welcome to my matrix! I am <span id="a">Ritik Agarwal✌️</span></span>
	<span>  I am a Developer | Competitive Programmer | Tech Enthusiast</span>
	
	My motto, "<span id="k">To become a successful expert in the field of Information Technology by channelizing my technical knowledge and skills to ensure personal and professional growth and to contribute to the prosperity of the organization.</span>" <!-- sjkfhskjf -->
	
	<span>I have completed my B.Tech in <span id="a">Information Technology</span>@ <span id="a">G L Bajaj Institute of Technology and Management, Greater Noida</span>
	
    <span> Currently working in <span id="a"> Amazon </span> as a Software Engineer </span>
        
	<span>I have interned with <span id="a">Pluang Technology</span>, <span id="a">MiQ Digital</span> </span> 
    
    <span> Expertise in <span id="a"> Data structures and Algorithms.</span>

    Experience working in front-end development, back-end development, system design, and data analysis.
    </span>
    <span>
    Worked on <span id="a">technologies</span> like
    In Frontend->  <span id="a">React JS, Redux</span>
    In Backend-> <span id="a">NodeJS(with express),Django, Spring Boot,C++</span>
    In DataBase and other common tools-> <span id="a">MongoDB, MySQL, REST APIs,Kafka, Redis, RebitMQ, Kubernative,Microservices, Amazon Web Services(AWS), git,</span>etc.
    Languages known -> <span id="a">C/C++,  Python, Java </span>
    and done several projects & solved interesting algorithms
    </span>
	
	<span>I am a Knight(1891) @ <a href="https://leetcode.com/ritikagarwal47/" target="_blank">Leetcode </a>,4🌟(1955)  @ <a href="https://www.codechef.com/users/ritikagarwal47" target="_blank">Codechef</a> ,Specialist(1562) @ <a href="https://codeforces.com/profile/ritikagarwal" target="_blank">Codeforces</a> 👨‍💻</span>
	
	<span> Download my resume <a href="https://drive.google.com/file/d/1A_cutvpG_n6cJIKJnwlO_dc-DblEXu7V/view?usp=sharing" target="_blank">here</a></span>
	
	I am <span id="a">looking for interesting roles & opportunites</span> relevant to my profile which gives me an opportunity to be involved in amazing projects
	If you are looking for someone like me or know any opportunities<!-- slightdelayhere-->, feel free to send me an email at<!-- longlonglongcomment --><a href="mailto:ritikagarwal470@gmail.com"> ritikagarwal470@gmail.com</a>
	
	<!-- hsdgfhjfkdjhfkjsdhfkjdshfkjsdhfkjsdhkfjhdskjfhksdjhfkdsj -->
	<span> Here are few more places you can connect with me - <a href="https://github.com/ritikagarwal47" target="_blank">Github</a>, <a href="https://www.linkedin.com/in/ritik-agarwal-6b77031a1/" target="_blank">LinkedIn</a>  
	
	<span id="a">ritik_agarwal@dev</span>:<span id="b">~</span><span id="c">$</span> exit<!-- kjsdfhkjdhsfkjdshfkj -->
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
