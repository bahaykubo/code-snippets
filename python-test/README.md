<h1>Test with Selenium and Requests wih pytest in Python</h1>

This is a sample testing project written in Python. It uses [requests](https://docs.python-requests.org/en/master) as the http client for testing the services and [selenium](https://github.com/SeleniumHQ/selenium/tree/trunk/py) for the ui.

Both are using [pytest](https://docs.pytest.org/en/latest) for the test runner.

- [Installation](#installation)
  - [Webdriver](#webdriver)
  - [Setup](#setup)
- [Test](#test)
  - [Run test](#run-test)


# Installation

You will need to have [Python](https://www.python.org/) and [Poetry](https://python-poetry.org/) installed to manage python packages and creating a virtual environment. We will use [pyenv](https://github.com/pyenv/pyenv) to manage Python.

See instructions from main [README](../README.md#python-with-pyenv) to setup python with pyenv and poetry.

## Webdriver

The UI tests requires the use of a web driver [chromedriver](https://chromedriver.chromium.org/) to run the UI tests. Make sure the chromdriver executable is added to `PATH`

## Setup

Create the virtual environment and install all dependencies include dev.

```bash
poetry install
```

# Test

The tests involves logging in and providing authorisation tokens retreived from the environment variables. When running these tests from a build pipeline, add these to the pipeline environment variables.

To set this on your machine, you will need to add these environment variables with the corresponding value **OR** you can **use the two test commands provided below under the Run test section**.

```text
testuser=REPLACEWITHusername
testpassword=REPLACEWITHuserpassword
token=REPLACEWITHoauthtoken
tokensecret=REPLACEWITHoauthtokensecret
key=REPLACEWITHconsumerkey
keysecret=REPLACEWITHconsumersecret
```
## Run test

We use [pytest](https://pypi.org/project/pytest/) to run the tests. With poetry, run the pytest command.

```bash
poetry run python -m pytest -s --disable-warnings -v -n 2
```

For running the ui tests, use:
```bash
poetry run python -m pytest -s --disable-warnings -v -n 2 -m ui
```

**to include the required environment variables from the command line:**
```bash
testuser=**REPLACEWITHusername** testpassword=**REPLACEWITHuserpassword** token=**REPLACEWITHoauthtoken** tokensecret=**REPLACEWITHoauthtokensecret** key=**REPLACEWITHconsumerkey** keysecret=**REPLACEWITHconsumersecret** poetry run python -m pytest -s --disable-warnings -v -n 2 -m ui
```

For running the api tests, use:
```bash
poetry run python -m pytest -s --disable-warnings -v -n 2 -m api
```

**to include the required environment variables from the command line:**
```bash
testuser=**REPLACEWITHusername** testpassword=**REPLACEWITHuserpassword** token=**REPLACEWITHoauthtoken** tokensecret=**REPLACEWITHoauthtokensecret** key=**REPLACEWITHconsumerkey** keysecret=**REPLACEWITHconsumersecret** poetry run python -m pytest -s --disable-warnings -v -n 2 -m api
```
