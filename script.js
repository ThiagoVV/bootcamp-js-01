function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Thiago', 'Admin');
usuarios.set('Ana', 'Admin');
usuarios.set('Carlos', 'User');
usuarios.set('Matheus', 'User');
usuarios.set('Luiza', 'User');

console.log(getAdmins(usuarios));