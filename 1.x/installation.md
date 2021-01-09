# Установка

[[toc]]

## Установка Jetstream

Вы можете использовать Composer для установки Jetstream в свой новый проект Laravel:

```bash
composer require laravel/jetstream
```

После установки пакета Jetstream Вы можете выполнить Artisan-команду `jetstream:install`. Эта команда принимает имя стека, которое Вы предпочитаете (`livewire` или `inertia`). Кроме того, Вы можете использовать переключатель `--teams``, чтобы включить поддержку команды. **Мы настоятельно рекомендуем Вам прочитать всю документацию [Livewire](https://laravel-livewire.com) или [Inertia](https://inertiajs.ru) перед тем, как начать свой проект Jetstream.**

#### Установка Jetstream с Livewire

```bash
php artisan jetstream:install livewire

php artisan jetstream:install livewire --teams
```

#### Или, Установка Jetstream с Inertia

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

После установки Jetstream Вы могли заметить, что логотип Jetstream используется на страницах аутентификации Jetstream, а также на верхней панели навигации Вашего приложения. Вы можете легко настроить логотип, изменив два компонента Jetstream.

### Livewire

Если Вы используете стек Livewire, Вы должны сначала опубликовать компоненты Blade стека Livewire:

```bash
php artisan vendor:publish --tag=jetstream-views
```

Затем Вы должны настроить SVG, расположенные компоненты в файлах `resources/views/vendor/jetstream/components/application-logo.blade.php`, `resources/views/vendor/jetstream/components/authentication-card-logo.blade.php` и `resources/views/vendor/jetstream/components/application-mark.blade.php`.

### Inertia

Если Вы используете стек Inertia, Вам следует настроить SVG, расположенные в `resources/js/Jetstream/AuthenticationCardLogo.vue`, `resources/js/Jetstream/ApplicationLogo.vue` и `resources/js/Jetstream/ApplicationMark.vue`.

После настройки этих компонентов Вы должны перестроить свои ассеты:

```bash
npm run dev
```
