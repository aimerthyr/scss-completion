/** 字体大小 */
export const FONT_SIZE_VARIABLE = [
  'style.$font-size-tiny = 12px',
  'style.$font-size-body-small = 13px',
  'style.$font-size-body-regular = 14px',
  'style.$font-size-h4 = 16px',
  'style.$font-size-h3 = 20px',
  'style.$font-size-h2 = 24px',
  'style.$font-size-h1 = 32px',
];

/** 字重 */
export const FONT_WEIGHT_VARIABLE = [
  'style.$font-weight-regular = 400',
  'style.$font-weight-medium = 500',
];

/** 盒子阴影 */
export const BOX_SHADOW_VARIABLE = [
  'style.$shadow-small = 0px 4px 6px 0px',
  'style.$shadow-border-small = 0px 4px 6px 0px border',
  'style.$shadow-medium = 0px 4px 10px 0px',
  'style.$shadow-border-medium = 0px 4px 10px 0px border',
  'style.$shadow-large = 0px 16px 64px 0px',
  'style.$shadow-border-large = 0px 16px 64px 0px border'
];

/** 边框圆角 */
export const BORDER_RADIUS_VARIABLE = [
  'style.$border-radius-small = 4px',
  'style.$border-radius-medium = 8px',
  'style.$border-radius-large = 16px',
];


/** 调色板  */
export const COLOR_MAP = new Map([
  // azure
  ['#F4F9FF', 'style.color-palette(azure, 5) = azure-5:#F4F9FF'],
  ['#DCECFE', 'style.color-palette(azure, 10) = azure-10:#DCECFE'],
  ['#BADAFE', 'style.color-palette(azure, 20) = azure-20:#BADAFE'],
  ['#97C7FD', 'style.color-palette(azure, 30) = azure-30:#97C7FD'],
  ['#74B5FC', 'style.color-palette(azure, 40) = azure-40:#74B5FC'],
  ['#51A2FC', 'style.color-palette(azure, 50) = azure-50:#51A2FC'],
  ['#268BFB', 'style.color-palette(azure, 60) = azure-60:#268BFB'],
  ['#1E6FC9', 'style.color-palette(azure, 70) = azure-70:#1E6FC9'],
  ['#175397', 'style.color-palette(azure, 80) = azure-80:#175397'],
  ['#0F3864', 'style.color-palette(azure, 90) = azure-90:#0F3864'],
  ['#081C32', 'style.color-palette(azure, 100) = azure-100:#081C32'],

  // blue
  ['#F2FCFF', 'style.color-palette(blue, 5) = blue-5:#F2FCFF'],
  ['#D6F6FE', 'style.color-palette(blue, 10) = blue-10:#D6F6FE'],
  ['#ADECFE', 'style.color-palette(blue, 20) = blue-20:#ADECFE'],
  ['#85E3FD', 'style.color-palette(blue, 30) = blue-30:#85E3FD'],
  ['#5CDAFC', 'style.color-palette(blue, 40) = blue-40:#5CDAFC'],
  ['#33D1FC', 'style.color-palette(blue, 50) = blue-50:#33D1FC'],
  ['#00C5FB', 'style.color-palette(blue, 60) = blue-60:#00C5FB'],
  ['#009EC9', 'style.color-palette(blue, 70) = blue-70:#009EC9'],
  ['#007697', 'style.color-palette(blue, 80) = blue-80:#007697'],
  ['#004F64', 'style.color-palette(blue, 90) = blue-90:#004F64'],
  ['#002732', 'style.color-palette(blue, 100) = blue-100:#002732'],
  // emerald
  ['#F2FDFA', 'style.color-palette(emerald, 5) = emerald-5:#F2FDFA'],
  ['#D6F9EF', 'style.color-palette(emerald, 10) = emerald-10:#D6F9EF'],
  ['#ADF3DF', 'style.color-palette(emerald, 20) = emerald-20:#ADF3DF'],
  ['#85EDCF', 'style.color-palette(emerald, 30) = emerald-30:#85EDCF'],
  ['#5CE7BE', 'style.color-palette(emerald, 40) = emerald-40:#5CE7BE'],
  ['#33E1AE', 'style.color-palette(emerald, 50) = emerald-50:#33E1AE'],
  ['#00D99A', 'style.color-palette(emerald, 60) = emerald-60:#00D99A'],
  ['#00AE7B', 'style.color-palette(emerald, 70) = emerald-70:#00AE7B'],
  ['#00825C', 'style.color-palette(emerald, 80) = emerald-80:#00825C'],
  ['#00573E', 'style.color-palette(emerald, 90) = emerald-90:#00573E'],
  ['#002B1F', 'style.color-palette(emerald, 100) = emerald-100:#002B1F'],
  // green
  ['#F8FDF2', 'style.color-palette(green, 5) = green-5:#F8FDF2'],
  ['#E8F8D6', 'style.color-palette(green, 10) = green-10:#E8F8D6'],
  ['#D1F0AD', 'style.color-palette(green, 20) = green-20:#D1F0AD'],
  ['#BAE985', 'style.color-palette(green, 30) = green-30:#BAE985'],
  ['#A3E25C', 'style.color-palette(green, 40) = green-40:#A3E25C'],
  ['#8CDA33', 'style.color-palette(green, 50) = green-50:#8CDA33'],
  ['#6FD100', 'style.color-palette(green, 60) = green-60:#6FD100'],
  ['#59A700', 'style.color-palette(green, 70) = green-70:#59A700'],
  ['#437D00', 'style.color-palette(green, 80) = green-80:#437D00'],
  ['#2C5400', 'style.color-palette(green, 90) = green-90:#2C5400'],
  ['#162A00', 'style.color-palette(green, 100) = green-100:#162A00'],
  // indigo
  ['#F7F8FF', 'style.color-palette(indigo, 5) = indigo-5:#F7F8FF'],
  ['#E6E7FE', 'style.color-palette(indigo, 10) = indigo-10:#E6E7FE'],
  ['#CDCFFE', 'style.color-palette(indigo, 20) = indigo-20:#CDCFFE'],
  ['#B5B7FD', 'style.color-palette(indigo, 30) = indigo-30:#B5B7FD'],
  ['#9C9EFC', 'style.color-palette(indigo, 40) = indigo-40:#9C9EFC'],
  ['#8386FC', 'style.color-palette(indigo, 50) = indigo-50:#8386FC'],
  ['#6468FB', 'style.color-palette(indigo, 60) = indigo-60:#6468FB'],
  ['#5053C9', 'style.color-palette(indigo, 70) = indigo-70:#5053C9'],
  ['#3C3E97', 'style.color-palette(indigo, 80) = indigo-80:#3C3E97'],
  ['#282A64', 'style.color-palette(indigo, 90) = indigo-90:#282A64'],
  ['#141532', 'style.color-palette(indigo, 100) = indigo-100:#141532'],
  // orange
  ['#FFF8F5', 'style.color-palette(orange, 5) = orange-5:#FFF8F5'],
  ['#FEE2D6', 'style.color-palette(orange, 10) = orange-10:#FEE2D6'],
  ['#FDCBB5', 'style.color-palette(orange, 20) = orange-20:#FDCBB5'],
  ['#FCB394', 'style.color-palette(orange, 30) = orange-30:#FCB394'],
  ['#FB9D73', 'style.color-palette(orange, 40) = orange-40:#FB9D73'],
  ['#FA8652', 'style.color-palette(orange, 50) = orange-50:#FA8652'],
  ['#FA6F32', 'style.color-palette(orange, 60) = orange-60:#FA6F32'],
  ['#C85828', 'style.color-palette(orange, 70) = orange-70:#C85828'],
  ['#96421E', 'style.color-palette(orange, 80) = orange-80:#96421E'],
  ['#642C14', 'style.color-palette(orange, 90) = orange-90:#642C14'],
  ['#32160A', 'style.color-palette(orange, 100) = orange-100:#32160A'],
  // pink
  ['#FDF7FF', 'style.color-palette(pink, 5) = pink-5:#FDF7FF'],
  ['#F8E6FE', 'style.color-palette(pink, 10) = pink-10:#F8E6FE'],
  ['#F0CDFE', 'style.color-palette(pink, 20) = pink-20:#F0CDFE'],
  ['#E9B5FD', 'style.color-palette(pink, 30) = pink-30:#E9B5FD'],
  ['#E29CFC', 'style.color-palette(pink, 40) = pink-40:#E29CFC'],
  ['#DA83FC', 'style.color-palette(pink, 50) = pink-50:#DA83FC'],
  ['#D164FB', 'style.color-palette(pink, 60) = pink-60:#D164FB'],
  ['#A750C9', 'style.color-palette(pink, 70) = pink-70:#A750C9'],
  ['#7D3C97', 'style.color-palette(pink, 80) = pink-80:#7D3C97'],
  ['#542864', 'style.color-palette(pink, 90) = pink-90:#542864'],
  ['#2A1432', 'style.color-palette(pink, 100) = pink-100:#2A1432'],
  // purple
  ['#F9F7FF', 'style.color-palette(purple, 5) = purple-5:#F9F7FF'],
  ['#EBE6FE', 'style.color-palette(purple, 10) = purple-10:#EBE6FE'],
  ['#D8CDFE', 'style.color-palette(purple, 20) = purple-20:#D8CDFE'],
  ['#C4B5FD', 'style.color-palette(purple, 30) = purple-30:#C4B5FD'],
  ['#B19CFC', 'style.color-palette(purple, 40) = purple-40:#B19CFC'],
  ['#9D83FC', 'style.color-palette(purple, 50) = purple-50:#9D83FC'],
  ['#8564FB', 'style.color-palette(purple, 60) = purple-60:#8564FB'],
  ['#6A50C9', 'style.color-palette(purple, 70) = purple-70:#6A50C9'],
  ['#503C97', 'style.color-palette(purple, 80) = purple-80:#503C97'],
  ['#352864', 'style.color-palette(purple, 90) = purple-90:#352864'],
  ['#1B1432', 'style.color-palette(purple, 100) = purple-100:#1B1432'],
  // qing-orange
  ['#FFFAF5', 'style.color-palette(qing-orange, 5) = qing-orange-5:#FFFAF5'],
  ['#FCEBDC', 'style.color-palette(qing-orange, 10) = qing-orange-10:#FCEBDC'],
  ['#FCDABB', 'style.color-palette(qing-orange, 20) = qing-orange-20:#FCDABB'],
  ['#FCC89A', 'style.color-palette(qing-orange, 30) = qing-orange-30:#FCC89A'],
  ['#FBB678', 'style.color-palette(qing-orange, 40) = qing-orange-40:#FBB678'],
  ['#FBA458', 'style.color-palette(qing-orange, 50) = qing-orange-50:#FBA458'],
  ['#FB9337', 'style.color-palette(qing-orange, 60) = qing-orange-60:#FB9337'],
  ['#D17626', 'style.color-palette(qing-orange, 70) = qing-orange-70:#D17626'],
  ['#A85B18', 'style.color-palette(qing-orange, 80) = qing-orange-80:#A85B18'],
  ['#80430D', 'style.color-palette(qing-orange, 90) = qing-orange-90:#80430D'],
  ['#572B05', 'style.color-palette(qing-orange, 100) = qing-orange-100:#572B05'],
  // qing-purple
  ['#F5F5FC', 'style.color-palette(qing-purple, 5) = qing-purple-5:#F5F5FC'],
  ['#D7D5F3', 'style.color-palette(qing-purple, 10) = qing-purple-10:#D7D5F3'],
  ['#B8B4E9', 'style.color-palette(qing-purple, 20) = qing-purple-20:#B8B4E9'],
  ['#9893DF', 'style.color-palette(qing-purple, 30) = qing-purple-30:#9893DF'],
  ['#7872D5', 'style.color-palette(qing-purple, 40) = qing-purple-40:#7872D5'],
  ['#5950CC', 'style.color-palette(qing-purple, 50) = qing-purple-50:#5950CC'],
  ['#392FC2', 'style.color-palette(qing-purple, 60) = qing-purple-60:#392FC2'],
  ['#2E269B', 'style.color-palette(qing-purple, 70) = qing-purple-70:#2E269B'],
  ['#221C74', 'style.color-palette(qing-purple, 80) = qing-purple-80:#221C74'],
  ['#17134E', 'style.color-palette(qing-purple, 90) = qing-purple-90:#17134E'],
  ['#0B0927', 'style.color-palette(qing-purple, 100) = qing-purple-100:#0B0927'],
  // red
  ['#FFF6F6', 'style.color-palette(red, 5) = red-5:#FFF6F6'],
  ['#FEE2E3', 'style.color-palette(red, 10) = red-10:#FEE2E3'],
  ['#FEC5C7', 'style.color-palette(red, 20) = red-20:#FEC5C7'],
  ['#FDA9AB', 'style.color-palette(red, 30) = red-30:#FDA9AB'],
  ['#FC8C90', 'style.color-palette(red, 40) = red-40:#FC8C90'],
  ['#FC6F74', 'style.color-palette(red, 50) = red-50:#FC6F74'],
  ['#FB4B51', 'style.color-palette(red, 60) = red-60:#FB4B51'],
  ['#C93C41', 'style.color-palette(red, 70) = red-70:#C93C41'],
  ['#972D31', 'style.color-palette(red, 80) = red-80:#972D31'],
  ['#641E20', 'style.color-palette(red, 90) = red-90:#641E20'],
  ['#320F10', 'style.color-palette(red, 100) = red-100:#320F10'],
  // yellow
  ['#FFFBF2', 'style.color-palette(yellow, 5) = yellow-5:#FFFBF2'],
  ['#FCEECA', 'style.color-palette(yellow, 10) = yellow-10:#FCEECA'],
  ['#FCE3A2', 'style.color-palette(yellow, 20) = yellow-20:#FCE3A2'],
  ['#FCD779', 'style.color-palette(yellow, 30) = yellow-30:#FCD779'],
  ['#FACA50', 'style.color-palette(yellow, 40) = yellow-40:#FACA50'],
  ['#FABE28', 'style.color-palette(yellow, 50) = yellow-50:#FABE28'],
  ['#FAB300', 'style.color-palette(yellow, 60) = yellow-60:#FAB300'],
  ['#D19600', 'style.color-palette(yellow, 70) = yellow-70:#D19600'],
  ['#A87900', 'style.color-palette(yellow, 80) = yellow-80:#A87900'],
  ['#805B00', 'style.color-palette(yellow, 90) = yellow-90:#805B00'],
  ['#573E00', 'style.color-palette(yellow, 100) = yellow-100:#573E00'],
  // function-color
  ['#00BD77', 'style.$function-green = function-green:#00BD77'],
  ['#FB4B51', 'style.$function-red = function-red:#FB4B51'],
  ['#FB9337', 'style.$function-yellow = function-yellow:#FB9337'],
  // gradient-color
  ['linear-gradient(90.04deg, #268BFB -16.37%, #33E1AE 137.34%)', 'style.$azure-60-emerald-50 = azure-60-emerald-50'],
  ['linear-gradient(89.96deg, #FA6F32 0.05%, #FB9337 79.83%)', 'style.$orange-60-qing-orange-60 = orange-60-qing-orange-60'],
  ['linear-gradient(89.93deg, #8564FB 0.03%, #D164FB 114.1%)', 'style.$purple-60-pink-60 = purple-60-pink-60'],
  // font-color
  ['#FFFFFF', 'style.$font-color-white = font-color-white:#FFFFFF'],
  ['#ACB3BD', 'style.$font-color-70 = font-color-70:#ACB3BD'],
  ['#767E89', 'style.$font-color-80 = font-color-80:#767E89'],
  ['#494F57', 'style.$font-color-90 = font-color-90:#494F57'],
  ['#121315', 'style.$font-color-100 = font-color-100:#121315'],
]);
/** 灰色的Map 需要单独拿出来 因为里面的颜色有一部分和font-color重复了 */
export const GRAY_MAP = new Map([
  // gray
  ['#F4F6F9', 'style.$gray-40 = gray-40:#F4F6F9'],
  ['#E6EAF0', 'style.$gray-50 = gray-50:#E6EAF0'],
  ['#CCD4E0', 'style.$gray-60 = gray-60:#CCD4E0'],
  ['#ACB3BD', 'style.$gray-70 = gray-70:#ACB3BD'],
  ['#767E89', 'style.$gray-80 = gray-80:#767E89'],
  ['#494F57', 'style.$gray-90 = gray-90:#494F57'],
  ['#121315', 'style.$gray-100 = gray-100:#121315'],
]);

/** 背景色 需要单独拿出来 颜色有重复 */
export const BACKGROUND_COLOR_MAP = new Map([
  ['#FFFFFF', 'style.$background-color-white = background-color-white:#FFFFFF'],
  ['#F9FAFC', 'style.$background-color-10 = background-color-10:#F9FAFC']
]);

/** 边框色 需要单独拿出来 颜色有重复 */
export const BORDER_COLOR_MAP = new Map([
  ['#FFFFFF', 'style.$border-color-white = border-color-white:#FFFFFF'],
  ['#E6EAF0', 'style.$border-color-10 = border-color-10:#E6EAF0'],
  ['#CCD4E0', 'style.$border-color-20 = border-color-20:#CCD4E0']
]);