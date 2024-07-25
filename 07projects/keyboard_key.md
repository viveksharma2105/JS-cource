```javascript

window.addEventListener('keydown',function(e){
 insert.innerHTML = `
 <div class = "color">
 <table>f

  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.code}</td>
  </tr>

  
</table>
 </div>

```