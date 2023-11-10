def get_matching_items(items, match_name):
    return [item for item in items if item['name'] == match_name]


centres = [
    {'id': 0, 'name': 'My Centre'},
    {'id': 1, 'name': 'Rename Centre'},
    {'id': 2, 'name': 'Z Centre'},
    {'id': 3, 'name': 'Z Centre 1'},
    {'id': 4, 'name': 'Z Centre 2'}
]
MATCHER = 'Z Centre'

matching_items = get_matching_items(centres, MATCHER)
print(f'Matching items -> {matching_items}')
