(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{377:function(t,a,s){"use strict";s.r(a);var n=s(40),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"inertia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inertia"}},[t._v("#")]),t._v(" Inertia")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#вступление"}},[t._v("Вступление")])]),s("li",[s("a",{attrs:{href:"#компоненты"}},[t._v("Компоненты")])]),s("li",[s("a",{attrs:{href:"#настроика-рендеринга-страницы-jetstream"}},[t._v("Настройка рендеринга страницы Jetstream")])]),s("li",[s("a",{attrs:{href:"#помощники-формы-валидации"}},[t._v("Помощники формы / валидации")])]),s("li",[s("a",{attrs:{href:"#модальные"}},[t._v("Модальные")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"вступление"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#вступление"}},[t._v("#")]),t._v(" Вступление")]),t._v(" "),s("p",[t._v("Стек Inertia, предоставляемый Jetstream, использует "),s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js"),s("OutboundLink")],1),t._v(" в качестве языка шаблонов. Создание приложения Inertia очень похоже на создание типичного приложения Vue; однако Вы будете использовать маршрутизатор Laravel вместо маршрутизатора Vue. Inertia - это небольшая библиотека, которая позволяет Вам отображать однофайловые компоненты Vue из Вашего бэкэнда Laravel, предоставляя имя компонента и данные, которые должны быть перенесены в «свойства» этого компонента.")]),t._v(" "),s("p",[t._v('Другими словами, этот стек дает Вам всю мощь Vue.js без сложной маршрутизации на стороне клиента. Стек Inertia - отличный выбор, если Вам комфортно и нравится использовать Vue.js в качестве языка шаблонов. При использовании Inertia маршруты Вашего приложения будут отображать "страницу" Inertia. Это очень похоже на возвращение представления Laravel Blade:')]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Inertia"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Inertia")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Показать экран общих настроек профиля.\n *\n * @param  \\Illuminate\\Http\\Request  $request\n * @return \\Inertia\\Response\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Request "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Inertia"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Profile/Show'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sessions'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sessions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("При использовании стека Inertia Jetstream обладает некоторыми уникальными функциями, о которых Вам следует знать. Мы обсудим каждую из этих функций ниже.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Документация Inertia")]),t._v(" "),s("p",[t._v("Перед использованием стека Inertia настоятельно рекомендуется просмотреть всю "),s("a",{attrs:{href:"https://inertiajs.ru",target:"_blank",rel:"noopener noreferrer"}},[t._v("документацию Inertia"),s("OutboundLink")],1),t._v(" или "),s("a",{attrs:{href:"https://inertiajs.ru",target:"_blank",rel:"noopener noreferrer"}},[t._v("перевод официальной документации Inertia"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"компоненты"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#компоненты"}},[t._v("#")]),t._v(" Компоненты")]),t._v(" "),s("p",[t._v("Когда мы создавали стек Jetstream Inertia, были созданы различные компоненты Vue (кнопки, панели, входы, модальные окна), чтобы помочь в обеспечении согласованности пользовательского интерфейса и простоте использования. Вы можете использовать или не использовать эти компоненты. Все эти компоненты находятся в каталоге Вашего приложения "),s("code",[t._v("resources/js/Jetstream")]),t._v(".")]),t._v(" "),s("p",[t._v("Вы можете получить представление о том, как использовать эти компоненты, просмотрев их использование на существующих страницах Jetstream, расположенных в каталоге Вашего приложения "),s("code",[t._v("resources/js/Pages")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"настроика-рендеринга-страницы-jetstream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#настроика-рендеринга-страницы-jetstream"}},[t._v("#")]),t._v(" Настройка рендеринга страницы Jetstream")]),t._v(" "),s("p",[t._v("Некоторые страницы Inertia в Jetstream, такие как "),s("code",[t._v("Teams/Show")]),t._v(" и "),s("code",[t._v("Profile/Show")]),t._v(", отображаются внутри самого Jetstream. Однако Вам может потребоваться передать на эти страницы дополнительные данные при создании приложения. Следовательно, Jetstream позволяет настраивать данные / свойства, передаваемые на эти страницы, с помощью метода "),s("code",[t._v("Jetstream::inertia()->whenRendering")]),t._v(".")]),t._v(" "),s("p",[t._v("Этот метод принимает имя страницы, которую Вы хотите настроить и замыкание. Замыкание получит входящий HTTP-запрос и массив данных по умолчанию, которые обычно отправляются на страницу. Вы можете при необходимости настроить или добавить новые элементы массива к данным. Обычно Вы должны вызывать этот метод из метода "),s("code",[t._v("boot")]),t._v(" Вашего класса "),s("code",[t._v("App\\Providers\\JetstreamServiceProvider")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Jetstream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Jetstream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Загрузка любых служб приложений.\n *\n * @return void\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("boot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n    Jetstream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inertia")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whenRendering")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Profile/Show'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Request "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("array_merge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Пользовательские данные...")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Настройка просмотра аутентификации")]),t._v(" "),s("p",[t._v("Чтобы узнать, как настроить страницы Inertia, отображаемые связанными с аутентификацией маршрутами Jetstream, такими как вход, регистрация и сброс пароля, ознакомьтесь с "),s("RouterLink",{attrs:{to:"/1.x/features/authentication.html#customizing-inertia-authentication-views"}},[t._v("документацией по аутентификации")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"помощники-формы-валидации"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#помощники-формы-валидации"}},[t._v("#")]),t._v(" Помощники формы / валидации")]),t._v(" "),s("p",[t._v("Чтобы сделать работу с формами и ошибками валидации более удобной, был создан NPM-пакет "),s("a",{attrs:{href:"https://github.com/laravel/jetstream-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("laravel-jetstream"),s("OutboundLink")],1),t._v(". Этот пакет устанавливается автоматически при использовании стека Jetstream Inertia.")]),t._v(" "),s("p",[t._v("Этот пакет добавляет новый метод "),s("code",[t._v("form")]),t._v(" к объекту "),s("code",[t._v("$inertia")]),t._v(", к которому можно получить доступ через Ваши компоненты Vue. Метод "),s("code",[t._v("form")]),t._v(" используется для создания нового объекта формы, который обеспечит легкий доступ к сообщениям об ошибках, а также к таким удобствам, как сброс состояния формы при успешной отправке формы:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        form"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$inertia"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            email"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            bag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updateProfileInformation'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            resetOnSuccess"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Форма может быть отправлена с использованием методов "),s("code",[t._v("post")]),t._v(", "),s("code",[t._v("put")]),t._v(" или "),s("code",[t._v("delete")]),t._v(". Все данные, указанные при создании формы, будут автоматически включены в запрос. Кроме того, можно указать "),s("a",{attrs:{href:"https://inertiajs.ru/requests",target:"_blank",rel:"noopener noreferrer"}},[t._v("Параметры запроса инерции"),s("OutboundLink")],1),t._v(" или "),s("a",{attrs:{href:"https://inertiajs.ru/requests",target:"_blank",rel:"noopener noreferrer"}},[t._v("перевод параметров запроса инерции"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/profile-information'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    preserveScroll"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("К сообщениям об ошибках формы можно получить доступ, используя метод "),s("code",[t._v("form.error")]),t._v(". Этот метод вернет первое доступное сообщение об ошибке для данного поля:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jet-input-error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":message")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form.error("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mt-2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("Сглаженный список всех ошибок проверки можно получить с помощью метода "),s("code",[t._v("errors")]),t._v(". Этот метод может оказаться полезным при попытке отобразить сообщение об ошибке в виде простого списка:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("error in form.errors()"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ error }}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Дополнительная информация о текущем состоянии формы доступна через методы "),s("code",[t._v("recentlySuccessful")]),t._v(" и "),s("code",[t._v("processing")]),t._v('. Эти методы полезны для того, чтобы диктовать отключенные или "выполняющиеся" состояния пользовательского интерфейса:')]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jet-action-message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":on")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form.recentlySuccessful"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mr-3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Сохранено.\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("jet-action-message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jet-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("opacity-25"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(": form.processing }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":disabled")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form.processing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Сохранить\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("jet-button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Чтобы узнать больше об использовании помощников форм Jetstream Inertia, Вы можете просмотреть страницы Inertia, созданные во время установки Jetstream. Эти страницы находятся в каталоге Вашего приложения "),s("code",[t._v("resources/js/Pages")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"модальные"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#модальные"}},[t._v("#")]),t._v(" Модальные")]),t._v(" "),s("p",[t._v("Стек Inertia в Jetstream также включает два модальных компонента: "),s("code",[t._v("DialogModal")]),t._v(" и "),s("code",[t._v("ConfirmationModal")]),t._v(". "),s("code",[t._v("ConfirmationModal")]),t._v(" может использоваться при подтверждении деструктивных действий, таких как удаление ресурсов, в то время как "),s("code",[t._v("DialogModal")]),t._v(" является более общим модальным окном, которое можно использовать в любое время.")]),t._v(" "),s("p",[t._v("Чтобы проиллюстрировать использование модальных окон, рассмотрим следующее модальное окно, которое подтверждает, что пользователь желает удалить свою учетную запись:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jet-confirmation-modal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("confirmingUserDeletion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@close")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("confirmingUserDeletion = false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Удалить аккаунт\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Вы уверены, что хотите удалить свою учетную запись? После удаления Вашей учетной записи все ее ресурсы и данные будут удалены без возможности восстановления.\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jet-secondary-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click.native")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("confirmingUserDeletion = false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            Ничего\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("jet-secondary-button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jet-danger-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ml-2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click.native")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("deleteTeam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("opacity-25"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(": form.processing }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":disabled")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form.processing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            Удалить аккаунт\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("jet-danger-button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("jet-confirmation-modal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Как видите, состояние открытия / закрытия модального окна определяется свойством "),s("code",[t._v("show")]),t._v(", которое объявлено в компоненте. Содержимое модального окна может быть определено путем гидратации трех слотов: "),s("code",[t._v("title")]),t._v(", "),s("code",[t._v("content")]),t._v(" и "),s("code",[t._v("footer")]),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);