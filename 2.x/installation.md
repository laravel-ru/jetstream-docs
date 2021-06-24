# Установка

[[toc]]

## Установка Jetstream

Вы можете использовать Composer для установки Jetstream в свой новый проект Laravel:

```bash
composer require laravel/jetstream
```

После установки пакета Jetstream вы можете выполнить Artisan-команду `jetstream:install`. Эта команда принимает имя стека, которое вы предпочитаете (`livewire` или `inertia`). Кроме того, вы можете использовать переключатель `--teams`, чтобы включить поддержку команды. Команда `jetstream:install` также установит набор «функциональных» тестов, которые обеспечивают тестовое покрытие для функций, предоставляемых Jetstream.

**Мы настоятельно рекомендуем вам прочитать всю документацию по [Livewire](https://laravel-livewire.com) или [Inertia](https://inertiajs.ru) перед тем, как начать свой проект Jetstream.**

:::danger Только новые приложения

Jetstream следует устанавливать только в новые приложения Laravel. Попытка установить Jetstream в существующее приложение Laravel приведет к неожиданному поведению и проблемам.
:::

#### Установите Jetstream с Livewire

```bash
php artisan jetstream:install livewire

php artisan jetstream:install livewire --teams
```

#### Или, Установите Jetstream с Inertia

```bash
php artisan jetstream:install inertia

php artisan jetstream:install inertia --teams
```

### Завершение установки

После установки Jetstream следует установить и построить зависимости NPM и перенести базу данных:

```bash
npm install
npm run dev
php artisan migrate
```

## Логотип приложения

После установки Jetstream вы могли заметить, что логотип Jetstream используется на страницах аутентификации Jetstream, а также на верхней панели навигации вашего приложения. Вы можете легко настроить логотип, изменив несколько компонентов Jetstream.

### Livewire

Если Вы используете стек Livewire, Вы должны сначала опубликовать компоненты Blade стека Livewire:

```bash
php artisan vendor:publish --tag=jetstream-views
```

Затем Вы должны настроить SVG, расположенные в файлах компоненты `resources/views/vendor/jetstream/components/application-logo.blade.php`, `resources/views/vendor/jetstream/components/authentication-card-logo.blade.php` и `resources/views/vendor/jetstream/components/application-mark.blade.php`.

### Inertia

Если Вы используете стек Inertia, Вам следует настроить SVG, расположенные в `resources/js/Jetstream/AuthenticationCardLogo.vue`, `resources/js/Jetstream/ApplicationLogo.vue` и `resources/js/Jetstream/ApplicationMark.vue`.

После настройки этих компонентов Вы должны перестроить свои асеты:

```bash
npm run dev
```
