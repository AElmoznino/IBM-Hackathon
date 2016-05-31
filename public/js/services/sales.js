app.factory('sales', ['$http', function($http) {
  var salesService = {
    salesData: 
      [
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":98
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":71
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":55
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":43
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":38
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":45
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":102
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":177
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":204
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":206
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":204
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":180
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":169
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":177
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":312
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":170
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":151
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":137
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":130
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":351
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":326
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":325
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":296
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":284
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":279
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":272
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":264
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":262
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":247
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":224
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":209
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":208
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":220
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":238
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":242
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":247
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":279
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":288
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":304
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":312
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":327
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":345
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":362
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":392
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":424
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":419
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":422
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":426
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":625
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":387
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":377
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":369
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":358
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":256
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":185
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":130
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":93
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":92
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":111
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":273
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":460
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":516
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":554
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":556
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":548
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":464
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":440
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":461
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":823
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":460
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":382
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":368
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":333
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":264
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":249
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":207
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":204
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":198
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":190
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":185
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":173
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":162
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":159
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":156
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":156
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":162
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":166
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":162
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":161
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":174
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":179
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":193
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":230
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":235
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":240
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":266
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":266
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":294
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":319
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":315
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":316
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":320
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":473
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":292
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":283
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":273
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":274
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":164
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":123
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":84
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":61
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":63
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":78
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":181
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":293
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":329
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":351
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":352
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":350
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":298
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":285
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":295
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":525
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":291
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":243
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":238
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":210
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":326
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":309
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":306
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":270
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":263
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":256
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":241
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":239
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":242
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":240
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":228
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":203
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":193
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":193
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":198
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":193
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":206
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":224
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":234
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":241
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":264
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":274
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":290
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":289
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":299
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":325
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":330
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":365
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":388
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":390
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":387
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":394
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":586
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":363
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":351
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":336
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Allston",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":330
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":101
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":73
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":56
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":37
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":41
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":51
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":111
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":174
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":191
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":207
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":205
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":206
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":177
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":169
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":176
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":307
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":171
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":150
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":138
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":125
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":352
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":328
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":326
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":290
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":288
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":276
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":272
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":269
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":260
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":266
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":263
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":255
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":240
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":227
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":209
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":208
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":226
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":236
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":248
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":254
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":279
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":288
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":307
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":317
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":322
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":344
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":355
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":390
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":420
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":421
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":425
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":426
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":624
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":390
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":373
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":365
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":358
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":258
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":191
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":131
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":99
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":97
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":119
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":276
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":458
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":513
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":556
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":549
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":554
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":459
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":447
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":463
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":827
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":462
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":389
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":373
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":329
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":271
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":245
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":222
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":208
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":207
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":198
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":191
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":187
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":168
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":157
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":161
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":162
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":158
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":166
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":158
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":159
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":167
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":173
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":182
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":185
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":198
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":225
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":227
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":232
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":248
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":258
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":267
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":291
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":316
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":321
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":318
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":314
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":474
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":292
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":285
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":273
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":271
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":164
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":118
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":84
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":59
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":62
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":75
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":179
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":292
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":324
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":351
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":347
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":345
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":291
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":280
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":294
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":526
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":289
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":245
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":236
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":213
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":327
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":305
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":299
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":275
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":267
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":257
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":250
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":250
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":245
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":240
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":236
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":227
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":193
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":203
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":193
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":206
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":222
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":229
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":248
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":260
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":274
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":289
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":290
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":304
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":323
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":336
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":367
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":395
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":394
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":391
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":390
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":587
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":367
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":352
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":334
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Back Bay",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":331
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":104
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":71
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":58
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":37
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":40
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":42
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":107
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":178
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":199
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":206
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":209
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":172
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":170
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":171
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":313
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":177
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":152
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":137
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":127
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":349
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":330
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":329
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":290
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":288
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":281
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":267
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":264
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":267
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":257
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":256
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":248
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":221
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":208
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":220
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":230
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":247
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":248
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":264
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":282
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":295
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":305
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":318
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":324
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":349
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":359
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":394
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":417
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":424
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":418
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":419
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":629
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":395
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":377
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":364
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":361
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":184
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":131
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":98
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":97
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":115
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":283
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":458
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":517
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":555
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":546
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":548
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":456
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":439
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":457
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":826
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":462
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":383
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":372
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":331
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":263
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":250
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":219
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":192
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":187
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":169
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":162
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":161
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":157
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":166
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":161
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":158
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":161
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":166
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":179
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":180
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":186
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":225
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":229
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":232
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":248
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":267
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":268
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":292
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":321
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":322
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":318
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":319
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":474
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":296
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":280
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":276
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":266
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":169
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":125
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":86
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":61
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":65
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":70
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":180
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":296
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":331
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":347
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":346
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":346
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":289
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":284
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":298
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":523
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":291
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":246
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":237
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":209
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":329
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":301
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":304
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":267
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":268
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":262
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":251
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":239
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":237
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":234
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":231
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":204
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":203
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":204
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":230
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":233
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":250
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":267
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":273
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":284
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":294
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":297
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":320
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":333
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":358
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":392
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":390
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":387
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":395
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":585
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":367
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":351
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":337
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Charlestown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":333
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":104
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":72
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":51
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":41
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":42
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":49
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":104
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":177
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":193
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":173
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":173
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":313
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":173
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":146
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":139
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":122
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":354
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":331
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":327
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":289
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":291
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":278
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":274
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":262
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":263
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":256
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":256
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":222
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":208
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":209
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":218
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":209
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":220
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":231
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":248
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":264
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":279
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":297
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":304
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":313
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":320
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":348
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":356
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":387
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":421
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":418
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":425
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":417
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":633
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":385
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":374
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":360
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":359
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":256
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":183
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":135
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":91
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":97
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":118
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":278
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":458
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":519
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":547
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":549
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":547
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":463
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":446
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":459
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":823
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":455
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":383
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":366
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":331
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":268
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":251
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":240
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":225
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":207
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":205
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":192
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":188
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":174
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":157
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":161
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":157
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":162
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":156
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":157
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":159
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":157
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":162
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":174
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":181
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":193
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":198
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":220
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":235
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":236
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":247
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":262
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":268
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":295
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":318
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":318
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":320
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":320
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":475
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":298
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":287
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":280
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":266
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":169
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":125
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":89
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":66
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":61
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":72
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":176
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":291
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":328
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":354
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":350
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":353
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":294
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":282
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":289
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":527
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":289
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":244
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":234
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":211
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":329
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":303
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":303
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":271
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":265
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":260
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":256
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":242
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":240
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":238
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":224
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":209
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":193
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":198
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":203
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":206
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":221
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":231
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":233
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":265
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":273
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":289
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":293
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":300
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":321
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":328
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":363
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":389
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":396
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":386
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":394
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":588
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":361
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":349
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":339
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Downtown",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":335
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":97
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":75
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":50
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":37
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":35
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":45
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":106
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":177
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":195
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":204
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":206
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":208
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":180
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":172
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":170
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":316
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":176
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":148
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":141
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":125
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":354
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":330
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":328
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":290
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":283
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":283
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":271
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":267
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":260
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":255
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":242
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":222
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":223
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":234
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":251
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":283
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":295
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":302
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":312
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":319
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":352
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":357
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":394
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":426
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":418
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":424
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":422
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":632
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":387
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":373
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":361
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":355
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":258
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":189
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":130
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":93
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":96
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":118
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":278
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":463
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":511
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":547
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":548
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":550
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":463
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":443
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":463
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":823
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":465
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":386
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":366
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":329
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":263
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":247
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":242
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":224
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":203
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":189
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":181
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":173
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":159
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":159
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":161
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":166
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":161
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":161
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":158
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":159
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":158
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":156
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":172
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":176
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":181
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":188
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":205
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":222
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":230
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":233
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":272
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":294
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":320
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":314
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":312
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":318
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":473
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":290
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":286
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":277
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":270
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":164
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":119
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":82
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":61
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":61
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":74
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":175
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":290
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":329
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":345
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":354
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":352
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":294
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":279
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":296
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":518
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":292
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":247
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":232
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":209
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":330
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":302
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":298
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":271
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":262
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":258
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":249
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":244
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":244
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":244
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":223
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":203
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":203
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":193
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":223
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":234
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":242
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":265
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":271
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":289
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":296
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":303
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":328
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":331
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":363
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":391
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":388
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":395
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":388
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":587
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":360
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":347
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":341
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"Jamaica Plain",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":332
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":95
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":77
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":58
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":42
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":40
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":48
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":102
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":177
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":198
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":205
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":208
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":173
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":170
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":174
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":309
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":177
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":145
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":143
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":131
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":349
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":329
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":326
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":294
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":286
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":284
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":268
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":262
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":259
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":254
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":226
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":208
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":208
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":209
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":218
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":208
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":226
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":237
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":247
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":250
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":263
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":284
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":289
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":310
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":310
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":320
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":350
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":355
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":393
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":417
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":417
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":426
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":420
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":626
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":385
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":374
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":368
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":359
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":258
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":183
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":127
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":99
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":95
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":116
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":275
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":457
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":520
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":554
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":549
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":550
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":461
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":443
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":456
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":820
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":458
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":392
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":366
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":328
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":263
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":251
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":218
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":209
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":204
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":198
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":190
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":190
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":186
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":170
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":161
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":156
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":156
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":159
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":158
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":159
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":161
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":156
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":159
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":169
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":177
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":189
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":193
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":222
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":231
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":235
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":244
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":258
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":272
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":294
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":318
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":320
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":320
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":315
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":477
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":295
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":282
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":270
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":272
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":168
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":122
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":83
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":61
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":61
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":69
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":182
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":294
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":329
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":346
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":351
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":349
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":298
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":278
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":289
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":522
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":290
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":251
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":238
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":210
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":332
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":308
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":302
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":272
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":271
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":255
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":252
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":242
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":245
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":239
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":236
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":236
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":227
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":207
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":198
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":229
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":232
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":257
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":275
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":284
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":295
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":299
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":320
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":329
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":366
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":392
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":394
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":395
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":391
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":586
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":365
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":345
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":339
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"North End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":331
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":96
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":76
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":58
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":37
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":43
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":41
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":112
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":172
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":199
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":211
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":177
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":170
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":172
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":314
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":170
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":144
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":139
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":128
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":351
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":332
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":325
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":294
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":285
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":279
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":275
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":262
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":262
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":256
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":254
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":247
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":227
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":209
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":228
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":232
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":241
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":245
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":279
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":292
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":311
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":311
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":328
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":352
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":356
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":387
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":423
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":423
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":418
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":421
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":629
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":392
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":373
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":365
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":356
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":256
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":190
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":129
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":93
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":91
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":119
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":280
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":457
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":510
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":547
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":556
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":549
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":460
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":439
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":461
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":822
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":464
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":383
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":372
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":335
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":262
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":218
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":208
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":203
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":193
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":182
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":169
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":166
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":157
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":158
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":157
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":157
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":156
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":159
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":162
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":157
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":176
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":185
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":192
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":204
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":219
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":227
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":240
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":248
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":263
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":271
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":298
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":318
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":318
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":313
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":314
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":471
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":295
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":289
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":277
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":267
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":168
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":122
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":82
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":65
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":62
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":75
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":178
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":288
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":329
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":352
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":354
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":352
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":294
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":276
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":298
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":520
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":297
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":245
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":233
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":217
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":329
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":300
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":305
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":272
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":264
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":258
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":251
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":245
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":246
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":242
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":244
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":232
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":205
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":198
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":198
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":205
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":218
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":230
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":238
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":242
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":263
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":273
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":285
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":293
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":305
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":321
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":336
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":364
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":396
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":392
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":386
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":395
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":585
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":366
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":351
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":343
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"South End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":332
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":100
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":73
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":58
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":38
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":41
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":41
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":104
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":170
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":193
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":209
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":210
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":209
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":173
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":171
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":179
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":311
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":170
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":151
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":143
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":128
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":355
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":324
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":327
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":292
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":290
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":280
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":268
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":266
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":261
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":256
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":260
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":258
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":245
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":219
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":209
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":215
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":217
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":212
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":209
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":211
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":222
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":239
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":248
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":252
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":264
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":284
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":296
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":302
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":317
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":323
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":344
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":357
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":385
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":417
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":422
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":419
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":421
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":634
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":387
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":375
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":364
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"RED - SPECIAL EDITION - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":355
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":262
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":191
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":132
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":94
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":98
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":114
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":278
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":464
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":511
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":556
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":549
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":548
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":463
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":446
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":458
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":828
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":457
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":387
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":373
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":333
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":267
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":247
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":216
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":219
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":214
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":209
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":200
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":191
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":187
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":166
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":156
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":157
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":157
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":159
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":158
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":162
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":165
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":163
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":160
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":164
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":173
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":180
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":180
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":224
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":229
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":237
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":260
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":270
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":295
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":316
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":317
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":317
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":312
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":470
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":290
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":283
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":271
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"GREEN - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":275
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":169
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":125
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":87
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":65
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":0
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":61
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":70
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":176
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":297
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":326
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":349
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":351
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":354
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":291
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":282
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":295
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":527
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":292
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":251
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":233
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Direct Sales",
   "Sales (Units)":217
 },
 {
   "Week Of":"2016-05-23",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":327
 },
 {
   "Week Of":"2016-05-16",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":299
 },
 {
   "Week Of":"2016-05-09",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":299
 },
 {
   "Week Of":"2016-05-02",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":273
 },
 {
   "Week Of":"2016-04-25",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":270
 },
 {
   "Week Of":"2016-04-18",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":265
 },
 {
   "Week Of":"2016-04-11",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":251
 },
 {
   "Week Of":"2016-04-04",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2016-03-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":245
 },
 {
   "Week Of":"2016-03-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":239
 },
 {
   "Week Of":"2016-03-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":237
 },
 {
   "Week Of":"2016-03-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":243
 },
 {
   "Week Of":"2016-02-29",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":226
 },
 {
   "Week Of":"2016-02-22",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":206
 },
 {
   "Week Of":"2016-02-15",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2016-02-08",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2016-02-01",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":198
 },
 {
   "Week Of":"2016-01-25",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2016-01-18",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":202
 },
 {
   "Week Of":"2016-01-11",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2016-01-04",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2015-12-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2015-12-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":196
 },
 {
   "Week Of":"2015-12-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2015-12-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2015-11-30",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":197
 },
 {
   "Week Of":"2015-11-23",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":201
 },
 {
   "Week Of":"2015-11-16",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":195
 },
 {
   "Week Of":"2015-11-09",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":194
 },
 {
   "Week Of":"2015-11-02",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":199
 },
 {
   "Week Of":"2015-10-26",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":213
 },
 {
   "Week Of":"2015-10-19",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":220
 },
 {
   "Week Of":"2015-10-12",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":231
 },
 {
   "Week Of":"2015-10-05",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":230
 },
 {
   "Week Of":"2015-09-28",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":248
 },
 {
   "Week Of":"2015-09-21",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":259
 },
 {
   "Week Of":"2015-09-14",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":271
 },
 {
   "Week Of":"2015-09-07",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":285
 },
 {
   "Week Of":"2015-08-31",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":295
 },
 {
   "Week Of":"2015-08-24",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":295
 },
 {
   "Week Of":"2015-08-17",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":323
 },
 {
   "Week Of":"2015-08-10",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":336
 },
 {
   "Week Of":"2015-08-03",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":360
 },
 {
   "Week Of":"2015-07-27",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":395
 },
 {
   "Week Of":"2015-07-20",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":391
 },
 {
   "Week Of":"2015-07-13",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":390
 },
 {
   "Week Of":"2015-07-06",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":393
 },
 {
   "Week Of":"2015-06-29",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":581
 },
 {
   "Week Of":"2015-06-22",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":367
 },
 {
   "Week Of":"2015-06-15",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":353
 },
 {
   "Week Of":"2015-06-08",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":336
 },
 {
   "Week Of":"2015-06-01",
   "City":"Boston",
   "Neighborhood":"West End",
   "Product":"FanCo. Classic",
   "SKU":"ORANGE - FanCo. Classic",
   "Channel":"Retail",
   "Sales (Units)":336
 }
],

    getAllSales: function() {
      return salesService.salesData;
      // TODO: Implement the following:
      // return $http.get('/fanco-sales').then(function(data) {
      //   angular.copy(data.data, salesService.salesData)
      // });
    }
  }
  return salesService;
}]);

// TODO: Handle the sales data coming in from the GET request.
// 