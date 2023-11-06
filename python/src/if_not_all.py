pay_now = True
pay_later = True
proceed = False

if not (pay_now or pay_later or proceed):
    print('This should not print')
else:
    print('One of the condition is True')
