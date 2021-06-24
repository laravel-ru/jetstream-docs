(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{380:function(t,e,s){"use strict";s.r(e);var a=s(40),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"создание-вашего-приложения"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#создание-вашего-приложения"}},[t._v("#")]),t._v(" Создание Вашего приложения")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#введение"}},[t._v("Введение")])]),s("li",[s("a",{attrs:{href:"#панель-приложения"}},[t._v("Панель приложения")]),s("ul",[s("li",[s("a",{attrs:{href:"#добавление-дополнительных-страниц"}},[t._v("Добавление дополнительных страниц")])])])]),s("li",[s("a",{attrs:{href:"#профиль-пользователя"}},[t._v("Профиль пользователя")])]),s("li",[s("a",{attrs:{href:"#управление-командои"}},[t._v("Управление командой")]),s("ul",[s("li",[s("a",{attrs:{href:"#экран-создания-команды"}},[t._v("Экран создания команды")])]),s("li",[s("a",{attrs:{href:"#экран-настроек-команды"}},[t._v("Экран настроек команды")])]),s("li",[s("a",{attrs:{href:"#баннер-уведомлении"}},[t._v("Баннер уведомлений")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"введение"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#введение"}},[t._v("#")]),t._v(" Введение")]),t._v(" "),s("p",[t._v("После установки Jetstream Вы можете задаться вопросом, как на самом деле начать сборку Вашего приложения. К счастью, поскольку Jetstream обрабатывает конфигурацию всей начальной аутентификации и построения приложений, Вы можете сразу приступить к работе!")]),t._v(" "),s("p",[t._v("После установки Jetstream код Ваш. Шаблоны принадлежат Вашему приложению и могут быть изменены по Вашему усмотрению. Jetstream - это только отправная точка. Вам не нужно беспокоиться о том, чтобы Ваш пользовательский интерфейс был «совместим» с будущими выпусками Jetstream, потому что каждый выпуск Jetstream - это просто совершенно новая итерация стартового набора. Другими словами, Jetstream - это не панель инструментов или административная панель, которую Вы будете «обновлять» в будущем. Это стартовый набор для Laravel, и после его установки шаблоны полностью принадлежат Вам.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Livewire и Inertia")]),t._v(" "),s("p",[t._v("Прежде чем погрузиться в Jetstream, Вы должны знать, как использовать "),s("a",{attrs:{href:"https://laravel-livewire.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Livewire"),s("OutboundLink")],1),t._v(" или "),s("a",{attrs:{href:"https://inertiajs.ru",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inertia"),s("OutboundLink")],1),t._v(". Jetstream в значительной степени полагается на эти технологии, чтобы обеспечить первоклассный опыт для пользователей и разработчиков.")])]),t._v(" "),s("h2",{attrs:{id:"панель-приложения"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#панель-приложения"}},[t._v("#")]),t._v(" Панель приложения")]),t._v(" "),s("p",[t._v("После аутентификации в Вашем приложении Вы будете перенаправлены на маршрут "),s("code",[t._v("/dashboard")]),t._v(". Этот маршрут является домашним экраном/экраном панели управления Вашего приложения. Когда Вы используете стек Livewire, эта страница отображается с помощью шаблона Blade "),s("code",[t._v("resources/views/dashboard.blade.php")]),t._v(". При использовании стека Inertia экран отображается с помощью компонента "),s("code",[t._v("resources/js/Pages/Dashboard.vue")]),t._v(".")]),t._v(" "),s("p",[t._v("Если Вы откроете шаблон/компонент панели управления для своего приложения, Вы увидите, что он расширяет основной компонент «макета» приложения. Этот макет определяет общий вид интерьера Вашего приложения. При использовании Livewire этот макет определяется шаблоном "),s("code",[t._v("resources/views/layouts/app.blade.php")]),t._v(" и отображается через класс компонентов "),s("code",[t._v("App\\View\\Components\\AppLayout")]),t._v(". При использовании Inertia макет вашего приложения определяется компонентом "),s("code",[t._v("resources/js/Layouts/AppLayout.vue")]),t._v(".")]),t._v(" "),s("p",[t._v("После того, как Вы ознакомитесь с шаблонами панели инструментов и макета приложения, не стесняйтесь приступать к их редактированию. Например, Вы, вероятно, захотите удалить компонент «приветствия», который отображается на панели инструментов Вашего приложения. Для этого Вы можете удалить его из шаблона панели инструментов. Затем Вы можете написать HTML-код, необходимый для создания Вашего приложения. Помните, что Jetstream использует мощный фреймворк Tailwind CSS, поэтому обязательно узнайте больше о Tailwind, обратившись к "),s("a",{attrs:{href:"https://tailwindcss.su/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("документации Tailwind"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"добавление-дополнительных-страниц"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#добавление-дополнительных-страниц"}},[t._v("#")]),t._v(" Добавление дополнительных страниц")]),t._v(" "),s("p",[t._v("По умолчанию в верхнем меню навигации Jetstream есть ссылка на панель управления приложения. Конечно, Вы можете редактировать это меню навигации, добавляя ссылки на другие страницы, которые будут доступны в Вашем приложении. При использовании Livewire меню навигации определяется шаблоном Blade "),s("code",[t._v("resources/views/navigation-menu.blade.php")]),t._v(". При использовании Inertia меню навигации определяется в компоненте "),s("code",[t._v("resources/js/Layouts/AppLayout.vue")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"профиль-пользователя"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#профиль-пользователя"}},[t._v("#")]),t._v(" Профиль пользователя")]),t._v(" "),s("p",[t._v("При создании приложения Jetstream Вам, вероятно, потребуется добавить свои собственные формы и панели на экран управления профилем пользователя. По умолчанию экран профиля пользователя содержит панели для обновления контактной информации пользователя, пароля, управления его настройками двухфакторной аутентификации и т. д. Однако Вы можете добавлять свои собственные дополнительные панели на эту страницу. Для этого Вы можете просто отредактировать шаблоны, определяющие страницу.")]),t._v(" "),s("p",[t._v("При использовании Livewire экран управления профилем пользователя определяется шаблоном Blade "),s("code",[t._v("resources/views/profile/show.blade.php")]),t._v(". При использовании Inertia этот экран отображается с помощью компонента "),s("code",[t._v("resources/js/Pages/Profile/Show.vue")]),t._v(". Чтобы добавить дополнительные панели или формы в профиль пользователя, Вы можете просто отредактировать эти шаблоны по мере необходимости для Вашего приложения.")]),t._v(" "),s("h2",{attrs:{id:"управление-командои"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#управление-командои"}},[t._v("#")]),t._v(" Управление командой")]),t._v(" "),s("p",[t._v("Вам также может потребоваться добавить дополнительные формы и панели на экраны управления командой, отображаемые Jetstream. К ним относятся экран «Параметры команды» для управления существующими командами, а также экран «Создать команду», который отображается, когда пользователь создает новую команду.")]),t._v(" "),s("h3",{attrs:{id:"экран-создания-команды"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#экран-создания-команды"}},[t._v("#")]),t._v(" Экран создания команды")]),t._v(" "),s("p",[t._v("Когда групповая поддержка включена, Jetstream включает экран, который позволяет пользователям создавать новые команды. Вы можете добавлять дополнительные поля формы в форму, содержащуюся на этом экране. Любые дополнительные поля формы, которые Вы добавляете, будут переданы в действие Jetstream "),s("code",[t._v("App\\Actions\\Jetstream\\CreateTeam")]),t._v(" через аргумент "),s("code",[t._v("$input")]),t._v(".")]),t._v(" "),s("p",[t._v("При использовании Livewire экран создания команды определяется шаблоном Blade "),s("code",[t._v("resources/views/teams/create.blade.php")]),t._v(". При использовании Inertia этот экран отображается с помощью компонента "),s("code",[t._v("resources/js/Pages/Teams/Create.vue")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"экран-настроек-команды"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#экран-настроек-команды"}},[t._v("#")]),t._v(" Экран настроек команды")]),t._v(" "),s("p",[t._v("Когда групповая поддержка включена, Jetstream включает экран, который позволяет пользователям управлять настройками для своих существующих команд, такими как изменение названия группы или приглашение дополнительных членов команды. Вы можете добавлять свои собственные дополнительные панели на эти страницы. Для этого Вы можете просто отредактировать шаблоны, определяющие страницу.")]),t._v(" "),s("p",[t._v("При использовании Livewire экран настроек команды определяется шаблоном Blade "),s("code",[t._v("resources/views/teams/show.blade.php")]),t._v(". При использовании Inertia этот экран отображается с помощью компонента "),s("code",[t._v("resources/js/Pages/Teams/Show.vue")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"баннер-уведомлении"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#баннер-уведомлении"}},[t._v("#")]),t._v(" Баннер уведомлений")]),t._v(" "),s("p",[t._v("Jetstream включает баннер с уведомлением, который может отображаться в верхней части пользовательского интерфейса Вашего приложения. Если Вы используете стек Livewire, Вы должны убедиться, что этот баннер с уведомлением был опубликован с помощью команды "),s("code",[t._v("vendor:publish")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan vendor:publish --tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jetstream-views\n")])])]),s("p",[t._v("После публикации компонентов Jetstream Ваше приложение будет содержать компонент баннера в каталоге "),s("code",[t._v("vendor/components/banner.blade.php")]),t._v(". Если Вы используете стек Inertia, Ваш баннерный компонент будет содержаться в компоненте Vue "),s("code",[t._v("Banner.vue")]),t._v(".")]),t._v(" "),s("p",[t._v("Чтобы указать Jetstream отображать баннер, Вы должны передать в сеанс сообщение "),s("code",[t._v("flash.banner")]),t._v(". В дополнение к сообщению баннера Вы также можете указать Jetstream отображать баннер в стиле "),s("code",[t._v("success")]),t._v(" или "),s("code",[t._v("danger")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("session")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'flash.banner'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Yay it works!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("session")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'flash.bannerStyle'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'success'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);