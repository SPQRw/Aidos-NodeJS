(()=>{"use strict";const e=new class{render(){const e=document.createElement("ul");e.classList.add("menu");const t=document.createElement("li");t.textContent="Home";const n=document.createElement("li");n.textContent="About";const d=document.createElement("li");return d.textContent="Contact",e.appendChild(t),e.appendChild(n),e.appendChild(d),e}},t=new class{render(){const e=document.createElement("div");e.classList.add("slider");const t=document.createElement("img");t.src="image1.jpg";const n=document.createElement("img");n.src="image2.jpg";const d=document.createElement("img");return d.src="image3.jpg",e.appendChild(t),e.appendChild(n),e.appendChild(d),e}},n=new class{render(){const e=document.createElement("form");e.classList.add("login-form");const t=document.createElement("input");t.type="email",t.placeholder="Email";const n=document.createElement("input");n.type="password",n.placeholder="Password";const d=document.createElement("button");return d.textContent="Submit",e.appendChild(t),e.appendChild(n),e.appendChild(d),e}};document.getElementById("app").appendChild(e.render()),document.getElementById("app").appendChild(t.render()),document.getElementById("app").appendChild(n.render())})();