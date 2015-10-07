var bookmarkurl="http://www.adoceavida.com.br";
var bookmarktitle="Adoce a Vida - Bolos & Doces Caseiros";

function addbookmark(){
    if (navigator.appName=="Microsoft Internet Explorer" && parseInt(navigator.appVersion) >= 4 && navigator.platform.indexOf("Win") > -1 && navigator.appVersion.indexOf("SlimBrowser") < 0) { 
        window.external.AddFavorite(bookmarkurl,bookmarktitle); 
    }
    else { 
        alert("Para adicionar o site Adoce a Vida aos Favoritos: Usuários de PC, pressionar <Ctrl> + <D>. Para usuários de Mac (Apple), pressionar <Command> + <D>."); 
    }
};
