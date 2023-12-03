const insert = document.querySelector("#insert");

window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
  <div class="color">
  <table style="width:auto; height: 100px; border: 5px dashed green; border-radius: 8px;">
  <tr style="background-color: grey; color:black; border-radius: 8px;">
    <th style="border-radius: 5px;">Key</th>
    <th style="border-radius: 5px;">Keycode</th>
    <th style="border-radius: 5px;">Code</th>
  </tr>
  <tr>
    <td>${e.key === " "? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `
})