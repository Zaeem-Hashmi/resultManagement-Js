if (sessionStorage.getItem('user') == null) {
    window.location.replace('../login.html')
}

let user = document.getElementById('user').innerText = sessionStorage.getItem('user');

function logout() {
    sessionStorage.clear('user');
    window.location.replace('../login.html')
}