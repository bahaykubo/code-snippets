# Code Snippets

- [Code Snippets](#code-snippets)
- [Setup](#setup)
  - [Python with pyenv](#python-with-pyenv)
    - [pyenv](#pyenv)
      - [For linux](#for-linux)
      - [For Windows](#for-windows)
    - [Poetry](#poetry)
  - [Node with nvm](#node-with-nvm)
    - [nvm](#nvm)
      - [Options](#options)
        - [Set memory use](#set-memory-use)
  - [SDKMan](#sdkman)
    - [Java](#java)
    - [Gradle](#gradle)


Collections of snippets, examples and tools across different languages and frameworks.

Follow instructions on how to setup and run a project from the setup sections below and each project directory's README. 

# Setup

## Python with pyenv

### pyenv

It's recommended to use pyenv to manage python.

#### For linux

```bash
# install required linraries to build python later on first
sudo apt update && \
  sudo apt install make build-essential libssl-dev zlib1g-dev \
  libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
  libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev

# then install pyenv
curl https://pyenv.run | bash

# add this to ~/.bashrc
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv virtualenv-init -)"

# list available versions of python
pyenv install -l

# install a python version
pyenv install 3.9.7

# set a default python version thru pyenv
echo "3.9.7" >> ~/.pyenv/version
```

#### For Windows

git clone pyenv

```bash
git clone https://github.com/pyenv-win/pyenv-win.git "$HOME/.pyenv"
```

add these to environment variables from powershell

```powershell
[System.Environment]::SetEnvironmentVariable('PYENV',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
[System.Environment]::SetEnvironmentVariable('PYENV_ROOT',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
[System.Environment]::SetEnvironmentVariable('PYENV_HOME',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
```

add user path variable

```powershell
[System.Environment]::SetEnvironmentVariable('path', $env:USERPROFILE + "\.pyenv\pyenv-win\bin;" + $env:USERPROFILE + "\.pyenv\pyenv-win\shims;" + [System.Environment]::GetEnvironmentVariable('path', "User"),"User")
```

```bash
# list all available versions
pyenv install --list

# install a version of python
pyenv install 3.9.3

# set a global python version
pyenv global 3.9.3
pyenv rehash
```

### Poetry

Install poetry to manage python project dependencies and publishing

```bash
# install
curl -sSL https://install.python-poetry.org | python -
echo 'export PATH="~/.local/bin:$PATH"' >> ~/.bashrc

# check python is installed
poerty --version

# set poetry to create .venv in project directory
poetry config virtualenvs.in-project true
```

## Node with nvm

### nvm

Install nvm to manage node

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# list available nodejs versions
nvm ls-remote

# install latest LTS version
nvm install --lts

# install yarn globally
npm install -g yarn

# check yarn working properly
yarn --version
```

#### Options

##### Set memory use

Node has a default max memory use of less than 2GB. It's possible to set or increase this by setting the `max-old-space-size` option from `NODE_OPTIONS`.

To do this from the CLI when running your node app:

```bash
NODE_OPTIONS=--max-old-space-size=40996 npm run some-node-script
```

Or you can export this from your terminal:

```bash
echo 'export NODE_OPTIONS="--max-old-space-size=4096"' >> ~/.bashrc
```

## [SDKMan](https://sdkman.io/)

Use this to install SDKs for the JVM like Java and Kotlin

```bash
curl -s "https://get.sdkman.io" | bash

# check SDKMan working properly
sdk version
```

### [Java](https://www.w3schools.com/java/java_intro.asp)

Using [SDKMan](##SDKMan), install a version of Java

```bash
# check available versions of java from sdk
sdk list java

# install a version of java
sdk install java 17.0.1-open

# check java working properly
java --version
```

### [Gradle](https://gradle.org/)

Using [SDKMan](##SDKMan), install a version of Gradle

```bash
sdk install gradle 7.3

# check gradle working properly
gradle --version
```
