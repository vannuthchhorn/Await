const url = "https://jsonplaceholder.typicode.com/users";
const method = "GET";
const sync = true;
const api = new XMLHttpRequest();
api.open( method,url, sync);
api.onload = () => {
    const data = JSON.parse(api.response);
    const table = document.querySelector('table');
    data.forEach(item => {
        const{id, name, email, phone, website} = item;
            if((id) >= 2 && (id) <= 8 ) {
                table.innerHTML +=`
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.email}</td>
                        <td>${item.phone}</td>
                        <td>${item.website}</td>
                    </tr>
                `;
            }
        })
}
api.send();