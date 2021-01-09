(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{375:function(e,a,t){"use strict";t.r(a);var s=t(40),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"установка"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#установка"}},[e._v("#")]),e._v(" Установка")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#установка-jetstream"}},[e._v("Установка Jetstream")]),t("ul",[t("li",[t("a",{attrs:{href:"#завершение-установки"}},[e._v("Завершение установки")])])])]),t("li",[t("a",{attrs:{href:"#логотип-приложения"}},[e._v("Логотип приложения")]),t("ul",[t("li",[t("a",{attrs:{href:"#livewire"}},[e._v("Livewire")])]),t("li",[t("a",{attrs:{href:"#inertia"}},[e._v("Inertia")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"установка-jetstream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#установка-jetstream"}},[e._v("#")]),e._v(" Установка Jetstream")]),e._v(" "),t("p",[e._v("Вы можете использовать Composer для установки Jetstream в свой новый проект Laravel:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" require laravel/jetstream\n")])])]),t("p",[e._v("После установки пакета Jetstream Вы можете выполнить Artisan-команду "),t("code",[e._v("jetstream:install")]),e._v(". Эта команда принимает имя стека, которое Вы предпочитаете ("),t("code",[e._v("livewire")]),e._v(" или "),t("code",[e._v("inertia")]),e._v("). Кроме того, Вы можете использовать переключатель `--teams``, чтобы включить поддержку команды. "),t("strong",[e._v("Мы настоятельно рекомендуем Вам прочитать всю документацию "),t("a",{attrs:{href:"https://laravel-livewire.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Livewire"),t("OutboundLink")],1),e._v(" или "),t("a",{attrs:{href:"https://inertiajs.ru",target:"_blank",rel:"noopener noreferrer"}},[e._v("Inertia"),t("OutboundLink")],1),e._v(" перед тем, как начать свой проект Jetstream.")])]),e._v(" "),t("h4",{attrs:{id:"установка-jetstream-с-livewire"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#установка-jetstream-с-livewire"}},[e._v("#")]),e._v(" Установка Jetstream с Livewire")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan jetstream:install livewire\n\nphp artisan jetstream:install livewire --teams\n")])])]),t("h4",{attrs:{id:"или-установка-jetstream-с-inertia"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#или-установка-jetstream-с-inertia"}},[e._v("#")]),e._v(" Или, Установка Jetstream с Inertia")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan jetstream:install inertia\n\nphp artisan jetstream:install inertia --teams\n")])])]),t("h3",{attrs:{id:"завершение-установки"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#завершение-установки"}},[e._v("#")]),e._v(" Завершение установки")]),e._v(" "),t("p",[e._v("После установки Jetstream следует установить и построить зависимости NPM и перенести базу данных:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\nphp artisan migrate\n")])])]),t("h2",{attrs:{id:"логотип-приложения"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#логотип-приложения"}},[e._v("#")]),e._v(" Логотип приложения")]),e._v(" "),t("p",[e._v("После установки Jetstream Вы могли заметить, что логотип Jetstream используется на страницах аутентификации Jetstream, а также на верхней панели навигации Вашего приложения. Вы можете легко настроить логотип, изменив два компонента Jetstream.")]),e._v(" "),t("h3",{attrs:{id:"livewire"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#livewire"}},[e._v("#")]),e._v(" Livewire")]),e._v(" "),t("p",[e._v("Если Вы используете стек Livewire, Вы должны сначала опубликовать компоненты Blade стека Livewire:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan vendor:publish --tag"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("jetstream-views\n")])])]),t("p",[e._v("Затем Вы должны настроить SVG, расположенные компоненты в файлах "),t("code",[e._v("resources/views/vendor/jetstream/components/application-logo.blade.php")]),e._v(", "),t("code",[e._v("resources/views/vendor/jetstream/components/authentication-card-logo.blade.php")]),e._v(" и "),t("code",[e._v("resources/views/vendor/jetstream/components/application-mark.blade.php")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"inertia"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inertia"}},[e._v("#")]),e._v(" Inertia")]),e._v(" "),t("p",[e._v("Если Вы используете стек Inertia, Вам следует настроить SVG, расположенные в "),t("code",[e._v("resources/js/Jetstream/AuthenticationCardLogo.vue")]),e._v(", "),t("code",[e._v("resources/js/Jetstream/ApplicationLogo.vue")]),e._v(" и "),t("code",[e._v("resources/js/Jetstream/ApplicationMark.vue")]),e._v(".")]),e._v(" "),t("p",[e._v("После настройки этих компонентов Вы должны перестроить свои ассеты:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);