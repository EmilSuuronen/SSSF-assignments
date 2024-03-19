## Javascript Style Guide
#### Server-side scripting frameworks 
#### TX00CR77-3001 / Spring 2017
#### Olli Alm

---

# Contents

* Coding conventions
* Style guides for Javascript
* Linting 
* ESLint

---

# Coding conventions & style guides

* Coding conventions define *how* to write your code
* Conventions are about **syntax**: naming, closures, spaces, tabs, comments
* Conventions might also be about **semantics**: the good practices, what structures to avoid and what to prefer
* Conventions **improve readability**
  * Good readability, easy to understand
  * More efficient / faster to write and refactor
  * A team (in a company) follows a certain **style guide**
  * Style guide defines one way to write the code 
* For programming languages allowing much variance, **conventions are important**
  * Javascript, Python (!)
* **Coding conventions enhance good coding practices**

---

# Style guides for Javascript

* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) ([ES5](https://github.com/airbnb/javascript/tree/es5-deprecated/es5))
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) ([ES5](https://google.github.io/styleguide/javascriptguide.xml))
* [Awesome JS style guides](https://github.com/kciter/awesome-style-guide#javascript)

---

# Linting 

```
"lint was the name originally given to a particular program that flagged 
some suspicious and non-portable constructs (likely to be bugs) 
in C language source code. The term is now applied generically to 
tools that flag suspicious usage in software written in any computer language."

"The term was derived from the name of the undesirable 
bits of fiber and fluff found in sheep's wool."
(Wikipedia)
```
## Linting in JS

* [Comparison of JS Linting tools](https://www.sitepoint.com/comparison-javascript-linting-tools/)
* Recommended: [ESLint](http://eslint.org/) 
* Demonstrations: [ESlint](http://eslint.org/), [JSLint](http://www.jslint.com/), [JSHint](http://jshint.com/)
* Lint tools are integrated in every JS IDE

---

# ESLint 

* Set of rules to be enabled / disabled
* Environments-specific settings
  * [Environment](http://eslint.org/docs/user-guide/configuring): the platform and / or configuration where Javascript is executed
  * browser, node.js, web worker, Jquery, PhantomJS 
  * environment defines which global variables exist, are known
  * [Node.js vs. browser](http://voidcanvas.com/node-vs-browsers/)
* Installing and usage
  * `npm i eslint -D`
  * `node_modules/.bin/eslint --init`
    * answer the questions to suit your project
    * to modify [linting rules](https://eslint.org/docs/rules/) even more edit .eslintrc.js
    
## .editorconfig example
  ```editorconfig
    root = true

    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
  ```

### prettier
`npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier`

.prettierrc
  ```
   {
       "semi": true,
       "singleQuote": true,
       "tabWidth": 2,
       "useTabs": false,
       "bracketSpacing": false
   }
  ```  
1. In VSCode you can format code automatically with _shift-alt-f_. Restart VSCode if necessary.
1. In VSCode fix potential curly-braces error in Preferences/Settings
    * search for 'braces' and uncheck all 'Insert space after...' checkboxes
---
