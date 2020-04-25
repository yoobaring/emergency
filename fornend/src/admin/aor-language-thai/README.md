# Thai Translations for Admin-on-rest

Thai translations for [admin-on-rest](https://github.com/marmelab/admin-on-rest), the frontend framework for building admin applications on top of REST services.

## Installation

```sh
npm install --save aor-language-thai
```

## Usage

```js
import thaiMessages from 'aor-language-thai';

const messages = {
    'th': thaiMessages,
};

<Admin locale="th" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE).
