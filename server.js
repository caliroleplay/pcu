const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para manejar la autenticación de Steam
app.get('/auth/steam', (req, res) => {
    // Redirige al usuario a la página de autenticación de Steam
    res.redirect('https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fsteam%2Fcallback&openid.realm=http%3A%2F%2Flocalhost%3A3000%2F&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select');
});

// Ruta para manejar la redirección de Steam después de la autenticación
app.get('/auth/steam/callback', (req, res) => {
    // Aquí puedes manejar la respuesta de Steam después de la autenticación
    // Por ahora, simplemente redireccionamos al usuario a la página de inicio
    res.redirect('/index2.html');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
