const url = "https://jsonplaceholder.typicode.com/users";
async function GetUserData() {
    const response = await fetch(url); 
    const data = await response.json(); 
    const table = document.querySelector('table');
    await   data.forEach(item => {
               table.innerHTML +=`
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.username}</td>
                        <td>${item.email}</td>
                        <td>
                            ${item.address.srteet}
                            ${item.address.suite}
                            ${item.address.city}
                            ${item.address.zipcode}
                            ${item.address.zipcode.geo}
                            ${item.address.zipcode.lng}
                        </td>
                        <td>${item.phone}</td>
                        <td>${item.website}</td>
                        <td>${item.company.name}</td>
                        <td>${item.company.catchPhrase}</td>
                        <td>${item.company.bs}</td>
                    </tr>
               `;
        });
}
GetUserData();