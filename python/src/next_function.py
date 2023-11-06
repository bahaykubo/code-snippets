users = [
    'Jim User',
    'Bob User',
    'Match User'
]

user_dictionary = {
    'Jim': 42,
    'Bob': 42,
    'Match': 42
}

user_keys = [
    'No',
    'Miss',
    'Match'
]

for user in users:
    match = next((user_key for user_key in user_keys if user_key in user and user_dictionary[user_key]), None)
    if match:
        print(f'Found match! -> {match}')
        break
else:
    print(f'Did not find any of {user_keys} in users list "{users}" and user dictionary "{user_dictionary}')
