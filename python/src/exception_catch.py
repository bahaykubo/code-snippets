def function_that_raises_an_error():
    raise TimeoutError('Error from function that raises an error')


try:
    function_that_raises_an_error()
except TimeoutError as error:
    print(error)
