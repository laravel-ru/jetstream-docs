# Аутентификация

[[toc]]

## Вступление

Laravel Jetstream автоматически формирует представления для входа в систему, двухфакторного входа, регистрации, сброса пароля и проверки электронной почты для Вашего проекта. **Для простоты, независимо от выбранного Вами стека, эти шаблоны написаны на Blade и не используют платформу JavaScript.**

![Скриншот аутентификации](./../../assets/img/authentication.png)

## Laravel Fortify

Под капотом аутентификационные части Jetstream работают на [Laravel Fortify](https://github.com/laravel/fortify), который является независимой от внешнего интерфейса серверной частью аутентификации для Laravel.

Когда Jetstream установлен, файл конфигурации `config/fortify.php` также устанавливается в Ваше приложение. В этом файле конфигурации Вы можете настроить различные аспекты поведения Fortify, такие как средство защиты аутентификации, которое следует использовать, куда следует перенаправлять пользователей после аутентификации и многое другое.

Кроме того, Вы можете отключить все функции Fortify, такие как возможность обновления информации профиля или паролей.

## Представления

Независимо от стека, выбранного для Вашего приложения, представления, связанные с аутентификацией, хранятся в каталоге `resources/views/auth` и являются шаблонами Blade. Вы можете настроить стиль этих шаблонов в соответствии с потребностями Вашего приложения.

### Настройка визуализации представления

Иногда Вам может потребоваться настроить способ визуализации определенного представления аутентификации. Вся логика визуализации представления аутентификации может быть настроена с использованием соответствующих методов, доступных через класс `Laravel\Fortify\Fortify`. Обычно Вы должны вызывать этот метод из метода `boot` Вашего `JetstreamServiceProvider`:

```php
use Laravel\Fortify\Fortify;

Fortify::loginView(function () {
    return view('auth.login');
});

Fortify::registerView(function () {
    return view('auth.register');
});
```

## Действия

Как типично для большинства функций Jetstream, логику, выполняемую для удовлетворения запросов на регистрацию / аутентификацию, можно найти в классе действий в Вашем приложении.

В частности, класс `App\Actions\Fortify\CreateNewUser` будет вызываться, когда пользователь регистрируется в Вашем приложении. Это действие отвечает за проверку ввода и создание пользователя.

Следовательно, любые настройки, которые Вы хотите внести в логику создания пользователей, должны выполняться в этом классе. Действие получает массив `$input`, который содержит все входные данные входящего запроса.

### Правила проверки пароля

Действия `App\Actions\Fortify\CreateNewUser`, `App\Actions\Fortify\ResetUserPassword` и `App\Actions\Fortify\UpdateUserPassword` использую трейт `App\Actions\Fortify\PasswordValidationRules`.

Как Вы могли заметить, трейт `App\Actions\Fortify\PasswordValidationRules` использует настраиваемый объект правила проверки `Laravel\Fortify\Rules\Password`. Этот объект позволяет Вам легко настроить требования к паролю для Вашего приложения. По умолчанию для правила требуется пароль длиной не менее 8 символов. Однако Вы можете использовать следующие методы для настройки требований к паролю:

```php
(new Password)->length(10)

// Требуется хотя бы один символ верхнего регистра...
(new Password)->requireUppercase()

// Требуется хотя бы один числовой символ...
(new Password)->requireNumeric()

// Требуется хотя бы один специальный символ...
(new Password)->requireSpecialCharacter()
```

## Настройка процесса аутентификации

### Настройка аутентификации пользователя

Иногда Вам может потребоваться полная настройка того, как аутентифицируются учетные данные для входа и извлекаются пользователи. К счастью, Jetstream позволяет легко сделать это с помощью метода `Fortify::authenticateUsing`.

Этот метод принимает Замыкание, которое получает входящий HTTP-запрос. Замыкание отвечает за проверку учетных данных для входа, прикрепленных к запросу, и возвращает связанный экземпляр пользователя. Если учетные данные недействительны или пользователь не может быть найден, Замыкание должно вернуть `null` или `false`. Обычно этот метод следует вызывать из метода `boot` Вашего `JetstreamServiceProvider`:

```php
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Fortify\Fortify;

Fortify::authenticateUsing(function (Request $request) {
    $user = User::where('email', $request->email)->first();

    if ($user &&
        Hash::check($request->password, $user->password)) {
        return $user;
    }
})
```

### Настройка конвейера аутентификации

Jetstream (через Fortify) аутентифицирует запросы входа в систему через конвейер вызываемых классов. При необходимости Вы можете определить настраиваемый конвейер классов, через который должны передаваться запросы входа. Каждый класс должен иметь метод `__invoke`, который получает входящий экземпляр `Illuminate\Http\Request` и, как промежуточное ПО, переменную `$next`.

Чтобы определить свой собственный конвейер, Вы можете использовать метод `Fortify::authenticateThrough`. Этот метод принимает Замыкание, который должен возвращать массив классов для передачи запроса входа в систему. Обычно этот метод следует вызывать из метода `boot` Вашего `JetstreamServiceProvider`:

```php
use Laravel\Fortify\Actions\AttemptToAuthenticate;
use Laravel\Fortify\Actions\EnsureLoginIsNotThrottled;
use Laravel\Fortify\Actions\PrepareAuthenticatedSession;
use Laravel\Fortify\Actions\RedirectIfTwoFactorAuthenticatable;
use Laravel\Fortify\Fortify;
use Illuminate\Http\Request;

Fortify::authenticateThrough(function (Request $request) {
    return array_filter([
            config('fortify.limiters.login') ? null : EnsureLoginIsNotThrottled::class,
            RedirectIfTwoFactorAuthenticatable::class,
            AttemptToAuthenticate::class,
            PrepareAuthenticatedSession::class,
    ]);
});
```

## Подтверждение по элетронной почте

Laravel Jetstream включает поддержку, требующую, чтобы недавно зарегистрированный пользователь подтвердил свой адрес электронной почты. Однако по умолчанию поддержка этой функции отключена. Чтобы включить эту функцию, Вы должны раскомментировать соответствующую запись в элементе конфигурации `features` конфигурационного файла `config/fortify.php`:

```php
'features' => [
    Features::registration(),
    Features::resetPasswords(),
    Features::emailVerification(),
    Features::updateProfileInformation(),
    Features::updatePasswords(),
    Features::twoFactorAuthentication(),
],
```

Затем Вы должны убедиться, что Ваш класс `App\Models\User` реализует интерфейс `MustVerifyEmail`. Этот интерфейс уже импортирован в эту модель для Вас.

После завершения этих двух шагов настройки вновь зарегистрированные пользователи получат электронное письмо с предложением подтвердить право собственности на свой адрес электронной почты.
