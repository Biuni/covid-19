const countries = [
  {
    label: '🌍 Global',
    value: 'zz',
  },
  {
    label: '🇦🇫 Afghanistan',
    value: 'af',
  },
  {
    label: '🇦🇽 Åland Islands',
    value: 'ax',
  },
  {
    label: '🇦🇱 Albania',
    value: 'al',
  },
  {
    label: '🇩🇿 Algeria',
    value: 'dz',
  },
  {
    label: '🇦🇸 American Samoa',
    value: 'as',
  },
  {
    label: '🇦🇩 Andorra',
    value: 'ad',
  },
  {
    label: '🇦🇴 Angola',
    value: 'ao',
  },
  {
    label: '🇦🇮 Anguilla',
    value: 'ai',
  },
  {
    label: '🇦🇶 Antarctica',
    value: 'aq',
  },
  {
    label: '🇦🇬 Antigua and Barbuda',
    value: 'ag',
  },
  {
    label: '🇦🇷 Argentina',
    value: 'ar',
  },
  {
    label: '🇦🇲 Armenia',
    value: 'am',
  },
  {
    label: '🇦🇼 Aruba',
    value: 'aw',
  },
  {
    label: '🇦🇺 Australia',
    value: 'au',
  },
  {
    label: '🇦🇹 Austria',
    value: 'at',
  },
  {
    label: '🇦🇿 Azerbaijan',
    value: 'az',
  },
  {
    label: '🇧🇸 Bahamas',
    value: 'bs',
  },
  {
    label: '🇧🇭 Bahrain',
    value: 'bh',
  },
  {
    label: '🇧🇩 Bangladesh',
    value: 'bd',
  },
  {
    label: '🇧🇧 Barbados',
    value: 'bb',
  },
  {
    label: '🇧🇾 Belarus',
    value: 'by',
  },
  {
    label: '🇧🇪 Belgium',
    value: 'be',
  },
  {
    label: '🇧🇿 Belize',
    value: 'bz',
  },
  {
    label: '🇧🇯 Benin',
    value: 'bj',
  },
  {
    label: '🇧🇲 Bermuda',
    value: 'bm',
  },
  {
    label: '🇧🇹 Bhutan',
    value: 'bt',
  },
  {
    label: '🇧🇴 Bolivia',
    value: 'bo',
  },
  {
    label: '🇧🇦 Bosnia and Herzegovina',
    value: 'ba',
  },
  {
    label: '🇧🇼 Botswana',
    value: 'bw',
  },
  {
    label: '🇧🇻 Bouvet Island',
    value: 'bv',
  },
  {
    label: '🇧🇷 Brazil',
    value: 'br',
  },
  {
    label: '🇮🇴 British Indian Ocean Territory',
    value: 'io',
  },
  {
    label: '🇧🇳 Brunei Darussalam',
    value: 'bn',
  },
  {
    label: '🇧🇬 Bulgaria',
    value: 'bg',
  },
  {
    label: '🇧🇫 Burkina Faso',
    value: 'bf',
  },
  {
    label: '🇧🇮 Burundi',
    value: 'bi',
  },
  {
    label: '🇰🇭 Cambodia',
    value: 'kh',
  },
  {
    label: '🇨🇲 Cameroon',
    value: 'cm',
  },
  {
    label: '🇨🇦 Canada',
    value: 'ca',
  },
  {
    label: '🇨🇻 Cape Verde',
    value: 'cv',
  },
  {
    label: '🇰🇾 Cayman Islands',
    value: 'ky',
  },
  {
    label: '🇨🇫 Central African Republic',
    value: 'cf',
  },
  {
    label: '🇹🇩 Chad',
    value: 'td',
  },
  {
    label: '🇨🇱 Chile',
    value: 'cl',
  },
  {
    label: '🇨🇳 China',
    value: 'cn',
  },
  {
    label: '🇨🇽 Christmas Island',
    value: 'cx',
  },
  {
    label: '🇨🇨 Cocos (Keeling) Islands',
    value: 'cc',
  },
  {
    label: '🇨🇴 Colombia',
    value: 'co',
  },
  {
    label: '🇰🇲 Comoros',
    value: 'km',
  },
  {
    label: '🇨🇬 Congo',
    value: 'cg',
  },
  {
    label: '🇨🇩 Congo',
    value: 'cd',
  },
  {
    label: '🇨🇰 Cook Islands',
    value: 'ck',
  },
  {
    label: '🇨🇷 Costa Rica',
    value: 'cr',
  },
  {
    label: "🇨🇮 Côte d'Ivoire",
    value: 'ci',
  },
  {
    label: '🇭🇷 Croatia',
    value: 'hr',
  },
  {
    label: '🇨🇺 Cuba',
    value: 'cu',
  },
  {
    label: '🇨🇼 Curaçao',
    value: 'cw',
  },
  {
    label: '🇨🇾 Cyprus',
    value: 'cy',
  },
  {
    label: '🇨🇿 Czech Republic',
    value: 'cz',
  },
  {
    label: '🇩🇰 Denmark',
    value: 'dk',
  },
  {
    label: '🇩🇯 Djibouti',
    value: 'dj',
  },
  {
    label: '🇩🇲 Dominica',
    value: 'dm',
  },
  {
    label: '🇩🇴 Dominican Republic',
    value: 'do',
  },
  {
    label: '🇪🇨 Ecuador',
    value: 'ec',
  },
  {
    label: '🇪🇬 Egypt',
    value: 'eg',
  },
  {
    label: '🇸🇻 El Salvador',
    value: 'sv',
  },
  {
    label: '🇬🇶 Equatorial Guinea',
    value: 'gq',
  },
  {
    label: '🇪🇷 Eritrea',
    value: 'er',
  },
  {
    label: '🇪🇪 Estonia',
    value: 'ee',
  },
  {
    label: '🇪🇹 Ethiopia',
    value: 'et',
  },
  {
    label: '🇪🇺 European Union',
    value: 'eu',
  },
  {
    label: '🇫🇰 Falkland Islands (Malvinas)',
    value: 'fk',
  },
  {
    label: '🇫🇴 Faroe Islands',
    value: 'fo',
  },
  {
    label: '🇫🇯 Fiji',
    value: 'fj',
  },
  {
    label: '🇫🇮 Finland',
    value: 'fi',
  },
  {
    label: '🇫🇷 France',
    value: 'fr',
  },
  {
    label: '🇬🇫 French Guiana',
    value: 'gf',
  },
  {
    label: '🇵🇫 French Polynesia',
    value: 'pf',
  },
  {
    label: '🇬🇦 Gabon',
    value: 'ga',
  },
  {
    label: '🇬🇲 Gambia',
    value: 'gm',
  },
  {
    label: '🇬🇪 Georgia',
    value: 'ge',
  },
  {
    label: '🇩🇪 Germany',
    value: 'de',
  },
  {
    label: '🇬🇭 Ghana',
    value: 'gh',
  },
  {
    label: '🇬🇮 Gibraltar',
    value: 'gi',
  },
  {
    label: '🇬🇷 Greece',
    value: 'gr',
  },
  {
    label: '🇬🇱 Greenland',
    value: 'gl',
  },
  {
    label: '🇬🇩 Grenada',
    value: 'gd',
  },
  {
    label: '🇬🇵 Guadeloupe',
    value: 'gp',
  },
  {
    label: '🇬🇺 Guam',
    value: 'gu',
  },
  {
    label: '🇬🇹 Guatemala',
    value: 'gt',
  },
  {
    label: '🇬🇬 Guernsey',
    value: 'gg',
  },
  {
    label: '🇬🇳 Guinea',
    value: 'gn',
  },
  {
    label: '🇬🇼 Guinea-Bissau',
    value: 'gw',
  },
  {
    label: '🇬🇾 Guyana',
    value: 'gy',
  },
  {
    label: '🇭🇹 Haiti',
    value: 'ht',
  },
  {
    label: '🇭🇲 Heard Island and McDonald Islands',
    value: 'hm',
  },
  {
    label: '🇻🇦 Holy See (Vatican City State)',
    value: 'va',
  },
  {
    label: '🇭🇳 Honduras',
    value: 'hn',
  },
  {
    label: '🇭🇰 Hong Kong',
    value: 'hk',
  },
  {
    label: '🇭🇺 Hungary',
    value: 'hu',
  },
  {
    label: '🇮🇸 Iceland',
    value: 'is',
  },
  {
    label: '🇮🇳 India',
    value: 'in',
  },
  {
    label: '🇮🇩 Indonesia',
    value: 'id',
  },
  {
    label: '🇮🇷 Iran',
    value: 'ir',
  },
  {
    label: '🇮🇶 Iraq',
    value: 'iq',
  },
  {
    label: '🇮🇪 Ireland',
    value: 'ie',
  },
  {
    label: '🇮🇲 Isle of Man',
    value: 'im',
  },
  {
    label: '🇮🇱 Israel',
    value: 'il',
  },
  {
    label: '🇮🇹 Italy',
    value: 'it',
  },
  {
    label: '🇯🇲 Jamaica',
    value: 'jm',
  },
  {
    label: '🇯🇵 Japan',
    value: 'jp',
  },
  {
    label: '🇯🇪 Jersey',
    value: 'je',
  },
  {
    label: '🇯🇴 Jordan',
    value: 'jo',
  },
  {
    label: '🇰🇿 Kazakhstan',
    value: 'kz',
  },
  {
    label: '🇰🇪 Kenya',
    value: 'ke',
  },
  {
    label: '🇰🇮 Kiribati',
    value: 'ki',
  },
  {
    label: "🇰🇵 North Korea",
    value: 'kp',
  },
  {
    label: '🇰🇷 South Korea',
    value: 'kr',
  },
  {
    label: '🇰🇼 Kuwait',
    value: 'kw',
  },
  {
    label: '🇰🇬 Kyrgyzstan',
    value: 'kg',
  },
  {
    label: "🇱🇦 Lao People's Democratic Republic",
    value: 'la',
  },
  {
    label: '🇱🇻 Latvia',
    value: 'lv',
  },
  {
    label: '🇱🇧 Lebanon',
    value: 'lb',
  },
  {
    label: '🇱🇸 Lesotho',
    value: 'ls',
  },
  {
    label: '🇱🇷 Liberia',
    value: 'lr',
  },
  {
    label: '🇱🇾 Libya',
    value: 'ly',
  },
  {
    label: '🇱🇮 Liechtenstein',
    value: 'li',
  },
  {
    label: '🇱🇹 Lithuania',
    value: 'lt',
  },
  {
    label: '🇱🇺 Luxembourg',
    value: 'lu',
  },
  {
    label: '🇲🇴 Macao',
    value: 'mo',
  },
  {
    label: '🇲🇰 Macedonia',
    value: 'mk',
  },
  {
    label: '🇲🇬 Madagascar',
    value: 'mg',
  },
  {
    label: '🇲🇼 Malawi',
    value: 'mw',
  },
  {
    label: '🇲🇾 Malaysia',
    value: 'my',
  },
  {
    label: '🇲🇻 Maldives',
    value: 'mv',
  },
  {
    label: '🇲🇱 Mali',
    value: 'ml',
  },
  {
    label: '🇲🇹 Malta',
    value: 'mt',
  },
  {
    label: '🇲🇭 Marshall Islands',
    value: 'mh',
  },
  {
    label: '🇲🇷 Mauritania',
    value: 'mr',
  },
  {
    label: '🇲🇺 Mauritius',
    value: 'mu',
  },
  {
    label: '🇾🇹 Mayotte',
    value: 'yt',
  },
  {
    label: '🇲🇽 Mexico',
    value: 'mx',
  },
  {
    label: '🇫🇲 Micronesia',
    value: 'fm',
  },
  {
    label: '🇲🇩 Moldova',
    value: 'md',
  },
  {
    label: '🇲🇨 Monaco',
    value: 'mc',
  },
  {
    label: '🇲🇳 Mongolia',
    value: 'mn',
  },
  {
    label: '🇲🇪 Montenegro',
    value: 'me',
  },
  {
    label: '🇲🇸 Montserrat',
    value: 'ms',
  },
  {
    label: '🇲🇦 Morocco',
    value: 'ma',
  },
  {
    label: '🇲🇿 Mozambique',
    value: 'mz',
  },
  {
    label: '🇲🇲 Myanmar',
    value: 'mm',
  },
  {
    label: '🇳🇦 Namibia',
    value: 'na',
  },
  {
    label: '🇳🇷 Nauru',
    value: 'nr',
  },
  {
    label: '🇳🇵 Nepal',
    value: 'np',
  },
  {
    label: '🇳🇱 Netherlands',
    value: 'nl',
  },
  {
    label: '🇳🇨 New Caledonia',
    value: 'nc',
  },
  {
    label: '🇳🇿 New Zealand',
    value: 'nz',
  },
  {
    label: '🇳🇮 Nicaragua',
    value: 'ni',
  },
  {
    label: '🇳🇪 Niger',
    value: 'ne',
  },
  {
    label: '🇳🇬 Nigeria',
    value: 'ng',
  },
  {
    label: '🇳🇺 Niue',
    value: 'nu',
  },
  {
    label: '🇳🇫 Norfolk Island',
    value: 'nf',
  },
  {
    label: '🇲🇵 Northern Mariana Islands',
    value: 'mp',
  },
  {
    label: '🇳🇴 Norway',
    value: 'no',
  },
  {
    label: '🇴🇲 Oman',
    value: 'om',
  },
  {
    label: '🇵🇰 Pakistan',
    value: 'pk',
  },
  {
    label: '🇵🇼 Palau',
    value: 'pw',
  },
  {
    label: '🇵🇸 Palestine',
    value: 'ps',
  },
  {
    label: '🇵🇦 Panama',
    value: 'pa',
  },
  {
    label: '🇵🇬 Papua New Guinea',
    value: 'pg',
  },
  {
    label: '🇵🇾 Paraguay',
    value: 'py',
  },
  {
    label: '🇵🇪 Peru',
    value: 'pe',
  },
  {
    label: '🇵🇭 Philippines',
    value: 'ph',
  },
  {
    label: '🇵🇳 Pitcairn',
    value: 'pn',
  },
  {
    label: '🇵🇱 Poland',
    value: 'pl',
  },
  {
    label: '🇵🇹 Portugal',
    value: 'pt',
  },
  {
    label: '🇵🇷 Puerto Rico',
    value: 'pr',
  },
  {
    label: '🇶🇦 Qatar',
    value: 'qa',
  },
  {
    label: '🇷🇴 Romania',
    value: 'ro',
  },
  {
    label: '🇷🇺 Russian Federation',
    value: 'ru',
  },
  {
    label: '🇷🇼 Rwanda',
    value: 'rw',
  },
  {
    label: '🇸🇭 Saint Helena, Ascension and Tristan da Cunha',
    value: 'sh',
  },
  {
    label: '🇰🇳 Saint Kitts and Nevis',
    value: 'kn',
  },
  {
    label: '🇱🇨 Saint Lucia',
    value: 'lc',
  },
  {
    label: '🇲🇫 Saint Martin (French part)',
    value: 'mf',
  },
  {
    label: '🇵🇲 Saint Pierre and Miquelon',
    value: 'pm',
  },
  {
    label: '🇻🇨 Saint Vincent and the Grenadines',
    value: 'vc',
  },
  {
    label: '🇼🇸 Samoa',
    value: 'ws',
  },
  {
    label: '🇸🇲 San Marino',
    value: 'sm',
  },
  {
    label: '🇸🇹 Sao Tome and Principe',
    value: 'st',
  },
  {
    label: '🇸🇦 Saudi Arabia',
    value: 'sa',
  },
  {
    label: '🇸🇳 Senegal',
    value: 'sn',
  },
  {
    label: '🇷🇸 Serbia',
    value: 'rs',
  },
  {
    label: '🇸🇨 Seychelles',
    value: 'sc',
  },
  {
    label: '🇸🇱 Sierra Leone',
    value: 'sl',
  },
  {
    label: '🇸🇬 Singapore',
    value: 'sg',
  },
  {
    label: '🇸🇽 Sint Maarten (Dutch part)',
    value: 'sx',
  },
  {
    label: '🇸🇰 Slovakia',
    value: 'sk',
  },
  {
    label: '🇸🇮 Slovenia',
    value: 'si',
  },
  {
    label: '🇸🇧 Solomon Islands',
    value: 'sb',
  },
  {
    label: '🇸🇴 Somalia',
    value: 'so',
  },
  {
    label: '🇿🇦 South Africa',
    value: 'za',
  },
  {
    label: '🇬🇸 South Georgia and the South Sandwich Islands',
    value: 'gs',
  },
  {
    label: '🇸🇸 South Sudan',
    value: 'ss',
  },
  {
    label: '🇪🇸 Spain',
    value: 'es',
  },
  {
    label: '🇱🇰 Sri Lanka',
    value: 'lk',
  },
  {
    label: '🇸🇩 Sudan',
    value: 'sd',
  },
  {
    label: '🇸🇷 Suriname',
    value: 'sr',
  },
  {
    label: '🇸🇯 Svalbard and Jan Mayen',
    value: 'sj',
  },
  {
    label: '🇸🇿 Swaziland',
    value: 'sz',
  },
  {
    label: '🇸🇪 Sweden',
    value: 'se',
  },
  {
    label: '🇨🇭 Switzerland',
    value: 'ch',
  },
  {
    label: '🇸🇾 Syrian Arab Republic',
    value: 'sy',
  },
  {
    label: '🇹🇼 Taiwan',
    value: 'tw',
  },
  {
    label: '🇹🇯 Tajikistan',
    value: 'tj',
  },
  {
    label: '🇹🇿 Tanzania',
    value: 'tz',
  },
  {
    label: '🇹🇭 Thailand',
    value: 'th',
  },
  {
    label: '🇹🇱 Timor-Leste',
    value: 'tl',
  },
  {
    label: '🇹🇬 Togo',
    value: 'tg',
  },
  {
    label: '🇹🇰 Tokelau',
    value: 'tk',
  },
  {
    label: '🇹🇴 Tonga',
    value: 'to',
  },
  {
    label: '🇹🇹 Trinidad and Tobago',
    value: 'tt',
  },
  {
    label: '🇹🇳 Tunisia',
    value: 'tn',
  },
  {
    label: '🇹🇷 Turkey',
    value: 'tr',
  },
  {
    label: '🇹🇲 Turkmenistan',
    value: 'tm',
  },
  {
    label: '🇹🇨 Turks and Caicos Islands',
    value: 'tc',
  },
  {
    label: '🇹🇻 Tuvalu',
    value: 'tv',
  },
  {
    label: '🇺🇬 Uganda',
    value: 'ug',
  },
  {
    label: '🇺🇦 Ukraine',
    value: 'ua',
  },
  {
    label: '🇦🇪 United Arab Emirates',
    value: 'ae',
  },
  {
    label: '🇬🇧 United Kingdom',
    value: 'gb',
  },
  {
    label: '🇺🇳 United Nations',
    value: 'un',
  },
  {
    label: '🇺🇸 United States',
    value: 'us',
  },
  {
    label: '🇺🇾 Uruguay',
    value: 'uy',
  },
  {
    label: '🇺🇿 Uzbekistan',
    value: 'uz',
  },
  {
    label: '🇻🇺 Vanuatu',
    value: 'vu',
  },
  {
    label: '🇻🇪 Venezuela',
    value: 've',
  },
  {
    label: '🇻🇳 Vietnam',
    value: 'vn',
  },
  {
    label: '🇻🇬 Virgin Islands, British',
    value: 'vg',
  },
  {
    label: '🇻🇮 Virgin Islands, U.S.',
    value: 'vi',
  },
  {
    label: '🇼🇫 Wallis and Futuna',
    value: 'wf',
  },
  {
    label: '🇪🇭 Western Sahara',
    value: 'eh',
  },
  {
    label: '🇾🇪 Yemen',
    value: 'ye',
  },
  {
    label: '🇿🇲 Zambia',
    value: 'zm',
  },
  {
    label: '🇿🇼 Zimbabwe',
    value: 'zw',
  },
];

export default countries;
