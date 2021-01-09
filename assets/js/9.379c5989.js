(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{301:function(s,t,a){s.exports=a.p+"assets/img/security.1334d2b3.png"},368:function(s,t,a){"use strict";a.r(t);var e=a(40),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"password-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#password-update"}},[s._v("#")]),s._v(" Password Update")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#введение"}},[s._v("Введение")])]),e("li",[e("a",{attrs:{href:"#деиствия"}},[s._v("Действия")]),e("ul",[e("li",[e("a",{attrs:{href:"#правила-проверки-пароля"}},[s._v("Правила проверки пароля")])])])]),e("li",[e("a",{attrs:{href:"#представления-страницы"}},[s._v("Представления / Страницы")])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"введение"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#введение"}},[s._v("#")]),s._v(" Введение")]),s._v(" "),e("p",[s._v("Пользователь получает доступ к функциям безопасности Laravel Jetstream с помощью раскрывающегося меню навигации профиля пользователя в правом верхнем углу. На этой панели инструментов Jetstream формирует представления, которые позволяют пользователю обновлять пароль, связанный с его учетной записью.")]),s._v(" "),e("p",[e("img",{attrs:{src:a(301),alt:"Скриншот безопасности"}})]),s._v(" "),e("h2",{attrs:{id:"деиствия"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#деиствия"}},[s._v("#")]),s._v(" Действия")]),s._v(" "),e("p",[s._v("Как и большинство функций Jetstream, базовая логика, используемая для реализации функции, может быть настроена путем изменения соответствующего класса действий.")]),s._v(" "),e("p",[s._v("Класс "),e("code",[s._v("App\\Actions\\Fortify\\UpdateUserPassword")]),s._v(" будет вызываться, когда пользователь обновит свой пароль. Это действие отвечает за проверку ввода и обновление пароля пользователя.")]),s._v(" "),e("p",[s._v("Это действие использует трейт "),e("code",[s._v("App\\Actions\\Fortify\\PasswordValidationRules")]),s._v(" для определения правил проверки, которые будут применяться к паролю. Настройка этого свойства будет одинаково влиять на правила проверки, применяемые к паролю, когда пользователь регистрируется, сбрасывает свой пароль или обновляет свой пароль.")]),s._v(" "),e("h3",{attrs:{id:"правила-проверки-пароля"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#правила-проверки-пароля"}},[s._v("#")]),s._v(" Правила проверки пароля")]),s._v(" "),e("p",[s._v("Как Вы могли заметить, трейт "),e("code",[s._v("App\\Actions\\Fortify\\PasswordValidationRules")]),s._v(" использует настраиваемый объект правила проверки "),e("code",[s._v("Laravel\\Fortify\\Rules\\Password")]),s._v(". Этот объект позволяет Вам легко настроить требования к паролю для Вашего приложения. По умолчанию для правила требуется пароль длиной не менее восьми символов. Однако Вы можете использовать следующие методы для настройки требований к паролю:")]),s._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[s._v("Laravel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Fortify"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Rules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Требуется не менее 10 символов...")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Требуется хотя бы один символ верхнего регистра...")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("requireUppercase")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Требуется хотя бы один числовой символ...")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("requireNumeric")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Требуется хотя бы один специальный символ...")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("requireSpecialCharacter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("p",[s._v("Конечно, эти методы можно объединить в цепочку, чтобы определить правила проверки пароля для вашего приложения:")]),s._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("requireSpecialCharacter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("h2",{attrs:{id:"представления-страницы"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#представления-страницы"}},[s._v("#")]),s._v(" Представления / Страницы")]),s._v(" "),e("p",[s._v("Как правило, представления и страницы для этих функций не требуют настройки, поскольку они уже являются завершенными. Однако их расположение описано ниже на тот случай, если Вам потребуется внести небольшие изменения в презентацию этих страниц.")]),s._v(" "),e("p",[s._v("При использовании стека Livewire представление обновления пароля отображается с использованием шаблона Blade "),e("code",[s._v("resources/views/profile/update-password-form.blade.php")]),s._v(". При использовании стека Inertia это представление отображается с использованием шаблона "),e("code",[s._v("resources/js/Pages/Profile/UpdatePasswordForm.vue")]),s._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);