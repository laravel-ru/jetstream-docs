# Password Update

[[toc]]

## Введение

Laravel Jetstream's security features are accessed by the user using the top-right user profile navigation dropdown menu. Within this dashboard, Jetstream scaffolds views that allow the user to update the password associated with their account.

![Screenshot of Security](./../../assets/img/security.png)

## Действия

Like most of Jetstream's features, the underlying logic used to implement the feature may be customized by modifying a corresponding action class.

The `App\Actions\Fortify\UpdateUserPassword` class will be invoked when the user updates their password. This action is responsible for validating the input and updating the user's password.

This action utilizes the `App\Actions\Fortify\PasswordValidationRules` trait to determine the validation rules that will be applied to the password. Customizing this trait will uniformly affect the validation rules applied to the password when the user registers, resets their password, or updates their password.

### Password Validation Rules

As you may have noticed, the `App\Actions\Fortify\PasswordValidationRules` trait utilizes a custom `Laravel\Fortify\Rules\Password` validation rule object. This object allows you to easily customize the password requirements for your application. By default, the rule requires a password that is at least eight characters in length. However, you may use the following methods to customize the password's requirements:

```php
use Laravel\Fortify\Rules\Password;

// Требуется не менее 10 символов...
(new Password)->length(10)

// Требуется хотя бы один символ верхнего регистра...
(new Password)->requireUppercase()

// Требуется хотя бы один числовой символ...
(new Password)->requireNumeric()

// Требуется хотя бы один специальный символ...
(new Password)->requireSpecialCharacter()
```

Конечно, эти методы можно объединить в цепочку, чтобы определить правила проверки пароля для вашего приложения:

```php
(new Password)->length(10)->requireSpecialCharacter()
```

## Представления / Страницы

Typically, the views and pages for these features should not require customization, as they are already feature complete. However, their locations are described below in case you need to make small presentation adjustments to these pages.

When using the Livewire stack, the password update view is displayed using the `resources/views/profile/update-password-form.blade.php` Blade template. When using the Inertia stack, this view is displayed using the `resources/js/Pages/Profile/UpdatePasswordForm.vue` template.
