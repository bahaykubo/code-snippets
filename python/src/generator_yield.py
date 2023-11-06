from sys import getsizeof


def yield_list(list_length):
    for number in range(list_length):
        yield number ** 2


new_list = yield_list(5)

for item in new_list:
    if item > 2:
        break
    print(item)

# compare memory allocated for a list agains a generator
normal_list = [x ** 2 for x in range(100000)]
generator_list = yield_list(100000)

print(f'normal list size -> {getsizeof(normal_list)}')
print(f'generator list size -> {getsizeof(generator_list)}')
