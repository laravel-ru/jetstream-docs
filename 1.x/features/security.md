        JetConfirmsPassword,
        // ...
    },
}
```
Затем оберните компонент вокруг элемента, запускающего действие, которое необходимо подтвердить:
```html
<jet-confirms-password @confirmed="enableAdminMode">
    <jet-button type="button" :class="{ 'opacity-25': enabling }" :disabled="enabling">
        Enable
    </jet-button>
</jet-confirms-password>
```
Наконец, Вы должны убедиться, что маршруту, который выполняет подтвержденное действие, назначено промежуточное программное обеспечение `password.confirm`. Это промежуточное ПО включено в стандартную установку Laravel:
```php
Route::post('/admin-mode', function () {
    // ...
})->middleware(['password.confirm']);
```
### Настройка способа подтверждения паролей
Иногда Вам может потребоваться настроить способ проверки пароля пользователя во время подтверждения. Для этого Вы можете использовать метод `Fortify::confirmPasswordsUsing`. Этот метод принимает Замыкание, которое получает аутентифицированный пользовательский экземпляр и входное значение запроса `password`. Замыкание должно вернуть `true`, если пароль действителен для данного пользователя. Обычно этот метод следует вызывать из метода `boot` Вашего `JetstreamServiceProvider`:
```php
use Illuminate\Support\Facades\Hash;
use Laravel\Fortify\Fortify;
Fortify::confirmPasswordsUsing(function ($user, string $password) {
    return Hash::check($password, $user->password);
});
```
