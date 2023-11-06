sample = None

# None is equal to False
if sample:
    print('This should not print')
else:
    print('This should print if sample is "None"')

if not sample:
    print('This should print if sample is "None"')
else:
    print('This should not print')
