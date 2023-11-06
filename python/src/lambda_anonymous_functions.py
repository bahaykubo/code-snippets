# compare using lambda with a normal function to filter numbers
greater_than_10_filter = lambda number: number > 10

def greater_than_10_not_lambda(number):
    if number > 10:
        return number

number_list = [15, 5, 20, 1]

more_than_10_list = list(filter(greater_than_10_not_lambda, number_list))
print(more_than_10_list)

# example of inline lambda
more_than_10_inline = list(filter(lambda number: number > 10, number_list))
print(more_than_10_inline)
