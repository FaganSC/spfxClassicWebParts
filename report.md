# Upgrade project classicWebParts to v1.16.1

Date: 3/15/2023

## Findings

Following is the list of steps required to upgrade your project to SharePoint Framework version 1.16.1. [Summary](#Summary) of the modifications is included at the end of the report.

### FN001034 @microsoft/sp-adaptive-card-extension-base | Optional

Install SharePoint Framework dependency package @microsoft/sp-adaptive-card-extension-base

Execute the following command:

```sh
npm i -SE @microsoft/sp-adaptive-card-extension-base@1.16.1
```

File: [./package.json:11:5](./package.json)

### FN002022 @microsoft/eslint-plugin-spfx | Required

Install SharePoint Framework dev dependency package @microsoft/eslint-plugin-spfx

Execute the following command:

```sh
npm i -DE @microsoft/eslint-plugin-spfx@1.16.1
```

File: [./package.json:27:5](./package.json)

### FN002023 @microsoft/eslint-config-spfx | Required

Install SharePoint Framework dev dependency package @microsoft/eslint-config-spfx

Execute the following command:

```sh
npm i -DE @microsoft/eslint-config-spfx@1.16.1
```

File: [./package.json:27:5](./package.json)

### FN010001 .yo-rc.json version | Recommended

Update version in .yo-rc.json

```json
{
  "@microsoft/generator-sharepoint": {
    "version": "1.16.1"
  }
}
```

File: [./.yo-rc.json:3:9](./.yo-rc.json)

### FN002015 @types/react | Required

Upgrade SharePoint Framework dev dependency package @types/react

Execute the following command:

```sh
npm i -DE @types/react@17.0.45
```

File: [./package.json:32:9](./package.json)

### FN002016 @types/react-dom | Required

Upgrade SharePoint Framework dev dependency package @types/react-dom

Execute the following command:

```sh
npm i -DE @types/react-dom@17.0.17
```

File: [./package.json:33:9](./package.json)

### FN010008 .yo-rc.json nodeVersion | Recommended

Update nodeVersion in .yo-rc.json

```json
{
  "@microsoft/generator-sharepoint": {
    "nodeVersion": "16.19.0"
  }
}
```

File: [./.yo-rc.json:2:40](./.yo-rc.json)

### FN010009 .yo-rc.json @microsoft/microsoft-graph-client SDK version | Recommended

Update @microsoft/microsoft-graph-client SDK version in .yo-rc.json

```json
{
  "@microsoft/generator-sharepoint": {
    "sdkVersions": {
      "@microsoft/microsoft-graph-client": "3.0.2"
    }
  }
}
```

File: [./.yo-rc.json:2:5](./.yo-rc.json)

### FN010010 .yo-rc.json @microsoft/teams-js SDK version | Recommended

Update @microsoft/teams-js SDK version in .yo-rc.json

```json
{
  "@microsoft/generator-sharepoint": {
    "sdkVersions": {
      "@microsoft/teams-js": "2.4.1"
    }
  }
}
```

File: [./.yo-rc.json:2:5](./.yo-rc.json)

### FN021003 package.json engines.node | Required

Update package.json engines.node property

```json
{
  "engines": {
    "node": ">=16.13.0 <17.0.0"
  }
}
```

File: [./package.json:1:1](./package.json)

### FN022001 Scss file import | Required

Remove scss file import

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

File: [src/webparts/announcements/components/Announcements.module.scss](src/webparts/announcements/components/Announcements.module.scss)

### FN022001 Scss file import | Required

Remove scss file import

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

File: [src/webparts/linksList/components/LinksList.module.scss](src/webparts/linksList/components/LinksList.module.scss)

### FN022001 Scss file import | Required

Remove scss file import

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

File: [src/webparts/promotedLinks/components/PromotedLinks.module.scss](src/webparts/promotedLinks/components/PromotedLinks.module.scss)

### FN022002 Scss file import | Optional

Add scss file import

```scss
@import '~@fluentui/react/dist/sass/References.scss'
```

File: [src/webparts/announcements/components/Announcements.module.scss](src/webparts/announcements/components/Announcements.module.scss)

### FN022002 Scss file import | Optional

Add scss file import

```scss
@import '~@fluentui/react/dist/sass/References.scss'
```

File: [src/webparts/linksList/components/LinksList.module.scss](src/webparts/linksList/components/LinksList.module.scss)

### FN022002 Scss file import | Optional

Add scss file import

```scss
@import '~@fluentui/react/dist/sass/References.scss'
```

File: [src/webparts/promotedLinks/components/PromotedLinks.module.scss](src/webparts/promotedLinks/components/PromotedLinks.module.scss)

### FN002026 typescript | Required

Install SharePoint Framework dev dependency package typescript

Execute the following command:

```sh
npm i -DE typescript@4.5.5
```

File: [./package.json:27:5](./package.json)

### FN012020 tsconfig.json noImplicitAny | Required

Add noImplicitAny in tsconfig.json

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

File: [./tsconfig.json:3:22](./tsconfig.json)

### FN007001 serve.json schema | Required

Update serve.json schema URL

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/spfx-serve.schema.json"
}
```

File: [./config/serve.json:2:3](./config/serve.json)

### FN025001 .eslintrc.js overrides | Required

Add overrides in .eslintrc.js

```js
module.exports = {
      overrides: [
        {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      'parserOptions': {
        'project': './tsconfig.json',
        'ecmaVersion': 2018,
        'sourceType': 'module'
      },
      rules: {
        // Prevent usage of the JavaScript null value, while allowing code to access existing APIs that may require null. https://www.npmjs.com/package/@rushstack/eslint-plugin
        '@rushstack/no-new-null': 1,
        // Require Jest module mocking APIs to be called before any other statements in their code block. https://www.npmjs.com/package/@rushstack/eslint-plugin
        '@rushstack/hoist-jest-mock': 1,
        // Require regular expressions to be constructed from string constants rather than dynamically building strings at runtime. https://www.npmjs.com/package/@rushstack/eslint-plugin-security
        '@rushstack/security/no-unsafe-regexp': 1,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/adjacent-overload-signatures': 1,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        //
        // CONFIGURATION:     By default, these are banned: String, Boolean, Number, Object, Symbol
        '@typescript-eslint/ban-types': [
          1,
          {
            'extendDefaults': false,
            'types': {
              'String': {
                'message': 'Use \'string\' instead',
                'fixWith': 'string'
              },
              'Boolean': {
                'message': 'Use \'boolean\' instead',
                'fixWith': 'boolean'
              },
              'Number': {
                'message': 'Use \'number\' instead',
                'fixWith': 'number'
              },
              'Object': {
                'message': 'Use \'object\' instead, or else define a proper TypeScript type:'
              },
              'Symbol': {
                'message': 'Use \'symbol\' instead',
                'fixWith': 'symbol'
              },
              'Function': {
                'message': 'The \'Function\' type accepts any function-like value.
It provides no type safety when calling the function, which can be a common source of bugs.
It also accepts things like class declarations, which will throw at runtime as they will not be called with 'new'.
If you are expecting the function to accept certain arguments, you should explicitly define the function shape.'
              }
            }
          }
        ],
        // RATIONALE:         Code is more readable when the type of every variable is immediately obvious.
        //                    Even if the compiler may be able to infer a type, this inference will be unavailable
        //                    to a person who is reviewing a GitHub diff.  This rule makes writing code harder,
        //                    but writing code is a much less important activity than reading it.
        //
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/explicit-function-return-type': [
          1,
          {
            'allowExpressions': true,
            'allowTypedFunctionExpressions': true,
            'allowHigherOrderFunctions': false
          }
        ],
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        // Rationale to disable: although this is a recommended rule, it is up to dev to select coding style.
        // Set to 1 (warning) or 2 (error) to enable.
        '@typescript-eslint/explicit-member-accessibility': 0,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/no-array-constructor': 1,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        //
        // RATIONALE:         The "any" keyword disables static type checking, the main benefit of using TypeScript.
        //                    This rule should be suppressed only in very special cases such as JSON.stringify()
        //                    where the type really can be anything.  Even if the type is flexible, another type
        //                    may be more appropriate such as "unknown", "{}", or "Record<k,V>".
        '@typescript-eslint/no-explicit-any': 1,
        // RATIONALE:         The #1 rule of promises is that every promise chain must be terminated by a catch()
        //                    handler.  Thus wherever a Promise arises, the code must either append a catch handler,
        //                    or else return the object to a caller (who assumes this responsibility).  Unterminated
        //                    promise chains are a serious issue.  Besides causing errors to be silently ignored,
        //                    they can also cause a NodeJS process to terminate unexpectedly.
        '@typescript-eslint/no-floating-promises': 2,
        // RATIONALE:         Catches a common coding mistake.
        '@typescript-eslint/no-for-in-array': 2,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/no-misused-new': 2,
        // RATIONALE:         The "namespace" keyword is not recommended for organizing code because JavaScript lacks
        //                    a "using" statement to traverse namespaces.  Nested namespaces prevent certain bundler
        //                    optimizations.  If you are declaring loose functions/variables, it's better to make them
        //                    static members of a class, since classes support property getters and their private
        //                    members are accessible by unit tests.  Also, the exercise of choosing a meaningful
        //                    class name tends to produce more discoverable APIs: for example, search+replacing
        //                    the function "reverse()" is likely to return many false matches, whereas if we always
        //                    write "Text.reverse()" is more unique.  For large scale organization, it's recommended
        //                    to decompose your code into separate NPM packages, which ensures that component
        //                    dependencies are tracked more conscientiously.
        //
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/no-namespace': [
          1,
          {
            'allowDeclarations': false,
            'allowDefinitionFiles': false
          }
        ],
        // RATIONALE:         Parameter properties provide a shorthand such as "constructor(public title: string)"
        //                    that avoids the effort of declaring "title" as a field.  This TypeScript feature makes
        //                    code easier to write, but arguably sacrifices readability:  In the notes for
        //                    "@typescript-eslint/member-ordering" we pointed out that fields are central to
        //                    a class's design, so we wouldn't want to bury them in a constructor signature
        //                    just to save some typing.
        //
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        // Set to 1 (warning) or 2 (error) to enable the rule
        '@typescript-eslint/no-parameter-properties': 0,
        // RATIONALE:         When left in shipping code, unused variables often indicate a mistake.  Dead code
        //                    may impact performance.
        //
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/no-unused-vars': [
          1,
          {
            'vars': 'all',
            // Unused function arguments often indicate a mistake in JavaScript code.  However in TypeScript code,
            // the compiler catches most of those mistakes, and unused arguments are fairly common for type signatures
            // that are overriding a base class method or implementing an interface.
            'args': 'none'
          }
        ],
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/no-use-before-define': [
          2,
          {
            'functions': false,
            'classes': true,
            'variables': true,
            'enums': true,
            'typedefs': true
          }
        ],
        // Disallows require statements except in import statements.
        // In other words, the use of forms such as var foo = require("foo") are banned. Instead use ES6 style imports or import foo = require("foo") imports.
        '@typescript-eslint/no-var-requires': 'error',
        // RATIONALE:         The "module" keyword is deprecated except when describing legacy libraries.
        //
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/prefer-namespace-keyword': 1,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        // Rationale to disable: it's up to developer to decide if he wants to add type annotations
        // Set to 1 (warning) or 2 (error) to enable the rule
        '@typescript-eslint/no-inferrable-types': 0,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        // Rationale to disable: declaration of empty interfaces may be helpful for generic types scenarios
        '@typescript-eslint/no-empty-interface': 0,
        // RATIONALE:         This rule warns if setters are defined without getters, which is probably a mistake.
        'accessor-pairs': 1,
        // RATIONALE:         In TypeScript, if you write x["y"] instead of x.y, it disables type checking.
        'dot-notation': [
          1,
          {
            'allowPattern': '^_'
          }
        ],
        // RATIONALE:         Catches code that is likely to be incorrect
        'eqeqeq': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'for-direction': 1,
        // RATIONALE:         Catches a common coding mistake.
        'guard-for-in': 2,
        // RATIONALE:         If you have more than 2,000 lines in a single source file, it's probably time
        //                    to split up your code.
        'max-lines': ['warn', { max: 2000 }],
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-async-promise-executor': 2,
        // RATIONALE:         Deprecated language feature.
        'no-caller': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-compare-neg-zero': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-cond-assign': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-constant-condition': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-control-regex': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-debugger': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-delete-var': 2,
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-duplicate-case': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-empty': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-empty-character-class': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-empty-pattern': 1,
        // RATIONALE:         Eval is a security concern and a performance concern.
        'no-eval': 1,
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-ex-assign': 2,
        // RATIONALE:         System types are global and should not be tampered with in a scalable code base.
        //                    If two different libraries (or two versions of the same library) both try to modify
        //                    a type, only one of them can win.  Polyfills are acceptable because they implement
        //                    a standardized interoperable contract, but polyfills are generally coded in plain
        //                    JavaScript.
        'no-extend-native': 1,
        // Disallow unnecessary labels
        'no-extra-label': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-fallthrough': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-func-assign': 1,
        // RATIONALE:         Catches a common coding mistake.
        'no-implied-eval': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-invalid-regexp': 2,
        // RATIONALE:         Catches a common coding mistake.
        'no-label-var': 2,
        // RATIONALE:         Eliminates redundant code.
        'no-lone-blocks': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-misleading-character-class': 2,
        // RATIONALE:         Catches a common coding mistake.
        'no-multi-str': 2,
        // RATIONALE:         It's generally a bad practice to call "new Thing()" without assigning the result to
        //                    a variable.  Either it's part of an awkward expression like "(new Thing()).doSomething()",
        //                    or else implies that the constructor is doing nontrivial computations, which is often
        //                    a poor class design.
        'no-new': 1,
        // RATIONALE:         Obsolete language feature that is deprecated.
        'no-new-func': 2,
        // RATIONALE:         Obsolete language feature that is deprecated.
        'no-new-object': 2,
        // RATIONALE:         Obsolete notation.
        'no-new-wrappers': 1,
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-octal': 2,
        // RATIONALE:         Catches code that is likely to be incorrect
        'no-octal-escape': 2,
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-regex-spaces': 2,
        // RATIONALE:         Catches a common coding mistake.
        'no-return-assign': 2,
        // RATIONALE:         Security risk.
        'no-script-url': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-self-assign': 2,
        // RATIONALE:         Catches a common coding mistake.
        'no-self-compare': 2,
        // RATIONALE:         This avoids statements such as "while (a = next(), a && a.length);" that use
        //                    commas to create compound expressions.  In general code is more readable if each
        //                    step is split onto a separate line.  This also makes it easier to set breakpoints
        //                    in the debugger.
        'no-sequences': 1,
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-shadow-restricted-names': 2,
        // RATIONALE:         Obsolete language feature that is deprecated.
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-sparse-arrays': 2,
        // RATIONALE:         Although in theory JavaScript allows any possible data type to be thrown as an exception,
        //                    such flexibility adds pointless complexity, by requiring every catch block to test
        //                    the type of the object that it receives.  Whereas if catch blocks can always assume
        //                    that their object implements the "Error" contract, then the code is simpler, and
        //                    we generally get useful additional information like a call stack.
        'no-throw-literal': 2,
        // RATIONALE:         Catches a common coding mistake.
        'no-unmodified-loop-condition': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-unsafe-finally': 2,
        // RATIONALE:         Catches a common coding mistake.
        'no-unused-expressions': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-unused-labels': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-useless-catch': 1,
        // RATIONALE:         Avoids a potential performance problem.
        'no-useless-concat': 1,
        // RATIONALE:         The "var" keyword is deprecated because of its confusing "hoisting" behavior.
        //                    Always use "let" or "const" instead.
        //
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        'no-var': 2,
        // RATIONALE:         Generally not needed in modern code.
        'no-void': 1,
        // RATIONALE:         Obsolete language feature that is deprecated.
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-with': 2,
        // RATIONALE:         Makes logic easier to understand, since constants always have a known value
        // @typescript-eslinteslint-plugindistconfigseslint-recommended.js
        'prefer-const': 1,
        // RATIONALE:         Catches a common coding mistake where "resolve" and "reject" are confused.
        'promise/param-names': 2,
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'require-atomic-updates': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'require-yield': 1,
        // "Use strict" is redundant when using the TypeScript compiler.
        'strict': [
          2,
          'never'
        ],
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'use-isnan': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        // Set to 1 (warning) or 2 (error) to enable.
        // Rationale to disable: !!{}
        'no-extra-boolean-cast': 0,
        // ====================================================================
        // @microsoft/eslint-plugin-spfx
        // ====================================================================
        '@microsoft/spfx/import-requires-chunk-name': 1,
        '@microsoft/spfx/no-require-ensure': 2,
        '@microsoft/spfx/pair-react-dom-render-unmount': 1
      }
    },
    {
      // For unit tests, we can be a little bit less strict.  The settings below revise the
      // defaults specified in the extended configurations, as well as above.
      files: [
        // Test files
        '*.test.ts',
        '*.test.tsx',
        '*.spec.ts',
        '*.spec.tsx',

        // Facebook convention
        '**/__mocks__/*.ts',
        '**/__mocks__/*.tsx',
        '**/__tests__/*.ts',
        '**/__tests__/*.tsx',

        // Microsoft convention
        '**/test/*.ts',
        '**/test/*.tsx'
      ],
      rules: {
        'no-new': 0,
        'class-name': 0,
        'export-name': 0,
        forin: 0,
        'label-position': 0,
        'member-access': 2,
        'no-arg': 0,
        'no-console': 0,
        'no-construct': 0,
        'no-duplicate-variable': 2,
        'no-eval': 0,
        'no-function-expression': 2,
        'no-internal-module': 2,
        'no-shadowed-variable': 2,
        'no-switch-case-fall-through': 2,
        'no-unnecessary-semicolons': 2,
        'no-unused-expression': 2,
        'no-with-statement': 2,
        semicolon: 2,
        'trailing-comma': 0,
        typedef: 0,
        'typedef-whitespace': 0,
        'use-named-parameter': 2,
        'variable-name': 0,
        whitespace: 0
      }
    }
      ]
    };
```

File: [.eslintrc.js:2:1](.eslintrc.js)

### FN001033 tslib | Required

Install SharePoint Framework dependency package tslib

Execute the following command:

```sh
npm i -SE tslib@2.3.1
```

File: [./package.json:11:5](./package.json)

### FN002007 ajv | Required

Upgrade SharePoint Framework dev dependency package ajv

Execute the following command:

```sh
npm i -DE ajv@6.12.5
```

File: [./package.json:35:9](./package.json)

### FN002013 @types/webpack-env | Required

Upgrade SharePoint Framework dev dependency package @types/webpack-env

Execute the following command:

```sh
npm i -DE @types/webpack-env@1.15.2
```

File: [./package.json:34:9](./package.json)

### FN002020 @microsoft/rush-stack-compiler-4.5 | Required

Install SharePoint Framework dev dependency package @microsoft/rush-stack-compiler-4.5

Execute the following command:

```sh
npm i -DE @microsoft/rush-stack-compiler-4.5@0.2.2
```

File: [./package.json:27:5](./package.json)

### FN002021 @rushstack/eslint-config | Required

Install SharePoint Framework dev dependency package @rushstack/eslint-config

Execute the following command:

```sh
npm i -DE @rushstack/eslint-config@2.5.1
```

File: [./package.json:27:5](./package.json)

### FN002024 eslint | Required

Install SharePoint Framework dev dependency package eslint

Execute the following command:

```sh
npm i -DE eslint@8.7.0
```

File: [./package.json:27:5](./package.json)

### FN002025 eslint-plugin-react-hooks | Required

Install SharePoint Framework dev dependency package eslint-plugin-react-hooks

Execute the following command:

```sh
npm i -DE eslint-plugin-react-hooks@4.3.0
```

File: [./package.json:27:5](./package.json)

### FN012017 tsconfig.json extends property | Required

Update tsconfig.json extends property

```json
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-4.5/includes/tsconfig-web.json"
}
```

File: [./tsconfig.json:2:3](./tsconfig.json)

### FN023002 .gitignore '.heft' folder | Required

To .gitignore add the '.heft' folder


File: [./.gitignore](./.gitignore)

### FN002009 @microsoft/sp-tslint-rules | Required

Install SharePoint Framework dev dependency package @microsoft/sp-tslint-rules

Execute the following command:

```sh
npm i -DE @microsoft/sp-tslint-rules@1.14.0
```

File: [./package.json:27:5](./package.json)

### FN006005 package-solution.json metadata | Required

In package-solution.json add metadata section

```json
{
  "solution": {
    "metadata": {
      "shortDescription": {
        "default": "classic-web-parts description"
      },
      "longDescription": {
        "default": "classic-web-parts description"
      },
      "screenshotPaths": [],
      "videoUrl": "",
      "categories": []
    }
  }
}
```

File: [./config/package-solution.json:3:3](./config/package-solution.json)

### FN006006 package-solution.json features | Required

In package-solution.json add features for components

```json
{
  "solution": {
    "features": [
      {
        "title": "classic-web-parts AnnouncementsWebPart Feature",
        "description": "The feature that activates AnnouncementsWebPart from the classic-web-parts solution.",
        "id": "acd1b901-b3aa-4e42-937f-2b73c8b5ac58",
        "version": "1.0.0.0",
        "componentIds": [
          "acd1b901-b3aa-4e42-937f-2b73c8b5ac58"
        ]
      }
    ]
  }
}
```

File: [./config/package-solution.json:3:3](./config/package-solution.json)

### FN006006 package-solution.json features | Required

In package-solution.json add features for components

```json
{
  "solution": {
    "features": [
      {
        "title": "classic-web-parts LinksListWebPart Feature",
        "description": "The feature that activates LinksListWebPart from the classic-web-parts solution.",
        "id": "cc6200cf-249b-42a5-aa27-624a9dfe0c40",
        "version": "1.0.0.0",
        "componentIds": [
          "cc6200cf-249b-42a5-aa27-624a9dfe0c40"
        ]
      }
    ]
  }
}
```

File: [./config/package-solution.json:3:3](./config/package-solution.json)

### FN006006 package-solution.json features | Required

In package-solution.json add features for components

```json
{
  "solution": {
    "features": [
      {
        "title": "classic-web-parts PromotedLinksWebPart Feature",
        "description": "The feature that activates PromotedLinksWebPart from the classic-web-parts solution.",
        "id": "c5cf0685-9551-4a35-9537-7fb7ba7e0580",
        "version": "1.0.0.0",
        "componentIds": [
          "c5cf0685-9551-4a35-9537-7fb7ba7e0580"
        ]
      }
    ]
  }
}
```

File: [./config/package-solution.json:3:3](./config/package-solution.json)

### FN014008 Hosted workbench type in .vscode/launch.json | Recommended

In the .vscode/launch.json file, update the type property for the hosted workbench launch configuration

```json
{
  "configurations": [
    {
      "type": "pwa-chrome"
    }
  ]
}
```

File: [.vscode/launch.json:28:7](.vscode/launch.json)

### FN007002 serve.json initialPage | Required

Update serve.json initialPage URL

```json
{
  "initialPage": "https://enter-your-SharePoint-site/_layouts/workbench.aspx"
}
```

File: [./config/serve.json:5:3](./config/serve.json)

### FN007003 serve.json api | Required

From serve.json remove the api property

```json

```

File: [./config/serve.json:6:3](./config/serve.json)

### FN014007 Local workbench in .vscode/launch.json | Recommended

In the .vscode/launch.json file, remove the local workbench launch configuration

```json

```

File: [.vscode/launch.json:11:7](.vscode/launch.json)

### FN024001 Create .npmignore | Required

Create the .npmignore file


File: [./.npmignore](./.npmignore)

### FN017001 Run npm dedupe | Optional

If, after upgrading npm packages, when building the project you have errors similar to: "error TS2345: Argument of type 'SPHttpClientConfiguration' is not assignable to parameter of type 'SPHttpClientConfiguration'", try running 'npm dedupe' to cleanup npm packages.

Execute the following command:

```sh
npm dedupe
```

File: [./package.json](./package.json)

## Summary

### Execute script

```sh
npm i -SE @microsoft/sp-adaptive-card-extension-base@1.16.1 tslib@2.3.1
npm i -DE @microsoft/eslint-plugin-spfx@1.16.1 @microsoft/eslint-config-spfx@1.16.1 @types/react@17.0.45 @types/react-dom@17.0.17 typescript@4.5.5 ajv@6.12.5 @types/webpack-env@1.15.2 @microsoft/rush-stack-compiler-4.5@0.2.2 @rushstack/eslint-config@2.5.1 eslint@8.7.0 eslint-plugin-react-hooks@4.3.0 @microsoft/sp-tslint-rules@1.14.0
npm dedupe
```

### Modify files

#### [./.yo-rc.json](./.yo-rc.json)

Update version in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "version": "1.16.1"
  }
}
```

Update nodeVersion in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "nodeVersion": "16.19.0"
  }
}
```

Update @microsoft/microsoft-graph-client SDK version in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "sdkVersions": {
      "@microsoft/microsoft-graph-client": "3.0.2"
    }
  }
}
```

Update @microsoft/teams-js SDK version in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "sdkVersions": {
      "@microsoft/teams-js": "2.4.1"
    }
  }
}
```

#### [./package.json](./package.json)

Update package.json engines.node property:

```json
{
  "engines": {
    "node": ">=16.13.0 <17.0.0"
  }
}
```

#### [src/webparts/announcements/components/Announcements.module.scss](src/webparts/announcements/components/Announcements.module.scss)

Remove scss file import:

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

Add scss file import:

```scss
@import '~@fluentui/react/dist/sass/References.scss'
```

#### [src/webparts/linksList/components/LinksList.module.scss](src/webparts/linksList/components/LinksList.module.scss)

Remove scss file import:

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

Add scss file import:

```scss
@import '~@fluentui/react/dist/sass/References.scss'
```

#### [src/webparts/promotedLinks/components/PromotedLinks.module.scss](src/webparts/promotedLinks/components/PromotedLinks.module.scss)

Remove scss file import:

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

Add scss file import:

```scss
@import '~@fluentui/react/dist/sass/References.scss'
```

#### [./tsconfig.json](./tsconfig.json)

Add noImplicitAny in tsconfig.json:

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

Update tsconfig.json extends property:

```json
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-4.5/includes/tsconfig-web.json"
}
```

#### [./config/serve.json](./config/serve.json)

Update serve.json schema URL:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/spfx-serve.schema.json"
}
```

Update serve.json initialPage URL:

```json
{
  "initialPage": "https://enter-your-SharePoint-site/_layouts/workbench.aspx"
}
```

From serve.json remove the api property:

```json

```

#### [.eslintrc.js](.eslintrc.js)

Add overrides in .eslintrc.js:

```js
module.exports = {
      overrides: [
        {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      'parserOptions': {
        'project': './tsconfig.json',
        'ecmaVersion': 2018,
        'sourceType': 'module'
      },
      rules: {
        // Prevent usage of the JavaScript null value, while allowing code to access existing APIs that may require null. https://www.npmjs.com/package/@rushstack/eslint-plugin
        '@rushstack/no-new-null': 1,
        // Require Jest module mocking APIs to be called before any other statements in their code block. https://www.npmjs.com/package/@rushstack/eslint-plugin
        '@rushstack/hoist-jest-mock': 1,
        // Require regular expressions to be constructed from string constants rather than dynamically building strings at runtime. https://www.npmjs.com/package/@rushstack/eslint-plugin-security
        '@rushstack/security/no-unsafe-regexp': 1,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/adjacent-overload-signatures': 1,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        //
        // CONFIGURATION:     By default, these are banned: String, Boolean, Number, Object, Symbol
        '@typescript-eslint/ban-types': [
          1,
          {
            'extendDefaults': false,
            'types': {
              'String': {
                'message': 'Use \'string\' instead',
                'fixWith': 'string'
              },
              'Boolean': {
                'message': 'Use \'boolean\' instead',
                'fixWith': 'boolean'
              },
              'Number': {
                'message': 'Use \'number\' instead',
                'fixWith': 'number'
              },
              'Object': {
                'message': 'Use \'object\' instead, or else define a proper TypeScript type:'
              },
              'Symbol': {
                'message': 'Use \'symbol\' instead',
                'fixWith': 'symbol'
              },
              'Function': {
                'message': 'The \'Function\' type accepts any function-like value.
It provides no type safety when calling the function, which can be a common source of bugs.
It also accepts things like class declarations, which will throw at runtime as they will not be called with 'new'.
If you are expecting the function to accept certain arguments, you should explicitly define the function shape.'
              }
            }
          }
        ],
        // RATIONALE:         Code is more readable when the type of every variable is immediately obvious.
        //                    Even if the compiler may be able to infer a type, this inference will be unavailable
        //                    to a person who is reviewing a GitHub diff.  This rule makes writing code harder,
        //                    but writing code is a much less important activity than reading it.
        //
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/explicit-function-return-type': [
          1,
          {
            'allowExpressions': true,
            'allowTypedFunctionExpressions': true,
            'allowHigherOrderFunctions': false
          }
        ],
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        // Rationale to disable: although this is a recommended rule, it is up to dev to select coding style.
        // Set to 1 (warning) or 2 (error) to enable.
        '@typescript-eslint/explicit-member-accessibility': 0,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/no-array-constructor': 1,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        //
        // RATIONALE:         The "any" keyword disables static type checking, the main benefit of using TypeScript.
        //                    This rule should be suppressed only in very special cases such as JSON.stringify()
        //                    where the type really can be anything.  Even if the type is flexible, another type
        //                    may be more appropriate such as "unknown", "{}", or "Record<k,V>".
        '@typescript-eslint/no-explicit-any': 1,
        // RATIONALE:         The #1 rule of promises is that every promise chain must be terminated by a catch()
        //                    handler.  Thus wherever a Promise arises, the code must either append a catch handler,
        //                    or else return the object to a caller (who assumes this responsibility).  Unterminated
        //                    promise chains are a serious issue.  Besides causing errors to be silently ignored,
        //                    they can also cause a NodeJS process to terminate unexpectedly.
        '@typescript-eslint/no-floating-promises': 2,
        // RATIONALE:         Catches a common coding mistake.
        '@typescript-eslint/no-for-in-array': 2,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/no-misused-new': 2,
        // RATIONALE:         The "namespace" keyword is not recommended for organizing code because JavaScript lacks
        //                    a "using" statement to traverse namespaces.  Nested namespaces prevent certain bundler
        //                    optimizations.  If you are declaring loose functions/variables, it's better to make them
        //                    static members of a class, since classes support property getters and their private
        //                    members are accessible by unit tests.  Also, the exercise of choosing a meaningful
        //                    class name tends to produce more discoverable APIs: for example, search+replacing
        //                    the function "reverse()" is likely to return many false matches, whereas if we always
        //                    write "Text.reverse()" is more unique.  For large scale organization, it's recommended
        //                    to decompose your code into separate NPM packages, which ensures that component
        //                    dependencies are tracked more conscientiously.
        //
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/no-namespace': [
          1,
          {
            'allowDeclarations': false,
            'allowDefinitionFiles': false
          }
        ],
        // RATIONALE:         Parameter properties provide a shorthand such as "constructor(public title: string)"
        //                    that avoids the effort of declaring "title" as a field.  This TypeScript feature makes
        //                    code easier to write, but arguably sacrifices readability:  In the notes for
        //                    "@typescript-eslint/member-ordering" we pointed out that fields are central to
        //                    a class's design, so we wouldn't want to bury them in a constructor signature
        //                    just to save some typing.
        //
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        // Set to 1 (warning) or 2 (error) to enable the rule
        '@typescript-eslint/no-parameter-properties': 0,
        // RATIONALE:         When left in shipping code, unused variables often indicate a mistake.  Dead code
        //                    may impact performance.
        //
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/no-unused-vars': [
          1,
          {
            'vars': 'all',
            // Unused function arguments often indicate a mistake in JavaScript code.  However in TypeScript code,
            // the compiler catches most of those mistakes, and unused arguments are fairly common for type signatures
            // that are overriding a base class method or implementing an interface.
            'args': 'none'
          }
        ],
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/no-use-before-define': [
          2,
          {
            'functions': false,
            'classes': true,
            'variables': true,
            'enums': true,
            'typedefs': true
          }
        ],
        // Disallows require statements except in import statements.
        // In other words, the use of forms such as var foo = require("foo") are banned. Instead use ES6 style imports or import foo = require("foo") imports.
        '@typescript-eslint/no-var-requires': 'error',
        // RATIONALE:         The "module" keyword is deprecated except when describing legacy libraries.
        //
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        '@typescript-eslint/prefer-namespace-keyword': 1,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        // Rationale to disable: it's up to developer to decide if he wants to add type annotations
        // Set to 1 (warning) or 2 (error) to enable the rule
        '@typescript-eslint/no-inferrable-types': 0,
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        // Rationale to disable: declaration of empty interfaces may be helpful for generic types scenarios
        '@typescript-eslint/no-empty-interface': 0,
        // RATIONALE:         This rule warns if setters are defined without getters, which is probably a mistake.
        'accessor-pairs': 1,
        // RATIONALE:         In TypeScript, if you write x["y"] instead of x.y, it disables type checking.
        'dot-notation': [
          1,
          {
            'allowPattern': '^_'
          }
        ],
        // RATIONALE:         Catches code that is likely to be incorrect
        'eqeqeq': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'for-direction': 1,
        // RATIONALE:         Catches a common coding mistake.
        'guard-for-in': 2,
        // RATIONALE:         If you have more than 2,000 lines in a single source file, it's probably time
        //                    to split up your code.
        'max-lines': ['warn', { max: 2000 }],
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-async-promise-executor': 2,
        // RATIONALE:         Deprecated language feature.
        'no-caller': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-compare-neg-zero': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-cond-assign': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-constant-condition': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-control-regex': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-debugger': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-delete-var': 2,
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-duplicate-case': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-empty': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-empty-character-class': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-empty-pattern': 1,
        // RATIONALE:         Eval is a security concern and a performance concern.
        'no-eval': 1,
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-ex-assign': 2,
        // RATIONALE:         System types are global and should not be tampered with in a scalable code base.
        //                    If two different libraries (or two versions of the same library) both try to modify
        //                    a type, only one of them can win.  Polyfills are acceptable because they implement
        //                    a standardized interoperable contract, but polyfills are generally coded in plain
        //                    JavaScript.
        'no-extend-native': 1,
        // Disallow unnecessary labels
        'no-extra-label': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-fallthrough': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-func-assign': 1,
        // RATIONALE:         Catches a common coding mistake.
        'no-implied-eval': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-invalid-regexp': 2,
        // RATIONALE:         Catches a common coding mistake.
        'no-label-var': 2,
        // RATIONALE:         Eliminates redundant code.
        'no-lone-blocks': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-misleading-character-class': 2,
        // RATIONALE:         Catches a common coding mistake.
        'no-multi-str': 2,
        // RATIONALE:         It's generally a bad practice to call "new Thing()" without assigning the result to
        //                    a variable.  Either it's part of an awkward expression like "(new Thing()).doSomething()",
        //                    or else implies that the constructor is doing nontrivial computations, which is often
        //                    a poor class design.
        'no-new': 1,
        // RATIONALE:         Obsolete language feature that is deprecated.
        'no-new-func': 2,
        // RATIONALE:         Obsolete language feature that is deprecated.
        'no-new-object': 2,
        // RATIONALE:         Obsolete notation.
        'no-new-wrappers': 1,
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-octal': 2,
        // RATIONALE:         Catches code that is likely to be incorrect
        'no-octal-escape': 2,
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-regex-spaces': 2,
        // RATIONALE:         Catches a common coding mistake.
        'no-return-assign': 2,
        // RATIONALE:         Security risk.
        'no-script-url': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-self-assign': 2,
        // RATIONALE:         Catches a common coding mistake.
        'no-self-compare': 2,
        // RATIONALE:         This avoids statements such as "while (a = next(), a && a.length);" that use
        //                    commas to create compound expressions.  In general code is more readable if each
        //                    step is split onto a separate line.  This also makes it easier to set breakpoints
        //                    in the debugger.
        'no-sequences': 1,
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-shadow-restricted-names': 2,
        // RATIONALE:         Obsolete language feature that is deprecated.
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-sparse-arrays': 2,
        // RATIONALE:         Although in theory JavaScript allows any possible data type to be thrown as an exception,
        //                    such flexibility adds pointless complexity, by requiring every catch block to test
        //                    the type of the object that it receives.  Whereas if catch blocks can always assume
        //                    that their object implements the "Error" contract, then the code is simpler, and
        //                    we generally get useful additional information like a call stack.
        'no-throw-literal': 2,
        // RATIONALE:         Catches a common coding mistake.
        'no-unmodified-loop-condition': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-unsafe-finally': 2,
        // RATIONALE:         Catches a common coding mistake.
        'no-unused-expressions': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-unused-labels': 1,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-useless-catch': 1,
        // RATIONALE:         Avoids a potential performance problem.
        'no-useless-concat': 1,
        // RATIONALE:         The "var" keyword is deprecated because of its confusing "hoisting" behavior.
        //                    Always use "let" or "const" instead.
        //
        // STANDARDIZED BY:   @typescript-eslint\eslint-plugin\dist\configs\recommended.json
        'no-var': 2,
        // RATIONALE:         Generally not needed in modern code.
        'no-void': 1,
        // RATIONALE:         Obsolete language feature that is deprecated.
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'no-with': 2,
        // RATIONALE:         Makes logic easier to understand, since constants always have a known value
        // @typescript-eslinteslint-plugindistconfigseslint-recommended.js
        'prefer-const': 1,
        // RATIONALE:         Catches a common coding mistake where "resolve" and "reject" are confused.
        'promise/param-names': 2,
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'require-atomic-updates': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'require-yield': 1,
        // "Use strict" is redundant when using the TypeScript compiler.
        'strict': [
          2,
          'never'
        ],
        // RATIONALE:         Catches code that is likely to be incorrect
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        'use-isnan': 2,
        // STANDARDIZED BY:   eslint\conf\eslint-recommended.js
        // Set to 1 (warning) or 2 (error) to enable.
        // Rationale to disable: !!{}
        'no-extra-boolean-cast': 0,
        // ====================================================================
        // @microsoft/eslint-plugin-spfx
        // ====================================================================
        '@microsoft/spfx/import-requires-chunk-name': 1,
        '@microsoft/spfx/no-require-ensure': 2,
        '@microsoft/spfx/pair-react-dom-render-unmount': 1
      }
    },
    {
      // For unit tests, we can be a little bit less strict.  The settings below revise the
      // defaults specified in the extended configurations, as well as above.
      files: [
        // Test files
        '*.test.ts',
        '*.test.tsx',
        '*.spec.ts',
        '*.spec.tsx',

        // Facebook convention
        '**/__mocks__/*.ts',
        '**/__mocks__/*.tsx',
        '**/__tests__/*.ts',
        '**/__tests__/*.tsx',

        // Microsoft convention
        '**/test/*.ts',
        '**/test/*.tsx'
      ],
      rules: {
        'no-new': 0,
        'class-name': 0,
        'export-name': 0,
        forin: 0,
        'label-position': 0,
        'member-access': 2,
        'no-arg': 0,
        'no-console': 0,
        'no-construct': 0,
        'no-duplicate-variable': 2,
        'no-eval': 0,
        'no-function-expression': 2,
        'no-internal-module': 2,
        'no-shadowed-variable': 2,
        'no-switch-case-fall-through': 2,
        'no-unnecessary-semicolons': 2,
        'no-unused-expression': 2,
        'no-with-statement': 2,
        semicolon: 2,
        'trailing-comma': 0,
        typedef: 0,
        'typedef-whitespace': 0,
        'use-named-parameter': 2,
        'variable-name': 0,
        whitespace: 0
      }
    }
      ]
    };
```

#### [./.gitignore](./.gitignore)

To .gitignore add the '.heft' folder:

```text
.heft
```

#### [./config/package-solution.json](./config/package-solution.json)

In package-solution.json add metadata section:

```json
{
  "solution": {
    "metadata": {
      "shortDescription": {
        "default": "classic-web-parts description"
      },
      "longDescription": {
        "default": "classic-web-parts description"
      },
      "screenshotPaths": [],
      "videoUrl": "",
      "categories": []
    }
  }
}
```

In package-solution.json add features for components:

```json
{
  "solution": {
    "features": [
      {
        "title": "classic-web-parts AnnouncementsWebPart Feature",
        "description": "The feature that activates AnnouncementsWebPart from the classic-web-parts solution.",
        "id": "acd1b901-b3aa-4e42-937f-2b73c8b5ac58",
        "version": "1.0.0.0",
        "componentIds": [
          "acd1b901-b3aa-4e42-937f-2b73c8b5ac58"
        ]
      }
    ]
  }
}
```

In package-solution.json add features for components:

```json
{
  "solution": {
    "features": [
      {
        "title": "classic-web-parts LinksListWebPart Feature",
        "description": "The feature that activates LinksListWebPart from the classic-web-parts solution.",
        "id": "cc6200cf-249b-42a5-aa27-624a9dfe0c40",
        "version": "1.0.0.0",
        "componentIds": [
          "cc6200cf-249b-42a5-aa27-624a9dfe0c40"
        ]
      }
    ]
  }
}
```

In package-solution.json add features for components:

```json
{
  "solution": {
    "features": [
      {
        "title": "classic-web-parts PromotedLinksWebPart Feature",
        "description": "The feature that activates PromotedLinksWebPart from the classic-web-parts solution.",
        "id": "c5cf0685-9551-4a35-9537-7fb7ba7e0580",
        "version": "1.0.0.0",
        "componentIds": [
          "c5cf0685-9551-4a35-9537-7fb7ba7e0580"
        ]
      }
    ]
  }
}
```

#### [.vscode/launch.json](.vscode/launch.json)

In the .vscode/launch.json file, update the type property for the hosted workbench launch configuration:

```json
{
  "configurations": [
    {
      "type": "pwa-chrome"
    }
  ]
}
```

In the .vscode/launch.json file, remove the local workbench launch configuration:

```json

```

#### [./.npmignore](./.npmignore)

Create the .npmignore file:

```text
!dist
config

gulpfile.js

release
src
temp

tsconfig.json
tslint.json

*.log

.yo-rc.json
.vscode

```
