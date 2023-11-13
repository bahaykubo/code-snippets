class HttpAssertion(object):

    def __call__(self, actual=None):
        self.actual = actual
        return self

    def headers(self, header):
        self._check_type(header, ['dict'])
        self.actual = header
        return self

    def status_code(self, status_code):
        self._check_type(status_code, ['int'])
        self.actual = status_code
        return self

    def response_body(self, response_body):
        '''
        Expecting json from response body to be converted to a dictionary
        '''
        self._check_type(response_body, ['iterable'])
        self.actual = response_body
        return self

    def to_equal(self, expected):
        assert expected == self.actual, f'Expected value: "{expected}" is not equal to actual value: "{self.actual}"'

    def to_not_equal(self, expected):
        assert expected != self.actual, f'Expected value: "{expected}" is equal to actual value: "{self.actual}"'

    def to_be_less_or_equal(self, expected):
        assert self.actual <= expected, f'Actual value: "{self.actual}" is greater than Expected value: "{expected}"'

    def to_be_greater_or_equal(self, expected):
        assert self.actual >= expected, f'Actual value: "{self.actual}" is less than Expected value: "{expected}"'

    def to_contain(self, expected):
        assert expected in self.actual, f'Expected value: "{expected}" is not in to actual value: "{self.actual}"'

    def to_not_contain(self, expected):
        assert expected not in self.actual, f'Expected value: "{expected}" is in to Expected value: "{self.actual}"'

    def to_have(self, expected):
        self._check_type(self.actual, ['iterable'])
        if self._is_dictionary(self.actual) and self._is_dictionary(expected):
            self._match_dictionary(self.actual, expected)
        elif self._is_list(self.actual) and self._is_list(expected):
            self._match_list(self.actual, expected)
        else:
            for each in self.actual:
                if expected == each:
                    assert True
                    break
            else:
                assert False, f'Expected value: "{expected}" is not found in "{self.actual}"'

    def to_have_keys(self, expected):
        self._check_type(self.actual, ['iterable'])
        self._check_type(expected, ['iterable'])
        if self._is_list(self.actual):
            for each in self.actual:
                self._match_list(each, expected)
        else:
            self._match_list(self.actual, expected)

    @staticmethod
    def _check_type(object, type_checks):
        for type_check in type_checks:
            if type_check == 'int' and type(object).__name__ != 'int':
                raise TypeError(f'Object "{object}" type: "{type(object)}" is not an int')
            if type_check == 'iterable' and not HttpAssertion._is_iterable(object):
                raise TypeError(f'Object "{object}" type: "{type(object)}" is not iterable')
            if type_check == 'dict' and not HttpAssertion._is_dictionary(object):
                raise TypeError(f'Object "{object}" type: "{type(object)}" is not a dictionary')

    @staticmethod
    def _is_dictionary(object):
        return bool(hasattr(object, 'keys'))

    @staticmethod
    def _is_list(object):
        return bool(isinstance(object, list))

    @staticmethod
    def _is_iterable(object):
        return bool(hasattr(object, '__iter__'))

    @staticmethod
    def _match_dictionary(actual, expected):
        match_result = [
            (key, value) for (key, value) in expected.items() if (key, value) not in actual.items()
        ]
        if match_result:
            assert False, f'Failed to find the expected item(s): "{match_result}" from actual: "{actual}"'

    @staticmethod
    def _match_list(actual, expected):
        match_result = [each for each in expected if each not in actual]
        if match_result:
            assert False, f'Failed to find the expected item(s): "{match_result}" from actual: "{actual}"'
