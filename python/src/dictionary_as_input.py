def function_that_takes_a_dictionary(dictionary):
    name = dictionary['name']
    age = dictionary['age']

    print(f'Name -> {name}')
    print(f'Age -> {age}')


function_that_takes_a_dictionary({
    'name': 'bing',
    'age': 42
})
