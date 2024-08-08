import data from "./data.json" with { type: "json" };
const colums = document.getElementById('columms');
colums.innerHTML = `
  ${data.map((item) => {
     return `
           <div class="wrap-columm">
             <span class='amount'>$${item.amount}</span>
              <div style="height:${(item.amount * 3).toFixed(2)}px" class="${item.day === 'wed' ? 'wed' : 'columm'}"></div>
              <span>${item.day}</span>
            </div>`

  }).join('')}  
`
