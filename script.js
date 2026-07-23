const app=document.getElementById('app');let step=0;
function render(){if(step==0)app.innerHTML=`<div id=card><h2>🔒 رسالة خاصة</h2><p>اكتبي أول تاريخ بدأ كل حاجة</p><input id=p><br><button onclick=check()>فتح</button><p id=e></p></div>`;
else if(step==1)app.innerHTML=`<div id=card><h2>💌</h2><p>اضغطي على الظرف</p><div style='font-size:90px;cursor:pointer' onclick='step=2;render()'>💌</div></div>`;
else if(step==2)app.innerHTML=`<div id=card><h2>سؤال 1</h2><p>فين اتعرفنا؟</p><button onclick='ans(0)'>المدرسة</button><button onclick='ans(1)'>الدرس</button></div>`;
else if(step==3){app.innerHTML='<div id=card><h2>💖 إلى جوجه</h2><p id=m></p></div>';type();}}
function check(){if(document.getElementById('p').value.trim()=='16/8'){step=1;render()}else e.textContent='غلط ❤️'}
function ans(x){if(x){step=3;render()}else alert('حاولي تاني')}
function type(){const t='من أول مرة شوفتك في الدرس وأنا حبيت أعملك حاجة مختلفة. كل سنة وإنتِ أقرب لقلبي. بحبك يا جوجه ❤️ - محمود';let i=0;let iv=setInterval(()=>{m.textContent=t.slice(0,++i);if(i>=t.length)clearInterval(iv)},35)}
render();