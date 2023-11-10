import itertools
from pytz import timezone
import pytest
import re
import arrow
from datetime import datetime
import random
import pandas
import json
import time
import xml.etree.ElementTree as ET

@pytest.mark.action
def test_action_checking():
    actions = [
        ('order', '2020/02/03', 'noel'), ('completed', '2020/02/03', 'noel')
    ]

    result = []
    all_comments = []

    for _ in range(0, 3):
        comment = 'order completed today'
        date = '2020/02/03 Thursday'
        user = 'noel sevilla'
        full_comment = " ".join((comment, date, user))
        all_comments.append(full_comment)
    print(f'all comments: {all_comments}')

    for action in actions:
        print(f'action: {action}')
        res = [any(part in full for part in action) for full in all_comments]
        print(f'res is: {res}')

        if all(res):
            result.append(True)
        else:
            result.append(False)

    print(f'result: {result}')
    if all(result):
        assert True
    else:
        assert False


@pytest.mark.listupdate
def test_list_update():
    list = {
        'address': '99a Name Street, Suburb, WellCityington',
        'breakdown': {
            'number': '99a',
            'street_name': 'Name',
            'street_type': 'Street',
            'suburb': 'Suburb',
            'city': 'City'
        }
    }
    list['address'] = re.sub(r'^([^\s]+)', '999X', list['address'])
    print(list)


@pytest.mark.porzip
def test_por_zip():
    order_number = 'ORDER-ABC'
    check_queue(
        order_number,
        message_queue=[
            {'message': [order_number, 'Inward', 'ReassignValuer', 'SOME_VALUER', 'Processed'],
             'lixi': [None]},
            {'message': [order_number, 'Inward', 'ReassignValuer', 'SOME_VALUER', 'Processed'],
             'lixi': ['This']}
        ]
    )


def check_queue(order_number, message_queue):
    print(f'order_number: {order_number}')
    for _ in enumerate(message_queue):
        print(f'message: {message_queue[1]["message"]} lixi: {message_queue[1]["lixi"]}')


@pytest.mark.feestring
def test_fee_is_float():
    fee = '$500.50'
    print(float(fee[1:].replace(',', '')))
    value = 'index=2'
    print(value[:value.find("=")])
    index = int(value[value.find("=") + 1:])
    print(type(index))


@pytest.mark.dictionary
def test_update_dictionary():
    result = {'recipient_email_check': [], 'recipient_name_check': []}
    print(result)
    result['recipient_email_check'].append('ten')
    result['recipient_email_check'].append('eleven')
    result.update(assertion_error=['this error'])
    result['assertion_error'].append('another error')
    print(result)


@pytest.mark.listtrue
def test_list_all_true():
    true_list = [True, True, True]
    one_true_list = [False, True, False]
    false_list = [False, False, False]

    if any(value is True for value in one_true_list):
        assert True
    else:
        assert False

    if all(value is True for value in true_list):
        assert True
    else:
        assert False

    if all(value is False for value in false_list):
        assert True
    else:
        assert False


@pytest.mark.lahattrue
def test_lahat_true():
    lahat_true_list = []
    tama = True

    if check_tama_existed(tama):
        lahat_true_list.append(True)
    else:
        lahat_true_list.append(False)
    print(lahat_true_list)

    if tama:
        lahat_true_list.append(True)
    else:
        lahat_true_list.append(False)
    print(lahat_true_list)

    if tama:
        lahat_true_list.append(True)
    else:
        lahat_true_list.append(False)
    print(lahat_true_list)

    if all(lahat is True for lahat in lahat_true_list):
        assert True
    else:
        assert False


def check_tama_existed(tama):
    if tama:
        return True
    else:
        return False


@pytest.mark.trylist
def test_return_list():
    add = False
    add_list = {
        'name': 'me'
    }

    list = {
        'main': 'this',
        'sub': {
            'name': 'this'
        },
        'add': add_list if add else None
    }
    print(list)
    print(list['add'])


@pytest.mark.dateformat
def test_date_formatting():
    date = '27/03/2020 4:00:00 PM'
    due_date = arrow.get(date, 'D/MM/YYYY h:mm:ss A')
    before_date = due_date.shift(days=-1).format('DD/MM/YYYY HH:mm')
    overdue_date = due_date.shift(days=1).format('DD/MM/YYYY HH:mm')
    just_date = due_date.format('YYYY-MM-DD')
    just_time = due_date.format('HH:mm:ss')
    print(f'due: {due_date} \n before: {before_date} \n overdue: {overdue_date} \n date: {just_date} '
          f'\n time: {just_time}')


@pytest.mark.dictsample
def test_sample_dictionary():
    test_server_address = 'test1.'

    support_email = 'support-test@email.com' if 'test1.' in test_server_address else (
        'support-test@email.com' if 'test.' in test_server_address else (
            'support-uat@email.com' if 'uat.' in test_server_address else None))

    print(support_email)

    response = 'Accepted'
    if response in ('Accepted', 'Declined'):
        print('valid reposnse')
    else:
        print('either accepted or declined')


@pytest.mark.loopsy
def test_loop_for():
    result = True
    for each in range(0, 3):
        print(f'loop {each}')
        if result:
            print('True')
            result = True

        if result:
            print('True enough')
        else:
            if each == 2:
                print('False')


@pytest.mark.twogreater
def test_two_greater():
    number1 = 3
    number2 = 2
    number3 = 1
    if number1 >= number2 >= number3:
        assert True
    else:
        assert False


@pytest.mark.dating
def test_dates():
    date = '01/12/2020 08:16'
    new_date = arrow.get(date, 'DD/MM/YYYY HH:mm').format('DD MMM YYYY hh:mm:ss A')

    print(new_date)

    arrow_time = arrow.now().format('HH:mm:ssZ')
    print(f'arrow time: {arrow_time}')

    dt_time = datetime.now()
    print(f'dt time: {dt_time}')

    timezone_auckland = 'Pacific/Auckland'
    time_auckland = datetime_tz(timezone_auckland).strftime('%H:%M:%S')
    print(f'time with tz info: {time_auckland}')


def datetime_tz(zone):
    tz = timezone(zone)
    tzoffset = datetime.now().replace(tzinfo=tz)
    return tzoffset


@pytest.mark.andor
def test_and_or():
    address = None
    valuation_type = 'deskval'
    valuation_method = 'accept'

    if not address and (valuation_method == 'creation' or valuation_type == 'avm'):
        print('on if')
    else:
        print('on else')


@pytest.mark.ifnone
def test_ifnone():
    service = 'bebeng'
    if service:
        print(service)
    else:
        print('service is none')


@pytest.mark.jsonlist
def test_jsonlist():
    valuer = {
        'full': 'full value',
        'role': 'role value',
        'name': 'name value',
        'email': 'email value'
    }
    print(valuer)

    valuer['client'] = {
        'code': 'code_value',
        'name': 'name_value'
    }
    print(valuer)


@pytest.mark.zipper
def test_zipper():
    valuers = ({'name': 'bing'}, {'name': 'bong'}, {'name': 'ping'}, {'name': 'pong'})
    quotes = ('100', '200', '300')
    completion_days = (1, 1, 1)

    for id, (valuer, quote, completion_day) in enumerate(itertools.zip_longest(valuers, quotes, completion_days)):
        print(f'INDEX {id}')
        print(f'Quote: {quote if quote else "999"}')
        print(f'Days: {completion_day if completion_day else 9}')
        print(f'Valuer: {valuer}')

    print(f'WINNER: {valuers[0]}')


@pytest.mark.addtolist
def test_add_to_list():
    list = []
    list.append({'name': 'Noel'})
    print(list)
    list.append({'name': 'Moel'})
    print(list)


@pytest.mark.extendlist
def test_extendlist():
    new_list = list()
    new_dict = dict()

    new_dict.update({'name': 'noel'})
    new_list.append(new_dict)

    print(f'\nLIST: {new_list}\nSET: {new_dict}')

    valuers_list = [{'number': 'one'}, {'number': 'two'}, {'number': 'three'}]
    valuers_list.extend([
        {'number': 'four'}, {'number': 'five'}
    ])
    print(valuers_list)


@pytest.mark.randomer
def test_randomise():
    for _ in range(4):
        user = (f'automation{random.choice(["01", "02"])}.{random.choice(["demo", "test"])}'
                f'company{random.randint(1, 4)}@email.com')
        print(user)


@pytest.mark.readtext
def test_cvs_to_list():
    csv_file = pandas.read_csv('./files/properties.csv', delimiter=',')
    list = csv_file.to_dict('records')

    with open('./files/properties.json', 'w', encoding='utf-8') as file:
        json.dump(list, file)

    property = random.choice(list)
    print(property['PropertyId'])
    print(property)


@pytest.mark.tryin
def test_tryin():
    string = 'https://www.some-url.com/'
    if ('login' or 'code') not in string:
        print('not found')
    else:
        print('found it')


@pytest.mark.golist
def test_golist():
    commercial_type = [
        'MULTI-USE AT PRIMARY LEVEL: Vacant/Indeterminate',
        'MULTI-USE AT PRIMARY LEVEL: Commercial',
        'MULTI-USE AT PRIMARY LEVEL: Residential',
        'VACANT URBAN LAND',
        'SHOPPING GROUP (2 TO 6 SHOPS)',
        'SHOPS - MAIN RETAIL (CENTRAL BUSINESS DISTRICT)',
        'SHOPS - SECONDARY RETAIL (FRINGE CBD)',
        'DRIVE-IN SHOPPING CENTRE',
    ]
    print([x.lower() for x in commercial_type])


@pytest.mark.trytime
def test_time():
    now = time.time()
    time.sleep(4)
    print((time.time() - now) * 1000)


@pytest.mark.addtolist
def test_addtolist():
    fields = ['land']
    my_list = ['help'] + fields
    print(my_list)


@pytest.mark.anytry
def test_tryany():
    k = 'long'
    if any(key in k for key in ['lon', 'lat']):
        print('found lat')
    else:
        print('not found')


@pytest.mark.ipnan
def test_ipnan():
    name = 'thisis'
    if name is None:
        print('None')
    elif 'this' in name:
        print('there is a name')
    else:
        print('None')


@pytest.mark.tryinarray
def test_tryin_array():
    method = 'CreateIn'
    if method in ['Create', 'Cancel']:
        print('you are in')


@pytest.mark.adddict
def test_adddict():
    type = None
    dix = {}
    print(dix)
    if type:
        dix['type'] = type if type else None
    print(dix)


@pytest.mark.equalsnone
def test_equalsnone():
    name = None
    if any(status == name for status in ['New', None]):
        print(f'name: {name}')
    else:
        print('other name')


@pytest.mark.twobooleans
def test_two_booleans():
    response1 = True
    response2 = True
    if (response1 or response2):
        print('something is true')
    else:
        print('both are false')


@pytest.mark.forloop
def test_forloop():
    for i in range(1, 10):
        print(i)
        if i == 10:
            print('BOOM 10')


@pytest.mark.xmlparse
def test_parse_xml():
    try:
        xml_string = '''<?xml version= "1.0"?>
            <hometrack>
                <realtime accountid="123456">
                    <valuationrequest>
                        <property propertytype="3" unitnum="" streetnum="86" street="Name" streettype="RSTREETOAD"
                            suburb="IVANSUBURBHOE" postcode="3079" state="STE" bedrooms="" bathrooms="0"
                            estimatedvalue="1000000" garages="" />
                    </valuationrequest>
                </realtime>
            </hometrack>'''
        xml = ET.fromstring(xml_string)
        request = {}
        for child in xml.iter('*'):
            if child.attrib:
                request[child.tag] = child.attrib

        print(request)

        number = 100
        fsd = 1.5
        print(number + (number*fsd))

        if not all(key in request['property'] for key in ('streetnum', 'street')):
            raise AssertionError()
    except ET.ParseError:
        print('ding')


@pytest.mark.flagtest
def test_flags():
    valtype = 'avm'
    valtypes = ['avm', 'fullval', 'deskval', 'comval']
    if valtype in valtypes:
        valtype_flags = {
            'avm': valtype == 'avm',
            'fullval': valtype == 'fullval',
            'deskval': valtype == 'deskval',
            'comval': valtype == 'comval'
        }
    else:
        raise ValueError('not found')
    print(valtype_flags.items())
    value = [valtype for valtype, flag in valtype_flags.items() if flag is True][0]
    print(value)
    print(valtype_flags)
