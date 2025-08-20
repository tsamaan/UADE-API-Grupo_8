    async function fetchUsers() 
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        renderTable(users);
    }

function renderTable(users) {
    if (!users || users.length === 0) {
        document.getElementById('users-container').innerHTML = '<p>No se recibieron usuarios de la API.</p>';
        return;
    }
    let html = '<table>';
    html += '<tr><th>ID</th><th>Nombre</th><th>Usuario</th><th>Email</th><th>Ciudad</th><th>Teléfono</th><th>Compañía</th></tr>';
    users.forEach(user => {
        html += `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
            <td>${user.phone}</td>
            <td>${user.company.name}</td>
        </tr>`;
    });
    html += '</table>';
    document.getElementById('users-container').innerHTML = html;
}
