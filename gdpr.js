document.addEventListener('DOMContentLoaded', function () {
    if (getCookie('gdpr-b308c99f-accepted') !== 'true') {
        createStyles()
        createHTML()
        const gdprMessage = document.getElementById('gdpr-message')
        gdprMessage.style.display = 'flex'
        const gdprButton = document.getElementById('gdpr-accept')
        gdprButton.addEventListener('click', function (event) {
            document.cookie = 'gdpr-b308c99f-accepted=true;secure;samesite=strict;'
            gdprMessage.style.display = 'none'
        })
    }

    function createStyles() {
        const css = ".gdpr{position:fixed;z-index:100;bottom:150px;right:10px;background-color:#483d8b;color:#fff;width:300px;padding:10px;border-radius:5px;box-sizing:border-box;font-family:Calibri,Candara,Segoe,'Segoe UI',Optima,Arial,sans-serif;font-style:normal;font-variant:normal;font-size:14px;display:flex;flex-direction:column}.gdpr p{margin:0;padding:0}.gdpr button{background-color:#1eace1;border-radius:5px;border:none;padding:3px 8px;cursor:pointer;font-family:Calibri,Candara,Segoe,'Segoe UI',Optima,Arial,sans-serif;font-style:normal;font-variant:normal;font-size:14px;color:#fff;margin-left:auto}"
        const head = document.head || document.getElementsByTagName('head')[0]
        const style = document.createElement('style')
        style.type = 'text/css'
        if (style.styleSheet) {
            style.styleSheet.cssText = css
        } else {
            style.appendChild(document.createTextNode(css))
        }
        head.appendChild(style)
    }

    function createHTML() {
        const gdpr = document.createElement('div')
        gdpr.className = 'gdpr'
        gdpr.id = 'gdpr-message'
        gdpr.style.display = 'none'
        const gdprText = document.createElement('p')
        gdprText.innerHTML = 'Продолжая использовать сайт, вы подтверждаете свое согласие на использование cookie. Для корректного отображения сайта рекомендуется очистить cookie на странице <a href="chrome://settings/siteData?searchSubpage=gamesforfarm.com">chrome://settings/siteData?searchSubpage=gamesforfarm.com</a>'
        const gdprButton = document.createElement('button')
        gdprButton.id = 'gdpr-accept'
        gdprButton.innerText = 'ОК'
        gdpr.appendChild(gdprText)
        gdpr.appendChild(gdprButton)
        const body = document.body || document.getElementsByTagName('body')[0]
        body.appendChild(gdpr)
    }

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
})
