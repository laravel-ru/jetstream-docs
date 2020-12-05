(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{348:function(t,a,s){t.exports=s.p+"assets/img/api.9a433930.png"},357:function(t,a,s){"use strict";s.r(a);var n=s(40),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#вступление"}},[t._v("Вступление")])]),n("li",[n("a",{attrs:{href:"#включение-поддержки-api"}},[t._v("Включение поддержки API")])]),n("li",[n("a",{attrs:{href:"#определение-разрешении"}},[t._v("Определение разрешений")])]),n("li",[n("a",{attrs:{href:"#авторизация-входящих-запросов"}},[t._v("Авторизация входящих запросов")])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"вступление"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#вступление"}},[t._v("#")]),t._v(" Вступление")]),t._v(" "),n("p",[t._v("Jetstream включает встроенную интеграцию с "),n("a",{attrs:{href:"https://laravel.com/docs/sanctum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Sanctum"),n("OutboundLink")],1),t._v(". Laravel Sanctum предоставляет легкую систему аутентификации для SPA (одностраничных приложений), мобильных приложений и простых API на основе токенов. Sanctum позволяет каждому пользователю Вашего приложения создавать несколько токенов API для своей учетной записи. Этим токенам могут быть предоставлены возможности / разрешения, которые определяют, какие действия токенам разрешено выполнять.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(348),alt:"Скриншот Laravel Jetstream API"}})]),t._v(" "),n("p",[t._v("По умолчанию к панели создания токенов API можно получить доступ, используя ссылку «API» в раскрывающемся меню профиля пользователя в правом верхнем углу. На этом экране пользователи могут создавать токены Sanctum API с различными разрешениями.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("Документация Sanctum")]),t._v(" "),n("p",[t._v("Для получения дополнительной информации о Sanctum и о том, как отправлять запросы к API с аутентификацией Sanctum, обратитесь к официальной "),n("a",{attrs:{href:"https://laravel.com/docs/sanctum",target:"_blank",rel:"noopener noreferrer"}},[t._v("документации Sanctum"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("h2",{attrs:{id:"включение-поддержки-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#включение-поддержки-api"}},[t._v("#")]),t._v(" Включение поддержки API")]),t._v(" "),n("p",[t._v("Если Ваше приложение будет предлагать API третьим лицам, Вы должны включить функцию API Jetstream. Для этого раскомментируйте соответствующую запись в опции конфигурации "),n("code",[t._v("features")]),t._v(" конфигурационного файла "),n("code",[t._v("config/jetstream.php")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'features'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    Features"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("profilePhotos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Features"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("api")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Features"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("teams")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("h2",{attrs:{id:"определение-разрешении"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#определение-разрешении"}},[t._v("#")]),t._v(" Определение разрешений")]),t._v(" "),n("p",[t._v("Разрешения, доступные для токенов API, определяются с помощью метода "),n("code",[t._v("Jetstream::permissions")]),t._v(" в объекте "),n("code",[t._v("JetstreamServiceProvider")]),t._v(" Вашего приложения. Разрешения - это простые строки. Как только они будут определены, они могут быть назначены токену API:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("Jetstream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultApiTokenPermissions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'read'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nJetstream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("permissions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'create'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'read'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'update'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'delete'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Метод "),n("code",[t._v("defaultApiTokenPermissions")]),t._v(" может использоваться для указания, какие разрешения должны быть выбраны по умолчанию при создании нового токена API. Конечно, пользователь может снять отметку с разрешения по умолчанию перед созданием токена.")]),t._v(" "),n("h2",{attrs:{id:"авторизация-входящих-запросов"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#авторизация-входящих-запросов"}},[t._v("#")]),t._v(" Авторизация входящих запросов")]),t._v(" "),n("p",[t._v("Каждый запрос, сделанный к Вашему приложению Jetstream, даже к аутентифицированным маршрутам в Вашем файле "),n("code",[t._v("routes/web.php")]),t._v(", будет связан с объектом токена Sanctum. Вы можете определить, имеет ли связанный токен данное разрешение, используя метод "),n("code",[t._v("tokenCan")]),t._v(", предоставляемый трейтом "),n("code",[t._v("Laravel\\Sanctum\\HasApiTokens")]),t._v(". Этот трейт автоматически применяется к модели Вашего приложения "),n("code",[t._v("App\\Models\\User")]),t._v(" во время установки Jetstream:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("user")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tokenCan")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'read'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h4",{attrs:{id:"запросы-инициированные-пользовательским-интерфеисом"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#запросы-инициированные-пользовательским-интерфеисом"}},[t._v("#")]),t._v(" Запросы, инициированные пользовательским интерфейсом")]),t._v(" "),n("p",[t._v("Когда пользователь делает запрос к маршруту в вашем файле "),n("code",[t._v("routes/web.php")]),t._v(", запрос обычно аутентифицируется Sanctum с помощью веб-защиты "),n("code",[t._v("web")]),t._v(" на основе файлов куки. Так как в этом сценарии пользователь выполняет первичный запрос через пользовательский интерфейс приложения, метод "),n("code",[t._v("tokenCan")]),t._v(" всегда будет возвращать "),n("code",[t._v("true")]),t._v(".")]),t._v(" "),n("p",[t._v("Поначалу такое поведение может показаться странным; однако удобно всегда предполагать, что токен API доступен и может быть проверен с помощью метода "),n("code",[t._v("tokenCan")]),t._v(". Это означает, что в рамках политик авторизации Вашего приложения Вы всегда можете вызвать этот метод, не опасаясь, что с запросом не связан токен.")])])}),[],!1,null,null,null);a.default=e.exports}}]);