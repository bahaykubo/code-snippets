SAMPLE = None

# None is equal to False
if SAMPLE:
    print('This should not print')
else:
    print('This should print if sample is "None"')

if not SAMPLE:
    print('This should print if sample is "None"')
else:
    print('This should not print')
