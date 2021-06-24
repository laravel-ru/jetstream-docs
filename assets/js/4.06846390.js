(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{320:function(t,s,a){t.exports=a.p+"assets/img/redirect-confirm.d03b19d0.png"},321:function(t,s,a){t.exports=a.p+"assets/img/modal-confirm.29bb2150.png"},367:function(t,s,a){"use strict";a.r(s);var n=a(40),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"подтверждение-пароля"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#подтверждение-пароля"}},[t._v("#")]),t._v(" Подтверждение пароля")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#введение"}},[t._v("Введение")])]),n("li",[n("a",{attrs:{href:"#перенаправление-подтверждение-пароля"}},[t._v("Перенаправление подтверждение пароля")]),n("ul",[n("li",[n("a",{attrs:{href:"#перенаправление-подтверждение-пароля-через-livewire"}},[t._v("Перенаправление подтверждение пароля через Livewire")])]),n("li",[n("a",{attrs:{href:"#перенаправление-подтверждение-пароля-через-inertia"}},[t._v("Перенаправление подтверждение пароля через Inertia")])])])]),n("li",[n("a",{attrs:{href:"#подтверждение-модального-пароля"}},[t._v("Подтверждение модального пароля")]),n("ul",[n("li",[n("a",{attrs:{href:"#модальное-подтверждение-пароля-через-livewire"}},[t._v("Модальное подтверждение пароля через Livewire")])]),n("li",[n("a",{attrs:{href:"#модальное-подтверждение-пароля-через-inertia"}},[t._v("Модальное подтверждение пароля через Inertia")])])])]),n("li",[n("a",{attrs:{href:"#настроика-способа-подтверждения-паролеи"}},[t._v("Настройка способа подтверждения паролей")])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"введение"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#введение"}},[t._v("#")]),t._v(" Введение")]),t._v(" "),n("p",[t._v("При создании приложения Вы можете иногда выполнять действия, требующие от пользователя подтверждения пароля перед выполнением действия. Например, сама Jetstream требует, чтобы пользователи подтвердили свой пароль перед изменением настроек двухфакторной аутентификации. К счастью, Jetstream имеет встроенную функциональность, которая упрощает это.")]),t._v(" "),n("p",[t._v("Jetstream предлагает два подхода к подтверждению пароля: подтверждение пароля на основе перенаправления и модальное подтверждение пароля.")]),t._v(" "),n("h4",{attrs:{id:"подтверждение-пароля-на-основе-перенаправления"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#подтверждение-пароля-на-основе-перенаправления"}},[t._v("#")]),t._v(" Подтверждение пароля на основе перенаправления")]),t._v(" "),n("p",[t._v("Подтверждение пароля на основе перенаправления обычно используется, когда пользователю необходимо подтвердить свой пароль перед доступом ко всему экрану, отображаемому Вашим приложением, например экрану настроек биллинга.")]),t._v(" "),n("p",[t._v("Эта форма подтверждения пароля перенаправляет пользователя на специальный экран подтверждения пароля, где он должен подтвердить свой пароль перед перенаправлением в предполагаемое место назначения.")]),t._v(" "),n("h4",{attrs:{id:"подтверждение-пароля-на-модальнои-основе"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#подтверждение-пароля-на-модальнои-основе"}},[t._v("#")]),t._v(" Подтверждение пароля на модальной основе")]),t._v(" "),n("p",[t._v("Модальная парольная аутентификация может использоваться, когда Вы хотите, чтобы пользователь подтвердил свой пароль перед выполнением определенного действия, например, при включении двухфакторной аутентификации.")]),t._v(" "),n("p",[t._v("Эта форма подтверждения пароля отображает модальное окно, которое позволяет пользователю подтвердить свой пароль до того, как его предполагаемый запрос будет выполнен.")]),t._v(" "),n("h2",{attrs:{id:"перенаправление-подтверждение-пароля"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#перенаправление-подтверждение-пароля"}},[t._v("#")]),t._v(" Перенаправление подтверждение пароля")]),t._v(" "),n("p",[t._v("В следующей документации обсуждается, как использовать подтверждение пароля на основе перенаправления в Jetstream. Подтверждение пароля на основе перенаправления обычно используется, когда пользователю необходимо подтвердить свой пароль перед доступом ко всему экрану, отображаемому Вашим приложением, например экрану настроек биллинга.")]),t._v(" "),n("p",[t._v("Эта форма подтверждения пароля перенаправляет пользователя на специальный экран подтверждения пароля, где он должен подтвердить свой пароль перед перенаправлением в предполагаемое место назначения.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(320),alt:"Скриншот подтверждения пароля"}})]),t._v(" "),n("h3",{attrs:{id:"перенаправление-подтверждение-пароля-через-livewire"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#перенаправление-подтверждение-пароля-через-livewire"}},[t._v("#")]),t._v(" Перенаправление подтверждение пароля через Livewire")]),t._v(" "),n("h4",{attrs:{id:"защита-маршрутов"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#защита-маршрутов"}},[t._v("#")]),t._v(" Защита маршрутов")]),t._v(" "),n("p",[t._v("Чтобы реализовать подтверждение пароля через перенаправление на экран подтверждения пароля, Вы должны убедиться, что маршрут, который будет отображать представление, требующее подтверждения пароля, и любые маршруты, которые выполняют подтвержденные действия, назначены мидлвару "),n("code",[t._v("password.confirm")]),t._v(".")]),t._v(" "),n("p",[t._v("Этот мидлвар входит в стандартную установку Laravel и гарантирует, что пользователь будет перенаправлен на экран подтверждения пароля Вашего приложения, если они попытаются получить доступ к маршрутам без подтверждения своего пароля:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("Route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/billing'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'password.confirm'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nRoute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/billing'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'password.confirm'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Это представление, которое отображает экран подтверждения пароля стека Livewire, находится по адресу "),n("code",[t._v("resources/views/auth/confirm-password.blade.php")]),t._v(". Как правило, это представление не требует настройки; однако Вы можете вносить общие изменения в презентацию этой страницы на основе дизайна Вашего собственного приложения.")]),t._v(" "),n("h4",{attrs:{id:"убедитесь-что-пароль-подтвержден"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#убедитесь-что-пароль-подтвержден"}},[t._v("#")]),t._v(" Убедитесь, что пароль подтвержден")]),t._v(" "),n("p",[t._v("Затем компоненты Livewire, содержащие действие, которое должно требовать подтверждения пароля перед вызовом, должны использовать трейт "),n("code",[t._v("Laravel\\Jetstream\\ConfirmsPasswords")]),t._v(".")]),t._v(" "),n("p",[t._v("После добавления этой характеристики в компонент Вы должны вызвать метод "),n("code",[t._v("ensurePasswordIsConfirmed")]),t._v(" в любом действии Livewire, требующем подтверждения пароля. Делать это нужно в самом начале соответствующего метода действий:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Включить режим администрирования для пользователя.\n *\n * @return void\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("enableAdminMode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensurePasswordIsConfirmed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("Срок действия подтверждения пароля")]),t._v(" "),n("p",[t._v("После того, как пользователь подтвердит свой пароль, ему не потребуется повторно вводить пароль до тех пор, пока не истечет количество секунд, определенное параметром конфигурации Вашего приложения "),n("code",[t._v("auth.password_timeout")]),t._v(":")])]),t._v(" "),n("h3",{attrs:{id:"перенаправление-подтверждение-пароля-через-inertia"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#перенаправление-подтверждение-пароля-через-inertia"}},[t._v("#")]),t._v(" Перенаправление подтверждение пароля через Inertia")]),t._v(" "),n("p",[t._v("Чтобы реализовать подтверждение пароля через перенаправление на экран подтверждения пароля, Вы должны убедиться, что маршрут, который будет отображать представление, требующее подтверждения пароля, и любые маршруты, которые выполняют подтвержденные действия, назначены мидлвару "),n("code",[t._v("password.confirm")]),t._v(".")]),t._v(" "),n("p",[t._v("Этот мидлвар входит в стандартную установку Laravel и гарантирует, что пользователь будет перенаправлен на экран подтверждения пароля Вашего приложения, если они попытаются получить доступ к маршрутам без подтверждения своего пароля:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("Route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/billing'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'password.confirm'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nRoute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/billing'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'password.confirm'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Эта страница, которая отображает экран подтверждения пароля стека Inertia, находится в "),n("code",[t._v("resources/js/Pages/Auth/ConfirmPassword.vue")]),t._v(". Как правило, эту страницу не нужно настраивать; однако Вы можете вносить общие изменения в презентацию этой страницы на основе дизайна Вашего собственного приложения.")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("Срок действия подтверждения пароля")]),t._v(" "),n("p",[t._v("После того, как пользователь подтвердит свой пароль, ему не потребуется повторно вводить пароль до тех пор, пока не истечет количество секунд, определенное параметром конфигурации Вашего приложения "),n("code",[t._v("auth.password_timeout")]),t._v(":")])]),t._v(" "),n("h2",{attrs:{id:"подтверждение-модального-пароля"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#подтверждение-модального-пароля"}},[t._v("#")]),t._v(" Подтверждение модального пароля")]),t._v(" "),n("p",[t._v("В следующей документации обсуждается, как использовать модальное подтверждение пароля в Jetstream. Модальная парольная аутентификация обычно используется, когда Вы хотите, чтобы пользователь подтвердил свой пароль перед выполнением определенного действия, например, при включении двухфакторной аутентификации.")]),t._v(" "),n("p",[t._v("Эта форма подтверждения пароля отображает модальное окно, которое позволяет пользователю подтвердить свой пароль до того, как его предполагаемый запрос будет выполнен.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(321),alt:"Скриншот подтверждения пароля"}})]),t._v(" "),n("h3",{attrs:{id:"модальное-подтверждение-пароля-через-livewire"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#модальное-подтверждение-пароля-через-livewire"}},[t._v("#")]),t._v(" Модальное подтверждение пароля через Livewire")]),t._v(" "),n("h4",{attrs:{id:"подготовка-компонентов"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#подготовка-компонентов"}},[t._v("#")]),t._v(" Подготовка компонентов")]),t._v(" "),n("p",[t._v("Если Вы используете стек Livewire, компонент Livewire, содержащий действие, которое должно требовать подтверждения пароля перед вызовом, должен использовать трейт "),n("code",[t._v("Laravel\\Jetstream\\ConfirmsPasswords")]),t._v(".")]),t._v(" "),n("h4",{attrs:{id:"блеид-компонент-confirms-password"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#блеид-компонент-confirms-password"}},[t._v("#")]),t._v(" Блейд-компонент "),n("code",[t._v("confirms-password")])]),t._v(" "),n("p",[t._v("Затем в пользовательском интерфейсе Вашего приложения Вы должны заключить кнопку, которая запускает действие, в блейд-компонент "),n("code",[t._v("confirms-password")]),t._v(". Компонент оболочки "),n("code",[t._v("confirms-password")]),t._v(" должен содержать директиву "),n("code",[t._v("wire:then")]),t._v(", которая указывает, какое действие Livewire должно выполняться после подтверждения пароля пользователя:")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("x-jet-confirms-password")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wire:")]),t._v("then")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("enableAdminMode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("x-jet-button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wire:")]),t._v("loading.attr")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("disabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {{ __('Enable') }}\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("x-jet-button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("x-jet-confirms-password")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h4",{attrs:{id:"обеспечение-подтверждения-пароля"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#обеспечение-подтверждения-пароля"}},[t._v("#")]),t._v(" Обеспечение подтверждения пароля")]),t._v(" "),n("p",[t._v("После добавления компонента "),n("code",[t._v("confirms-password")]),t._v(" в пользовательский интерфейс Вашего приложения Вы должны вызвать метод "),n("code",[t._v("ensurePasswordIsConfirmed")]),t._v(" в действии Livewire, которое требует подтверждения пароля. Делать это нужно в самом начале соответствующего метода действий:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Включить режим администрирования для пользователя.\n *\n * @return void\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("enableAdminMode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensurePasswordIsConfirmed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("После того, как пользователь подтвердит свой пароль, ему не потребуется повторно вводить пароль до тех пор, пока не истечет количество секунд, определенное параметром конфигурации Вашего приложения "),n("code",[t._v("auth.password_timeout")]),t._v(":")])]),t._v(" "),n("h3",{attrs:{id:"модальное-подтверждение-пароля-через-inertia"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#модальное-подтверждение-пароля-через-inertia"}},[t._v("#")]),t._v(" Модальное подтверждение пароля через Inertia")]),t._v(" "),n("h4",{attrs:{id:"компонент-vue-confirmspassword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#компонент-vue-confirmspassword"}},[t._v("#")]),t._v(" Компонент Vue "),n("code",[t._v("ConfirmsPassword")])]),t._v(" "),n("p",[t._v("Если Вы используете стек Inertia, Вам следует обернуть элемент пользовательского интерфейса, который запускает действие, требующее подтверждения пароля, с помощью компонента Vue "),n("code",[t._v("ConfirmsPassword")]),t._v(", предоставляемого Jetstream. Для начала импортируйте компонент "),n("code",[t._v("ConfirmsPassword")]),t._v(" на свою страницу:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" JetConfirmsPassword "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Jetstream/ConfirmsPassword'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    components"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        JetConfirmsPassword"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Затем оберните компонент вокруг элемента пользовательского интерфейса, который запускает действие, которое необходимо подтвердить. Ваша страница должна прослушивать событие "),n("code",[t._v("@confirmed")]),t._v(" компонента "),n("code",[t._v("ConfirmsPassword")]),t._v(", чтобы активировать метод, который должен вызываться после подтверждения пароля пользователя:")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jet-confirms-password")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@confirmed")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("enableAdminMode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jet-button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("opacity-25"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(": enabling }"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":disabled")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("enabling"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Enable\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("jet-button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("jet-confirms-password")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h4",{attrs:{id:"обеспечение-подтверждения-пароля-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#обеспечение-подтверждения-пароля-2"}},[t._v("#")]),t._v(" Обеспечение подтверждения пароля")]),t._v(" "),n("p",[t._v("После добавления компонента "),n("code",[t._v("ConfirmsPassword")]),t._v(" к Вашему пользовательскому интерфейсу Вы должны убедиться, что маршруту, выполняющему подтвержденное действие, назначен мидлвар "),n("code",[t._v("password.confirm")]),t._v(". Этот мидлвар включен в стандартную установку Laravel:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("Route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/admin-mode'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'password.confirm'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("После того, как пользователь подтвердит свой пароль, ему не потребуется повторно вводить пароль до тех пор, пока не истечет количество секунд, определенное параметром конфигурации Вашего приложения `auth.password_timeout`:")]),t._v(" "),n("p",[t._v("После того, как пользователь подтвердит свой пароль, ему не потребуется повторно вводить пароль до тех пор, пока не истечет количество секунд, определенное параметром конфигурации Вашего приложения "),n("code",[t._v("auth.password_timeout")]),t._v(":")])]),t._v(" "),n("h2",{attrs:{id:"настроика-способа-подтверждения-паролеи"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#настроика-способа-подтверждения-паролеи"}},[t._v("#")]),t._v(" Настройка способа подтверждения паролей")]),t._v(" "),n("p",[t._v("Иногда Вам может потребоваться настроить способ проверки пароля пользователя во время подтверждения. Для этого Вы можете использовать метод "),n("code",[t._v("Fortify::confirmPasswordsUsing")]),t._v(". Этот метод принимает замыкание, которое получает экземпляр аутентифицированного пользователя и поле ввода запроса "),n("code",[t._v("password")]),t._v(". Замыкание должно вернуть "),n("code",[t._v("true")]),t._v(", если пароль действителен для данного пользователя. Обычно этот метод следует вызывать из метода "),n("code",[t._v("boot")]),t._v(" Вашего "),n("code",[t._v("JetstreamServiceProvider")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Hash")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("Laravel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fortify"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fortify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Загрузка любых служб приложений.\n *\n * @return void\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("boot")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n    Fortify"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirmPasswordsUsing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$password")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Hash"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$password")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("password")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v('Если Вы предпочитаете инкапсулировать процесс подтверждения пароля в классе, а не в замыкании, Вы можете передать "вызываемый" массив PHP методу '),n("code",[t._v("confirmPasswordsUsing")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ConfirmPassword")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("Laravel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fortify"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fortify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nFortify"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirmPasswordsUsing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConfirmPassword")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'__invoke'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);