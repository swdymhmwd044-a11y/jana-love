const text=`يمكن الكلام ميكفيش يوصف كل اللي جوايا...
من أول مرة شوفتك في الدرس، وإنتي بقيتي جزء مهم من أيامي.
كل حاجة فيكي بحبها.
بحبك يا جوجه ❤️
- محمود`;
function show(id){document.querySelectorAll(".q").forEach(x=>x.classList.add("hide"));document.getElementById(id).classList.remove("hide")}
function a1(x){if(x)show("q2");else alert("حاولي تاني ❤️")}
function a2(x){if(x)show("q3");else alert("لا 😄")}
function a3(){if(document.getElementById("d").value.trim()=="16/8/2023"){show("letter");let i=0;let t=setInterval(()=>{msg.textContent=text.slice(0,++i);if(i>=text.length)clearInterval(t)},40)}else alert("التاريخ مش صح");}