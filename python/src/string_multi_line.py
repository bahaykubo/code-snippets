print('this string '
      'should continue')

name = 'some name'
message = 'this should show up next'

print(f'string interpolation with {name} '
      f'should show the message next -> {message}')

string = '''
    DECLARE
    @PropertyId int
    SET @PropertyId = {0}
    Drop Table If EXISTS #Temp;
    Create Table #Temp
    (Id int,
    ListingDate date,
    Price decimal(18,2),
    Agent varchar(100),
    Agency varchar(100),
    Portal varchar(100),
    Growth decimal(16,12),
    ageInDays int )
    Insert Into #Temp
    Execute PropertyDataHistory.Property.GetListingByPropertyId
    @PropertyId = @PropertyId
    Select
    ps.PropertyId AS propertyId,
    CONCAT(ps.FullAddress,' ',a.PostCode) AS address,
    CAST(t.Price AS int) AS price,
    FORMAT(t.ListingDate,'yyyy-MM-ddTHH:mm:ss.fffZ') AS date,
    CAST(CAST(t.Growth as decimal(16,12)) AS FLOAT) AS growth,
    t.Agent AS agent,
    t.Agency AS name,
    t.Portal AS url
    From #Temp t WITH(NOLOCK)
    Inner Join PropertyDataHistory.Property.Listing l on l.ListingId = t.Id
    Inner Join PropertyData.Property.PropertySearch ps on ps.PropertyId = l.PropertyId
    Inner Join PropertyData.Reference.Address a on a.AddressId = ps.AddressId
'''
SQL = 'DECLARE ' \
    '@PropertyId int ' \
    'SET @PropertyId = {0} ' \
    'Drop Table If EXISTS #Temp; ' \
    'Create Table #Temp ' \
    '(Id int, ' \
    'ListingDate date, ' \
    'Price decimal(18,2), ' \
    'Agent varchar(100), ' \
    'Agency varchar(100), ' \
    'Portal varchar(100), ' \
    'Growth decimal(16,12), ' \
    'ageInDays int )'\
    'Insert Into #Temp ' \
    'Execute PropertyDataHistory.Property.GetListingByPropertyId ' \
    '@PropertyId = @PropertyId ' \
    'Select ' \
    'ps.PropertyId AS propertyId, ' \
    'CONCAT(ps.FullAddress,\' \',a.PostCode) AS address, ' \
    'CAST(t.Price AS int) AS price, ' \
    'FORMAT(t.ListingDate,\'yyyy-MM-ddTHH:mm:ss.fffZ\') AS date, ' \
    'CAST(CAST(t.Growth as decimal(16,12)) AS FLOAT) AS growth, ' \
    't.Agent AS agent, '\
    't.Agency AS name, '\
    't.Portal AS url '\
    'From #Temp t WITH(NOLOCK)' \
    'Inner Join PropertyDataHistory.Property.Listing l on l.ListingId = t.Id ' \
    'Inner Join PropertyData.Property.PropertySearch ps on ps.PropertyId = l.PropertyId ' \
    'Inner Join PropertyData.Reference.Address a on a.AddressId = ps.AddressId ' \

print(string)
print(SQL)
