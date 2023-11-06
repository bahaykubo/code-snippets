import pytest


@pytest.mark.alltest
@pytest.mark.alltestx
@pytest.mark.alltestthis
def test_this():
    print('this')


@pytest.mark.alltest
@pytest.mark.alltestx
@pytest.mark.alltestthese
def test_these():
    print('these')


@pytest.mark.alltest
@pytest.mark.alltestx
@pytest.mark.alltestthose
def test_those():
    print('those')


@pytest.mark.alltest
@pytest.mark.alltesty
@pytest.mark.alltestplease
def test_please():
    print('please')
