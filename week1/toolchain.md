# Server-side scripting frameworks Toolchain

---

# Contents

- Editor/IDE: Visual Studio Code (vscode) or WebStrorm (or any)
- Language: ES6
- Version Control System: Git
- NodeJS

---

# Code editor or IDE

Ultimately, it's your choice. VSCode or WebStorm are recommended.

#### Visual Studio Code

- free & open source code editor by Microsoft (**!=** Visual Studio IDE)
- wide extension support
- lightweight, multiplatform support
- good [docs & instructions](https://code.visualstudio.com/docs/editor/codebasics)
- choice of many Angular2 developers


#### WebStorm

- [WebStorm](https://www.jetbrains.com/webstorm/)
  - [free student license (only @metropolia.fi email address needed)](https://www.jetbrains.com/student/)
  - full featured IDE
  - based on IntelliJ IDEA, just like Android Studio

---

#### Other picks

- [Atom](https://atom.io/)
- [Brackets](http://brackets.io/)
- [Vim](https://github.com/nodejs/node/wiki/Vim-Plugins)

---

# Source Code Management - Git

Check [Git stuff](https://github.com/mattpe/git-intro/blob/master/git-basics.md)

What files to include in repo?

- all source code
- [README.md](https://help.github.com/articles/about-readmes/), license and other documentation
- eg. npm grunt or bower settings files
- .gitignore file: list of local stuff not to be included in the version control ->

Exclude:

- IDE specific project files & folders
- build targets and other automatically generated files
- packages managed e.g. by npm or bower (= _node_modules/_ & _bower_components/_ folders)
- any temp & OS specific files (config,...), like OS X's `.DS_Store`
- dot files (db location/username/password,...)

---

# NodeJS

## [NPM](https://www.npmjs.com/) - Node.js Package Manager

- Install [node.js](https://nodejs.org/en/) to get NodeJS and the package manager **npm**
- npm packages needed in a project (dependencies) are listed in the `package.json` file and can be install with `npm install` command
- locally installed (=project specific) packages are downloaded to `node_modules/` folder (should be excluded from version control)

#### OS X no sudo for NPM

- MacOS no sudo for Mac users!!
  - Older MacOS (bash terminal) 
  ```
    mkdir ~/.npm-packages
    npm config set prefix ~/.npm-packages
    echo NPM_PACKAGES="${HOME}/.npm-packages" >> ${HOME}/.bashrc
    echo prefix=${HOME}/.npm-packages >> ${HOME}/.npmrc
    echo NODE_PATH=\"\$NPM_PACKAGES/lib/node_modules:\$NODE_PATH\" >> ${HOME}/.bashrc
    echo PATH=\"\$NPM_PACKAGES/bin:\$PATH\" >> ${HOME}/.bashrc
    echo source "~/.bashrc" >> ${HOME}/.bash_profile
    source ~/.bashrc
  ```
  - Newer MacOS (zsh terminal) 
  ```
    mkdir ~/.npm-packages
    npm config set prefix ~/.npm-packages
    echo NPM_PACKAGES="${HOME}/.npm-packages" >> ${HOME}/.zshrc
    echo prefix=${HOME}/.npm-packages >> ${HOME}/.npmrc
    echo NODE_PATH=\"\$NPM_PACKAGES/lib/node_modules:\$NODE_PATH\" >> ${HOME}/.zshrc
    echo PATH=\"\$NPM_PACKAGES/bin:\$PATH\" >> ${HOME}/.zshrc
    echo source "~/.zshrc" >> ${HOME}/.zsh_profile
    source ~/.zshrc
  ```

---




# Getting Started with VSCode

---

# Install the Editor

Download & install [Visual Studio Code](https://code.visualstudio.com/)

![VSCode logo](img/vscode.png)

---

# Install Extensions

Press _ctrl-shift-x_ or click extensions icon on the left panel.

Search and install:

- Auto Import
- ESLint
- Prettier
- EditorConfig for VS Code
- vscode-icons
- Github Copilot

Other handy extensions:

- GraphQL for VSCode
- JavaScript (ES6) Code Snippets

---

# VSCode - Basic Usage

Active **project** is the folder open on the left side panel (_File -> Open folder..._)

Handy keyboard shortcuts (finnish layout, check _File -> Preferences -> Keyboard shortcuts_ for more)

- Multiline comment: _ctrl-'_
- Delete line: _ctrl-shift-k_
- Move line(s): _alt-up/down_
- Copy line(s): _alt-shift-up/down_
- Auto format code: _alt-shift-f_
- Open integrated console: _ctrl-ö_
- Quick find/open files: _ctrl-p_
- Split editor: _ctrl-§_

---

# VSCode - Settings

Change integrated console to Bash in Windows:

1. Install [Git for Windows](https://git-scm.com/downloads) to default location
2. Edit vscode settings file (_File -> Preferences -> User settings_) and add the following property into json object:

```javascript
// Place your settings in this file to overwrite the default settings
{
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
}

```
