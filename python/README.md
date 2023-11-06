- [Setup](#setup)
  - [Install packages create virtual environment](#install-packages-create-virtual-environment)
  - [Run python module or test](#run-python-module-or-test)
    - [python shell](#python-shell)
    - [poetry run](#poetry-run)


# Setup

You will need at least [Python version 3.9](https://www.python.org/downloads/release/python-397/) with [poetry](https://python-poetry.org/) installed to manage the dependencies and for creating a virtual environment.

See instructions from main [README](../README.md#python-with-pyenv) to setup python with pyenv and poetry.

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
