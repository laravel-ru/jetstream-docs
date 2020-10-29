# Установка

[[toc]]

## Установка Jetstream

Если Вы установили [Установщик Laravel](https://laravel.com/docs/installation#installing-laravel), Вы можете использовать параметр `--jet` для создания нового приложения Laravel на базе Jetstream:

```bash
laravel new project-name --jet
```

После установки Jetstream через установщик Laravel Вы должны запустить миграцию базы данных:

```bash
php artisan migrate
```

:::danger Существующие проекты

Jetstream предназначен для установки только в **новых** проектах Laravel. Не следует пытаться перенести существующий проект в Jetstream.
:::

### Установка с помощью Composer

В качестве альтернативы Вы можете использовать Composer для установки Jetstream в свой новый проект Laravel:

```bash
composer require laravel/jetstream
```

Если Вы выбрали установку Jetstream через Composer, Вы должны запустить Artisan-команду `jetstream:install`. Эта команда принимает имя стека, которое Вы предпочитаете (livewire или inertia). Мы настоятельно рекомендуем Вам прочитать всю документацию [Livewire](https://laravel-livewire.com) или [Inertia](https://inertiajs.com) или [перевод официальной документации Inertia](https://inertiajs.ru) перед тем, как начать свой проект Jetstream. Кроме того, Вы можете использовать параметр `--teams` для включения поддержки команды:

#### Установка Jetstream с Livewire

```bash
php artisan jetstream:install livewire --teams
```

#### Или, Установка Jetstream с Inertia

```bash
php artisan jetstream:install inertia --teams
```

#### Завершение установки

После установки Jetstream следует установить и построить зависимости NPM и перенести базу данных:

```bash
npm install && npm run dev

php artisan migrate
```

## Структура Jetstream

### Представления / Страницы

Во время установки Jetstream опубликует различные представления и классы для Вашего приложения. При использовании Livewire просмотры будут публиковаться в Вашем каталоге `resources/views`. При использовании Inertia «Страницы» будут опубликованы в Вашем каталоге `resources/js/Pages`. Эти представления / страницы содержат все функции, поддерживаемые Jetstream, и Вы можете настроить их по своему усмотрению. Считайте Jetstream отправной точкой для Вашего приложения. После того, как Вы установили Jetstream, Вы можете настроить все, что захотите.

#### Панель

«Главное» представление Вашего приложения будет опубликовано в `resources/views/dashboard.blade.php` при использовании Livewire и `resources/js/Pages/Dashboard.vue` при использовании Inertia. Вы можете использовать это как отправную точку для построения основного представления Вашего приложения.

### Действия

Кроме того, классы "action" публикуются в каталоге `app/Actions` Вашего приложения. Эти классы действий обычно выполняют одно действие и соответствуют одной функции Jetstream, такой как создание группы или удаление пользователя. Вы можете настроить эти классы, если хотите настроить внутреннее поведение Jetstream.

### Tailwind

Во время установки Jetstream обеспечит интеграцию Вашего приложения с фреймворком Tailwind CSS. В частности, будут созданы файлы `webpack.mix.js` и `tailwind.config.js`. Эти два файла используются для создания вывода CSS скомпилированного приложения. Вы можете изменять эти файлы по мере необходимости для своего приложения.

Кроме того, Ваш файл `tailwind.config.js` был предварительно настроен для поддержки PurgeCSS с соответствующими каталогами, правильно указанными в зависимости от выбранного Вами стека Jetstream.

Файл `package.json` Вашего приложения уже создан с помощью команд NPM, которые Вы можете использовать для компиляции Ваших ресурсов:

```bash
npm run dev

npm run prod

npm run watch
```

### Компоненты Livewire

Jetstream использует различные компоненты Blade, такие как кнопки и модальные окна, для стека Livewire. Если Вы используете стек Livewire и хотите опубликовать эти компоненты после установки Jetstream, Вы можете использовать Artisan-команду `vendor: publish`:

```bash
php artisan vendor:publish --tag=jetstream-views
```

## Логотип приложения

Как Вы могли заметить, логотип Jetstream используется на страницах аутентификации Jetstream, а также на верхней панели навигации. Вы можете легко настроить логотип, изменив два компонента Jetstream.

### Livewire

Если Вы используете стек Livewire, Вы должны сначала опубликовать компоненты Blade стека Livewire:

```bash
php artisan vendor:publish --tag=jetstream-views
```

Затем Вы должны настроить SVG, расположенные компоненты в файлах `resources/views/vendor/jetstream/components/application-logo.blade.php`, `resources/views/vendor/jetstream/components/authentication-card-logo.blade.php` и `resources/views/vendor/jetstream/components/application-mark.blade.php`.

### Inertia

Если Вы используете стек Inertia, Вы должны сначала опубликовать компоненты Blade Jetstream. Эти компоненты используются шаблонами аутентификации:

```bash
php artisan vendor:publish --tag=jetstream-views
```

Затем Вы должны настроить SVG, расположенные в `resources/views/vendor/jetstream/components/authentication-card-logo.blade.php`, `resources/js/Jetstream/ApplicationLogo.vue` и `resources/js/Jetstream/ApplicationMark.vue`. После настройки этих компонентов Вы должны перестроить свои ресурсы:

```bash
npm run dev
```
