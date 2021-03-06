# Inertia

[[toc]]

## Введение

Стек Inertia, предоставляемый Jetstream, использует [Vue.js](https://vuejs.org) в качестве языка шаблонов. Создание приложения Inertia очень похоже на создание типичного приложения Vue; однако Вы будете использовать маршрутизатор Laravel вместо маршрутизатора Vue. Inertia - это небольшая библиотека, которая позволяет Вам отображать однофайловые компоненты Vue из Вашего бэкэнда Laravel, предоставляя имя компонента и данные, которые должны быть гидратированы в «свойствах» этого компонента.

Другими словами, этот стек дает Вам всю мощь Vue.js без сложной маршрутизации на стороне клиента. Стек Inertia - отличный выбор, если Вам комфортно и нравится использовать Vue.js в качестве языка шаблонов. При использовании Inertia маршруты Вашего приложения будут отображать "страницу" Inertia. Это очень похоже на возвращение представления Laravel Blade:

```php
use Illuminate\Http\Request;
use Inertia\Inertia;

/**
 * Показать экран общих настроек профиля.
 *
 * @param  \Illuminate\Http\Request  $request
 * @return \Inertia\Response
 */
public function show(Request $request)
{
    return Inertia::render('Profile/Show', [
        'sessions' => $this->sessions($request)->all(),
    ]);
}
```

При использовании стека Inertia Jetstream обладает некоторыми уникальными функциями, о которых Вам следует знать. Мы обсудим каждую из этих функций ниже.

:::tip Документация Inertia

Перед использованием стека Inertia настоятельно рекомендуется просмотреть всю [документацию Inertia](https://inertiajs.ru)
:::

## Компоненты

Когда мы создавали стек Jetstream Inertia, были созданы различные компоненты Vue (кнопки, панели, входы, модальные окна), чтобы помочь в обеспечении согласованности и простоты использования пользовательского интерфейса. Вы можете использовать или не использовать эти компоненты. Все эти компоненты находятся в каталоге Вашего приложения `resources/js/Jetstream`.

Вы можете получить представление о том, как использовать эти компоненты, просмотрев их использование на существующих страницах Jetstream, расположенных в каталоге Вашего приложения `resources/js/Pages`.

## Настройка рендеринга страницы Jetstream

Некоторые страницы Inertia Jetstream, такие как `Teams/Show` и `Profile/Show`, отображаются внутри самого Jetstream. Однако Вам может потребоваться передать на эти страницы дополнительные данные при создании приложения. Следовательно, Jetstream позволяет настраивать данные/свойства, передаваемые на эти страницы, с помощью метода `Jetstream::inertia()->whenRendering`.

Этот метод принимает имя страницы, которую Вы хотите настроить и замкнуть. Замыкание получит входящий HTTP-запрос и массив данных по умолчанию, которые обычно отправляются на страницу. Вы можете при необходимости настроить или добавить новые элементы массива к данным. Как правило, этот метод следует вызывать из метода `boot` Вашего класса `App\Providers\JetstreamServiceProvider`:

```php
use Illuminate\Http\Request;
use Laravel\Jetstream\Jetstream;

/**
 * Загрузка любых служб приложений.
 *
 * @return void
 */
public function boot()
{
    // ...

    Jetstream::inertia()->whenRendering(
        'Profile/Show',
        function (Request $request, array $data) {
            return array_merge($data, [
                // Пользовательские данные...
            ]);
        }
    );
}
```

:::tip Настройка представления аутентификации

Чтобы узнать, как настроить страницы Inertia, отображаемые связанными с аутентификацией маршрутами Jetstream, такими как вход, регистрация и сброс пароля, ознакомьтесь с [документацией по аутентификации](./../features/authentication.md#customizing-inertia-authentication-views).
:::

## Модальные окна

Стек Inertia в Jetstream также включает два модальных компонента: `DialogModal` и `ConfirmationModal`. `ConfirmationModal` может использоваться при подтверждении деструктивных действий, таких как удаление ресурсов, в то время как `DialogModal` является более общим модальным окном, которое можно использовать в любое время.

Чтобы проиллюстрировать использование модальных окон, рассмотрим следующее модальное окно, которое подтверждает, что пользователь желает удалить свою учетную запись:

```html
<jet-confirmation-modal :show="confirmingUserDeletion" @close="confirmingUserDeletion = false">
    <template #title>
        Удалить аккаунт
    </template>

    <template #content>
        Вы уверены, что хотите удалить свою учетную запись? После удаления Вашей учетной записи все ее ресурсы и данные будут удалены без возможности восстановления.
    </template>

    <template #footer>
        <jet-secondary-button @click.native="confirmingUserDeletion = false">
            Ничего
        </jet-secondary-button>

        <jet-danger-button class="ml-2" @click.native="deleteTeam" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
            Удалить аккаунт
        </jet-danger-button>
    </template>
</jet-confirmation-modal>
```

Как видите, состояние открытия / закрытия модального окна определяется свойством `show`, которое объявлено в компоненте. Содержимое модального окна может быть определено путем гидратации трех слотов: `title`, `content` и `footer`.
