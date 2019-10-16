url = "https://jsonplaceholder.typicode.com/todos";
fetch(url)
.then (resp => resp.json())
.then(data =>{
    const table = document.querySelector('table');
        data.forEach(item => {
            if(item.id <= 20) {
                table.innerHTML +=`
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.title}</td>
                        <td>${item.completed}</td>
                    </tr>
                `;
            }
        })
})