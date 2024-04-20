const username = prompt("Ingresa tu nombre de usuario")
const ADMIN_USER = "Admin"
const PASSWORD = "TheMaster"
if(username === null || username === "") {
  alert("Cancelado")
} else if(username != ADMIN_USER) {
  alert("No te conozco")
} else {
  const password = prompt("Ingresa tu contraseña")
  if(password === PASSWORD) {
    alert("Bienvenido!")
  } else if(password === null) {
    alert("Cancelado")
  } else {
    alert("Contraseña incorrecta")
  }
}
