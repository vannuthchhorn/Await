const url ="https://jsonplaceholder.typicode.com/users";
async function getUserData() {
    const response = await fetch(url);// request data
    const data = await response.json();//convert data
    const table = document.querySelector('table'); // get data in table
    await data.forEach(element => {
        // destructuring 
        const {id, name, email, phone, website} = element;
        if(element.id %2 == 0 ) {
            table.innerHTML +=`
                <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.phone}</td>
                    <td>${element.website}</td>
                </tr>
            `;
        }
    })
}
getUserData();