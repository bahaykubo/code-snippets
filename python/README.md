- [Setup](#setup)
  - [pyenv](#pyenv)
    - [For linux](#for-linux)
    - [For Windows](#for-windows)
  - [Poetry](#poetry)
  - [Install packages create virtual environment](#install-packages-create-virtual-environment)
  - [Run python module or test](#run-python-module-or-test)
    - [python shell](#python-shell)
    - [poetry run](#poetry-run)


# Setup

You will need at least [Python version 3.9](https://www.python.org/downloads/release/python-397/) with [poetry](https://python-poetry.org/) installed to manage the dependencies and for creating a virtual environment.

## pyenv

It's recommended to use pyenv to manager python.

### For linux

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

### For Windows

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

## Poetry

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

## Install packages create virtual environment

Create the virtual environment and install all dependencies include dev.

```bash
poetry install
```

## Run python module or test

You can run a module or test either by starting a python shell from poetry or using the `poetry run` command

### python shell

Start a shell and run any python modules as normal.

```bash
poetry shell
```

### poetry run

To run a module or test using poetry

```bash
poetry run python -m pytest test
```
