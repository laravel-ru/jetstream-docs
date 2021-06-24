(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{381:function(t,e,a){"use strict";a.r(e);var r=a(40),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"обзор-концепции"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#обзор-концепции"}},[t._v("#")]),t._v(" Обзор концепции")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#введение"}},[t._v("Введение")])]),a("li",[a("a",{attrs:{href:"#laravel-fortify"}},[t._v("Laravel Fortify")])]),a("li",[a("a",{attrs:{href:"#деиствия"}},[t._v("Действия")])]),a("li",[a("a",{attrs:{href:"#представления-страницы"}},[t._v("Представления / Страницы")]),a("ul",[a("li",[a("a",{attrs:{href:"#макеты"}},[t._v("Макеты")])]),a("li",[a("a",{attrs:{href:"#панель"}},[t._v("Панель")])]),a("li",[a("a",{attrs:{href:"#компоненты-livewire"}},[t._v("Компоненты Livewire")])])])]),a("li",[a("a",{attrs:{href:"#tailwind"}},[t._v("Tailwind")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"введение"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#введение"}},[t._v("#")]),t._v(" Введение")]),t._v(" "),a("p",[t._v("Архитектура Laravel Jetstream немного отличается от других стартовых наборов приложений Laravel, таких как "),a("a",{attrs:{href:"https://getlaravel.ru/docs/starter-kits",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Breeze"),a("OutboundLink")],1),t._v(". В этой документации мы рассмотрим некоторые высокоуровневые концепции, которые помогут Вам понять, как устроен Laravel Jetstream.")]),t._v(" "),a("h2",{attrs:{id:"laravel-fortify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#laravel-fortify"}},[t._v("#")]),t._v(" Laravel Fortify")]),t._v(" "),a("p",[t._v("Под капотом аутентификационные части Jetstream работают на "),a("a",{attrs:{href:"https://github.com/laravel/fortify",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Fortify"),a("OutboundLink")],1),t._v(", который является независимым от внешнего интерфейса, «безголовым» сервером аутентификации для Laravel.")]),t._v(" "),a("p",[t._v("Fortify регистрирует маршруты и контроллеры, необходимые для реализации всех функций аутентификации Laravel, включая вход в систему, регистрацию, сброс пароля, проверку электронной почты и многое другое. После установки Fortify Вы можете запустить Artisan-команду "),a("code",[t._v("route:list")]),t._v(", чтобы просмотреть маршруты, зарегистрированные Fortify.")]),t._v(" "),a("p",[t._v("Поскольку Fortify не предоставляет собственный пользовательский интерфейс, он предназначен для работы в паре с Вашим собственным пользовательским интерфейсом, который отправляет запросы на регистрируемые им маршруты. Laravel Jetstream - это наша собственная реализация пользовательского интерфейса, построенная на основе бэкэнда аутентификации Fortify.")]),t._v(" "),a("h4",{attrs:{id:"конфигурация-fortify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#конфигурация-fortify"}},[t._v("#")]),t._v(" Конфигурация Fortify")]),t._v(" "),a("p",[t._v("Когда Jetstream установлен, в Ваше приложение устанавливается файл конфигурации "),a("code",[t._v("config/fortify.php")]),t._v(". В этом файле конфигурации Вы можете настроить различные аспекты поведения Fortify, такие как средство защиты аутентификации, которое следует использовать, куда следует перенаправлять пользователей после аутентификации и многое другое.")]),t._v(" "),a("p",[t._v("В файле конфигурации "),a("code",[t._v("fortify")]),t._v(" Вы также можете отключить все функции Fortify, такие как возможность обновления информации профиля или паролей.")]),t._v(" "),a("h2",{attrs:{id:"деиствия"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#деиствия"}},[t._v("#")]),t._v(" Действия")]),t._v(" "),a("p",[t._v("В отличие от "),a("a",{attrs:{href:"https://getlaravel.ru/docs/starter-kits",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Breeze"),a("OutboundLink")],1),t._v(", Laravel Jetstream не публикует контроллеры или маршруты для Вашего приложения. Вместо этого функциональность Jetstream настраивается с помощью классов «Action». В процессе установки Jetstream действия публикуются в каталоге Вашего приложения "),a("code",[t._v("app/Actions")]),t._v(".")]),t._v(" "),a("p",[t._v("Классы действий обычно выполняют одно действие и соответствуют одной функции Jetstream или Fortify, такой как создание группы или удаление пользователя. Вы можете настроить эти классы, если хотите настроить внутреннее поведение Jetstream. Каждое из соответствующих действий, опубликованных Jetstream, будет обсуждаться в соответствующей документации функции.")]),t._v(" "),a("h2",{attrs:{id:"представления-страницы"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#представления-страницы"}},[t._v("#")]),t._v(" Представления / Страницы")]),t._v(" "),a("p",[t._v("Во время установки Jetstream опубликует различные представления и классы для Вашего приложения. При использовании Livewire представления будут публиковаться в каталоге "),a("code",[t._v("resources/views")]),t._v(". При использовании Inertia «Страницы» будут опубликованы в Вашем каталоге "),a("code",[t._v("resources/js/Pages")]),t._v(".")]),t._v(" "),a("p",[t._v("Представления / страницы, опубликованные Jetstream, содержат все функции, поддерживаемые Jetstream, и Вы можете свободно настраивать их по своему усмотрению. Считайте Jetstream отправной точкой для Вашего приложения. После того, как Вы установили Jetstream, Вы можете настроить все, что захотите.")]),t._v(" "),a("h3",{attrs:{id:"макеты"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#макеты"}},[t._v("#")]),t._v(" Макеты")]),t._v(" "),a("h4",{attrs:{id:"макет-приложения"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#макет-приложения"}},[t._v("#")]),t._v(" Макет приложения")]),t._v(" "),a("p",[t._v("После установки Ваше приложение Jetstream будет содержать два «макета». Во-первых, Jetstream создает макет приложения, который используется для определения макета страниц Вашего приложения, требующих аутентификации, например, панели инструментов Вашего приложения. При использовании стека Livewire этот макет определяется в "),a("code",[t._v("resources/views/layouts/app.blade.php")]),t._v(" и отображается классом "),a("code",[t._v("App\\View\\Components\\AppLayout")]),t._v(". При использовании стека Inertia этот макет определяется в "),a("code",[t._v("resources/js/Layouts/AppLayout.vue")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"макет-гостевои-аутентификация"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#макет-гостевои-аутентификация"}},[t._v("#")]),t._v(" Макет Гостевой / Аутентификация")]),t._v(" "),a("p",[t._v("В дополнение к макету приложения Jetstream создает «гостевой» макет, который используется для определения макета страниц Jetstream, связанных с аутентификацией, таких как страницы входа в систему, регистрации и сброса пароля Вашего приложения. При использовании стека Livewire этот макет определяется в "),a("code",[t._v("resources/views/layouts/guest.blade.php")]),t._v(" и отображается классом "),a("code",[t._v("App\\View\\Components\\GuestLayout")]),t._v(". При использовании стека Inertia этот макет определяется в "),a("code",[t._v("resources/js/Layouts/GuestLayout.vue")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"панель"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#панель"}},[t._v("#")]),t._v(" Панель")]),t._v(" "),a("p",[t._v("«Главный» вид Вашего приложения публикуется в "),a("code",[t._v("resources/views/dashboard.blade.php")]),t._v(" при использовании Livewire и "),a("code",[t._v("resources/js/Pages/Dashboard.vue")]),t._v(" при использовании Inertia. Вы можете использовать это как отправную точку для создания основной «панели» Вашего приложения.")]),t._v(" "),a("h3",{attrs:{id:"компоненты-livewire"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#компоненты-livewire"}},[t._v("#")]),t._v(" Компоненты Livewire")]),t._v(" "),a("p",[t._v("При использовании стека Livewire Jetstream использует множество общих компонентов Blade, таких как кнопки и модальные окна. Если Вы используете стек Livewire и хотите опубликовать эти компоненты после установки Jetstream, Вы можете использовать Artisan-команду "),a("code",[t._v("vendor:publish")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("php artisan vendor:publish --tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jetstream-views\n")])])]),a("p",[t._v("После публикации этих компонентов Вы можете изменять их по мере необходимости, чтобы настроить внешний вид Вашего приложения.")]),t._v(" "),a("h2",{attrs:{id:"tailwind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tailwind"}},[t._v("#")]),t._v(" Tailwind")]),t._v(" "),a("p",[t._v("Во время установки Jetstream обеспечит интеграцию Вашего приложения с фреймворком Tailwind CSS. В частности, будут созданы файлы "),a("code",[t._v("webpack.mix.js")]),t._v(" и "),a("code",[t._v("tailwind.config.js")]),t._v(". Эти два файла используются для создания скомпилированного вывода CSS Вашего приложения. Вы можете изменять эти файлы по мере необходимости для своего приложения.")]),t._v(" "),a("p",[t._v("Кроме того, Ваш файл "),a("code",[t._v("tailwind.config.js")]),t._v(" был предварительно настроен для поддержки PurgeCSS с соответствующими каталогами, правильно указанными в зависимости от выбранного Вами стека Jetstream.")]),t._v(" "),a("p",[t._v("Файл "),a("code",[t._v("package.json")]),t._v(" Вашего приложения уже содержит команды NPM, которые Вы можете использовать для компиляции Ваших ресурсов. Для получения дополнительной информации о компиляции ресурсов Вашего приложения обратитесь к "),a("a",{attrs:{href:"https://getlaravel.ru/docs/mix",target:"_blank",rel:"noopener noreferrer"}},[t._v("документации Laravel Mix"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Скомпилируйте свой CSS / JavaScript для разработки...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Скомпилируйте свой CSS / JavaScript для продакшена...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run prod\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Скомпилируйте свой CSS / JavaScript для разработки и перекомпилируйте при изменении...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);