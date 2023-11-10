PAY_NOW = True
PAY_LATER = True
PROCEED = False

if not (PAY_NOW or PAY_LATER or PROCEED):
    print('This should not print')
else:
    print('One of the condition is True')
