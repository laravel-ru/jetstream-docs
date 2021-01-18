(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{380:function(e,t,a){"use strict";a.r(t);var r=a(40),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"создание-вашего-приложения"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#создание-вашего-приложения"}},[e._v("#")]),e._v(" Создание Вашего приложения")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#введение"}},[e._v("Введение")])]),a("li",[a("a",{attrs:{href:"#панель-приложения"}},[e._v("Панель приложения")]),a("ul",[a("li",[a("a",{attrs:{href:"#добавление-дополнительных-страниц"}},[e._v("Добавление дополнительных страниц")])])])]),a("li",[a("a",{attrs:{href:"#профиль-пользователя"}},[e._v("Профиль пользователя")])]),a("li",[a("a",{attrs:{href:"#управление-командои"}},[e._v("Управление командой")]),a("ul",[a("li",[a("a",{attrs:{href:"#экран-создания-команды"}},[e._v("Экран создания команды")])]),a("li",[a("a",{attrs:{href:"#экран-настроек-команды"}},[e._v("Экран настроек команды")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"введение"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#введение"}},[e._v("#")]),e._v(" Введение")]),e._v(" "),a("p",[e._v("После установки Jetstream Вы можете задаться вопросом, как на самом деле начать сборку Вашего приложения. К счастью, поскольку Jetstream обрабатывает конфигурацию всей начальной аутентификации и построения приложений, Вы можете сразу приступить к работе!")]),e._v(" "),a("p",[e._v("После установки Jetstream код Ваш. Шаблоны принадлежат Вашему приложению и могут быть изменены по Вашему усмотрению. Jetstream - это только отправная точка. Вам не нужно беспокоиться о том, чтобы Ваш пользовательский интерфейс был «совместим» с будущими выпусками Jetstream, потому что каждый выпуск Jetstream - это просто совершенно новая итерация стартового набора. Другими словами, Jetstream - это не панель инструментов или административная панель, которую Вы будете «обновлять» в будущем. Это стартовый набор для Laravel, и после его установки шаблоны полностью принадлежат Вам.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Livewire и Inertia")]),e._v(" "),a("p",[e._v("Прежде чем погрузиться в Jetstream, Вы должны знать, как использовать "),a("a",{attrs:{href:"https://laravel-livewire.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Livewire"),a("OutboundLink")],1),e._v(" или "),a("a",{attrs:{href:"https://inertiajs.ru",target:"_blank",rel:"noopener noreferrer"}},[e._v("Inertia"),a("OutboundLink")],1),e._v(". Jetstream в значительной степени полагается на эти технологии, чтобы обеспечить первоклассный опыт для пользователей и разработчиков.")])]),e._v(" "),a("h2",{attrs:{id:"панель-приложения"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#панель-приложения"}},[e._v("#")]),e._v(" Панель приложения")]),e._v(" "),a("p",[e._v("После аутентификации в Вашем приложении Вы будете перенаправлены на маршрут "),a("code",[e._v("/dashboard")]),e._v(". Этот маршрут является домашним экраном/экраном панели управления Вашего приложения. Когда Вы используете стек Livewire, эта страница отображается с помощью шаблона Blade "),a("code",[e._v("resources/views/dashboard.blade.php")]),e._v(". При использовании стека Inertia экран отображается с помощью компонента "),a("code",[e._v("resources/js/Pages/Dashboard.vue")]),e._v(".")]),e._v(" "),a("p",[e._v("Если Вы откроете шаблон/компонент панели управления для своего приложения, Вы увидите, что он расширяет основной компонент «макета» приложения. Этот макет определяет общий вид интерьера Вашего приложения. При использовании Livewire этот макет определяется шаблоном "),a("code",[e._v("resources/views/layouts/app.blade.php")]),e._v(" и отображается через класс компонентов "),a("code",[e._v("App\\View\\Components\\AppLayout")]),e._v(". При использовании Inertia макет вашего приложения определяется компонентом "),a("code",[e._v("resources/js/Layouts/AppLayout.vue")]),e._v(".")]),e._v(" "),a("p",[e._v("После того, как Вы ознакомитесь с шаблонами панели инструментов и макета приложения, не стесняйтесь приступать к их редактированию. Например, Вы, вероятно, захотите удалить компонент «приветствия», который отображается на панели инструментов Вашего приложения. Для этого Вы можете удалить его из шаблона панели инструментов. Затем Вы можете написать HTML-код, необходимый для создания Вашего приложения. Помните, что Jetstream использует мощный фреймворк Tailwind CSS, поэтому обязательно узнайте больше о Tailwind, обратившись к "),a("a",{attrs:{href:"https://tailwindcss.su/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("документации Tailwind"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"добавление-дополнительных-страниц"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#добавление-дополнительных-страниц"}},[e._v("#")]),e._v(" Добавление дополнительных страниц")]),e._v(" "),a("p",[e._v("По умолчанию в верхнем меню навигации Jetstream есть ссылка на панель управления приложения. Конечно, Вы можете редактировать это меню навигации, добавляя ссылки на другие страницы, которые будут доступны в Вашем приложении. При использовании Livewire меню навигации определяется шаблоном Blade "),a("code",[e._v("resources/views/navigation-menu.blade.php")]),e._v(". При использовании Inertia меню навигации определяется в компоненте "),a("code",[e._v("resources/js/Layouts/AppLayout.vue")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"профиль-пользователя"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#профиль-пользователя"}},[e._v("#")]),e._v(" Профиль пользователя")]),e._v(" "),a("p",[e._v("При создании приложения Jetstream Вам, вероятно, потребуется добавить свои собственные формы и панели на экран управления профилем пользователя. По умолчанию экран профиля пользователя содержит панели для обновления контактной информации пользователя, пароля, управления его настройками двухфакторной аутентификации и т. д. Однако Вы можете добавлять свои собственные дополнительные панели на эту страницу. Для этого Вы можете просто отредактировать шаблоны, определяющие страницу.")]),e._v(" "),a("p",[e._v("При использовании Livewire экран управления профилем пользователя определяется шаблоном Blade "),a("code",[e._v("resources/views/profile/show.blade.php")]),e._v(". При использовании Inertia этот экран отображается с помощью компонента "),a("code",[e._v("resources/js/Pages/Profile/Show.vue")]),e._v(". Чтобы добавить дополнительные панели или формы в профиль пользователя, Вы можете просто отредактировать эти шаблоны по мере необходимости для Вашего приложения.")]),e._v(" "),a("h2",{attrs:{id:"управление-командои"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#управление-командои"}},[e._v("#")]),e._v(" Управление командой")]),e._v(" "),a("p",[e._v("Вам также может потребоваться добавить дополнительные формы и панели на экраны управления командой, отображаемые Jetstream. К ним относятся экран «Параметры команды» для управления существующими командами, а также экран «Создать команду», который отображается, когда пользователь создает новую команду.")]),e._v(" "),a("h3",{attrs:{id:"экран-создания-команды"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#экран-создания-команды"}},[e._v("#")]),e._v(" Экран создания команды")]),e._v(" "),a("p",[e._v("Когда групповая поддержка включена, Jetstream включает экран, который позволяет пользователям создавать новые команды. Вы можете добавлять дополнительные поля формы в форму, содержащуюся на этом экране. Любые дополнительные поля формы, которые Вы добавляете, будут переданы в действие Jetstream "),a("code",[e._v("App\\Actions\\Jetstream\\CreateTeam")]),e._v(" через аргумент "),a("code",[e._v("$input")]),e._v(".")]),e._v(" "),a("p",[e._v("При использовании Livewire экран создания команды определяется шаблоном Blade "),a("code",[e._v("resources/views/teams/create.blade.php")]),e._v(". При использовании Inertia этот экран отображается с помощью компонента "),a("code",[e._v("resources/js/Pages/Teams/Create.vue")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"экран-настроек-команды"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#экран-настроек-команды"}},[e._v("#")]),e._v(" Экран настроек команды")]),e._v(" "),a("p",[e._v("Когда групповая поддержка включена, Jetstream включает экран, который позволяет пользователям управлять настройками для своих существующих команд, такими как изменение названия группы или приглашение дополнительных членов команды. Вы можете добавлять свои собственные дополнительные панели на эти страницы. Для этого Вы можете просто отредактировать шаблоны, определяющие страницу.")]),e._v(" "),a("p",[e._v("При использовании Livewire экран настроек команды определяется шаблоном Blade "),a("code",[e._v("resources/views/teams/show.blade.php")]),e._v(". При использовании Inertia этот экран отображается с помощью компонента "),a("code",[e._v("resources/js/Pages/Teams/Show.vue")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);