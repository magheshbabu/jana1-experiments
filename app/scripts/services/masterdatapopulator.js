'use strict';

/**
 * @ngdoc service
 * @name generatorAngularTestApp.masterDataPopulator
 * @description
 * # masterDataPopulator
 * Factory in the generatorAngularTestApp.
 */
angular.module('generatorAngularTestApp')
  .factory('masterDataPopulator', function () {
    // Service logic
    // ...
    var districts = [
      {
        "distID": 1,
        "malDistName": "തിരുവനന്തപുരം'",
        "engDistName": "Thiruvananthapuram'"
      },
      {
        "distID": 2,
        "malDistName": "കൊല്ലം'",
        "engDistName": "Kollam'"
      },
      {
        "distID": 3,
        "malDistName": "പത്തനംതിട്ട'",
        "engDistName": "Pathanamthitta'"
      },
      {
        "distID": 4,
        "malDistName": "ആലപ്പുഴ'",
        "engDistName": "Alappuzha'"
      },
      {
        "distID": 5,
        "malDistName": "കോട്ടയം'",
        "engDistName": "Kottayam'"
      },
      {
        "distID": 6,
        "malDistName": "ഇടുക്കി'",
        "engDistName": "Idukki'"
      },
      {
        "distID": 7,
        "malDistName": "എറണാകുളം'",
        "engDistName": "Ernakulam'"
      },
      {
        "distID": 8,
        "malDistName": "തൃശ്ശൂര്‍'",
        "engDistName": "Thrissur'"
      },
      {
        "distID": 9,
        "malDistName": "പാലക്കാട്'",
        "engDistName": "Palakkad'"
      },
      {
        "distID": 10,
        "malDistName": "മലപ്പുറം'",
        "engDistName": "Malappuram'"
      },
      {
        "distID": 11,
        "malDistName": "കോഴിക്കോട്'",
        "engDistName": "Kozhikkode'"
      },
      {
        "distID": 12,
        "malDistName": "വയനാട്'",
        "engDistName": "Wayanad'"
      },
      {
        "distID": 13,
        "malDistName": "കണ്ണൂര്‍'",
        "engDistName": "Kannur'"
      },
      {
        "distID": 14,
        "malDistName": "കാസര്‍ഗോഡ്'",
        "engDistName": "Kasargod'"
      }
     ];
    var blocks = [
      {
        "E": "Aryancode'",
        "M": "ആര്യങ്കോട്'",
        "BT": "5",
        "BID": "10",
        "DID": "1"
      },
      {
        "E": "Varkala'",
        "M": "വര്‍ക്കല'",
        "BT": "2",
        "BID": "1",
        "DID": "1"
      },
      {
        "E": "Vellanad'",
        "M": "വെള്ളനാട്'",
        "BT": "2",
        "BID": "5",
        "DID": "1"
      },
      {
        "E": "Nedumangad'",
        "M": "നെടുമങ്ങാട്'",
        "BT": "2",
        "BID": "6",
        "DID": "1"
      },
      {
        "E": "Kazhakuttom'",
        "M": "കഴക്കൂട്ടം'",
        "BT": "2",
        "BID": "7",
        "DID": "1"
      },
      {
        "E": "Nemom'",
        "M": "നേമം'",
        "BT": "2",
        "BID": "9",
        "DID": "1"
      },
      {
        "E": "Perumkadavila'",
        "M": "പെരുങ്കടവിള'",
        "BT": "2",
        "BID": "10",
        "DID": "1"
      },
      {
        "E": "Athiyannoor'",
        "M": "അതിയന്നൂര്‍'",
        "BT": "2",
        "BID": "11",
        "DID": "1"
      },
      {
        "E": "Parassala'",
        "M": "പാറശ്ശാല'",
        "BT": "2",
        "BID": "12",
        "DID": "1"
      },
      {
        "E": "Poovar'",
        "M": "പൂവാര്‍'",
        "BT": "5",
        "BID": "12",
        "DID": "1"
      },
      {
        "E": "Thirupuram'",
        "M": "തിരുപുറം'",
        "BT": "5",
        "BID": "12",
        "DID": "1"
      },
      {
        "E": "Parassala'",
        "M": "പാറശ്ശാല'",
        "BT": "5",
        "BID": "12",
        "DID": "1"
      },
      {
        "E": "Kulathoor'",
        "M": "കുളത്തൂര്‍'",
        "BT": "5",
        "BID": "12",
        "DID": "1"
      },
      {
        "E": "Karode'",
        "M": "കാരോട്'",
        "BT": "5",
        "BID": "12",
        "DID": "1"
      },
      {
        "E": "Chenkal'",
        "M": "ചെങ്കല്‍'",
        "BT": "5",
        "BID": "12",
        "DID": "1"
      },
      {
        "E": "Venganoor'",
        "M": "വെങ്ങാനൂര്‍'",
        "BT": "5",
        "BID": "11",
        "DID": "1"
      },
      {
        "E": "Kottukal'",
        "M": "കോട്ടുകാല്‍'",
        "BT": "5",
        "BID": "11",
        "DID": "1"
      },
      {
        "E": "Karumkulam'",
        "M": "കരുംകുളം '",
        "BT": "5",
        "BID": "11",
        "DID": "1"
      },
      {
        "E": "Kanjiramkulam'",
        "M": "കാഞ്ഞിരംകുളം'",
        "BT": "5",
        "BID": "11",
        "DID": "1"
      },
      {
        "E": "Athiyannoor'",
        "M": "അതിയന്നൂര്‍'",
        "BT": "5",
        "BID": "11",
        "DID": "1"
      },
      {
        "E": "Amboori'",
        "M": "അമ്പൂരി'",
        "BT": "5",
        "BID": "10",
        "DID": "1"
      },
      {
        "E": "Vellarada'",
        "M": "വെള്ളറട'",
        "BT": "5",
        "BID": "10",
        "DID": "1"
      },
      {
        "E": "Kunnathukal'",
        "M": "കുന്നത്തുകാല്‍'",
        "BT": "5",
        "BID": "10",
        "DID": "1"
      },
      {
        "E": "Kallikkadu'",
        "M": "കള്ളിക്കാട്'",
        "BT": "5",
        "BID": "10",
        "DID": "1"
      },
      {
        "E": "Vamanapuram'",
        "M": "വാമനപുരം'",
        "BT": "2",
        "BID": "4",
        "DID": "1"
      },
      {
        "E": "Ottasekharamangalam'",
        "M": "ഒറ്റശേഖരമംഗലം'",
        "BT": "5",
        "BID": "10",
        "DID": "1"
      },
      {
        "E": "Kollayil'",
        "M": "കൊല്ലയില്‍'",
        "BT": "5",
        "BID": "10",
        "DID": "1"
      },
      {
        "E": "Perumkadavila'",
        "M": "പെരുങ്കടവിള'",
        "BT": "5",
        "BID": "10",
        "DID": "1"
      },
      {
        "E": "Kalliyoor'",
        "M": "കല്ലിയൂര്‍'",
        "BT": "5",
        "BID": "9",
        "DID": "1"
      },
      {
        "E": "Vilavoorkal'",
        "M": "വിളവൂര്‍ക്കല്‍'",
        "BT": "5",
        "BID": "9",
        "DID": "1"
      },
      {
        "E": "Vilappil'",
        "M": "വിളപ്പില്‍'",
        "BT": "5",
        "BID": "9",
        "DID": "1"
      },
      {
        "E": "Malayinkeezh'",
        "M": "മലയിന്‍കീഴ്'",
        "BT": "5",
        "BID": "9",
        "DID": "1"
      },
      {
        "E": "Maranalloor'",
        "M": "മാറനല്ലൂര്‍'",
        "BT": "5",
        "BID": "9",
        "DID": "1"
      },
      {
        "E": "Thiruvananthapuram'",
        "M": "തിരുവനന്തപുരം'",
        "BT": "1",
        "BID": null,
        "DID": "1"
      },
      {
        "E": "Pallichal'",
        "M": "പള്ളിച്ചല്‍'",
        "BT": "5",
        "BID": "9",
        "DID": "1"
      },
      {
        "E": "Balaramapuram'",
        "M": "ബാലരാമപുരം'",
        "BT": "5",
        "BID": "9",
        "DID": "1"
      },
      {
        "E": "Chirayinkeezhu'",
        "M": "ചിറയിന്‍കീഴ്'",
        "BT": "2",
        "BID": "3",
        "DID": "1"
      },
      {
        "E": "Thiruvananthapuram'",
        "M": "തിരുവനന്തപുരം'",
        "BT": "4",
        "BID": null,
        "DID": "1"
      },
      {
        "E": "Pothencode'",
        "M": "പോത്തന്‍കോട്'",
        "BT": "5",
        "BID": "7",
        "DID": "1"
      },
      {
        "E": "Varkala'",
        "M": "വര്‍ക്കല'",
        "BT": "3",
        "BID": null,
        "DID": "1"
      },
      {
        "E": "Attingal'",
        "M": "ആറ്റിങ്ങല്‍'",
        "BT": "3",
        "BID": null,
        "DID": "1"
      },
      {
        "E": "Nedumangad'",
        "M": "നെടുമങ്ങാട്'",
        "BT": "3",
        "BID": null,
        "DID": "1"
      },
      {
        "E": "Neyyattinkara'",
        "M": "നെയ്യാറ്റിന്‍കര'",
        "BT": "3",
        "BID": null,
        "DID": "1"
      },
      {
        "E": "Mangalapuram'",
        "M": "മംഗലപുരം'",
        "BT": "5",
        "BID": "7",
        "DID": "1"
      },
      {
        "E": "Kadinamkulam'",
        "M": "കഠിനംകുളം'",
        "BT": "5",
        "BID": "7",
        "DID": "1"
      },
      {
        "E": "Andoorkonam'",
        "M": "അണ്ടൂര്‍ക്കോണം'",
        "BT": "5",
        "BID": "7",
        "DID": "1"
      },
      {
        "E": "Vembayam'",
        "M": "വെമ്പായം'",
        "BT": "5",
        "BID": "6",
        "DID": "1"
      },
      {
        "E": "Karakulam'",
        "M": "കരകുളം'",
        "BT": "5",
        "BID": "6",
        "DID": "1"
      },
      {
        "E": "Panavoor'",
        "M": "പനവൂര്‍'",
        "BT": "5",
        "BID": "6",
        "DID": "1"
      },
      {
        "E": "Aruvikkara'",
        "M": "അരുവിക്കര'",
        "BT": "5",
        "BID": "6",
        "DID": "1"
      },
      {
        "E": "Anad'",
        "M": "ആനാട്'",
        "BT": "5",
        "BID": "6",
        "DID": "1"
      },
      {
        "E": "Kattakada'",
        "M": "കാട്ടാക്കട'",
        "BT": "5",
        "BID": "5",
        "DID": "1"
      },
      {
        "E": "Tholicode'",
        "M": "തൊളിക്കോട്'",
        "BT": "5",
        "BID": "5",
        "DID": "1"
      },
      {
        "E": "Kuttichal'",
        "M": "കുറ്റിച്ചല്‍'",
        "BT": "5",
        "BID": "5",
        "DID": "1"
      },
      {
        "E": "Uzhamalakkal'",
        "M": "ഉഴമലയ്ക്കല്‍'",
        "BT": "5",
        "BID": "5",
        "DID": "1"
      },
      {
        "E": "Vithura'",
        "M": "വിതുര'",
        "BT": "5",
        "BID": "5",
        "DID": "1"
      },
      {
        "E": "Vellanad'",
        "M": "വെള്ളനാട്'",
        "BT": "5",
        "BID": "5",
        "DID": "1"
      },
      {
        "E": "Poovachal'",
        "M": "പൂവച്ചല്‍'",
        "BT": "5",
        "BID": "5",
        "DID": "1"
      },
      {
        "E": "Aryanad'",
        "M": "ആര്യനാട്'",
        "BT": "5",
        "BID": "5",
        "DID": "1"
      },
      {
        "E": "Manickal'",
        "M": "മാണിക്കല്‍'",
        "BT": "5",
        "BID": "4",
        "DID": "1"
      },
      {
        "E": "Peringammala'",
        "M": "പെരിങ്ങമ്മല'",
        "BT": "5",
        "BID": "4",
        "DID": "1"
      },
      {
        "E": "Nanniyode'",
        "M": "നന്ദിയോട്'",
        "BT": "5",
        "BID": "4",
        "DID": "1"
      },
      {
        "E": "Kilimanoor'",
        "M": "കിളിമാനൂര്‍'",
        "BT": "2",
        "BID": "2",
        "DID": "1"
      },
      {
        "E": "Chemmaruthy'",
        "M": "ചെമ്മരുതി'",
        "BT": "5",
        "BID": "1",
        "DID": "1"
      },
      {
        "E": "Edava'",
        "M": "ഇടവ'",
        "BT": "5",
        "BID": "1",
        "DID": "1"
      },
      {
        "E": "Elakamon'",
        "M": "ഇലകമണ്‍'",
        "BT": "5",
        "BID": "1",
        "DID": "1"
      },
      {
        "E": "Manamboor'",
        "M": "മണമ്പൂര്‍'",
        "BT": "5",
        "BID": "1",
        "DID": "1"
      },
      {
        "E": "Ottoor'",
        "M": "ഒറ്റൂര്‍'",
        "BT": "5",
        "BID": "1",
        "DID": "1"
      },
      {
        "E": "Cherunniyoor'",
        "M": "ചെറുന്നിയൂര്‍'",
        "BT": "5",
        "BID": "1",
        "DID": "1"
      },
      {
        "E": "Vettoor'",
        "M": "വെട്ടൂര്‍'",
        "BT": "5",
        "BID": "1",
        "DID": "1"
      },
      {
        "E": "Kilimanoor'",
        "M": "കിളിമാനൂര്‍'",
        "BT": "5",
        "BID": "2",
        "DID": "1"
      },
      {
        "E": "Pazhayakunnumel'",
        "M": "പഴയകുന്നുമ്മേല്‍'",
        "BT": "5",
        "BID": "2",
        "DID": "1"
      },
      {
        "E": "Karavaram'",
        "M": "കരവാരം'",
        "BT": "5",
        "BID": "2",
        "DID": "1"
      },
      {
        "E": "Madavoor'",
        "M": "മടവൂര്‍'",
        "BT": "5",
        "BID": "2",
        "DID": "1"
      },
      {
        "E": "Pallickal'",
        "M": "പള്ളിക്കല്‍'",
        "BT": "5",
        "BID": "2",
        "DID": "1"
      },
      {
        "E": "Nagaroor'",
        "M": "നഗരൂര്‍'",
        "BT": "5",
        "BID": "2",
        "DID": "1"
      },
      {
        "E": "Navaikulam'",
        "M": "നാവായിക്കുളം'",
        "BT": "5",
        "BID": "2",
        "DID": "1"
      },
      {
        "E": "Pulimath'",
        "M": "പുളിമാത്ത്'",
        "BT": "5",
        "BID": "2",
        "DID": "1"
      },
      {
        "E": "Azhoor'",
        "M": "അഴൂര്‍'",
        "BT": "5",
        "BID": "3",
        "DID": "1"
      },
      {
        "E": "Anchuthengu'",
        "M": "അഞ്ചുതെങ്ങ്'",
        "BT": "5",
        "BID": "3",
        "DID": "1"
      },
      {
        "E": "Vakkom'",
        "M": "വക്കം'",
        "BT": "5",
        "BID": "3",
        "DID": "1"
      },
      {
        "E": "Chirayinkeezhu'",
        "M": "ചിറയിന്‍കീഴ്'",
        "BT": "5",
        "BID": "3",
        "DID": "1"
      },
      {
        "E": "Kizhuvilam'",
        "M": "കിഴുവിലം'",
        "BT": "5",
        "BID": "3",
        "DID": "1"
      },
      {
        "E": "Mudakkal'",
        "M": "മുദാക്കല്‍'",
        "BT": "5",
        "BID": "3",
        "DID": "1"
      },
      {
        "E": "Kadakkavoor'",
        "M": "കടയ്ക്കാവൂര്‍'",
        "BT": "5",
        "BID": "3",
        "DID": "1"
      },
      {
        "E": "Kallara'",
        "M": "കല്ലറ'",
        "BT": "5",
        "BID": "4",
        "DID": "1"
      },
      {
        "E": "Nellanad'",
        "M": "നെല്ലനാട്'",
        "BT": "5",
        "BID": "4",
        "DID": "1"
      },
      {
        "E": "Pullampara'",
        "M": "പുല്ലമ്പാറ'",
        "BT": "5",
        "BID": "4",
        "DID": "1"
      },
      {
        "E": "Vamanapuram'",
        "M": "വാമനപുരം'",
        "BT": "5",
        "BID": "4",
        "DID": "1"
      },
      {
        "E": "Pangode'",
        "M": "പാങ്ങോട്'",
        "BT": "5",
        "BID": "4",
        "DID": "1"
      },
      {
        "E": "Pattazhi Vadakkekara'",
        "M": "പട്ടാഴി വടക്കേക്കര'",
        "BT": "5",
        "BID": "17",
        "DID": "2"
      },
      {
        "E": "Edamulackal'",
        "M": "ഇടമുളയ്ക്കല്‍'",
        "BT": "5",
        "BID": "18",
        "DID": "2"
      },
      {
        "E": "Paravur'",
        "M": "പരവൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "2"
      },
      {
        "E": "Kollam'",
        "M": "കൊല്ലം'",
        "BT": "4",
        "BID": null,
        "DID": "2"
      },
      {
        "E": "Kollam'",
        "M": "കൊല്ലം'",
        "BT": "1",
        "BID": null,
        "DID": "2"
      },
      {
        "E": "Chirakkara'",
        "M": "ചിറക്കര'",
        "BT": "5",
        "BID": "24",
        "DID": "2"
      },
      {
        "E": "Kummil'",
        "M": "കുമ്മിള്‍'",
        "BT": "5",
        "BID": "25",
        "DID": "2"
      },
      {
        "E": "Karunagappally'",
        "M": "കരുനാഗപ്പള്ളി '",
        "BT": "3",
        "BID": null,
        "DID": "2"
      },
      {
        "E": "Kottarakara'",
        "M": "കൊട്ടാരക്കര'",
        "BT": "3",
        "BID": null,
        "DID": "2"
      },
      {
        "E": "Chadayamangalam'",
        "M": "ചടയമംഗലം'",
        "BT": "2",
        "BID": "25",
        "DID": "2"
      },
      {
        "E": "Ithikkara'",
        "M": "ഇത്തിക്കര'",
        "BT": "2",
        "BID": "24",
        "DID": "2"
      },
      {
        "E": "Mukhathala'",
        "M": "മുഖത്തല'",
        "BT": "2",
        "BID": "23",
        "DID": "2"
      },
      {
        "E": "Chavara'",
        "M": "ചവറ'",
        "BT": "2",
        "BID": "21",
        "DID": "2"
      },
      {
        "E": "Chittumala'",
        "M": "ചിറ്റുമല'",
        "BT": "2",
        "BID": "20",
        "DID": "2"
      },
      {
        "E": "Kottarakara'",
        "M": "കൊട്ടാരക്കര'",
        "BT": "2",
        "BID": "19",
        "DID": "2"
      },
      {
        "E": "Anchal'",
        "M": "അഞ്ചല്‍'",
        "BT": "2",
        "BID": "18",
        "DID": "2"
      },
      {
        "E": "Pathanapuram'",
        "M": "പത്തനാപുരം'",
        "BT": "2",
        "BID": "17",
        "DID": "2"
      },
      {
        "E": "Vettikavala'",
        "M": "വെട്ടിക്കവല'",
        "BT": "2",
        "BID": "16",
        "DID": "2"
      },
      {
        "E": "Sasthamcotta'",
        "M": "ശാസ്താംകോട്ട'",
        "BT": "2",
        "BID": "15",
        "DID": "2"
      },
      {
        "E": "Oachira'",
        "M": "ഓച്ചിറ'",
        "BT": "2",
        "BID": "13",
        "DID": "2"
      },
      {
        "E": "Oachira'",
        "M": "ഓച്ചിറ'",
        "BT": "5",
        "BID": "13",
        "DID": "2"
      },
      {
        "E": "Kulasekharapuram'",
        "M": "കുലശേഖരപുരം'",
        "BT": "5",
        "BID": "13",
        "DID": "2"
      },
      {
        "E": "Clappana'",
        "M": "ക്ളാപ്പന'",
        "BT": "5",
        "BID": "13",
        "DID": "2"
      },
      {
        "E": "Thazhava'",
        "M": "തഴവ'",
        "BT": "5",
        "BID": "13",
        "DID": "2"
      },
      {
        "E": "Mynagappally'",
        "M": "മൈനാഗപ്പള്ളി'",
        "BT": "5",
        "BID": "14",
        "DID": "2"
      },
      {
        "E": "Alappad'",
        "M": "ആലപ്പാട്'",
        "BT": "5",
        "BID": "14",
        "DID": "2"
      },
      {
        "E": "Thodiyoor'",
        "M": "തൊടിയൂര്‍'",
        "BT": "5",
        "BID": "14",
        "DID": "2"
      },
      {
        "E": "Sasthamcotta'",
        "M": "ശാസ്താംകോട്ട'",
        "BT": "5",
        "BID": "15",
        "DID": "2"
      },
      {
        "E": "West Kallada'",
        "M": "വെസ്റ് കല്ലട'",
        "BT": "5",
        "BID": "15",
        "DID": "2"
      },
      {
        "E": "Sooranad South'",
        "M": "ശൂരനാട് സൌത്ത്'",
        "BT": "5",
        "BID": "15",
        "DID": "2"
      },
      {
        "E": "Poruvazhy'",
        "M": "പോരുവഴി'",
        "BT": "5",
        "BID": "15",
        "DID": "2"
      },
      {
        "E": "Kunnathoor'",
        "M": "കുന്നത്തൂര്‍'",
        "BT": "5",
        "BID": "15",
        "DID": "2"
      },
      {
        "E": "Sooranad North'",
        "M": "ശൂരനാട് നോര്‍ത്ത്'",
        "BT": "5",
        "BID": "15",
        "DID": "2"
      },
      {
        "E": "Ummannoor'",
        "M": "ഉമ്മന്നൂര്‍'",
        "BT": "5",
        "BID": "16",
        "DID": "2"
      },
      {
        "E": "Vettikavala'",
        "M": "വെട്ടിക്കവല'",
        "BT": "5",
        "BID": "16",
        "DID": "2"
      },
      {
        "E": "Melila'",
        "M": "മേലില'",
        "BT": "5",
        "BID": "16",
        "DID": "2"
      },
      {
        "E": "Mylom'",
        "M": "മൈലം'",
        "BT": "5",
        "BID": "16",
        "DID": "2"
      },
      {
        "E": "Kulakkada'",
        "M": "കുളക്കട'",
        "BT": "5",
        "BID": "16",
        "DID": "2"
      },
      {
        "E": "Pavithreswaram'",
        "M": "പവിത്രേശ്വരം'",
        "BT": "5",
        "BID": "16",
        "DID": "2"
      },
      {
        "E": "Vilakkudy'",
        "M": "വിളക്കുടി'",
        "BT": "5",
        "BID": "17",
        "DID": "2"
      },
      {
        "E": "Thalavoor'",
        "M": "തലവൂര്‍'",
        "BT": "5",
        "BID": "17",
        "DID": "2"
      },
      {
        "E": "Piravanthoor'",
        "M": "പിറവന്തൂര്‍'",
        "BT": "5",
        "BID": "17",
        "DID": "2"
      },
      {
        "E": "Punalur'",
        "M": "പുനലൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "2"
      },
      {
        "E": "Pattazhi'",
        "M": "പട്ടാഴി'",
        "BT": "5",
        "BID": "17",
        "DID": "2"
      },
      {
        "E": "Pathanapuram'",
        "M": "പത്തനാപുരം'",
        "BT": "5",
        "BID": "17",
        "DID": "2"
      },
      {
        "E": "Kulathupuzha'",
        "M": "കുളത്തൂപ്പുഴ'",
        "BT": "5",
        "BID": "18",
        "DID": "2"
      },
      {
        "E": "Yeroor'",
        "M": "ഏരൂര്‍'",
        "BT": "5",
        "BID": "18",
        "DID": "2"
      },
      {
        "E": "Alayamon'",
        "M": "അലയമണ്‍'",
        "BT": "5",
        "BID": "18",
        "DID": "2"
      },
      {
        "E": "Anchal'",
        "M": "അഞ്ചല്‍'",
        "BT": "5",
        "BID": "18",
        "DID": "2"
      },
      {
        "E": "Karavaloor'",
        "M": "കരവാളൂര്‍'",
        "BT": "5",
        "BID": "18",
        "DID": "2"
      },
      {
        "E": "Thenmala'",
        "M": "തെന്മല'",
        "BT": "5",
        "BID": "18",
        "DID": "2"
      },
      {
        "E": "Aryankavu'",
        "M": "ആര്യങ്കാവ്'",
        "BT": "5",
        "BID": "18",
        "DID": "2"
      },
      {
        "E": "Veliyam'",
        "M": "വെളിയം'",
        "BT": "5",
        "BID": "19",
        "DID": "2"
      },
      {
        "E": "Pooyappally'",
        "M": "പൂയപ്പള്ളി'",
        "BT": "5",
        "BID": "19",
        "DID": "2"
      },
      {
        "E": "Kareepra'",
        "M": "കരീപ്ര'",
        "BT": "5",
        "BID": "19",
        "DID": "2"
      },
      {
        "E": "Ezhukone'",
        "M": "എഴുകോണ്‍'",
        "BT": "5",
        "BID": "19",
        "DID": "2"
      },
      {
        "E": "Neduvathoor'",
        "M": "നെടുവത്തൂര്‍'",
        "BT": "5",
        "BID": "19",
        "DID": "2"
      },
      {
        "E": "Perinad'",
        "M": "പെരിനാട്'",
        "BT": "5",
        "BID": "20",
        "DID": "2"
      },
      {
        "E": "Kundara'",
        "M": "കുണ്ടറ'",
        "BT": "5",
        "BID": "20",
        "DID": "2"
      },
      {
        "E": "East Kallada'",
        "M": "കിഴക്കേ കല്ലട'",
        "BT": "5",
        "BID": "20",
        "DID": "2"
      },
      {
        "E": "Perayam'",
        "M": "പേരയം'",
        "BT": "5",
        "BID": "20",
        "DID": "2"
      },
      {
        "E": "Munroethuruth'",
        "M": "മണ്‍റോതുരുത്ത്'",
        "BT": "5",
        "BID": "20",
        "DID": "2"
      },
      {
        "E": "Panayam'",
        "M": "പനയം'",
        "BT": "5",
        "BID": "20",
        "DID": "2"
      },
      {
        "E": "Thekkumbhagom'",
        "M": "തെക്കുംഭാഗം'",
        "BT": "5",
        "BID": "21",
        "DID": "2"
      },
      {
        "E": "Chavara'",
        "M": "ചവറ'",
        "BT": "5",
        "BID": "21",
        "DID": "2"
      },
      {
        "E": "Thevalakkara'",
        "M": "തേവലക്കര'",
        "BT": "5",
        "BID": "21",
        "DID": "2"
      },
      {
        "E": "Panmana'",
        "M": "പന്‍മന'",
        "BT": "5",
        "BID": "21",
        "DID": "2"
      },
      {
        "E": "Neendakara'",
        "M": "നീണ്ടകര'",
        "BT": "5",
        "BID": "21",
        "DID": "2"
      },
      {
        "E": "Thrikkaruva'",
        "M": "തൃക്കരുവ'",
        "BT": "5",
        "BID": "22",
        "DID": "2"
      },
      {
        "E": "Mayyanad'",
        "M": "മയ്യനാട്'",
        "BT": "5",
        "BID": "23",
        "DID": "2"
      },
      {
        "E": "Thrikkovilvattom'",
        "M": "തൃക്കോവില്‍വട്ടം'",
        "BT": "5",
        "BID": "23",
        "DID": "2"
      },
      {
        "E": "Kottamkara'",
        "M": "കൊറ്റങ്കര'",
        "BT": "5",
        "BID": "23",
        "DID": "2"
      },
      {
        "E": "Elampalloor'",
        "M": "ഇളംപള്ളൂര്‍'",
        "BT": "5",
        "BID": "23",
        "DID": "2"
      },
      {
        "E": "Poothakulam'",
        "M": "പൂതക്കുളം'",
        "BT": "5",
        "BID": "24",
        "DID": "2"
      },
      {
        "E": "Kalluvathukkal'",
        "M": "കല്ലുവാതുക്കല്‍'",
        "BT": "5",
        "BID": "24",
        "DID": "2"
      },
      {
        "E": "Chathannoor'",
        "M": "ചാത്തന്നൂര്‍'",
        "BT": "5",
        "BID": "24",
        "DID": "2"
      },
      {
        "E": "Adichanalloor'",
        "M": "ആദിച്ചനല്ലൂര്‍'",
        "BT": "5",
        "BID": "24",
        "DID": "2"
      },
      {
        "E": "Nedumpana'",
        "M": "നെടുമ്പന'",
        "BT": "5",
        "BID": "24",
        "DID": "2"
      },
      {
        "E": "Chithara'",
        "M": "ചിതറ'",
        "BT": "5",
        "BID": "25",
        "DID": "2"
      },
      {
        "E": "Kadakkal'",
        "M": "കടയ്ക്കല്‍'",
        "BT": "5",
        "BID": "25",
        "DID": "2"
      },
      {
        "E": "Chadayamangalam'",
        "M": "ചടയമംഗലം'",
        "BT": "5",
        "BID": "25",
        "DID": "2"
      },
      {
        "E": "Ittiva'",
        "M": "ഇട്ടിവ'",
        "BT": "5",
        "BID": "25",
        "DID": "2"
      },
      {
        "E": "Velinalloor'",
        "M": "വെളിനല്ലൂര്‍'",
        "BT": "5",
        "BID": "25",
        "DID": "2"
      },
      {
        "E": "Elamadu'",
        "M": "ഇളമാട്'",
        "BT": "5",
        "BID": "25",
        "DID": "2"
      },
      {
        "E": "Nilamel'",
        "M": "നിലമേല്‍'",
        "BT": "5",
        "BID": "25",
        "DID": "2"
      },
      {
        "E": "Koipuram'",
        "M": "കോയിപ്രം'",
        "BT": "2",
        "BID": "28",
        "DID": "3"
      },
      {
        "E": "Pulikeezhu'",
        "M": "പുളിക്കീഴ്'",
        "BT": "2",
        "BID": "27",
        "DID": "3"
      },
      {
        "E": "Mallappally'",
        "M": "മല്ലപ്പള്ളി'",
        "BT": "2",
        "BID": "26",
        "DID": "3"
      },
      {
        "E": "Kodumon'",
        "M": "കൊടുമണ്‍'",
        "BT": "5",
        "BID": "33",
        "DID": "3"
      },
      {
        "E": "Pallickal'",
        "M": "പള്ളിയ്ക്കല്‍'",
        "BT": "5",
        "BID": "33",
        "DID": "3"
      },
      {
        "E": "Aranmula'",
        "M": "ആറന്മുള'",
        "BT": "5",
        "BID": "34",
        "DID": "3"
      },
      {
        "E": "Mezhuveli'",
        "M": "മെഴുവേലി'",
        "BT": "5",
        "BID": "34",
        "DID": "3"
      },
      {
        "E": "Kulanada'",
        "M": "കുളനട'",
        "BT": "5",
        "BID": "34",
        "DID": "3"
      },
      {
        "E": "Pathanamthitta'",
        "M": "പത്തനംതിട്ട'",
        "BT": "3",
        "BID": null,
        "DID": "3"
      },
      {
        "E": "Thiruvalla'",
        "M": "തിരുവല്ല'",
        "BT": "3",
        "BID": null,
        "DID": "3"
      },
      {
        "E": "Adoor'",
        "M": "അടൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "3"
      },
      {
        "E": "Thannithodu'",
        "M": "തണ്ണിത്തോട്'",
        "BT": "5",
        "BID": "31",
        "DID": "3"
      },
      {
        "E": "Pandalam Thekkekara'",
        "M": "പന്തളം തെക്കേക്കര'",
        "BT": "5",
        "BID": "32",
        "DID": "3"
      },
      {
        "E": "Thumpamon'",
        "M": "തുമ്പമണ്‍'",
        "BT": "5",
        "BID": "32",
        "DID": "3"
      },
      {
        "E": "Pathanamthitta'",
        "M": "പത്തനംതിട്ട'",
        "BT": "1",
        "BID": null,
        "DID": "3"
      },
      {
        "E": "Enadimangalam'",
        "M": "ഏനാദിമംഗലം'",
        "BT": "5",
        "BID": "33",
        "DID": "3"
      },
      {
        "E": "Erathu'",
        "M": "ഏറത്ത്'",
        "BT": "5",
        "BID": "33",
        "DID": "3"
      },
      {
        "E": "Malayalapuzha'",
        "M": "മലയാലപ്പുഴ'",
        "BT": "5",
        "BID": "31",
        "DID": "3"
      },
      {
        "E": "Ezhamkulam'",
        "M": "ഏഴംകുളം'",
        "BT": "5",
        "BID": "33",
        "DID": "3"
      },
      {
        "E": "Kadampanad'",
        "M": "കടമ്പനാട്'",
        "BT": "5",
        "BID": "33",
        "DID": "3"
      },
      {
        "E": "Kalanjoor'",
        "M": "കലഞ്ഞൂര്‍'",
        "BT": "5",
        "BID": "33",
        "DID": "3"
      },
      {
        "E": "Pandalam'",
        "M": "പന്തളം'",
        "BT": "3",
        "BID": null,
        "DID": "3"
      },
      {
        "E": "Parakkode'",
        "M": "പറക്കോട്'",
        "BT": "2",
        "BID": "33",
        "DID": "3"
      },
      {
        "E": "Pandalam'",
        "M": "പന്തളം'",
        "BT": "2",
        "BID": "32",
        "DID": "3"
      },
      {
        "E": "Konni'",
        "M": "കോന്നി'",
        "BT": "2",
        "BID": "31",
        "DID": "3"
      },
      {
        "E": "Ranni'",
        "M": "റാന്നി'",
        "BT": "2",
        "BID": "30",
        "DID": "3"
      },
      {
        "E": "Elanthoor'",
        "M": "ഇലന്തൂര്‍'",
        "BT": "2",
        "BID": "29",
        "DID": "3"
      },
      {
        "E": "Anicadu'",
        "M": "ആനിക്കാട്'",
        "BT": "5",
        "BID": "26",
        "DID": "3"
      },
      {
        "E": "Kaviyoor'",
        "M": "കവിയൂര്‍'",
        "BT": "5",
        "BID": "26",
        "DID": "3"
      },
      {
        "E": "Kottanad'",
        "M": "കൊറ്റനാട്'",
        "BT": "5",
        "BID": "26",
        "DID": "3"
      },
      {
        "E": "Kottangal'",
        "M": "കോട്ടാങ്ങല്‍'",
        "BT": "5",
        "BID": "26",
        "DID": "3"
      },
      {
        "E": "Kallooppara'",
        "M": "കല്ലൂപ്പാറ'",
        "BT": "5",
        "BID": "26",
        "DID": "3"
      },
      {
        "E": "Kunnamthanam'",
        "M": "കുന്നന്താനം'",
        "BT": "5",
        "BID": "26",
        "DID": "3"
      },
      {
        "E": "Mallappally'",
        "M": "മല്ലപ്പള്ളി'",
        "BT": "5",
        "BID": "26",
        "DID": "3"
      },
      {
        "E": "Kadapra'",
        "M": "കടപ്ര'",
        "BT": "5",
        "BID": "27",
        "DID": "3"
      },
      {
        "E": "Kuttoor'",
        "M": "കുറ്റൂര്‍'",
        "BT": "5",
        "BID": "27",
        "DID": "3"
      },
      {
        "E": "Niranam'",
        "M": "നിരണം'",
        "BT": "5",
        "BID": "27",
        "DID": "3"
      },
      {
        "E": "Nedumpuram'",
        "M": "നെടുമ്പ്രം'",
        "BT": "5",
        "BID": "27",
        "DID": "3"
      },
      {
        "E": "Peringara'",
        "M": "പെരിങ്ങര'",
        "BT": "5",
        "BID": "27",
        "DID": "3"
      },
      {
        "E": "Ayroor'",
        "M": "അയിരൂര്‍'",
        "BT": "5",
        "BID": "28",
        "DID": "3"
      },
      {
        "E": "Eraviperoor'",
        "M": "ഇരവിപേരൂര്‍'",
        "BT": "5",
        "BID": "28",
        "DID": "3"
      },
      {
        "E": "Koipuram'",
        "M": "കോയിപ്രം'",
        "BT": "5",
        "BID": "28",
        "DID": "3"
      },
      {
        "E": "Thottappuzhassery'",
        "M": "തോട്ടപ്പുഴശ്ശേരി'",
        "BT": "5",
        "BID": "28",
        "DID": "3"
      },
      {
        "E": "Ezhumattoor'",
        "M": "എഴുമറ്റൂര്‍'",
        "BT": "5",
        "BID": "28",
        "DID": "3"
      },
      {
        "E": "Puramattom'",
        "M": "പുറമറ്റം'",
        "BT": "5",
        "BID": "28",
        "DID": "3"
      },
      {
        "E": "Omalloor'",
        "M": "ഓമല്ലൂര്‍'",
        "BT": "5",
        "BID": "29",
        "DID": "3"
      },
      {
        "E": "Chenneerkara'",
        "M": "ചെന്നീര്‍ക്കര'",
        "BT": "5",
        "BID": "29",
        "DID": "3"
      },
      {
        "E": "Elanthoor'",
        "M": "ഇലന്തൂര്‍'",
        "BT": "5",
        "BID": "29",
        "DID": "3"
      },
      {
        "E": "Cherukole'",
        "M": "ചെറുകോല്‍'",
        "BT": "5",
        "BID": "29",
        "DID": "3"
      },
      {
        "E": "Kozhencherry'",
        "M": "കോഴഞ്ചരി'",
        "BT": "5",
        "BID": "29",
        "DID": "3"
      },
      {
        "E": "Mallappuzhassery'",
        "M": "മല്ലപ്പുഴശ്ശേരി'",
        "BT": "5",
        "BID": "29",
        "DID": "3"
      },
      {
        "E": "Naranganam'",
        "M": "നാരങ്ങാനം'",
        "BT": "5",
        "BID": "29",
        "DID": "3"
      },
      {
        "E": "Ranni Pazhavangadi'",
        "M": "റാന്നി പഴവങ്ങാടി'",
        "BT": "5",
        "BID": "30",
        "DID": "3"
      },
      {
        "E": "Ranni'",
        "M": "റാന്നി'",
        "BT": "5",
        "BID": "30",
        "DID": "3"
      },
      {
        "E": "Ranni Angadi'",
        "M": "റാന്നി അങ്ങാടി'",
        "BT": "5",
        "BID": "30",
        "DID": "3"
      },
      {
        "E": "Ranni Perunadu'",
        "M": "റാന്നി പെരുനാട്'",
        "BT": "5",
        "BID": "30",
        "DID": "3"
      },
      {
        "E": "Vadaserikara'",
        "M": "വടശ്ശേരിക്കര'",
        "BT": "5",
        "BID": "30",
        "DID": "3"
      },
      {
        "E": "Chittar'",
        "M": "ചിറ്റാര്‍'",
        "BT": "5",
        "BID": "30",
        "DID": "3"
      },
      {
        "E": "Seethathodu'",
        "M": "സീതത്തോട്'",
        "BT": "5",
        "BID": "30",
        "DID": "3"
      },
      {
        "E": "Naranammoozhy'",
        "M": "നാറാണംമൂഴി'",
        "BT": "5",
        "BID": "30",
        "DID": "3"
      },
      {
        "E": "Vechoochira'",
        "M": "വെച്ചൂച്ചിറ'",
        "BT": "5",
        "BID": "30",
        "DID": "3"
      },
      {
        "E": "Konni'",
        "M": "കോന്നി'",
        "BT": "5",
        "BID": "31",
        "DID": "3"
      },
      {
        "E": "Aruvappulam'",
        "M": "അരുവാപ്പുലം'",
        "BT": "5",
        "BID": "31",
        "DID": "3"
      },
      {
        "E": "Pramadom'",
        "M": "പ്രമാടം'",
        "BT": "5",
        "BID": "31",
        "DID": "3"
      },
      {
        "E": "Mylapra'",
        "M": "മൈലപ്രാ'",
        "BT": "5",
        "BID": "31",
        "DID": "3"
      },
      {
        "E": "Vallicode'",
        "M": "വള്ളിക്കോട്'",
        "BT": "5",
        "BID": "31",
        "DID": "3"
      },
      {
        "E": "Cheruthana'",
        "M": "ചെറുതന'",
        "BT": "5",
        "BID": "43",
        "DID": "4"
      },
      {
        "E": "Pallippad'",
        "M": "പള്ളിപ്പാട്'",
        "BT": "5",
        "BID": "43",
        "DID": "4"
      },
      {
        "E": "Karuvatta'",
        "M": "കരുവാറ്റ'",
        "BT": "5",
        "BID": "43",
        "DID": "4"
      },
      {
        "E": "Kumarapuram'",
        "M": "കുമാരപുരം'",
        "BT": "5",
        "BID": "43",
        "DID": "4"
      },
      {
        "E": "Thrikkunnappuzha'",
        "M": "തൃക്കുന്നപ്പുഴ'",
        "BT": "5",
        "BID": "43",
        "DID": "4"
      },
      {
        "E": "Karthikappally'",
        "M": "കാര്‍ത്തികപ്പള്ളി'",
        "BT": "5",
        "BID": "43",
        "DID": "4"
      },
      {
        "E": "Chingoli'",
        "M": "ചിങ്ങോലി'",
        "BT": "5",
        "BID": "43",
        "DID": "4"
      },
      {
        "E": "Thiruvanvandoor'",
        "M": "തിരുവന്‍വണ്ടൂര്‍'",
        "BT": "5",
        "BID": "42",
        "DID": "4"
      },
      {
        "E": "Pandanad'",
        "M": "പാണ്ടനാട്'",
        "BT": "5",
        "BID": "42",
        "DID": "4"
      },
      {
        "E": "Mannar'",
        "M": "മാന്നാര്‍'",
        "BT": "5",
        "BID": "42",
        "DID": "4"
      },
      {
        "E": "Budhanoor'",
        "M": "ബുധനൂര്‍'",
        "BT": "5",
        "BID": "42",
        "DID": "4"
      },
      {
        "E": "Puliyoor'",
        "M": "പുലിയൂര്‍'",
        "BT": "5",
        "BID": "42",
        "DID": "4"
      },
      {
        "E": "Ala'",
        "M": "ആല'",
        "BT": "5",
        "BID": "42",
        "DID": "4"
      },
      {
        "E": "Cheriyanad'",
        "M": "ചെറിയനാട്'",
        "BT": "5",
        "BID": "42",
        "DID": "4"
      },
      {
        "E": "Venmoney'",
        "M": "വെണ്മണി'",
        "BT": "5",
        "BID": "42",
        "DID": "4"
      },
      {
        "E": "Mulakuzha'",
        "M": "മുളക്കുഴ'",
        "BT": "5",
        "BID": "42",
        "DID": "4"
      },
      {
        "E": "Ramankary'",
        "M": "രാമങ്കരി'",
        "BT": "5",
        "BID": "41",
        "DID": "4"
      },
      {
        "E": "Pulincunnoo'",
        "M": "പുളിങ്കുന്ന്'",
        "BT": "5",
        "BID": "41",
        "DID": "4"
      },
      {
        "E": "Kavalam'",
        "M": "കാവാലം'",
        "BT": "5",
        "BID": "41",
        "DID": "4"
      },
      {
        "E": "Neelamperoor'",
        "M": "നീലംപേരൂര്‍'",
        "BT": "5",
        "BID": "41",
        "DID": "4"
      },
      {
        "E": "Veliyanad'",
        "M": "വെളിയനാട്'",
        "BT": "5",
        "BID": "41",
        "DID": "4"
      },
      {
        "E": "Muttar'",
        "M": "മുട്ടാര്‍'",
        "BT": "5",
        "BID": "41",
        "DID": "4"
      },
      {
        "E": "Kainakary'",
        "M": "കൈനകരി'",
        "BT": "5",
        "BID": "40",
        "DID": "4"
      },
      {
        "E": "Champakulam'",
        "M": "ചമ്പക്കുളം'",
        "BT": "5",
        "BID": "40",
        "DID": "4"
      },
      {
        "E": "Nedumudi'",
        "M": "നെടുമുടി'",
        "BT": "5",
        "BID": "40",
        "DID": "4"
      },
      {
        "E": "Thakazhy'",
        "M": "തകഴി'",
        "BT": "5",
        "BID": "40",
        "DID": "4"
      },
      {
        "E": "Edathua'",
        "M": "എടത്വാ'",
        "BT": "5",
        "BID": "40",
        "DID": "4"
      },
      {
        "E": "Thalavady'",
        "M": "തലവടി'",
        "BT": "5",
        "BID": "40",
        "DID": "4"
      },
      {
        "E": "Punnapra North'",
        "M": "പുന്നപ്ര വടക്ക്'",
        "BT": "5",
        "BID": "39",
        "DID": "4"
      },
      {
        "E": "Ambalapuzha North'",
        "M": "അമ്പലപ്പുഴ വടക്ക്'",
        "BT": "5",
        "BID": "39",
        "DID": "4"
      },
      {
        "E": "Punnapra South'",
        "M": "പുന്നപ്ര തെക്ക്'",
        "BT": "5",
        "BID": "39",
        "DID": "4"
      },
      {
        "E": "Ambalapuzha South'",
        "M": "അമ്പലപ്പുഴ തെക്ക്'",
        "BT": "5",
        "BID": "39",
        "DID": "4"
      },
      {
        "E": "Purakkad'",
        "M": "പുറക്കാട്'",
        "BT": "5",
        "BID": "39",
        "DID": "4"
      },
      {
        "E": "Mararikulam South'",
        "M": "മാരാരിക്കുളം തെക്ക്'",
        "BT": "5",
        "BID": "38",
        "DID": "4"
      },
      {
        "E": "Mannancherry'",
        "M": "മണ്ണഞ്ചരി'",
        "BT": "5",
        "BID": "38",
        "DID": "4"
      },
      {
        "E": "Aryad'",
        "M": "ആര്യാട്'",
        "BT": "5",
        "BID": "38",
        "DID": "4"
      },
      {
        "E": "Cherthala South'",
        "M": "ചേര്‍ത്തല തെക്ക്'",
        "BT": "5",
        "BID": "37",
        "DID": "4"
      },
      {
        "E": "Haripad'",
        "M": "ഹരിപ്പാട്'",
        "BT": "3",
        "BID": null,
        "DID": "4"
      },
      {
        "E": "Pattanakkad'",
        "M": "പട്ടണക്കാട്'",
        "BT": "5",
        "BID": "36",
        "DID": "4"
      },
      {
        "E": "Thycattussery'",
        "M": "തൈക്കാട്ടുശ്ശേരി'",
        "BT": "2",
        "BID": "35",
        "DID": "4"
      },
      {
        "E": "Muhamma'",
        "M": "മുഹമ്മ'",
        "BT": "5",
        "BID": "37",
        "DID": "4"
      },
      {
        "E": "Thanneermukkom'",
        "M": "തണ്ണീര്‍മുക്കം'",
        "BT": "5",
        "BID": "37",
        "DID": "4"
      },
      {
        "E": "Kanjikuzhy'",
        "M": "കഞ്ഞിക്കുഴി'",
        "BT": "5",
        "BID": "37",
        "DID": "4"
      },
      {
        "E": "Mararikulam North'",
        "M": "മാരാരിക്കുളം വടക്ക്'",
        "BT": "5",
        "BID": "37",
        "DID": "4"
      },
      {
        "E": "Pattanakkad'",
        "M": "പട്ടണക്കാട്'",
        "BT": "2",
        "BID": "36",
        "DID": "4"
      },
      {
        "E": "Aroor'",
        "M": "അരൂര്‍'",
        "BT": "5",
        "BID": "36",
        "DID": "4"
      },
      {
        "E": "Ezhupunna'",
        "M": "എഴുപുന്ന'",
        "BT": "5",
        "BID": "36",
        "DID": "4"
      },
      {
        "E": "Kanjikuzhy'",
        "M": "കഞ്ഞിക്കുഴി'",
        "BT": "2",
        "BID": "37",
        "DID": "4"
      },
      {
        "E": "Aryad'",
        "M": "ആര്യാട്'",
        "BT": "2",
        "BID": "38",
        "DID": "4"
      },
      {
        "E": "Ambalapuzha'",
        "M": "അമ്പലപ്പുഴ'",
        "BT": "2",
        "BID": "39",
        "DID": "4"
      },
      {
        "E": "Champakulam'",
        "M": "ചമ്പക്കുളം'",
        "BT": "2",
        "BID": "40",
        "DID": "4"
      },
      {
        "E": "Veliyanad'",
        "M": "വെളിയനാട്'",
        "BT": "2",
        "BID": "41",
        "DID": "4"
      },
      {
        "E": "Alappuzha'",
        "M": "ആലപ്പുഴ'",
        "BT": "1",
        "BID": null,
        "DID": "4"
      },
      {
        "E": "Kodamthuruth'",
        "M": "കോടംതുരുത്ത്'",
        "BT": "5",
        "BID": "36",
        "DID": "4"
      },
      {
        "E": "Kuthiathod'",
        "M": "കുത്തിയതോട്'",
        "BT": "5",
        "BID": "36",
        "DID": "4"
      },
      {
        "E": "Thuravoor'",
        "M": "തുറവൂര്‍'",
        "BT": "5",
        "BID": "36",
        "DID": "4"
      },
      {
        "E": "Chengannur'",
        "M": "ചെങ്ങന്നൂര്‍'",
        "BT": "2",
        "BID": "42",
        "DID": "4"
      },
      {
        "E": "Haripad'",
        "M": "ഹരിപ്പാട്'",
        "BT": "2",
        "BID": "43",
        "DID": "4"
      },
      {
        "E": "Mavelikara'",
        "M": "മാവേലിക്കര'",
        "BT": "2",
        "BID": "44",
        "DID": "4"
      },
      {
        "E": "Vayalar'",
        "M": "വയലാര്‍'",
        "BT": "5",
        "BID": "36",
        "DID": "4"
      },
      {
        "E": "Kadakkarappally'",
        "M": "കടക്കരപ്പള്ളി'",
        "BT": "5",
        "BID": "36",
        "DID": "4"
      },
      {
        "E": "Bharanickavu'",
        "M": "ഭരണിക്കാവ്'",
        "BT": "2",
        "BID": "45",
        "DID": "4"
      },
      {
        "E": "Muthukulam'",
        "M": "മുതുകുളം'",
        "BT": "2",
        "BID": "46",
        "DID": "4"
      },
      {
        "E": "Devikulangara'",
        "M": "ദേവികുളങ്ങര'",
        "BT": "5",
        "BID": "46",
        "DID": "4"
      },
      {
        "E": "Krishnapuram'",
        "M": "കൃഷ്ണപുരം'",
        "BT": "5",
        "BID": "46",
        "DID": "4"
      },
      {
        "E": "Arattupuzha'",
        "M": "ആറാട്ടുപുഴ'",
        "BT": "5",
        "BID": "46",
        "DID": "4"
      },
      {
        "E": "Muthukulam'",
        "M": "മുതുകുളം'",
        "BT": "5",
        "BID": "46",
        "DID": "4"
      },
      {
        "E": "Cheppad'",
        "M": "ചേപ്പാട്'",
        "BT": "5",
        "BID": "46",
        "DID": "4"
      },
      {
        "E": "Kandalloor'",
        "M": "കണ്ടല്ലൂര്‍'",
        "BT": "5",
        "BID": "46",
        "DID": "4"
      },
      {
        "E": "Pathiyoor'",
        "M": "പത്തിയൂര്‍'",
        "BT": "5",
        "BID": "46",
        "DID": "4"
      },
      {
        "E": "Chengannur'",
        "M": "ചെങ്ങന്നൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "4"
      },
      {
        "E": "Mavelikara'",
        "M": "മാവേലിക്കര'",
        "BT": "3",
        "BID": null,
        "DID": "4"
      },
      {
        "E": "Cherthala'",
        "M": "ചേര്‍ത്തല'",
        "BT": "3",
        "BID": null,
        "DID": "4"
      },
      {
        "E": "Kayamkulam'",
        "M": "കായംകുളം'",
        "BT": "3",
        "BID": null,
        "DID": "4"
      },
      {
        "E": "Alappuzha'",
        "M": "ആലപ്പുഴ'",
        "BT": "3",
        "BID": null,
        "DID": "4"
      },
      {
        "E": "Thycattussery'",
        "M": "തൈക്കാട്ടുശ്ശേരി'",
        "BT": "5",
        "BID": "35",
        "DID": "4"
      },
      {
        "E": "Perumpalam'",
        "M": "പെരുമ്പളം'",
        "BT": "5",
        "BID": "35",
        "DID": "4"
      },
      {
        "E": "Panavally'",
        "M": "പാണാവള്ളി'",
        "BT": "5",
        "BID": "35",
        "DID": "4"
      },
      {
        "E": "Chennam Pallippuram'",
        "M": "ചേന്നം പള്ളിപ്പുറം'",
        "BT": "5",
        "BID": "35",
        "DID": "4"
      },
      {
        "E": "Arookutty'",
        "M": "അരൂക്കുറ്റി'",
        "BT": "5",
        "BID": "35",
        "DID": "4"
      },
      {
        "E": "Palamel'",
        "M": "പാലമേല്‍'",
        "BT": "5",
        "BID": "45",
        "DID": "4"
      },
      {
        "E": "Chunakara'",
        "M": "ചുനക്കര'",
        "BT": "5",
        "BID": "45",
        "DID": "4"
      },
      {
        "E": "Mavelikara Thamarakulam'",
        "M": "മാവേലിക്കര താമരക്കുളം'",
        "BT": "5",
        "BID": "45",
        "DID": "4"
      },
      {
        "E": "Bharanickavu'",
        "M": "ഭരണിക്കാവ്'",
        "BT": "5",
        "BID": "45",
        "DID": "4"
      },
      {
        "E": "Vallikunnam'",
        "M": "വള്ളികുന്നം'",
        "BT": "5",
        "BID": "45",
        "DID": "4"
      },
      {
        "E": "Nooranad'",
        "M": "നൂറനാട്'",
        "BT": "5",
        "BID": "45",
        "DID": "4"
      },
      {
        "E": "Thazhakara'",
        "M": "തഴക്കര'",
        "BT": "5",
        "BID": "44",
        "DID": "4"
      },
      {
        "E": "Chennithala-Thripperumthura'",
        "M": "ചെന്നിത്തല- തൃപ്പെരുന്തുറ'",
        "BT": "5",
        "BID": "44",
        "DID": "4"
      },
      {
        "E": "Chettikulangara'",
        "M": "ചെട്ടികുളങ്ങര'",
        "BT": "5",
        "BID": "44",
        "DID": "4"
      },
      {
        "E": "Mavelikara Thekkekara'",
        "M": "മാവേലിക്കര തെക്കേക്കര'",
        "BT": "5",
        "BID": "44",
        "DID": "4"
      },
      {
        "E": "Veeyapuram'",
        "M": "വീയപുരം'",
        "BT": "5",
        "BID": "43",
        "DID": "4"
      },
      {
        "E": "Ramapuram'",
        "M": "രാമപുരം'",
        "BT": "5",
        "BID": "50",
        "DID": "5"
      },
      {
        "E": "Parathodu'",
        "M": "പാറത്തോട്'",
        "BT": "5",
        "BID": "57",
        "DID": "5"
      },
      {
        "E": "Changanassery'",
        "M": "ചങ്ങനാശ്ശേരി'",
        "BT": "3",
        "BID": null,
        "DID": "5"
      },
      {
        "E": "Vaikom'",
        "M": "വൈക്കം'",
        "BT": "3",
        "BID": null,
        "DID": "5"
      },
      {
        "E": "Pala'",
        "M": "പാലാ'",
        "BT": "3",
        "BID": null,
        "DID": "5"
      },
      {
        "E": "Kottayam'",
        "M": "കോട്ടയം'",
        "BT": "1",
        "BID": null,
        "DID": "5"
      },
      {
        "E": "Koruthodu'",
        "M": "കോരുത്തോട്'",
        "BT": "5",
        "BID": "57",
        "DID": "5"
      },
      {
        "E": "Ettumanoor'",
        "M": "ഏറ്റുമാനൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "5"
      },
      {
        "E": "Erattupetta'",
        "M": "ഈരാറ്റുപേട്ട'",
        "BT": "3",
        "BID": null,
        "DID": "5"
      },
      {
        "E": "Kanjirappally'",
        "M": "കാഞ്ഞിരപ്പള്ളി'",
        "BT": "2",
        "BID": "57",
        "DID": "5"
      },
      {
        "E": "Vazhoor'",
        "M": "വാഴൂര്‍'",
        "BT": "2",
        "BID": "56",
        "DID": "5"
      },
      {
        "E": "Madappally'",
        "M": "മാടപ്പള്ളി'",
        "BT": "2",
        "BID": "55",
        "DID": "5"
      },
      {
        "E": "Pallom'",
        "M": "പള്ളം'",
        "BT": "2",
        "BID": "54",
        "DID": "5"
      },
      {
        "E": "Pampady'",
        "M": "പാമ്പാടി'",
        "BT": "2",
        "BID": "53",
        "DID": "5"
      },
      {
        "E": "Erattupetta'",
        "M": "ഈരാറ്റുപേട്ട'",
        "BT": "2",
        "BID": "52",
        "DID": "5"
      },
      {
        "E": "Lalam'",
        "M": "ളാലം'",
        "BT": "2",
        "BID": "51",
        "DID": "5"
      },
      {
        "E": "Uzhavoor'",
        "M": "ഉഴവൂര്‍'",
        "BT": "2",
        "BID": "50",
        "DID": "5"
      },
      {
        "E": "Ettumanoor'",
        "M": "ഏറ്റുമാനൂര്‍'",
        "BT": "2",
        "BID": "49",
        "DID": "5"
      },
      {
        "E": "Kaduthuruthy'",
        "M": "കടുത്തുരുത്തി'",
        "BT": "2",
        "BID": "48",
        "DID": "5"
      },
      {
        "E": "Vaikom'",
        "M": "വൈക്കം'",
        "BT": "2",
        "BID": "47",
        "DID": "5"
      },
      {
        "E": "Thalayazham'",
        "M": "തലയാഴം'",
        "BT": "5",
        "BID": "47",
        "DID": "5"
      },
      {
        "E": "Chempu'",
        "M": "ചെമ്പ്'",
        "BT": "5",
        "BID": "47",
        "DID": "5"
      },
      {
        "E": "Maravanthuruthu'",
        "M": "മറവന്‍തുരുത്ത്'",
        "BT": "5",
        "BID": "47",
        "DID": "5"
      },
      {
        "E": "TV Puram'",
        "M": "ടി.വി.പുരം'",
        "BT": "5",
        "BID": "47",
        "DID": "5"
      },
      {
        "E": "Vechoor'",
        "M": "വെച്ചൂര്‍'",
        "BT": "5",
        "BID": "47",
        "DID": "5"
      },
      {
        "E": "Udayanapuram'",
        "M": "ഉദയനാപുരം'",
        "BT": "5",
        "BID": "47",
        "DID": "5"
      },
      {
        "E": "Kaduthuruthy'",
        "M": "കടുത്തുരുത്തി'",
        "BT": "5",
        "BID": "48",
        "DID": "5"
      },
      {
        "E": "Kallara'",
        "M": "കല്ലറ'",
        "BT": "5",
        "BID": "48",
        "DID": "5"
      },
      {
        "E": "Manjoor'",
        "M": "മാഞ്ഞൂര്‍'",
        "BT": "5",
        "BID": "48",
        "DID": "5"
      },
      {
        "E": "Mulakulam'",
        "M": "മുളക്കുളം'",
        "BT": "5",
        "BID": "48",
        "DID": "5"
      },
      {
        "E": "Neezhoor'",
        "M": "ഞീഴൂര്‍'",
        "BT": "5",
        "BID": "48",
        "DID": "5"
      },
      {
        "E": "Thalayolaparambu'",
        "M": "തലയോലപ്പറമ്പ്'",
        "BT": "5",
        "BID": "48",
        "DID": "5"
      },
      {
        "E": "Velloor'",
        "M": "വെള്ളൂര്‍'",
        "BT": "5",
        "BID": "48",
        "DID": "5"
      },
      {
        "E": "Aymanam'",
        "M": "അയ്മനം'",
        "BT": "5",
        "BID": "49",
        "DID": "5"
      },
      {
        "E": "Athirampuzha'",
        "M": "അതിരമ്പുഴ'",
        "BT": "5",
        "BID": "49",
        "DID": "5"
      },
      {
        "E": "Arpookara'",
        "M": "ആര്‍പ്പൂക്കര'",
        "BT": "5",
        "BID": "49",
        "DID": "5"
      },
      {
        "E": "Neendoor'",
        "M": "നീണ്ടൂര്‍'",
        "BT": "5",
        "BID": "49",
        "DID": "5"
      },
      {
        "E": "Kadaplamattom'",
        "M": "കടപ്ളാമറ്റം'",
        "BT": "5",
        "BID": "50",
        "DID": "5"
      },
      {
        "E": "Marangattupilly'",
        "M": "മരങ്ങാട്ടുപിള്ളി'",
        "BT": "5",
        "BID": "50",
        "DID": "5"
      },
      {
        "E": "Kanakkary'",
        "M": "കാണക്കാരി'",
        "BT": "5",
        "BID": "50",
        "DID": "5"
      },
      {
        "E": "Veliyannoor'",
        "M": "വെളിയന്നൂര്‍'",
        "BT": "5",
        "BID": "50",
        "DID": "5"
      },
      {
        "E": "Kidangoor'",
        "M": "കിടങ്ങൂര്‍'",
        "BT": "5",
        "BID": "50",
        "DID": "5"
      },
      {
        "E": "Kuravilangad'",
        "M": "കുറവിലങ്ങാട്'",
        "BT": "5",
        "BID": "50",
        "DID": "5"
      },
      {
        "E": "Uzhavoor'",
        "M": "ഉഴവൂര്‍'",
        "BT": "5",
        "BID": "50",
        "DID": "5"
      },
      {
        "E": "Kottayam'",
        "M": "കോട്ടയം'",
        "BT": "3",
        "BID": null,
        "DID": "5"
      },
      {
        "E": "Bharananganam'",
        "M": "ഭരണങ്ങാനം'",
        "BT": "5",
        "BID": "51",
        "DID": "5"
      },
      {
        "E": "Karoor'",
        "M": "കരൂര്‍'",
        "BT": "5",
        "BID": "51",
        "DID": "5"
      },
      {
        "E": "Kozhuvanal'",
        "M": "കൊഴുവനാല്‍'",
        "BT": "5",
        "BID": "51",
        "DID": "5"
      },
      {
        "E": "Kadanad'",
        "M": "കടനാട്'",
        "BT": "5",
        "BID": "51",
        "DID": "5"
      },
      {
        "E": "Meenachil'",
        "M": "മീനച്ചില്‍'",
        "BT": "5",
        "BID": "51",
        "DID": "5"
      },
      {
        "E": "Mutholy'",
        "M": "മുത്തോലി'",
        "BT": "5",
        "BID": "51",
        "DID": "5"
      },
      {
        "E": "Melukavu'",
        "M": "മേലുകാവ്'",
        "BT": "5",
        "BID": "52",
        "DID": "5"
      },
      {
        "E": "Moonnilavu'",
        "M": "മൂന്നിലവ്'",
        "BT": "5",
        "BID": "52",
        "DID": "5"
      },
      {
        "E": "Poonjar'",
        "M": "പൂഞ്ഞാര്‍'",
        "BT": "5",
        "BID": "52",
        "DID": "5"
      },
      {
        "E": "Poonjar Thekkekara'",
        "M": "പൂഞ്ഞാര്‍ തെക്കേക്കര'",
        "BT": "5",
        "BID": "52",
        "DID": "5"
      },
      {
        "E": "Thalappalam'",
        "M": "തലപ്പലം'",
        "BT": "5",
        "BID": "52",
        "DID": "5"
      },
      {
        "E": "Teekoy'",
        "M": "തീക്കോയി'",
        "BT": "5",
        "BID": "52",
        "DID": "5"
      },
      {
        "E": "Thalanad'",
        "M": "തലനാട്'",
        "BT": "5",
        "BID": "52",
        "DID": "5"
      },
      {
        "E": "Thidanad'",
        "M": "തിടനാട്'",
        "BT": "5",
        "BID": "52",
        "DID": "5"
      },
      {
        "E": "Akalakunnam'",
        "M": "അകലക്കുന്നം'",
        "BT": "5",
        "BID": "53",
        "DID": "5"
      },
      {
        "E": "Elikulam'",
        "M": "എലിക്കുളം'",
        "BT": "5",
        "BID": "53",
        "DID": "5"
      },
      {
        "E": "Kooroppada'",
        "M": "കൂരോപ്പട'",
        "BT": "5",
        "BID": "53",
        "DID": "5"
      },
      {
        "E": "Pampady'",
        "M": "പാമ്പാടി'",
        "BT": "5",
        "BID": "53",
        "DID": "5"
      },
      {
        "E": "Pallickathodu'",
        "M": "പള്ളിക്കത്തോട്'",
        "BT": "5",
        "BID": "53",
        "DID": "5"
      },
      {
        "E": "Meenadom'",
        "M": "മീനടം'",
        "BT": "5",
        "BID": "53",
        "DID": "5"
      },
      {
        "E": "Ayarkunnam'",
        "M": "അയര്‍കുന്നം'",
        "BT": "5",
        "BID": "54",
        "DID": "5"
      },
      {
        "E": "Kumarakom'",
        "M": "കുമരകം'",
        "BT": "5",
        "BID": "54",
        "DID": "5"
      },
      {
        "E": "Puthuppally'",
        "M": "പുതുപ്പള്ളി'",
        "BT": "5",
        "BID": "54",
        "DID": "5"
      },
      {
        "E": "Panachikkad'",
        "M": "പനച്ചിക്കാട്'",
        "BT": "5",
        "BID": "54",
        "DID": "5"
      },
      {
        "E": "Thiruvarppu'",
        "M": "തിരുവാര്‍പ്പ്'",
        "BT": "5",
        "BID": "54",
        "DID": "5"
      },
      {
        "E": "Vijayapuram'",
        "M": "വിജയപുരം'",
        "BT": "5",
        "BID": "54",
        "DID": "5"
      },
      {
        "E": "Manarcadu'",
        "M": "മണര്‍കാട്'",
        "BT": "5",
        "BID": "54",
        "DID": "5"
      },
      {
        "E": "Karukachal'",
        "M": "കറുകച്ചാല്‍'",
        "BT": "5",
        "BID": "55",
        "DID": "5"
      },
      {
        "E": "Kurichy'",
        "M": "കുറിച്ചി'",
        "BT": "5",
        "BID": "55",
        "DID": "5"
      },
      {
        "E": "Madappally'",
        "M": "മാടപ്പള്ളി'",
        "BT": "5",
        "BID": "55",
        "DID": "5"
      },
      {
        "E": "Paippad'",
        "M": "പായിപ്പാട്'",
        "BT": "5",
        "BID": "55",
        "DID": "5"
      },
      {
        "E": "Thrickodithanam'",
        "M": "തൃക്കൊടിത്താനം'",
        "BT": "5",
        "BID": "55",
        "DID": "5"
      },
      {
        "E": "Vakathanam'",
        "M": "വാകത്താനം'",
        "BT": "5",
        "BID": "55",
        "DID": "5"
      },
      {
        "E": "Vazhappally'",
        "M": "വാഴപ്പള്ളി'",
        "BT": "5",
        "BID": "55",
        "DID": "5"
      },
      {
        "E": "Chirakkadavu'",
        "M": "ചിറക്കടവ്'",
        "BT": "5",
        "BID": "56",
        "DID": "5"
      },
      {
        "E": "Kangazha'",
        "M": "കങ്ങഴ'",
        "BT": "5",
        "BID": "56",
        "DID": "5"
      },
      {
        "E": "Nedumkunnam'",
        "M": "നെടുംകുന്നം'",
        "BT": "5",
        "BID": "56",
        "DID": "5"
      },
      {
        "E": "Vellavoor'",
        "M": "വെള്ളാവൂര്‍'",
        "BT": "5",
        "BID": "56",
        "DID": "5"
      },
      {
        "E": "Vazhoor'",
        "M": "വാഴൂര്‍'",
        "BT": "5",
        "BID": "56",
        "DID": "5"
      },
      {
        "E": "Erumely'",
        "M": "എരുമേലി'",
        "BT": "5",
        "BID": "57",
        "DID": "5"
      },
      {
        "E": "Kanjirappally'",
        "M": "കാഞ്ഞിരപ്പള്ളി'",
        "BT": "5",
        "BID": "57",
        "DID": "5"
      },
      {
        "E": "Koottickal'",
        "M": "കൂട്ടിക്കല്‍'",
        "BT": "5",
        "BID": "57",
        "DID": "5"
      },
      {
        "E": "Manimala'",
        "M": "മണിമല'",
        "BT": "5",
        "BID": "57",
        "DID": "5"
      },
      {
        "E": "Mundakayam'",
        "M": "മുണ്ടക്കയം'",
        "BT": "5",
        "BID": "57",
        "DID": "5"
      },
      {
        "E": "Elemdesam'",
        "M": "ഇളംദേശം'",
        "BT": "2",
        "BID": "61",
        "DID": "6"
      },
      {
        "E": "Nedumkandam'",
        "M": "നെടുങ്കണ്ടം'",
        "BT": "2",
        "BID": "60",
        "DID": "6"
      },
      {
        "E": "Devikulam'",
        "M": "ദേവികുളം'",
        "BT": "2",
        "BID": "59",
        "DID": "6"
      },
      {
        "E": "Adimaly'",
        "M": "അടിമാലി'",
        "BT": "2",
        "BID": "58",
        "DID": "6"
      },
      {
        "E": "Thodupuzha'",
        "M": "തൊടുപുഴ'",
        "BT": "3",
        "BID": null,
        "DID": "6"
      },
      {
        "E": "Mariyapuram'",
        "M": "മരിയാപുരം'",
        "BT": "5",
        "BID": "62",
        "DID": "6"
      },
      {
        "E": "Vandiperiyar'",
        "M": "വണ്ടിപ്പെരിയാര്‍'",
        "BT": "5",
        "BID": "65",
        "DID": "6"
      },
      {
        "E": "Elappara'",
        "M": "ഏലപ്പാറ'",
        "BT": "5",
        "BID": "65",
        "DID": "6"
      },
      {
        "E": "Peermade'",
        "M": "പീരുമേട്'",
        "BT": "5",
        "BID": "65",
        "DID": "6"
      },
      {
        "E": "Manakkad'",
        "M": "മണക്കാട്'",
        "BT": "5",
        "BID": "64",
        "DID": "6"
      },
      {
        "E": "Karimkunnam'",
        "M": "കരിങ്കുന്നം'",
        "BT": "5",
        "BID": "64",
        "DID": "6"
      },
      {
        "E": "Idukki'",
        "M": "ഇടുക്കി'",
        "BT": "1",
        "BID": null,
        "DID": "6"
      },
      {
        "E": "Kokkayar'",
        "M": "കൊക്കയാര്‍'",
        "BT": "5",
        "BID": "65",
        "DID": "6"
      },
      {
        "E": "Kumily'",
        "M": "കുമിളി'",
        "BT": "5",
        "BID": "65",
        "DID": "6"
      },
      {
        "E": "Devikulam'",
        "M": "ദേവികുളം'",
        "BT": "5",
        "BID": "59",
        "DID": "6"
      },
      {
        "E": "Edavetty'",
        "M": "ഇടവെട്ടി'",
        "BT": "5",
        "BID": "64",
        "DID": "6"
      },
      {
        "E": "Kumaramangalam'",
        "M": "കുമാരമംഗലം'",
        "BT": "5",
        "BID": "64",
        "DID": "6"
      },
      {
        "E": "Muttom'",
        "M": "മുട്ടം'",
        "BT": "5",
        "BID": "64",
        "DID": "6"
      },
      {
        "E": "Edamalakkudy '",
        "M": "ഇടമലക്കുടി '",
        "BT": "5",
        "BID": null,
        "DID": "6"
      },
      {
        "E": "Peruvanthanam'",
        "M": "പെരുവന്താനം'",
        "BT": "5",
        "BID": "65",
        "DID": "6"
      },
      {
        "E": "Purapuzha'",
        "M": "പുറപ്പുഴ'",
        "BT": "5",
        "BID": "64",
        "DID": "6"
      },
      {
        "E": "Kattappana'",
        "M": "കട്ടപ്പന'",
        "BT": "3",
        "BID": null,
        "DID": "6"
      },
      {
        "E": "Chakkupallam'",
        "M": "ചക്കുപള്ളം'",
        "BT": "5",
        "BID": "63",
        "DID": "6"
      },
      {
        "E": "AyyappanCoil'",
        "M": "അയ്യപ്പന്‍ കോവില്‍'",
        "BT": "5",
        "BID": "63",
        "DID": "6"
      },
      {
        "E": "Erattayar'",
        "M": "ഇരട്ടയാര്‍'",
        "BT": "5",
        "BID": "63",
        "DID": "6"
      },
      {
        "E": "Kanchiyar'",
        "M": "കാഞ്ചിയാര്‍'",
        "BT": "5",
        "BID": "63",
        "DID": "6"
      },
      {
        "E": "Vandanmedu'",
        "M": "വണ്ടന്‍മേട്'",
        "BT": "5",
        "BID": "63",
        "DID": "6"
      },
      {
        "E": "Upputhara'",
        "M": "ഉപ്പുതറ'",
        "BT": "5",
        "BID": "63",
        "DID": "6"
      },
      {
        "E": "Vazhathope'",
        "M": "വാഴത്തോപ്പ്'",
        "BT": "5",
        "BID": "62",
        "DID": "6"
      },
      {
        "E": "Kamakshy'",
        "M": "കാമാക്ഷി'",
        "BT": "5",
        "BID": "62",
        "DID": "6"
      },
      {
        "E": "Arakulam'",
        "M": "അറക്കുളം'",
        "BT": "5",
        "BID": "62",
        "DID": "6"
      },
      {
        "E": "Vathikudy'",
        "M": "വാത്തിക്കുടി'",
        "BT": "5",
        "BID": "62",
        "DID": "6"
      },
      {
        "E": "IdukkiKanjikuzhy'",
        "M": "ഇടുക്കി കഞ്ഞിക്കുഴി'",
        "BT": "5",
        "BID": "62",
        "DID": "6"
      },
      {
        "E": "Kudayathoor'",
        "M": "കുടയത്തൂര്‍'",
        "BT": "5",
        "BID": "61",
        "DID": "6"
      },
      {
        "E": "Karimannoor'",
        "M": "കരിമണ്ണൂര്‍'",
        "BT": "5",
        "BID": "61",
        "DID": "6"
      },
      {
        "E": "Velliyamattom'",
        "M": "വെളളിയാമറ്റം'",
        "BT": "5",
        "BID": "61",
        "DID": "6"
      },
      {
        "E": "Alakode'",
        "M": "ആലക്കോട്'",
        "BT": "5",
        "BID": "61",
        "DID": "6"
      },
      {
        "E": "Kodikulam'",
        "M": "കോടിക്കുളം'",
        "BT": "5",
        "BID": "61",
        "DID": "6"
      },
      {
        "E": "Azhutha'",
        "M": "അഴുത'",
        "BT": "2",
        "BID": "65",
        "DID": "6"
      },
      {
        "E": "Thodupuzha'",
        "M": "തൊടുപുഴ'",
        "BT": "2",
        "BID": "64",
        "DID": "6"
      },
      {
        "E": "Kattappana'",
        "M": "കട്ടപ്പന'",
        "BT": "2",
        "BID": "63",
        "DID": "6"
      },
      {
        "E": "Idukki'",
        "M": "ഇടുക്കി'",
        "BT": "2",
        "BID": "62",
        "DID": "6"
      },
      {
        "E": "Udumbanoor'",
        "M": "ഉടുമ്പന്നൂര്‍'",
        "BT": "5",
        "BID": "61",
        "DID": "6"
      },
      {
        "E": "Adimaly'",
        "M": "അടിമാലി'",
        "BT": "5",
        "BID": "58",
        "DID": "6"
      },
      {
        "E": "Konnathady'",
        "M": "കൊന്നത്തടി'",
        "BT": "5",
        "BID": "58",
        "DID": "6"
      },
      {
        "E": "BysonValley'",
        "M": "ബൈസണ്‍ വാലി'",
        "BT": "5",
        "BID": "58",
        "DID": "6"
      },
      {
        "E": "Vellathooval'",
        "M": "വെള്ളത്തൂവല്‍'",
        "BT": "5",
        "BID": "58",
        "DID": "6"
      },
      {
        "E": "Pallivasal'",
        "M": "പള്ളിവാസല്‍'",
        "BT": "5",
        "BID": "58",
        "DID": "6"
      },
      {
        "E": "Marayoor'",
        "M": "മറയൂര്‍'",
        "BT": "5",
        "BID": "59",
        "DID": "6"
      },
      {
        "E": "Munnar'",
        "M": "മൂന്നാര്‍'",
        "BT": "5",
        "BID": "59",
        "DID": "6"
      },
      {
        "E": "Kanthalloor'",
        "M": "കാന്തല്ലൂര്‍'",
        "BT": "5",
        "BID": "59",
        "DID": "6"
      },
      {
        "E": "Vattavada'",
        "M": "വട്ടവട'",
        "BT": "5",
        "BID": "59",
        "DID": "6"
      },
      {
        "E": "Santhanpara'",
        "M": "ശാന്തന്‍പാറ'",
        "BT": "5",
        "BID": "59",
        "DID": "6"
      },
      {
        "E": "Chinnakanal'",
        "M": "ചിന്നക്കനാല്‍'",
        "BT": "5",
        "BID": "59",
        "DID": "6"
      },
      {
        "E": "Mankulam'",
        "M": "മാങ്കുളം'",
        "BT": "5",
        "BID": "59",
        "DID": "6"
      },
      {
        "E": "Pampadumpara'",
        "M": "പാമ്പാടുംപാറ'",
        "BT": "5",
        "BID": "60",
        "DID": "6"
      },
      {
        "E": "Senapathy'",
        "M": "സേനാപതി'",
        "BT": "5",
        "BID": "60",
        "DID": "6"
      },
      {
        "E": "Karunapuram'",
        "M": "കരുണാപുരം'",
        "BT": "5",
        "BID": "60",
        "DID": "6"
      },
      {
        "E": "Rajakkad'",
        "M": "രാജക്കാട്'",
        "BT": "5",
        "BID": "60",
        "DID": "6"
      },
      {
        "E": "Nedumkandam'",
        "M": "നെടുങ്കണ്ടം'",
        "BT": "5",
        "BID": "60",
        "DID": "6"
      },
      {
        "E": "Udumbanchola'",
        "M": "ഉടുമ്പന്‍ചോല'",
        "BT": "5",
        "BID": "60",
        "DID": "6"
      },
      {
        "E": "Rajakumary'",
        "M": "രാജകുമാരി'",
        "BT": "5",
        "BID": "60",
        "DID": "6"
      },
      {
        "E": "Vannappuram'",
        "M": "വണ്ണപ്പുറം'",
        "BT": "5",
        "BID": "61",
        "DID": "6"
      },
      {
        "E": "Kizhakkambalam'",
        "M": "കിഴക്കമ്പലം'",
        "BT": "5",
        "BID": "70",
        "DID": "7"
      },
      {
        "E": "Aluva'",
        "M": "ആലുവ'",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Alangad'",
        "M": "ആലങ്ങാട്'",
        "BT": "2",
        "BID": "67",
        "DID": "7"
      },
      {
        "E": "Angamaly'",
        "M": "അങ്കമാലി'",
        "BT": "2",
        "BID": "68",
        "DID": "7"
      },
      {
        "E": "Koovappady'",
        "M": "കൂവപ്പടി'",
        "BT": "2",
        "BID": "69",
        "DID": "7"
      },
      {
        "E": "Vazhakulam'",
        "M": "വാഴക്കുളം'",
        "BT": "2",
        "BID": "70",
        "DID": "7"
      },
      {
        "E": "Edappally'",
        "M": "ഇടപ്പള്ളി'",
        "BT": "2",
        "BID": "71",
        "DID": "7"
      },
      {
        "E": "Vypin'",
        "M": "വൈപ്പിന്‍'",
        "BT": "2",
        "BID": "72",
        "DID": "7"
      },
      {
        "E": "Palluruthy'",
        "M": "പള്ളുരുത്തി'",
        "BT": "2",
        "BID": "73",
        "DID": "7"
      },
      {
        "E": "Mulanthuruthy'",
        "M": "മുളന്തുരുത്തി'",
        "BT": "2",
        "BID": "75",
        "DID": "7"
      },
      {
        "E": "Vadavucode'",
        "M": "വടവുകോട്'",
        "BT": "2",
        "BID": "76",
        "DID": "7"
      },
      {
        "E": "Kothamangalam'",
        "M": "കോതമംഗലം'",
        "BT": "2",
        "BID": "77",
        "DID": "7"
      },
      {
        "E": "Pampakuda'",
        "M": "പാമ്പാക്കുട'",
        "BT": "2",
        "BID": "78",
        "DID": "7"
      },
      {
        "E": "Parakkadavu'",
        "M": "പാറക്കടവ്'",
        "BT": "2",
        "BID": "79",
        "DID": "7"
      },
      {
        "E": "Muvattupuzha'",
        "M": "മൂവാറ്റുപുഴ'",
        "BT": "2",
        "BID": "80",
        "DID": "7"
      },
      {
        "E": "Piravom'",
        "M": "പിറവം'",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Koothattukulam'",
        "M": "കൂത്താട്ടുകുളം'",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Maradu '",
        "M": "മരട് '",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Eloor '",
        "M": "ഏലൂര്‍ '",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Thrikkakara '",
        "M": "തൃക്കാക്കര '",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Ernakulam'",
        "M": "എറണാകുളം'",
        "BT": "1",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Cochin'",
        "M": "കൊച്ചി'",
        "BT": "4",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Kalamassery'",
        "M": "കളമശ്ശേരി'",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Kothamangalam'",
        "M": "കോതമംഗലം'",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Angamaly'",
        "M": "അങ്കമാലി'",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Tripunithura'",
        "M": "തൃപ്പൂണിത്തുറ'",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Muvattupuzha'",
        "M": "മൂവാറ്റുപുഴ'",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "North Paravur'",
        "M": "വടക്കന്‍ പറവൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Perumbavoor'",
        "M": "പെരുമ്പാവൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "7"
      },
      {
        "E": "Chendamangalam'",
        "M": "ചേന്ദമംഗലം '",
        "BT": "5",
        "BID": "66",
        "DID": "7"
      },
      {
        "E": "Kottuvally'",
        "M": "കോട്ടുവള്ളി'",
        "BT": "5",
        "BID": "66",
        "DID": "7"
      },
      {
        "E": "Ezhikkara'",
        "M": "ഏഴിക്കര'",
        "BT": "5",
        "BID": "66",
        "DID": "7"
      },
      {
        "E": "Vadakkekkara'",
        "M": "വടക്കേക്കര'",
        "BT": "5",
        "BID": "66",
        "DID": "7"
      },
      {
        "E": "Chittattukara'",
        "M": "ചിറ്റാറ്റുകര'",
        "BT": "5",
        "BID": "66",
        "DID": "7"
      },
      {
        "E": "Karumallur'",
        "M": "കരുമാല്ലൂര്‍'",
        "BT": "5",
        "BID": "67",
        "DID": "7"
      },
      {
        "E": "Varapuzha'",
        "M": "വരാപ്പുഴ'",
        "BT": "5",
        "BID": "67",
        "DID": "7"
      },
      {
        "E": "Alangad'",
        "M": "ആലങ്ങാട്'",
        "BT": "5",
        "BID": "67",
        "DID": "7"
      },
      {
        "E": "Kadungalloor'",
        "M": "കടുങ്ങല്ലൂര്‍'",
        "BT": "5",
        "BID": "67",
        "DID": "7"
      },
      {
        "E": "Mookkannur'",
        "M": "മൂക്കന്നൂര്‍'",
        "BT": "5",
        "BID": "68",
        "DID": "7"
      },
      {
        "E": "Thuravoor'",
        "M": "തുറവൂര്‍'",
        "BT": "5",
        "BID": "68",
        "DID": "7"
      },
      {
        "E": "Manjapra'",
        "M": "മഞ്ഞപ്ര'",
        "BT": "5",
        "BID": "68",
        "DID": "7"
      },
      {
        "E": "Karukutty'",
        "M": "കറുകുറ്റി'",
        "BT": "5",
        "BID": "68",
        "DID": "7"
      },
      {
        "E": "Ayyampuzha'",
        "M": "അയ്യമ്പുഴ'",
        "BT": "5",
        "BID": "68",
        "DID": "7"
      },
      {
        "E": "Sreemoolanagaram'",
        "M": "ശ്രീമൂലനഗരം'",
        "BT": "5",
        "BID": "68",
        "DID": "7"
      },
      {
        "E": "Kanjoor'",
        "M": "കാഞ്ഞൂര്‍'",
        "BT": "5",
        "BID": "68",
        "DID": "7"
      },
      {
        "E": "Kalady'",
        "M": "കാലടി'",
        "BT": "5",
        "BID": "68",
        "DID": "7"
      },
      {
        "E": "MalayattoorNeeleswaram'",
        "M": "മലയാറ്റൂര്‍ നീലേശ്വരം'",
        "BT": "5",
        "BID": "68",
        "DID": "7"
      },
      {
        "E": "Asamannoor'",
        "M": "അശമന്നൂര്‍'",
        "BT": "5",
        "BID": "69",
        "DID": "7"
      },
      {
        "E": "Mudakuzha'",
        "M": "മുടക്കുഴ'",
        "BT": "5",
        "BID": "69",
        "DID": "7"
      },
      {
        "E": "Vengoor'",
        "M": "വേങ്ങൂര്‍'",
        "BT": "5",
        "BID": "69",
        "DID": "7"
      },
      {
        "E": "Rayamangalam'",
        "M": "രായമംഗലം'",
        "BT": "5",
        "BID": "69",
        "DID": "7"
      },
      {
        "E": "Koovappady'",
        "M": "കൂവപ്പടി'",
        "BT": "5",
        "BID": "69",
        "DID": "7"
      },
      {
        "E": "Okkal'",
        "M": "ഒക്കല്‍'",
        "BT": "5",
        "BID": "69",
        "DID": "7"
      },
      {
        "E": "Vengola'",
        "M": "വെങ്ങോല'",
        "BT": "5",
        "BID": "70",
        "DID": "7"
      },
      {
        "E": "Vazhakulam'",
        "M": "വാഴക്കുളം'",
        "BT": "5",
        "BID": "70",
        "DID": "7"
      },
      {
        "E": "Paravur'",
        "M": "പറവൂര്‍'",
        "BT": "2",
        "BID": "66",
        "DID": "7"
      },
      {
        "E": "Choornikkara'",
        "M": "ചൂര്‍ണ്ണിക്കര'",
        "BT": "5",
        "BID": "70",
        "DID": "7"
      },
      {
        "E": "Edathala'",
        "M": "എടത്തല'",
        "BT": "5",
        "BID": "70",
        "DID": "7"
      },
      {
        "E": "Keezhmad'",
        "M": "കീഴ്മാട്'",
        "BT": "5",
        "BID": "70",
        "DID": "7"
      },
      {
        "E": "Kadamakudy'",
        "M": "കടമക്കുടി'",
        "BT": "5",
        "BID": "71",
        "DID": "7"
      },
      {
        "E": "Cheranalloor'",
        "M": "ചേരാനല്ലൂര്‍'",
        "BT": "5",
        "BID": "71",
        "DID": "7"
      },
      {
        "E": "Mulavukad'",
        "M": "മുളവുകാട്'",
        "BT": "5",
        "BID": "72",
        "DID": "7"
      },
      {
        "E": "Narakal'",
        "M": "ഞാറക്കല്‍'",
        "BT": "5",
        "BID": "72",
        "DID": "7"
      },
      {
        "E": "Nayarambalam'",
        "M": "നായരമ്പലം'",
        "BT": "5",
        "BID": "72",
        "DID": "7"
      },
      {
        "E": "Edavanakkad'",
        "M": "എടവനക്കാട്'",
        "BT": "5",
        "BID": "72",
        "DID": "7"
      },
      {
        "E": "Elankunnapuzha'",
        "M": "എളങ്കുന്നപ്പുഴ'",
        "BT": "5",
        "BID": "72",
        "DID": "7"
      },
      {
        "E": "Pallippuram'",
        "M": "പള്ളിപ്പുറം'",
        "BT": "5",
        "BID": "72",
        "DID": "7"
      },
      {
        "E": "Kuzhuppilly'",
        "M": "കുഴുപ്പിള്ളി'",
        "BT": "5",
        "BID": "72",
        "DID": "7"
      },
      {
        "E": "Chellanam'",
        "M": "ചെല്ലാനം'",
        "BT": "5",
        "BID": "73",
        "DID": "7"
      },
      {
        "E": "Kumbalanghi'",
        "M": "കുമ്പളങ്ങി'",
        "BT": "5",
        "BID": "73",
        "DID": "7"
      },
      {
        "E": "Kumbalam'",
        "M": "കുമ്പളം'",
        "BT": "5",
        "BID": "74",
        "DID": "7"
      },
      {
        "E": "Udayamperoor'",
        "M": "ഉദയംപേരൂര്‍'",
        "BT": "5",
        "BID": "75",
        "DID": "7"
      },
      {
        "E": "Mulanthuruthy'",
        "M": "മുളന്തുരുത്തി'",
        "BT": "5",
        "BID": "75",
        "DID": "7"
      },
      {
        "E": "Chottanikkara'",
        "M": "ചോറ്റാനിക്കര'",
        "BT": "5",
        "BID": "75",
        "DID": "7"
      },
      {
        "E": "Edakkattuvayal'",
        "M": "എടയ്ക്കാട്ടുവയല്‍'",
        "BT": "5",
        "BID": "75",
        "DID": "7"
      },
      {
        "E": "Amballoor'",
        "M": "ആമ്പല്ലൂര്‍'",
        "BT": "5",
        "BID": "75",
        "DID": "7"
      },
      {
        "E": "Poothrikka'",
        "M": "പൂത്തൃക്ക'",
        "BT": "5",
        "BID": "76",
        "DID": "7"
      },
      {
        "E": "Thiruvaniyoor'",
        "M": "തിരുവാണിയൂര്‍'",
        "BT": "5",
        "BID": "76",
        "DID": "7"
      },
      {
        "E": "VadavucodePuthencruz'",
        "M": "വടവുകോട് പുത്തന്‍കുരിശ്'",
        "BT": "5",
        "BID": "76",
        "DID": "7"
      },
      {
        "E": "Mazhuvannoor'",
        "M": "മഴുവന്നൂര്‍'",
        "BT": "5",
        "BID": "76",
        "DID": "7"
      },
      {
        "E": "Aikaranad'",
        "M": "ഐക്കരനാട്'",
        "BT": "5",
        "BID": "76",
        "DID": "7"
      },
      {
        "E": "Kunnathunad'",
        "M": "കുന്നത്തുനാട്'",
        "BT": "5",
        "BID": "76",
        "DID": "7"
      },
      {
        "E": "Paingottoor'",
        "M": "പൈങ്ങോട്ടൂര്‍'",
        "BT": "5",
        "BID": "77",
        "DID": "7"
      },
      {
        "E": "Nellikuzhi'",
        "M": "നെല്ലിക്കുഴി'",
        "BT": "5",
        "BID": "77",
        "DID": "7"
      },
      {
        "E": "Pindimana'",
        "M": "പിണ്ടിമന'",
        "BT": "5",
        "BID": "77",
        "DID": "7"
      },
      {
        "E": "Kottappady'",
        "M": "കോട്ടപ്പടി'",
        "BT": "5",
        "BID": "77",
        "DID": "7"
      },
      {
        "E": "Kavalangad'",
        "M": "കവളങ്ങാട്'",
        "BT": "5",
        "BID": "77",
        "DID": "7"
      },
      {
        "E": "Varappetty'",
        "M": "വാരപ്പെട്ടി'",
        "BT": "5",
        "BID": "77",
        "DID": "7"
      },
      {
        "E": "Keerampara'",
        "M": "കീരംപാറ'",
        "BT": "5",
        "BID": "77",
        "DID": "7"
      },
      {
        "E": "Pothanicad'",
        "M": "പോത്താനിക്കാട്'",
        "BT": "5",
        "BID": "77",
        "DID": "7"
      },
      {
        "E": "Pallarimangalam'",
        "M": "പല്ലാരിമംഗലം'",
        "BT": "5",
        "BID": "77",
        "DID": "7"
      },
      {
        "E": "Kuttampuzha'",
        "M": "കുട്ടമ്പുഴ'",
        "BT": "5",
        "BID": "77",
        "DID": "7"
      },
      {
        "E": "Elanji'",
        "M": "ഇലഞ്ഞി'",
        "BT": "5",
        "BID": "78",
        "DID": "7"
      },
      {
        "E": "Thirumarady'",
        "M": "തിരുമാറാടി'",
        "BT": "5",
        "BID": "78",
        "DID": "7"
      },
      {
        "E": "Palakuzha'",
        "M": "പാലക്കുഴ'",
        "BT": "5",
        "BID": "78",
        "DID": "7"
      },
      {
        "E": "Maneed'",
        "M": "മണീട്'",
        "BT": "5",
        "BID": "78",
        "DID": "7"
      },
      {
        "E": "Pampakuda'",
        "M": "പാമ്പാക്കുട'",
        "BT": "5",
        "BID": "78",
        "DID": "7"
      },
      {
        "E": "Ramamangalam'",
        "M": "രാമമംഗലം'",
        "BT": "5",
        "BID": "78",
        "DID": "7"
      },
      {
        "E": "Puthenvelikkara'",
        "M": "പുത്തന്‍വേലിക്കര'",
        "BT": "5",
        "BID": "79",
        "DID": "7"
      },
      {
        "E": "Chengamanad'",
        "M": "ചെങ്ങമനാട്'",
        "BT": "5",
        "BID": "79",
        "DID": "7"
      },
      {
        "E": "Nedumbassery'",
        "M": "നെടുമ്പാശ്ശേരി'",
        "BT": "5",
        "BID": "79",
        "DID": "7"
      },
      {
        "E": "Parakkadavu'",
        "M": "പാറക്കടവ്'",
        "BT": "5",
        "BID": "79",
        "DID": "7"
      },
      {
        "E": "Kunnukara'",
        "M": "കുന്നുകര'",
        "BT": "5",
        "BID": "79",
        "DID": "7"
      },
      {
        "E": "Avoly'",
        "M": "ആവോലി'",
        "BT": "5",
        "BID": "80",
        "DID": "7"
      },
      {
        "E": "Arakuzha'",
        "M": "ആരക്കുഴ'",
        "BT": "5",
        "BID": "80",
        "DID": "7"
      },
      {
        "E": "Valakom'",
        "M": "വാളകം'",
        "BT": "5",
        "BID": "80",
        "DID": "7"
      },
      {
        "E": "Paipra'",
        "M": "പായിപ്ര'",
        "BT": "5",
        "BID": "80",
        "DID": "7"
      },
      {
        "E": "Kalloorkad'",
        "M": "കല്ലൂര്‍ക്കാട്'",
        "BT": "5",
        "BID": "80",
        "DID": "7"
      },
      {
        "E": "Ayavana'",
        "M": "ആയവന'",
        "BT": "5",
        "BID": "80",
        "DID": "7"
      },
      {
        "E": "Manjalloor'",
        "M": "മഞ്ഞള്ളൂര്‍'",
        "BT": "5",
        "BID": "80",
        "DID": "7"
      },
      {
        "E": "Marady'",
        "M": "മാറാടി'",
        "BT": "5",
        "BID": "80",
        "DID": "7"
      },
      {
        "E": "Cherpu'",
        "M": "ചേര്‍പ്പ്'",
        "BT": "2",
        "BID": "90",
        "DID": "8"
      },
      {
        "E": "Anthikad'",
        "M": "അന്തിക്കാട്'",
        "BT": "2",
        "BID": "89",
        "DID": "8"
      },
      {
        "E": "Thalikulam'",
        "M": "തളിക്കുളം'",
        "BT": "2",
        "BID": "88",
        "DID": "8"
      },
      {
        "E": "Mullassery'",
        "M": "മുല്ലശ്ശേരി'",
        "BT": "2",
        "BID": "87",
        "DID": "8"
      },
      {
        "E": "Puzhakkal'",
        "M": "പുഴയ്ക്കല്‍'",
        "BT": "2",
        "BID": "86",
        "DID": "8"
      },
      {
        "E": "Ollukkara'",
        "M": "ഒല്ലൂക്കര'",
        "BT": "2",
        "BID": "85",
        "DID": "8"
      },
      {
        "E": "Pazhayannur'",
        "M": "പഴയന്നൂര്‍'",
        "BT": "2",
        "BID": "84",
        "DID": "8"
      },
      {
        "E": "Wadakanchery'",
        "M": "വടക്കാഞ്ചരി'",
        "BT": "2",
        "BID": "83",
        "DID": "8"
      },
      {
        "E": "Chowannur'",
        "M": "ചൊവ്വന്നൂര്‍'",
        "BT": "2",
        "BID": "82",
        "DID": "8"
      },
      {
        "E": "Chavakkad'",
        "M": "ചാവക്കാട്'",
        "BT": "2",
        "BID": "81",
        "DID": "8"
      },
      {
        "E": "Guruvayur'",
        "M": "ഗുരുവായൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "8"
      },
      {
        "E": "Kunnamkulam'",
        "M": "കുന്നംകുളം'",
        "BT": "3",
        "BID": null,
        "DID": "8"
      },
      {
        "E": "Chalakudy'",
        "M": "ചാലക്കുടി'",
        "BT": "3",
        "BID": null,
        "DID": "8"
      },
      {
        "E": "Kodungallur'",
        "M": "കൊടുങ്ങല്ലൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "8"
      },
      {
        "E": "Thrissur'",
        "M": "തൃശ്ശൂര്‍'",
        "BT": "4",
        "BID": null,
        "DID": "8"
      },
      {
        "E": "Chavakkad'",
        "M": "ചാവക്കാട്'",
        "BT": "3",
        "BID": null,
        "DID": "8"
      },
      {
        "E": "Thrissur'",
        "M": "തൃശ്ശൂര്‍'",
        "BT": "1",
        "BID": null,
        "DID": "8"
      },
      {
        "E": "Wadakanchery'",
        "M": "വടക്കാഞ്ചേരി'",
        "BT": "3",
        "BID": null,
        "DID": "8"
      },
      {
        "E": "Chalakudy'",
        "M": "ചാലക്കുടി'",
        "BT": "2",
        "BID": "97",
        "DID": "8"
      },
      {
        "E": "Mala'",
        "M": "മാള'",
        "BT": "2",
        "BID": "96",
        "DID": "8"
      },
      {
        "E": "Mathilakam'",
        "M": "മതിലകം'",
        "BT": "2",
        "BID": "94",
        "DID": "8"
      },
      {
        "E": "Vellangallur'",
        "M": "വെള്ളാങ്ങല്ലൂര്‍'",
        "BT": "2",
        "BID": "93",
        "DID": "8"
      },
      {
        "E": "Irinjalakuda'",
        "M": "ഇരിങ്ങാലക്കുട'",
        "BT": "2",
        "BID": "92",
        "DID": "8"
      },
      {
        "E": "Kodakara'",
        "M": "കൊടകര'",
        "BT": "2",
        "BID": "91",
        "DID": "8"
      },
      {
        "E": "Irinjalakuda'",
        "M": "ഇരിങ്ങാലക്കുട'",
        "BT": "3",
        "BID": null,
        "DID": "8"
      },
      {
        "E": "Kadappuram'",
        "M": "കടപ്പുറം'",
        "BT": "5",
        "BID": "81",
        "DID": "8"
      },
      {
        "E": "Orumanayur'",
        "M": "ഒരുമനയൂര്‍'",
        "BT": "5",
        "BID": "81",
        "DID": "8"
      },
      {
        "E": "Punnayur'",
        "M": "പുന്നയൂര്‍'",
        "BT": "5",
        "BID": "81",
        "DID": "8"
      },
      {
        "E": "Punnayurkulam'",
        "M": "പുന്നയൂര്‍ക്കുളം'",
        "BT": "5",
        "BID": "81",
        "DID": "8"
      },
      {
        "E": "Vadakkekkad'",
        "M": "വടക്കേക്കാട്'",
        "BT": "5",
        "BID": "81",
        "DID": "8"
      },
      {
        "E": "Choondal'",
        "M": "ചൂണ്ടല്‍'",
        "BT": "5",
        "BID": "82",
        "DID": "8"
      },
      {
        "E": "Chowannur'",
        "M": "ചൊവ്വന്നൂര്‍'",
        "BT": "5",
        "BID": "82",
        "DID": "8"
      },
      {
        "E": "Kadavallur'",
        "M": "കടവല്ലൂര്‍'",
        "BT": "5",
        "BID": "82",
        "DID": "8"
      },
      {
        "E": "Kandanassery'",
        "M": "കണ്ടാണശ്ശേരി'",
        "BT": "5",
        "BID": "82",
        "DID": "8"
      },
      {
        "E": "Kattakampal'",
        "M": "കാട്ടകാമ്പാല്‍'",
        "BT": "5",
        "BID": "82",
        "DID": "8"
      },
      {
        "E": "Porkulam'",
        "M": "പോര്‍ക്കുളം'",
        "BT": "5",
        "BID": "82",
        "DID": "8"
      },
      {
        "E": "Desamangalam'",
        "M": "ദേശമംഗലം'",
        "BT": "5",
        "BID": "83",
        "DID": "8"
      },
      {
        "E": "Erumapetty'",
        "M": "എരുമപ്പെട്ടി'",
        "BT": "5",
        "BID": "83",
        "DID": "8"
      },
      {
        "E": "Kadangode'",
        "M": "കടങ്ങോട്'",
        "BT": "5",
        "BID": "83",
        "DID": "8"
      },
      {
        "E": "Mullurkara'",
        "M": "മുള്ളൂര്‍ക്കര'",
        "BT": "5",
        "BID": "83",
        "DID": "8"
      },
      {
        "E": "Thekkumkara'",
        "M": "തെക്കുംകര'",
        "BT": "5",
        "BID": "83",
        "DID": "8"
      },
      {
        "E": "Varavoor'",
        "M": "വരവൂര്‍'",
        "BT": "5",
        "BID": "83",
        "DID": "8"
      },
      {
        "E": "Velur'",
        "M": "വേലൂര്‍'",
        "BT": "5",
        "BID": "83",
        "DID": "8"
      },
      {
        "E": "Chelakkara'",
        "M": "ചേലക്കര'",
        "BT": "5",
        "BID": "84",
        "DID": "8"
      },
      {
        "E": "VallatholNagar'",
        "M": "വള്ളത്തോള്‍ നഗര്‍'",
        "BT": "5",
        "BID": "84",
        "DID": "8"
      },
      {
        "E": "Kondazhy'",
        "M": "കൊണ്ടാഴി'",
        "BT": "5",
        "BID": "84",
        "DID": "8"
      },
      {
        "E": "Panjal'",
        "M": "പാഞ്ഞാള്‍'",
        "BT": "5",
        "BID": "84",
        "DID": "8"
      },
      {
        "E": "Pazhayannur'",
        "M": "പഴയന്നൂര്‍'",
        "BT": "5",
        "BID": "84",
        "DID": "8"
      },
      {
        "E": "Thiruvilwamala'",
        "M": "തിരുവില്വാമല'",
        "BT": "5",
        "BID": "84",
        "DID": "8"
      },
      {
        "E": "Kolazhy'",
        "M": "കോലഴി'",
        "BT": "5",
        "BID": "85",
        "DID": "8"
      },
      {
        "E": "Madakkathara'",
        "M": "മാടക്കത്തറ'",
        "BT": "5",
        "BID": "85",
        "DID": "8"
      },
      {
        "E": "Nadathara'",
        "M": "നടത്തറ'",
        "BT": "5",
        "BID": "85",
        "DID": "8"
      },
      {
        "E": "Pananchery'",
        "M": "പാണഞ്ചരി'",
        "BT": "5",
        "BID": "85",
        "DID": "8"
      },
      {
        "E": "Puthur'",
        "M": "പുത്തൂര്‍'",
        "BT": "5",
        "BID": "85",
        "DID": "8"
      },
      {
        "E": "Adat'",
        "M": "അടാട്ട്'",
        "BT": "5",
        "BID": "86",
        "DID": "8"
      },
      {
        "E": "Arimpur'",
        "M": "അരിമ്പൂര്‍'",
        "BT": "5",
        "BID": "86",
        "DID": "8"
      },
      {
        "E": "Avanur'",
        "M": "അവണൂര്‍'",
        "BT": "5",
        "BID": "86",
        "DID": "8"
      },
      {
        "E": "Kaiparambu'",
        "M": "കൈപ്പറമ്പ്'",
        "BT": "5",
        "BID": "86",
        "DID": "8"
      },
      {
        "E": "Mulakunnathukavu'",
        "M": "മുളകുന്നത്തുകാവ്'",
        "BT": "5",
        "BID": "86",
        "DID": "8"
      },
      {
        "E": "Tholur'",
        "M": "തോളൂര്‍'",
        "BT": "5",
        "BID": "86",
        "DID": "8"
      },
      {
        "E": "Elavally'",
        "M": "എളവള്ളി'",
        "BT": "5",
        "BID": "87",
        "DID": "8"
      },
      {
        "E": "Mullassery'",
        "M": "മുല്ലശ്ശേരി'",
        "BT": "5",
        "BID": "87",
        "DID": "8"
      },
      {
        "E": "Pavaratty'",
        "M": "പാവറട്ടി'",
        "BT": "5",
        "BID": "87",
        "DID": "8"
      },
      {
        "E": "Venkitangu'",
        "M": "വെങ്കിടങ്ങ്'",
        "BT": "5",
        "BID": "87",
        "DID": "8"
      },
      {
        "E": "Engandiyur'",
        "M": "ഏങ്ങണ്ടിയൂര്‍'",
        "BT": "5",
        "BID": "88",
        "DID": "8"
      },
      {
        "E": "Vatanapally'",
        "M": "വാടാനപ്പള്ളി'",
        "BT": "5",
        "BID": "88",
        "DID": "8"
      },
      {
        "E": "Thalikulam'",
        "M": "തളിക്കുളം'",
        "BT": "5",
        "BID": "88",
        "DID": "8"
      },
      {
        "E": "Nattika'",
        "M": "നാട്ടിക'",
        "BT": "5",
        "BID": "88",
        "DID": "8"
      },
      {
        "E": "Valapad'",
        "M": "വലപ്പാട്'",
        "BT": "5",
        "BID": "88",
        "DID": "8"
      },
      {
        "E": "Anthikad'",
        "M": "അന്തിക്കാട്'",
        "BT": "5",
        "BID": "89",
        "DID": "8"
      },
      {
        "E": "Thanniyam'",
        "M": "താന്ന്യം'",
        "BT": "5",
        "BID": "89",
        "DID": "8"
      },
      {
        "E": "Chazhur'",
        "M": "ചാഴൂര്‍'",
        "BT": "5",
        "BID": "89",
        "DID": "8"
      },
      {
        "E": "Manalur'",
        "M": "മണലൂര്‍'",
        "BT": "5",
        "BID": "89",
        "DID": "8"
      },
      {
        "E": "Avinissery'",
        "M": "ആവിണിശ്ശേരി'",
        "BT": "5",
        "BID": "90",
        "DID": "8"
      },
      {
        "E": "Cherpu'",
        "M": "ചേര്‍പ്പ്'",
        "BT": "5",
        "BID": "90",
        "DID": "8"
      },
      {
        "E": "Paralam'",
        "M": "പാറളം'",
        "BT": "5",
        "BID": "90",
        "DID": "8"
      },
      {
        "E": "Vallachira'",
        "M": "വല്ലച്ചിറ'",
        "BT": "5",
        "BID": "90",
        "DID": "8"
      },
      {
        "E": "Alagappanagar'",
        "M": "അളഗപ്പനഗര്‍'",
        "BT": "5",
        "BID": "91",
        "DID": "8"
      },
      {
        "E": "Kodakara'",
        "M": "കൊടകര'",
        "BT": "5",
        "BID": "91",
        "DID": "8"
      },
      {
        "E": "Mattathur'",
        "M": "മറ്റത്തൂര്‍'",
        "BT": "5",
        "BID": "91",
        "DID": "8"
      },
      {
        "E": "Nenmanikkara'",
        "M": "നെന്‍മണിക്കര'",
        "BT": "5",
        "BID": "91",
        "DID": "8"
      },
      {
        "E": "Pudukad'",
        "M": "പുതുക്കാട്'",
        "BT": "5",
        "BID": "91",
        "DID": "8"
      },
      {
        "E": "Thrikkur'",
        "M": "തൃക്കൂര്‍'",
        "BT": "5",
        "BID": "91",
        "DID": "8"
      },
      {
        "E": "Varandarappilly'",
        "M": "വരന്തരപ്പിള്ളി'",
        "BT": "5",
        "BID": "91",
        "DID": "8"
      },
      {
        "E": "Karalam'",
        "M": "കാറളം'",
        "BT": "5",
        "BID": "92",
        "DID": "8"
      },
      {
        "E": "Kattoor'",
        "M": "കാട്ടൂര്‍'",
        "BT": "5",
        "BID": "92",
        "DID": "8"
      },
      {
        "E": "Muriyad'",
        "M": "മുരിയാട്'",
        "BT": "5",
        "BID": "92",
        "DID": "8"
      },
      {
        "E": "Parappukkara'",
        "M": "പറപ്പൂക്കര'",
        "BT": "5",
        "BID": "92",
        "DID": "8"
      },
      {
        "E": "Padiyur'",
        "M": "പടിയൂര്‍'",
        "BT": "5",
        "BID": "93",
        "DID": "8"
      },
      {
        "E": "Poomangalam'",
        "M": "പൂമംഗലം'",
        "BT": "5",
        "BID": "93",
        "DID": "8"
      },
      {
        "E": "Puthenchira'",
        "M": "പുത്തന്‍ചിറ'",
        "BT": "5",
        "BID": "93",
        "DID": "8"
      },
      {
        "E": "Vellangallur'",
        "M": "വെള്ളാങ്ങല്ലൂര്‍'",
        "BT": "5",
        "BID": "93",
        "DID": "8"
      },
      {
        "E": "Velukara'",
        "M": "വേളൂക്കര'",
        "BT": "5",
        "BID": "93",
        "DID": "8"
      },
      {
        "E": "Edathiruthy'",
        "M": "എടത്തിരുത്തി'",
        "BT": "5",
        "BID": "94",
        "DID": "8"
      },
      {
        "E": "Kaipamangalam'",
        "M": "കൈപ്പമംഗലം'",
        "BT": "5",
        "BID": "94",
        "DID": "8"
      },
      {
        "E": "Mathilakam'",
        "M": "മതിലകം'",
        "BT": "5",
        "BID": "94",
        "DID": "8"
      },
      {
        "E": "Perinjanam'",
        "M": "പെരിഞ്ഞനം'",
        "BT": "5",
        "BID": "94",
        "DID": "8"
      },
      {
        "E": "Sreenarayanapuram'",
        "M": "ശ്രീനാരായണപുരം'",
        "BT": "5",
        "BID": "94",
        "DID": "8"
      },
      {
        "E": "Edavilangu'",
        "M": "എടവിലങ്ങ്'",
        "BT": "5",
        "BID": "95",
        "DID": "8"
      },
      {
        "E": "Eriyad'",
        "M": "എറിയാട്'",
        "BT": "5",
        "BID": "95",
        "DID": "8"
      },
      {
        "E": "Aloor'",
        "M": "ആളൂര്‍'",
        "BT": "5",
        "BID": "96",
        "DID": "8"
      },
      {
        "E": "Annamanada'",
        "M": "അന്നമനട'",
        "BT": "5",
        "BID": "96",
        "DID": "8"
      },
      {
        "E": "Kuzhur'",
        "M": "കുഴൂര്‍'",
        "BT": "5",
        "BID": "96",
        "DID": "8"
      },
      {
        "E": "Mala'",
        "M": "മാള'",
        "BT": "5",
        "BID": "96",
        "DID": "8"
      },
      {
        "E": "Poyya'",
        "M": "പൊയ്യ'",
        "BT": "5",
        "BID": "96",
        "DID": "8"
      },
      {
        "E": "Kadukutty'",
        "M": "കാടുകുറ്റി'",
        "BT": "5",
        "BID": "97",
        "DID": "8"
      },
      {
        "E": "Kodassery'",
        "M": "കോടശ്ശേരി'",
        "BT": "5",
        "BID": "97",
        "DID": "8"
      },
      {
        "E": "Koratty'",
        "M": "കൊരട്ടി'",
        "BT": "5",
        "BID": "97",
        "DID": "8"
      },
      {
        "E": "Meloor'",
        "M": "മേലൂര്‍'",
        "BT": "5",
        "BID": "97",
        "DID": "8"
      },
      {
        "E": "Pariyaram'",
        "M": "പരിയാരം'",
        "BT": "5",
        "BID": "97",
        "DID": "8"
      },
      {
        "E": "Athirappilly'",
        "M": "അതിരപ്പിള്ളി'",
        "BT": "5",
        "BID": "97",
        "DID": "8"
      },
      {
        "E": "Koduvayur'",
        "M": "കൊടുവായൂര്‍'",
        "BT": "5",
        "BID": "107",
        "DID": "9"
      },
      {
        "E": "Kollengode'",
        "M": "കൊല്ലങ്കോട്'",
        "BT": "5",
        "BID": "107",
        "DID": "9"
      },
      {
        "E": "Vadakarapathy'",
        "M": "വടകരപ്പതി'",
        "BT": "5",
        "BID": "106",
        "DID": "9"
      },
      {
        "E": "Perumatty'",
        "M": "പെരുമാട്ടി'",
        "BT": "5",
        "BID": "106",
        "DID": "9"
      },
      {
        "E": "Pattanchery'",
        "M": "പട്ടഞ്ചരി'",
        "BT": "5",
        "BID": "106",
        "DID": "9"
      },
      {
        "E": "Nallepilly'",
        "M": "നല്ലേപ്പിള്ളി'",
        "BT": "5",
        "BID": "106",
        "DID": "9"
      },
      {
        "E": "Kozhinjampara'",
        "M": "കൊഴിഞ്ഞാമ്പാറ'",
        "BT": "5",
        "BID": "106",
        "DID": "9"
      },
      {
        "E": "Eruthenpathy'",
        "M": "എരുത്തേമ്പതി'",
        "BT": "5",
        "BID": "106",
        "DID": "9"
      },
      {
        "E": "Kannadi'",
        "M": "കണ്ണാടി'",
        "BT": "5",
        "BID": "105",
        "DID": "9"
      },
      {
        "E": "Thenkurissi'",
        "M": "തേങ്കുറിശ്ശി'",
        "BT": "5",
        "BID": "105",
        "DID": "9"
      },
      {
        "E": "Peringottukurissi'",
        "M": "പെരിങ്ങോട്ടുകുറിശ്ശി'",
        "BT": "5",
        "BID": "105",
        "DID": "9"
      },
      {
        "E": "Mathur'",
        "M": "മാത്തൂര്‍'",
        "BT": "5",
        "BID": "105",
        "DID": "9"
      },
      {
        "E": "Kuzhalmannam'",
        "M": "കുഴല്‍മന്ദം'",
        "BT": "5",
        "BID": "105",
        "DID": "9"
      },
      {
        "E": "Kuthanur'",
        "M": "കുത്തന്നൂര്‍'",
        "BT": "5",
        "BID": "105",
        "DID": "9"
      },
      {
        "E": "Kottayi'",
        "M": "കോട്ടായി'",
        "BT": "5",
        "BID": "105",
        "DID": "9"
      },
      {
        "E": "Palakkad'",
        "M": "പാലക്കാട്'",
        "BT": "1",
        "BID": null,
        "DID": "9"
      },
      {
        "E": "Elavancherry'",
        "M": "എലവഞ്ചരി'",
        "BT": "5",
        "BID": "108",
        "DID": "9"
      },
      {
        "E": "Nelliyampathy'",
        "M": "നെല്ലിയാമ്പതി'",
        "BT": "5",
        "BID": "108",
        "DID": "9"
      },
      {
        "E": "Ayiloor'",
        "M": "അയിലൂര്‍'",
        "BT": "5",
        "BID": "108",
        "DID": "9"
      },
      {
        "E": "Vadavannur'",
        "M": "വടവന്നൂര്‍'",
        "BT": "5",
        "BID": "107",
        "DID": "9"
      },
      {
        "E": "Pudunagaram'",
        "M": "പുതുനഗരം'",
        "BT": "5",
        "BID": "107",
        "DID": "9"
      },
      {
        "E": "Chittur'",
        "M": "ചിറ്റൂര്‍'",
        "BT": "2",
        "BID": "106",
        "DID": "9"
      },
      {
        "E": "Kollengode'",
        "M": "കൊല്ലങ്കോട്'",
        "BT": "2",
        "BID": "107",
        "DID": "9"
      },
      {
        "E": "Nenmara'",
        "M": "നെന്മാറ'",
        "BT": "2",
        "BID": "108",
        "DID": "9"
      },
      {
        "E": "Alathur'",
        "M": "ആലത്തൂര്‍'",
        "BT": "2",
        "BID": "109",
        "DID": "9"
      },
      {
        "E": "Muthalamada'",
        "M": "മുതലമട'",
        "BT": "5",
        "BID": "107",
        "DID": "9"
      },
      {
        "E": "Malampuzha'",
        "M": "മലമ്പുഴ'",
        "BT": "2",
        "BID": "110",
        "DID": "9"
      },
      {
        "E": "Thenkara'",
        "M": "തെങ്കര'",
        "BT": "5",
        "BID": "102",
        "DID": "9"
      },
      {
        "E": "Mannarkad'",
        "M": "മണ്ണാര്‍ക്കാട്'",
        "BT": "3",
        "BID": null,
        "DID": "9"
      },
      {
        "E": "Cherpulassery'",
        "M": "ചെര്‍പുളശ്ശേരി'",
        "BT": "3",
        "BID": null,
        "DID": "9"
      },
      {
        "E": "Pattambi'",
        "M": "പട്ടാമ്പി'",
        "BT": "3",
        "BID": null,
        "DID": "9"
      },
      {
        "E": "Palakkad'",
        "M": "പാലക്കാട്'",
        "BT": "3",
        "BID": null,
        "DID": "9"
      },
      {
        "E": "Polpully'",
        "M": "പൊല്‍പ്പുള്ളി'",
        "BT": "5",
        "BID": "110",
        "DID": "9"
      },
      {
        "E": "Elappully'",
        "M": "എലപ്പുള്ളി'",
        "BT": "5",
        "BID": "110",
        "DID": "9"
      },
      {
        "E": "Pudusseri'",
        "M": "പുതുശ്ശേരി'",
        "BT": "5",
        "BID": "110",
        "DID": "9"
      },
      {
        "E": "Peruvemba'",
        "M": "പെരുവെമ്പ്'",
        "BT": "5",
        "BID": "110",
        "DID": "9"
      },
      {
        "E": "Puduppariyaram'",
        "M": "പുതുപ്പരിയാരം'",
        "BT": "5",
        "BID": "110",
        "DID": "9"
      },
      {
        "E": "Marutharode'",
        "M": "മരുതറോഡ്'",
        "BT": "5",
        "BID": "110",
        "DID": "9"
      },
      {
        "E": "Malampuzha'",
        "M": "മലമ്പുഴ'",
        "BT": "5",
        "BID": "110",
        "DID": "9"
      },
      {
        "E": "Akathethara'",
        "M": "അകത്തേത്തറ'",
        "BT": "5",
        "BID": "110",
        "DID": "9"
      },
      {
        "E": "Kannambra'",
        "M": "കണ്ണമ്പ്ര'",
        "BT": "5",
        "BID": "109",
        "DID": "9"
      },
      {
        "E": "Vadakkencheri'",
        "M": "വടക്കഞ്ചരി'",
        "BT": "5",
        "BID": "109",
        "DID": "9"
      },
      {
        "E": "Vandazhy'",
        "M": "വണ്ടാഴി'",
        "BT": "5",
        "BID": "109",
        "DID": "9"
      },
      {
        "E": "Tarur'",
        "M": "തരൂര്‍'",
        "BT": "5",
        "BID": "109",
        "DID": "9"
      },
      {
        "E": "Puducode'",
        "M": "പുതുക്കോട്'",
        "BT": "5",
        "BID": "109",
        "DID": "9"
      },
      {
        "E": "Kizhakkencherry'",
        "M": "കിഴക്കഞ്ചരി'",
        "BT": "5",
        "BID": "109",
        "DID": "9"
      },
      {
        "E": "Kavassery'",
        "M": "കാവശ്ശേരി'",
        "BT": "5",
        "BID": "109",
        "DID": "9"
      },
      {
        "E": "Erimayur'",
        "M": "എരിമയൂര്‍'",
        "BT": "5",
        "BID": "109",
        "DID": "9"
      },
      {
        "E": "Alathur'",
        "M": "ആലത്തൂര്‍'",
        "BT": "5",
        "BID": "109",
        "DID": "9"
      },
      {
        "E": "Nenmara'",
        "M": "നെന്മാറ'",
        "BT": "5",
        "BID": "108",
        "DID": "9"
      },
      {
        "E": "Melarcode'",
        "M": "മേലാര്‍കോട്'",
        "BT": "5",
        "BID": "108",
        "DID": "9"
      },
      {
        "E": "Pallassana'",
        "M": "പല്ലശ്ശന'",
        "BT": "5",
        "BID": "108",
        "DID": "9"
      },
      {
        "E": "Trithala'",
        "M": "തൃത്താല'",
        "BT": "2",
        "BID": "98",
        "DID": "9"
      },
      {
        "E": "Pattambi'",
        "M": "പട്ടാമ്പി'",
        "BT": "2",
        "BID": "99",
        "DID": "9"
      },
      {
        "E": "Ottapalam'",
        "M": "ഒറ്റപ്പാലം'",
        "BT": "2",
        "BID": "100",
        "DID": "9"
      },
      {
        "E": "Sreekrishnapuram'",
        "M": "ശ്രീകൃഷ്ണപുരം'",
        "BT": "2",
        "BID": "101",
        "DID": "9"
      },
      {
        "E": "Mannarkkad'",
        "M": "മണ്ണാര്‍ക്കാട്'",
        "BT": "2",
        "BID": "102",
        "DID": "9"
      },
      {
        "E": "Attappady'",
        "M": "അട്ടപ്പാടി'",
        "BT": "2",
        "BID": "103",
        "DID": "9"
      },
      {
        "E": "Palakkad'",
        "M": "പാലക്കാട്'",
        "BT": "2",
        "BID": "104",
        "DID": "9"
      },
      {
        "E": "Ottapalam'",
        "M": "ഒറ്റപ്പാലം'",
        "BT": "3",
        "BID": null,
        "DID": "9"
      },
      {
        "E": "Shoranur'",
        "M": "ഷൊര്‍ണ്ണൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "9"
      },
      {
        "E": "Chittur Tattamangalam'",
        "M": "ചിറ്റൂര്‍ തത്തമംഗലം'",
        "BT": "3",
        "BID": null,
        "DID": "9"
      },
      {
        "E": "Kuzhalmannam'",
        "M": "കുഴല്‍മന്ദം'",
        "BT": "2",
        "BID": "105",
        "DID": "9"
      },
      {
        "E": "Anakkara'",
        "M": "ആനക്കര'",
        "BT": "5",
        "BID": "98",
        "DID": "9"
      },
      {
        "E": "Chalissery'",
        "M": "ചാലിശ്ശേരി'",
        "BT": "5",
        "BID": "98",
        "DID": "9"
      },
      {
        "E": "Kappur'",
        "M": "കപ്പൂര്‍'",
        "BT": "5",
        "BID": "98",
        "DID": "9"
      },
      {
        "E": "Nagalassery'",
        "M": "നാഗലശ്ശേരി'",
        "BT": "5",
        "BID": "98",
        "DID": "9"
      },
      {
        "E": "Pattithara'",
        "M": "പട്ടിത്തറ'",
        "BT": "5",
        "BID": "98",
        "DID": "9"
      },
      {
        "E": "Thirumittacode'",
        "M": "തിരുമിറ്റക്കോട്'",
        "BT": "5",
        "BID": "98",
        "DID": "9"
      },
      {
        "E": "Trithala'",
        "M": "തൃത്താല'",
        "BT": "5",
        "BID": "98",
        "DID": "9"
      },
      {
        "E": "Koppam'",
        "M": "കൊപ്പം'",
        "BT": "5",
        "BID": "99",
        "DID": "9"
      },
      {
        "E": "Kulukkallur'",
        "M": "കുലുക്കല്ലൂര്‍'",
        "BT": "5",
        "BID": "99",
        "DID": "9"
      },
      {
        "E": "Muthuthala'",
        "M": "മുതുതല'",
        "BT": "5",
        "BID": "99",
        "DID": "9"
      },
      {
        "E": "Nellaya'",
        "M": "നെല്ലായ'",
        "BT": "5",
        "BID": "99",
        "DID": "9"
      },
      {
        "E": "Ongallur'",
        "M": "ഓങ്ങല്ലൂര്‍'",
        "BT": "5",
        "BID": "99",
        "DID": "9"
      },
      {
        "E": "Paruthur'",
        "M": "പരുതൂര്‍'",
        "BT": "5",
        "BID": "99",
        "DID": "9"
      },
      {
        "E": "Thiruvegappura'",
        "M": "തിരുവേഗപ്പുറ'",
        "BT": "5",
        "BID": "99",
        "DID": "9"
      },
      {
        "E": "Vallapuzha'",
        "M": "വല്ലപ്പുഴ'",
        "BT": "5",
        "BID": "99",
        "DID": "9"
      },
      {
        "E": "Vilayur'",
        "M": "വിളയൂര്‍'",
        "BT": "5",
        "BID": "99",
        "DID": "9"
      },
      {
        "E": "Ambalappara'",
        "M": "അമ്പലപ്പാറ'",
        "BT": "5",
        "BID": "100",
        "DID": "9"
      },
      {
        "E": "Ananganadi'",
        "M": "അനങ്ങനടി'",
        "BT": "5",
        "BID": "100",
        "DID": "9"
      },
      {
        "E": "Chalavara'",
        "M": "ചളവറ'",
        "BT": "5",
        "BID": "100",
        "DID": "9"
      },
      {
        "E": "Lakkidi - Perur'",
        "M": "ലെക്കിടി  പേരൂര്‍'",
        "BT": "5",
        "BID": "100",
        "DID": "9"
      },
      {
        "E": "Vaniamkulam'",
        "M": "വാണിയംകുളം'",
        "BT": "5",
        "BID": "100",
        "DID": "9"
      },
      {
        "E": "Kadampazhipuram'",
        "M": "കടമ്പഴിപ്പുറം'",
        "BT": "5",
        "BID": "101",
        "DID": "9"
      },
      {
        "E": "Karimpuzha'",
        "M": "കരിമ്പുഴ'",
        "BT": "5",
        "BID": "101",
        "DID": "9"
      },
      {
        "E": "Pookkottukavu'",
        "M": "പൂക്കോട്ടുകാവ്'",
        "BT": "5",
        "BID": "101",
        "DID": "9"
      },
      {
        "E": "Sreekrishnapuram'",
        "M": "ശ്രീകൃഷ്ണപുരം'",
        "BT": "5",
        "BID": "101",
        "DID": "9"
      },
      {
        "E": "Trikkaderi'",
        "M": "തൃക്കടീരി'",
        "BT": "5",
        "BID": "101",
        "DID": "9"
      },
      {
        "E": "Vellinezhi'",
        "M": "വെള്ളിനേഴി'",
        "BT": "5",
        "BID": "101",
        "DID": "9"
      },
      {
        "E": "Alanallur'",
        "M": "അലനല്ലൂര്‍'",
        "BT": "5",
        "BID": "102",
        "DID": "9"
      },
      {
        "E": "Karakurussi'",
        "M": "കാരാകുറുശ്ശി'",
        "BT": "5",
        "BID": "102",
        "DID": "9"
      },
      {
        "E": "Karimba'",
        "M": "കരിമ്പ'",
        "BT": "5",
        "BID": "102",
        "DID": "9"
      },
      {
        "E": "Kottopadam'",
        "M": "കോട്ടോപ്പാടം'",
        "BT": "5",
        "BID": "102",
        "DID": "9"
      },
      {
        "E": "Kumaramputhur'",
        "M": "കുമരംപുത്തൂര്‍'",
        "BT": "5",
        "BID": "102",
        "DID": "9"
      },
      {
        "E": "Kanhirapuzha'",
        "M": "കാഞ്ഞിരപുഴ'",
        "BT": "5",
        "BID": "102",
        "DID": "9"
      },
      {
        "E": "Thachanattukara'",
        "M": "തച്ചനാട്ടുകര'",
        "BT": "5",
        "BID": "102",
        "DID": "9"
      },
      {
        "E": "Tachampara'",
        "M": "തച്ചമ്പാറ'",
        "BT": "5",
        "BID": "102",
        "DID": "9"
      },
      {
        "E": "Agali'",
        "M": "അഗളി'",
        "BT": "5",
        "BID": "103",
        "DID": "9"
      },
      {
        "E": "Pudur'",
        "M": "പുതൂര്‍'",
        "BT": "5",
        "BID": "103",
        "DID": "9"
      },
      {
        "E": "Sholayoor'",
        "M": "ഷോളയൂര്‍'",
        "BT": "5",
        "BID": "103",
        "DID": "9"
      },
      {
        "E": "Kodumbu'",
        "M": "കൊടുമ്പ്'",
        "BT": "5",
        "BID": "104",
        "DID": "9"
      },
      {
        "E": "Keralassery'",
        "M": "കേരളശ്ശേരി'",
        "BT": "5",
        "BID": "104",
        "DID": "9"
      },
      {
        "E": "Kongad'",
        "M": "കോങ്ങാട്'",
        "BT": "5",
        "BID": "104",
        "DID": "9"
      },
      {
        "E": "Mankara'",
        "M": "മങ്കര'",
        "BT": "5",
        "BID": "104",
        "DID": "9"
      },
      {
        "E": "Mannur'",
        "M": "മണ്ണൂര്‍'",
        "BT": "5",
        "BID": "104",
        "DID": "9"
      },
      {
        "E": "Mundur'",
        "M": "മുണ്ടൂര്‍'",
        "BT": "5",
        "BID": "104",
        "DID": "9"
      },
      {
        "E": "Parali'",
        "M": "പറളി'",
        "BT": "5",
        "BID": "104",
        "DID": "9"
      },
      {
        "E": "Pirayiri'",
        "M": "പിരായിരി'",
        "BT": "5",
        "BID": "104",
        "DID": "9"
      },
      {
        "E": "Angadippuram'",
        "M": "അങ്ങാടിപ്പുറം'",
        "BT": "5",
        "BID": "117",
        "DID": "10"
      },
      {
        "E": "Parappanangadi'",
        "M": "പരപ്പനങ്ങാടി'",
        "BT": "3",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Tirur'",
        "M": "തിരൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Manjeri'",
        "M": "മഞ്ചേരി'",
        "BT": "3",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Ponnani'",
        "M": "പൊന്നാനി'",
        "BT": "3",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Perinthalmanna'",
        "M": "പെരിന്തല്‍മണ്ണ'",
        "BT": "3",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Malappuram'",
        "M": "മലപ്പുറം'",
        "BT": "1",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Muthuvalloor'",
        "M": "മുതുവല്ലൂര്‍'",
        "BT": "5",
        "BID": "114",
        "DID": "10"
      },
      {
        "E": "Kaladi'",
        "M": "കാലടി'",
        "BT": "5",
        "BID": "123",
        "DID": "10"
      },
      {
        "E": "Amarambalam'",
        "M": "അമരമ്പലം'",
        "BT": "5",
        "BID": "111",
        "DID": "10"
      },
      {
        "E": "Chaliyar'",
        "M": "ചാലിയാര്‍'",
        "BT": "5",
        "BID": "111",
        "DID": "10"
      },
      {
        "E": "Chungathara'",
        "M": "ചുങ്കത്തറ'",
        "BT": "5",
        "BID": "111",
        "DID": "10"
      },
      {
        "E": "Karulai'",
        "M": "കരുളായ്'",
        "BT": "5",
        "BID": "111",
        "DID": "10"
      },
      {
        "E": "Moothedam'",
        "M": "മൂത്തേടം'",
        "BT": "5",
        "BID": "111",
        "DID": "10"
      },
      {
        "E": "Vazhikkadavu'",
        "M": "വഴിക്കടവ്'",
        "BT": "5",
        "BID": "111",
        "DID": "10"
      },
      {
        "E": "Edakkara'",
        "M": "എടക്കര'",
        "BT": "5",
        "BID": "111",
        "DID": "10"
      },
      {
        "E": "Kalikavu'",
        "M": "കാളികാവ്'",
        "BT": "5",
        "BID": "111",
        "DID": "10"
      },
      {
        "E": "Pothukallu'",
        "M": "പോത്തുകല്ല്'",
        "BT": "5",
        "BID": "111",
        "DID": "10"
      },
      {
        "E": "Chokkad'",
        "M": "ചോക്കാട്'",
        "BT": "5",
        "BID": "111",
        "DID": "10"
      },
      {
        "E": "Mampad'",
        "M": "മമ്പാട്'",
        "BT": "5",
        "BID": "112",
        "DID": "10"
      },
      {
        "E": "Karuvarakundu'",
        "M": "കരുവാരകുണ്ട്'",
        "BT": "5",
        "BID": "112",
        "DID": "10"
      },
      {
        "E": "Pandikkad'",
        "M": "പാണ്ടിക്കാട്'",
        "BT": "5",
        "BID": "112",
        "DID": "10"
      },
      {
        "E": "Edavanna'",
        "M": "എടവണ്ണ'",
        "BT": "5",
        "BID": "112",
        "DID": "10"
      },
      {
        "E": "Porur'",
        "M": "പോരൂര്‍'",
        "BT": "5",
        "BID": "112",
        "DID": "10"
      },
      {
        "E": "Thrikkalangodu'",
        "M": "തൃക്കലങ്ങോട്'",
        "BT": "5",
        "BID": "112",
        "DID": "10"
      },
      {
        "E": "Thiruvali'",
        "M": "തിരുവാലി'",
        "BT": "5",
        "BID": "112",
        "DID": "10"
      },
      {
        "E": "Tuvvur'",
        "M": "തുവ്വൂര്‍'",
        "BT": "5",
        "BID": "112",
        "DID": "10"
      },
      {
        "E": "Wandoor'",
        "M": "വണ്ടൂര്‍'",
        "BT": "5",
        "BID": "112",
        "DID": "10"
      },
      {
        "E": "Chelembra'",
        "M": "ചേലേമ്പ്ര'",
        "BT": "5",
        "BID": "113",
        "DID": "10"
      },
      {
        "E": "Cherukavu'",
        "M": "ചെറുകാവ്'",
        "BT": "5",
        "BID": "113",
        "DID": "10"
      },
      {
        "E": "Pallikkal'",
        "M": "പള്ളിക്കല്‍'",
        "BT": "5",
        "BID": "113",
        "DID": "10"
      },
      {
        "E": "Vazhayur'",
        "M": "വാഴയൂര്‍'",
        "BT": "5",
        "BID": "113",
        "DID": "10"
      },
      {
        "E": "Vazhakkad'",
        "M": "വാഴക്കാട്'",
        "BT": "5",
        "BID": "113",
        "DID": "10"
      },
      {
        "E": "Pulikkal'",
        "M": "പുളിക്കല്‍'",
        "BT": "5",
        "BID": "113",
        "DID": "10"
      },
      {
        "E": "Urangattiri'",
        "M": "ഊര്‍ങ്ങാട്ടിരി'",
        "BT": "5",
        "BID": "114",
        "DID": "10"
      },
      {
        "E": "Kavanur'",
        "M": "കാവനൂര്‍'",
        "BT": "5",
        "BID": "114",
        "DID": "10"
      },
      {
        "E": "Keezhuparamba'",
        "M": "കീഴുപറമ്പ്'",
        "BT": "5",
        "BID": "114",
        "DID": "10"
      },
      {
        "E": "Pulpatta'",
        "M": "പുല്‍പ്പറ്റ'",
        "BT": "5",
        "BID": "114",
        "DID": "10"
      },
      {
        "E": "Cheacode'",
        "M": "ചീക്കോട്'",
        "BT": "5",
        "BID": "114",
        "DID": "10"
      },
      {
        "E": "Kuzhimanna'",
        "M": "കുഴിമണ്ണ'",
        "BT": "5",
        "BID": "114",
        "DID": "10"
      },
      {
        "E": "Areacode'",
        "M": "അരീക്കോട്'",
        "BT": "5",
        "BID": "114",
        "DID": "10"
      },
      {
        "E": "Anakkayam'",
        "M": "ആനക്കയം'",
        "BT": "5",
        "BID": "115",
        "DID": "10"
      },
      {
        "E": "Morayur'",
        "M": "മൊറയൂര്‍'",
        "BT": "5",
        "BID": "115",
        "DID": "10"
      },
      {
        "E": "Oorakam'",
        "M": "ഊരകം'",
        "BT": "5",
        "BID": "115",
        "DID": "10"
      },
      {
        "E": "Ponmala'",
        "M": "പൊന്‍മള'",
        "BT": "5",
        "BID": "115",
        "DID": "10"
      },
      {
        "E": "Pookkottur'",
        "M": "പൂക്കോട്ടൂര്‍'",
        "BT": "5",
        "BID": "115",
        "DID": "10"
      },
      {
        "E": "Aliparamba'",
        "M": "ആലിപ്പറമ്പ്'",
        "BT": "5",
        "BID": "116",
        "DID": "10"
      },
      {
        "E": "Edappatta'",
        "M": "എടപ്പറ്റ'",
        "BT": "5",
        "BID": "116",
        "DID": "10"
      },
      {
        "E": "Elamkulam'",
        "M": "ഏലംകുളം'",
        "BT": "5",
        "BID": "116",
        "DID": "10"
      },
      {
        "E": "Melattur'",
        "M": "മേലാറ്റൂര്‍'",
        "BT": "5",
        "BID": "116",
        "DID": "10"
      },
      {
        "E": "Keezhattur'",
        "M": "കീഴാറ്റൂര്‍'",
        "BT": "5",
        "BID": "116",
        "DID": "10"
      },
      {
        "E": "Thazhekkode'",
        "M": "താഴെക്കോട്'",
        "BT": "5",
        "BID": "116",
        "DID": "10"
      },
      {
        "E": "Vettathur'",
        "M": "വെട്ടത്തൂര്‍'",
        "BT": "5",
        "BID": "116",
        "DID": "10"
      },
      {
        "E": "Kuruva'",
        "M": "കുറുവ'",
        "BT": "5",
        "BID": "117",
        "DID": "10"
      },
      {
        "E": "Mankada'",
        "M": "മങ്കട'",
        "BT": "5",
        "BID": "117",
        "DID": "10"
      },
      {
        "E": "Makkaraparamba'",
        "M": "മക്കരപറമ്പ്'",
        "BT": "5",
        "BID": "117",
        "DID": "10"
      },
      {
        "E": "Pulamanthole'",
        "M": "പുലാമന്തോള്‍'",
        "BT": "5",
        "BID": "117",
        "DID": "10"
      },
      {
        "E": "Moorkkanad'",
        "M": "മൂര്‍ക്കനാട്'",
        "BT": "5",
        "BID": "117",
        "DID": "10"
      },
      {
        "E": "Koottilangadi'",
        "M": "കൂട്ടിലങ്ങാടി'",
        "BT": "5",
        "BID": "117",
        "DID": "10"
      },
      {
        "E": "Puzhakkattiri'",
        "M": "പുഴക്കാട്ടിരി'",
        "BT": "5",
        "BID": "117",
        "DID": "10"
      },
      {
        "E": "Kodur'",
        "M": "കോഡൂര്‍'",
        "BT": "5",
        "BID": "117",
        "DID": "10"
      },
      {
        "E": "Malappuram'",
        "M": "മലപ്പുറം'",
        "BT": "3",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Athavanad'",
        "M": "ആതവനാട്'",
        "BT": "5",
        "BID": "118",
        "DID": "10"
      },
      {
        "E": "Edayur'",
        "M": "എടയൂര്‍'",
        "BT": "5",
        "BID": "118",
        "DID": "10"
      },
      {
        "E": "Irimbiliyam'",
        "M": "ഇരിമ്പിളിയം'",
        "BT": "5",
        "BID": "118",
        "DID": "10"
      },
      {
        "E": "Marakkara'",
        "M": "മാറാക്കര'",
        "BT": "5",
        "BID": "118",
        "DID": "10"
      },
      {
        "E": "Kuttippuram'",
        "M": "കുറ്റിപ്പുറം'",
        "BT": "5",
        "BID": "118",
        "DID": "10"
      },
      {
        "E": "ARNagar'",
        "M": "അബ്ദുറഹിമാന്‍ നഗര്‍'",
        "BT": "5",
        "BID": "119",
        "DID": "10"
      },
      {
        "E": "Edarikode'",
        "M": "എടരിക്കോട്'",
        "BT": "5",
        "BID": "119",
        "DID": "10"
      },
      {
        "E": "Othukkungal'",
        "M": "ഒതുക്കുങ്ങല്‍'",
        "BT": "5",
        "BID": "119",
        "DID": "10"
      },
      {
        "E": "Parappur'",
        "M": "പറപ്പൂര്‍'",
        "BT": "5",
        "BID": "119",
        "DID": "10"
      },
      {
        "E": "Thennala'",
        "M": "തെന്നല'",
        "BT": "5",
        "BID": "119",
        "DID": "10"
      },
      {
        "E": "Vengara'",
        "M": "വേങ്ങര'",
        "BT": "5",
        "BID": "119",
        "DID": "10"
      },
      {
        "E": "Kannamangalam'",
        "M": "കണ്ണമംഗലം'",
        "BT": "5",
        "BID": "119",
        "DID": "10"
      },
      {
        "E": "Thenhipalam'",
        "M": "തേഞ്ഞിപ്പലം'",
        "BT": "5",
        "BID": "120",
        "DID": "10"
      },
      {
        "E": "Vallikkunnu'",
        "M": "വള്ളിക്കുന്ന്'",
        "BT": "5",
        "BID": "120",
        "DID": "10"
      },
      {
        "E": "Moonniyur'",
        "M": "മൂന്നിയൂര്‍'",
        "BT": "5",
        "BID": "120",
        "DID": "10"
      },
      {
        "E": "Nannambra'",
        "M": "നന്നമ്പ്ര'",
        "BT": "5",
        "BID": "120",
        "DID": "10"
      },
      {
        "E": "Peruvalloor'",
        "M": "പെരുവള്ളൂര്‍'",
        "BT": "5",
        "BID": "120",
        "DID": "10"
      },
      {
        "E": "Cheriyamundam'",
        "M": "ചെറിയമുണ്ടം'",
        "BT": "5",
        "BID": "121",
        "DID": "10"
      },
      {
        "E": "Kalpakanchery'",
        "M": "കല്‍പകഞ്ചരി'",
        "BT": "5",
        "BID": "121",
        "DID": "10"
      },
      {
        "E": "Ozhur'",
        "M": "ഒഴൂര്‍'",
        "BT": "5",
        "BID": "121",
        "DID": "10"
      },
      {
        "E": "Tanalur'",
        "M": "താനാളൂര്‍'",
        "BT": "5",
        "BID": "121",
        "DID": "10"
      },
      {
        "E": "Valavannur'",
        "M": "വളവന്നൂര്‍'",
        "BT": "5",
        "BID": "121",
        "DID": "10"
      },
      {
        "E": "Ponmundam'",
        "M": "പൊന്മുണ്ടം'",
        "BT": "5",
        "BID": "121",
        "DID": "10"
      },
      {
        "E": "Niramaruthur'",
        "M": "നിറമരുതൂര്‍'",
        "BT": "5",
        "BID": "121",
        "DID": "10"
      },
      {
        "E": "Perumanna Klari'",
        "M": "പെരുമണ്ണ ക്ളാരി'",
        "BT": "5",
        "BID": "121",
        "DID": "10"
      },
      {
        "E": "Purathur'",
        "M": "പുറത്തൂര്‍'",
        "BT": "5",
        "BID": "122",
        "DID": "10"
      },
      {
        "E": "Thalakkad'",
        "M": "തലക്കാട്'",
        "BT": "5",
        "BID": "122",
        "DID": "10"
      },
      {
        "E": "Triprangode'",
        "M": "തൃപ്രങ്ങോട്'",
        "BT": "5",
        "BID": "122",
        "DID": "10"
      },
      {
        "E": "Vettom'",
        "M": "വെട്ടം'",
        "BT": "5",
        "BID": "122",
        "DID": "10"
      },
      {
        "E": "Thirunavaya'",
        "M": "തിരുനാവായ'",
        "BT": "5",
        "BID": "122",
        "DID": "10"
      },
      {
        "E": "Mangalam'",
        "M": "മംഗലം'",
        "BT": "5",
        "BID": "122",
        "DID": "10"
      },
      {
        "E": "Tavanur'",
        "M": "തവനൂര്‍'",
        "BT": "5",
        "BID": "123",
        "DID": "10"
      },
      {
        "E": "Vattamkulam'",
        "M": "വട്ടംകുളം'",
        "BT": "5",
        "BID": "123",
        "DID": "10"
      },
      {
        "E": "Edapal'",
        "M": "എടപ്പാള്‍'",
        "BT": "5",
        "BID": "123",
        "DID": "10"
      },
      {
        "E": "Alamkode'",
        "M": "ആലംകോട്'",
        "BT": "5",
        "BID": "124",
        "DID": "10"
      },
      {
        "E": "Maranchery'",
        "M": "മാറഞ്ചരി'",
        "BT": "5",
        "BID": "124",
        "DID": "10"
      },
      {
        "E": "Nannammukku'",
        "M": "നന്നംമുക്ക്'",
        "BT": "5",
        "BID": "124",
        "DID": "10"
      },
      {
        "E": "Perumpadappa'",
        "M": "പെരുമ്പടപ്പ്'",
        "BT": "5",
        "BID": "124",
        "DID": "10"
      },
      {
        "E": "Veliancode'",
        "M": "വെളിയങ്കോട്'",
        "BT": "5",
        "BID": "124",
        "DID": "10"
      },
      {
        "E": "Perumpadappa'",
        "M": "പെരുമ്പടപ്പ്'",
        "BT": "2",
        "BID": "124",
        "DID": "10"
      },
      {
        "E": "Kottakkal '",
        "M": "കോട്ടക്കല്‍ '",
        "BT": "3",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Nilambur '",
        "M": "നിലമ്പൂര്‍ '",
        "BT": "3",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Ponnani'",
        "M": "പൊന്നാനി'",
        "BT": "2",
        "BID": "123",
        "DID": "10"
      },
      {
        "E": "Kalikavu '",
        "M": "കാളികാവ് '",
        "BT": "2",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Tirur'",
        "M": "തിരൂര്‍'",
        "BT": "2",
        "BID": "122",
        "DID": "10"
      },
      {
        "E": "Tanur'",
        "M": "താനൂര്‍'",
        "BT": "2",
        "BID": "121",
        "DID": "10"
      },
      {
        "E": "Tirurangadi'",
        "M": "തിരൂരങ്ങാടി'",
        "BT": "2",
        "BID": "120",
        "DID": "10"
      },
      {
        "E": "Vengara'",
        "M": "വേങ്ങര'",
        "BT": "2",
        "BID": "119",
        "DID": "10"
      },
      {
        "E": "Kuttippuram'",
        "M": "കുറ്റിപ്പുറം'",
        "BT": "2",
        "BID": "118",
        "DID": "10"
      },
      {
        "E": "Mankada'",
        "M": "മങ്കട'",
        "BT": "2",
        "BID": "117",
        "DID": "10"
      },
      {
        "E": "Perinthalmanna'",
        "M": "പെരിന്തല്‍മണ്ണ'",
        "BT": "2",
        "BID": "116",
        "DID": "10"
      },
      {
        "E": "Malappuram'",
        "M": "മലപ്പുറം'",
        "BT": "2",
        "BID": "115",
        "DID": "10"
      },
      {
        "E": "Areacode'",
        "M": "അരീക്കോട്'",
        "BT": "2",
        "BID": "114",
        "DID": "10"
      },
      {
        "E": "Kondotty'",
        "M": "കൊണ്ടോട്ടി'",
        "BT": "2",
        "BID": "113",
        "DID": "10"
      },
      {
        "E": "Wandoor'",
        "M": "വണ്ടൂര്‍'",
        "BT": "2",
        "BID": "112",
        "DID": "10"
      },
      {
        "E": "Nilambur'",
        "M": "നിലമ്പൂര്‍'",
        "BT": "2",
        "BID": "111",
        "DID": "10"
      },
      {
        "E": "Kondotty'",
        "M": "കൊണ്ടോട്ടി'",
        "BT": "3",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Valanchery'",
        "M": "വളാഞ്ചേരി'",
        "BT": "3",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Tirurangadi'",
        "M": "തിരൂരങ്ങാടി'",
        "BT": "3",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Tanur'",
        "M": "താനൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "10"
      },
      {
        "E": "Valayam'",
        "M": "വളയം'",
        "BT": "5",
        "BID": "126",
        "DID": "11"
      },
      {
        "E": "Vanimal'",
        "M": "വാണിമല്‍'",
        "BT": "5",
        "BID": "126",
        "DID": "11"
      },
      {
        "E": "Kunnummal'",
        "M": "കുന്നുമ്മല്‍'",
        "BT": "5",
        "BID": "127",
        "DID": "11"
      },
      {
        "E": "Nadapuram'",
        "M": "നാദാപുരം'",
        "BT": "5",
        "BID": "127",
        "DID": "11"
      },
      {
        "E": "Kayakkody'",
        "M": "കായക്കൊടി'",
        "BT": "5",
        "BID": "127",
        "DID": "11"
      },
      {
        "E": "Kavilumpara'",
        "M": "കാവിലുമ്പാറ'",
        "BT": "5",
        "BID": "127",
        "DID": "11"
      },
      {
        "E": "Kuttiadi'",
        "M": "കുറ്റ്യാടി'",
        "BT": "5",
        "BID": "127",
        "DID": "11"
      },
      {
        "E": "Maruthonkara'",
        "M": "മരുതോങ്കര'",
        "BT": "5",
        "BID": "127",
        "DID": "11"
      },
      {
        "E": "Velom'",
        "M": "വേളം'",
        "BT": "5",
        "BID": "127",
        "DID": "11"
      },
      {
        "E": "Narippatta'",
        "M": "നരിപ്പറ്റ'",
        "BT": "5",
        "BID": "127",
        "DID": "11"
      },
      {
        "E": "Ayancheri'",
        "M": "ആയഞ്ചരി'",
        "BT": "5",
        "BID": "128",
        "DID": "11"
      },
      {
        "E": "Villiappally'",
        "M": "വില്യാപ്പള്ളി'",
        "BT": "5",
        "BID": "128",
        "DID": "11"
      },
      {
        "E": "Maniyur'",
        "M": "മണിയൂര്‍'",
        "BT": "5",
        "BID": "128",
        "DID": "11"
      },
      {
        "E": "Thiruvallur'",
        "M": "തിരുവള്ളൂര്‍'",
        "BT": "5",
        "BID": "128",
        "DID": "11"
      },
      {
        "E": "Thurayur'",
        "M": "തുറയൂര്‍'",
        "BT": "5",
        "BID": "129",
        "DID": "11"
      },
      {
        "E": "Keezhariyur'",
        "M": "കീഴരിയൂര്‍'",
        "BT": "5",
        "BID": "129",
        "DID": "11"
      },
      {
        "E": "Thikkodi'",
        "M": "തിക്കോടി'",
        "BT": "5",
        "BID": "129",
        "DID": "11"
      },
      {
        "E": "Meppayur'",
        "M": "മേപ്പയൂര്‍'",
        "BT": "5",
        "BID": "129",
        "DID": "11"
      },
      {
        "E": "Cheruvannur'",
        "M": "ചെറുവണ്ണൂര്‍'",
        "BT": "5",
        "BID": "130",
        "DID": "11"
      },
      {
        "E": "Nochad'",
        "M": "നൊച്ചാട്'",
        "BT": "5",
        "BID": "130",
        "DID": "11"
      },
      {
        "E": "Changaroth'",
        "M": "ചങ്ങരോത്ത്'",
        "BT": "5",
        "BID": "130",
        "DID": "11"
      },
      {
        "E": "Kayanna'",
        "M": "കായണ്ണ'",
        "BT": "5",
        "BID": "130",
        "DID": "11"
      },
      {
        "E": "Koothali'",
        "M": "കൂത്താളി'",
        "BT": "5",
        "BID": "130",
        "DID": "11"
      },
      {
        "E": "Perambra'",
        "M": "പേരാമ്പ്ര'",
        "BT": "5",
        "BID": "130",
        "DID": "11"
      },
      {
        "E": "Chakkittapara'",
        "M": "ചക്കിട്ടപ്പാറ'",
        "BT": "5",
        "BID": "130",
        "DID": "11"
      },
      {
        "E": "Balussery'",
        "M": "ബാലുശ്ശേരി'",
        "BT": "5",
        "BID": "131",
        "DID": "11"
      },
      {
        "E": "Naduvannur'",
        "M": "നടുവണ്ണൂര്‍'",
        "BT": "5",
        "BID": "131",
        "DID": "11"
      },
      {
        "E": "Atholi'",
        "M": "അത്തോളി'",
        "BT": "5",
        "BID": "131",
        "DID": "11"
      },
      {
        "E": "Ulliyeri'",
        "M": "ഉള്ളിയേരി'",
        "BT": "5",
        "BID": "131",
        "DID": "11"
      },
      {
        "E": "Kottur'",
        "M": "കോട്ടൂര്‍'",
        "BT": "5",
        "BID": "131",
        "DID": "11"
      },
      {
        "E": "Unnikulum'",
        "M": "ഉണ്ണികുളം'",
        "BT": "5",
        "BID": "131",
        "DID": "11"
      },
      {
        "E": "Panangad'",
        "M": "പനങ്ങാട്'",
        "BT": "5",
        "BID": "131",
        "DID": "11"
      },
      {
        "E": "Koorachundu'",
        "M": "കൂരാച്ചുണ്ട്'",
        "BT": "5",
        "BID": "131",
        "DID": "11"
      },
      {
        "E": "Chemanchery'",
        "M": "ചേമഞ്ചരി'",
        "BT": "5",
        "BID": "132",
        "DID": "11"
      },
      {
        "E": "Arikkulam'",
        "M": "അരിക്കുളം'",
        "BT": "5",
        "BID": "132",
        "DID": "11"
      },
      {
        "E": "Moodadi'",
        "M": "മൂടാടി'",
        "BT": "5",
        "BID": "132",
        "DID": "11"
      },
      {
        "E": "Chengottukavu'",
        "M": "ചേങ്ങോട്ടുകാവ്'",
        "BT": "5",
        "BID": "132",
        "DID": "11"
      },
      {
        "E": "Kakkodi'",
        "M": "കക്കോടി'",
        "BT": "5",
        "BID": "133",
        "DID": "11"
      },
      {
        "E": "Chelannur'",
        "M": "ചേളന്നൂര്‍'",
        "BT": "5",
        "BID": "133",
        "DID": "11"
      },
      {
        "E": "Kakkur'",
        "M": "കാക്കൂര്‍'",
        "BT": "5",
        "BID": "133",
        "DID": "11"
      },
      {
        "E": "Nanminda'",
        "M": "നന്മണ്ട'",
        "BT": "5",
        "BID": "133",
        "DID": "11"
      },
      {
        "E": "Narikunni'",
        "M": "നരിക്കുനി'",
        "BT": "5",
        "BID": "133",
        "DID": "11"
      },
      {
        "E": "Thalakulathur'",
        "M": "തലക്കുളത്തൂര്‍'",
        "BT": "5",
        "BID": "133",
        "DID": "11"
      },
      {
        "E": "Thiruvambadi'",
        "M": "തിരുവമ്പാടി'",
        "BT": "5",
        "BID": "134",
        "DID": "11"
      },
      {
        "E": "Koodaranhi'",
        "M": "കൂടരഞ്ഞി'",
        "BT": "5",
        "BID": "134",
        "DID": "11"
      },
      {
        "E": "Kizhakkoth'",
        "M": "കിഴക്കോത്ത്'",
        "BT": "5",
        "BID": "134",
        "DID": "11"
      },
      {
        "E": "Madavoor'",
        "M": "മടവൂര്‍'",
        "BT": "5",
        "BID": "134",
        "DID": "11"
      },
      {
        "E": "Puduppady'",
        "M": "പുതുപ്പാടി'",
        "BT": "5",
        "BID": "134",
        "DID": "11"
      },
      {
        "E": "Thamarassery'",
        "M": "താമരശ്ശേരി'",
        "BT": "5",
        "BID": "134",
        "DID": "11"
      },
      {
        "E": "Omassery'",
        "M": "ഓമശ്ശേരി'",
        "BT": "5",
        "BID": "134",
        "DID": "11"
      },
      {
        "E": "Kodiyathur'",
        "M": "കൊടിയത്തൂര്‍'",
        "BT": "5",
        "BID": "135",
        "DID": "11"
      },
      {
        "E": "Feroke'",
        "M": "ഫറോക്ക്'",
        "BT": "3",
        "BID": null,
        "DID": "11"
      },
      {
        "E": "Mavoor'",
        "M": "മാവൂര്‍'",
        "BT": "5",
        "BID": "135",
        "DID": "11"
      },
      {
        "E": "Karassery'",
        "M": "കാരശ്ശേരി'",
        "BT": "5",
        "BID": "135",
        "DID": "11"
      },
      {
        "E": "Kunnamangalam'",
        "M": "കുന്ദമംഗലം'",
        "BT": "5",
        "BID": "135",
        "DID": "11"
      },
      {
        "E": "Chathamangalam'",
        "M": "ചാത്തമംഗലം'",
        "BT": "5",
        "BID": "135",
        "DID": "11"
      },
      {
        "E": "Kodanchery'",
        "M": "കോടഞ്ചരി'",
        "BT": "5",
        "BID": "135",
        "DID": "11"
      },
      {
        "E": "Peruvayal'",
        "M": "പെരുവയല്‍'",
        "BT": "5",
        "BID": "135",
        "DID": "11"
      },
      {
        "E": "Perumanna'",
        "M": "പെരുമണ്ണ'",
        "BT": "5",
        "BID": "135",
        "DID": "11"
      },
      {
        "E": "Kadalundi'",
        "M": "കടലുണ്ടി'",
        "BT": "5",
        "BID": "136",
        "DID": "11"
      },
      {
        "E": "Olavanna'",
        "M": "ഒളവണ്ണ'",
        "BT": "5",
        "BID": "136",
        "DID": "11"
      },
      {
        "E": "Kunnummal'",
        "M": "കുന്നുമ്മല്‍'",
        "BT": "2",
        "BID": "127",
        "DID": "11"
      },
      {
        "E": "Tuneri'",
        "M": "തൂണേരി'",
        "BT": "2",
        "BID": "126",
        "DID": "11"
      },
      {
        "E": "Vadakara'",
        "M": "വടകര'",
        "BT": "2",
        "BID": "125",
        "DID": "11"
      },
      {
        "E": "Balussery'",
        "M": "ബാലുശ്ശേരി'",
        "BT": "2",
        "BID": "131",
        "DID": "11"
      },
      {
        "E": "Kozhikode'",
        "M": "കോഴിക്കോട്'",
        "BT": "1",
        "BID": null,
        "DID": "11"
      },
      {
        "E": "Vadakara'",
        "M": "വടകര'",
        "BT": "3",
        "BID": null,
        "DID": "11"
      },
      {
        "E": "Panthalayani'",
        "M": "പന്തലായനി'",
        "BT": "2",
        "BID": "132",
        "DID": "11"
      },
      {
        "E": "Melady'",
        "M": "മേലടി'",
        "BT": "2",
        "BID": "129",
        "DID": "11"
      },
      {
        "E": "Thodannur'",
        "M": "തോടന്നൂര്‍'",
        "BT": "2",
        "BID": "128",
        "DID": "11"
      },
      {
        "E": "Kuruvattoor'",
        "M": "കുരുവട്ടൂര്‍'",
        "BT": "5",
        "BID": "135",
        "DID": "11"
      },
      {
        "E": "Koyilandy'",
        "M": "കൊയിലാണ്ടി'",
        "BT": "3",
        "BID": null,
        "DID": "11"
      },
      {
        "E": "Kozhikode'",
        "M": "കോഴിക്കോട്'",
        "BT": "2",
        "BID": "136",
        "DID": "11"
      },
      {
        "E": "Kunnamangalam'",
        "M": "കുന്ദമംഗലം'",
        "BT": "2",
        "BID": "135",
        "DID": "11"
      },
      {
        "E": "Koduvally'",
        "M": "കൊടുവള്ളി'",
        "BT": "2",
        "BID": "134",
        "DID": "11"
      },
      {
        "E": "Chelannur'",
        "M": "ചേളന്നൂര്‍'",
        "BT": "2",
        "BID": "133",
        "DID": "11"
      },
      {
        "E": "Kozhikode'",
        "M": "കോഴിക്കോട്'",
        "BT": "4",
        "BID": null,
        "DID": "11"
      },
      {
        "E": "Azhiyur'",
        "M": "അഴിയൂര്‍'",
        "BT": "5",
        "BID": "125",
        "DID": "11"
      },
      {
        "E": "Chorode'",
        "M": "ചോറോട്'",
        "BT": "5",
        "BID": "125",
        "DID": "11"
      },
      {
        "E": "Eramala'",
        "M": "ഏറാമല'",
        "BT": "5",
        "BID": "125",
        "DID": "11"
      },
      {
        "E": "Onchiyam'",
        "M": "ഒഞ്ചിയം'",
        "BT": "5",
        "BID": "125",
        "DID": "11"
      },
      {
        "E": "Chekkiad'",
        "M": "ചെക്യാട്'",
        "BT": "5",
        "BID": "126",
        "DID": "11"
      },
      {
        "E": "Edacheri'",
        "M": "എടച്ചേരി'",
        "BT": "5",
        "BID": "126",
        "DID": "11"
      },
      {
        "E": "Purameri'",
        "M": "പുറമേരി'",
        "BT": "5",
        "BID": "126",
        "DID": "11"
      },
      {
        "E": "Ramanattukara'",
        "M": "രാമനാട്ടുകര'",
        "BT": "3",
        "BID": null,
        "DID": "11"
      },
      {
        "E": "Mukkam'",
        "M": "മുക്കം'",
        "BT": "3",
        "BID": null,
        "DID": "11"
      },
      {
        "E": "Koduvally'",
        "M": "കൊടുവള്ളി'",
        "BT": "3",
        "BID": null,
        "DID": "11"
      },
      {
        "E": "Payyoli'",
        "M": "പയ്യോളി'",
        "BT": "3",
        "BID": null,
        "DID": "11"
      },
      {
        "E": "Tuneri'",
        "M": "തൂണേരി'",
        "BT": "5",
        "BID": "126",
        "DID": "11"
      },
      {
        "E": "Kattippara'",
        "M": "കട്ടിപ്പാറ'",
        "BT": "5",
        "BID": "134",
        "DID": "11"
      },
      {
        "E": "Perambra'",
        "M": "പേരാമ്പ്ര'",
        "BT": "2",
        "BID": "130",
        "DID": "11"
      },
      {
        "E": "Muppainad'",
        "M": "മൂപ്പൈനാട്'",
        "BT": "5",
        "BID": "139",
        "DID": "12"
      },
      {
        "E": "Meppadi'",
        "M": "മേപ്പാടി'",
        "BT": "5",
        "BID": "139",
        "DID": "12"
      },
      {
        "E": "Padinharathara'",
        "M": "പടിഞ്ഞാറത്തറ'",
        "BT": "5",
        "BID": "139",
        "DID": "12"
      },
      {
        "E": "Thariode'",
        "M": "തരിയോട്'",
        "BT": "5",
        "BID": "139",
        "DID": "12"
      },
      {
        "E": "Pozhuthana'",
        "M": "പൊഴുതന'",
        "BT": "5",
        "BID": "139",
        "DID": "12"
      },
      {
        "E": "Muttil'",
        "M": "മുട്ടില്‍'",
        "BT": "5",
        "BID": "139",
        "DID": "12"
      },
      {
        "E": "Vythiri'",
        "M": "വൈത്തിരി'",
        "BT": "5",
        "BID": "139",
        "DID": "12"
      },
      {
        "E": "Vengappally'",
        "M": "വേങ്ങപ്പള്ളി'",
        "BT": "5",
        "BID": "139",
        "DID": "12"
      },
      {
        "E": "Kottathara'",
        "M": "കോട്ടത്തറ'",
        "BT": "5",
        "BID": "139",
        "DID": "12"
      },
      {
        "E": "Pulpally'",
        "M": "പുല്‍പ്പള്ളി'",
        "BT": "5",
        "BID": "138",
        "DID": "12"
      },
      {
        "E": "Mullankolly'",
        "M": "മുള്ളന്‍കൊല്ലി'",
        "BT": "5",
        "BID": "138",
        "DID": "12"
      },
      {
        "E": "Noolpuzha'",
        "M": "നൂല്‍പ്പുഴ'",
        "BT": "5",
        "BID": "138",
        "DID": "12"
      },
      {
        "E": "Poothadi'",
        "M": "പൂതാടി'",
        "BT": "5",
        "BID": "138",
        "DID": "12"
      },
      {
        "E": "Ambalavayal'",
        "M": "അമ്പലവയല്‍'",
        "BT": "5",
        "BID": "138",
        "DID": "12"
      },
      {
        "E": "Panamaram '",
        "M": "പനമരം '",
        "BT": "2",
        "BID": null,
        "DID": "12"
      },
      {
        "E": "Kaniyambetta'",
        "M": "കണിയാമ്പറ്റ'",
        "BT": "5",
        "BID": "139",
        "DID": "12"
      },
      {
        "E": "Meenangadi'",
        "M": "മീനങ്ങാടി'",
        "BT": "5",
        "BID": "138",
        "DID": "12"
      },
      {
        "E": "Panamaram'",
        "M": "പനമരം'",
        "BT": "5",
        "BID": "137",
        "DID": "12"
      },
      {
        "E": "Thavinhal'",
        "M": "തവിഞ്ഞാല്‍'",
        "BT": "5",
        "BID": "137",
        "DID": "12"
      },
      {
        "E": "Edavaka'",
        "M": "എടവക'",
        "BT": "5",
        "BID": "137",
        "DID": "12"
      },
      {
        "E": "Thondernad'",
        "M": "തൊണ്ടര്‍നാട്'",
        "BT": "5",
        "BID": "137",
        "DID": "12"
      },
      {
        "E": "Thirunelly'",
        "M": "തിരുനെല്ലി'",
        "BT": "5",
        "BID": "137",
        "DID": "12"
      },
      {
        "E": "Vellamunda'",
        "M": "വെള്ളമുണ്ട'",
        "BT": "5",
        "BID": "137",
        "DID": "12"
      },
      {
        "E": "Kalpetta'",
        "M": "കല്‍പ്പറ്റ'",
        "BT": "3",
        "BID": null,
        "DID": "12"
      },
      {
        "E": "Mananthavady'",
        "M": "മാനന്തവാടി'",
        "BT": "2",
        "BID": "137",
        "DID": "12"
      },
      {
        "E": "Sulthan Bathery'",
        "M": "സുല്‍ത്താന്‍ ബത്തേരി'",
        "BT": "2",
        "BID": "138",
        "DID": "12"
      },
      {
        "E": "Kalpetta'",
        "M": "കല്‍പ്പറ്റ'",
        "BT": "2",
        "BID": "139",
        "DID": "12"
      },
      {
        "E": "Mananthavady'",
        "M": "മാനന്തവാടി'",
        "BT": "3",
        "BID": null,
        "DID": "12"
      },
      {
        "E": "Sulthan Bathery'",
        "M": "സുല്‍ത്താന്‍ ബത്തേരി'",
        "BT": "3",
        "BID": null,
        "DID": "12"
      },
      {
        "E": "Wayanad'",
        "M": "വയനാട്'",
        "BT": "1",
        "BID": null,
        "DID": "12"
      },
      {
        "E": "Nenmeni'",
        "M": "നെന്മേനി'",
        "BT": "5",
        "BID": "138",
        "DID": "12"
      },
      {
        "E": "Pariyaram'",
        "M": "പരിയാരം'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Narath'",
        "M": "നാറാത്ത്'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Chapparapadava'",
        "M": "ചപ്പാരപ്പടവ്'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Naduvil'",
        "M": "നടുവില്‍'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Udayagiri'",
        "M": "ഉദയഗിരി'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Alakode'",
        "M": "ആലക്കോട്'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Eruvessy'",
        "M": "എരുവേശ്ശി'",
        "BT": "5",
        "BID": "142",
        "DID": "13"
      },
      {
        "E": "Irikkur'",
        "M": "ഇരിക്കൂര്‍'",
        "BT": "5",
        "BID": "142",
        "DID": "13"
      },
      {
        "E": "Malappattam'",
        "M": "മലപ്പട്ടം'",
        "BT": "5",
        "BID": "142",
        "DID": "13"
      },
      {
        "E": "Payyavoor'",
        "M": "പയ്യാവൂര്‍'",
        "BT": "5",
        "BID": "142",
        "DID": "13"
      },
      {
        "E": "Kolachery'",
        "M": "കൊളച്ചേരി'",
        "BT": "5",
        "BID": "142",
        "DID": "13"
      },
      {
        "E": "Kuttiattoor'",
        "M": "കുറ്റ്യാട്ടൂര്‍'",
        "BT": "5",
        "BID": "142",
        "DID": "13"
      },
      {
        "E": "Mayyil'",
        "M": "മയ്യില്‍'",
        "BT": "5",
        "BID": "142",
        "DID": "13"
      },
      {
        "E": "Padiyoor '",
        "M": "പടിയൂര്‍ '",
        "BT": "5",
        "BID": "142",
        "DID": "13"
      },
      {
        "E": "Ulikkal'",
        "M": "ഉളിക്കല്‍'",
        "BT": "5",
        "BID": "142",
        "DID": "13"
      },
      {
        "E": "Chirakkal'",
        "M": "ചിറക്കല്‍'",
        "BT": "5",
        "BID": "143",
        "DID": "13"
      },
      {
        "E": "Valapattanam'",
        "M": "വളപട്ടണം'",
        "BT": "5",
        "BID": "143",
        "DID": "13"
      },
      {
        "E": "Azhikode'",
        "M": "അഴീക്കോട്'",
        "BT": "5",
        "BID": "143",
        "DID": "13"
      },
      {
        "E": "Anjarakandy'",
        "M": "അഞ്ചരക്കണ്ടി'",
        "BT": "5",
        "BID": "144",
        "DID": "13"
      },
      {
        "E": "Kadambur'",
        "M": "കടമ്പൂര്‍'",
        "BT": "5",
        "BID": "144",
        "DID": "13"
      },
      {
        "E": "Muzhappilangad'",
        "M": "മുഴപ്പിലങ്ങാട്'",
        "BT": "5",
        "BID": "144",
        "DID": "13"
      },
      {
        "E": "Chembilode'",
        "M": "ചെമ്പിലോട്'",
        "BT": "5",
        "BID": "144",
        "DID": "13"
      },
      {
        "E": "Munderi'",
        "M": "മുണ്ടേരി'",
        "BT": "5",
        "BID": "144",
        "DID": "13"
      },
      {
        "E": "Peralassery'",
        "M": "പെരളശ്ശേരി'",
        "BT": "5",
        "BID": "144",
        "DID": "13"
      },
      {
        "E": "Dharmadam'",
        "M": "ധര്‍മ്മടം'",
        "BT": "5",
        "BID": "145",
        "DID": "13"
      },
      {
        "E": "Eranholi'",
        "M": "എരഞ്ഞോളി'",
        "BT": "5",
        "BID": "145",
        "DID": "13"
      },
      {
        "E": "Kadirur'",
        "M": "കതിരൂര്‍'",
        "BT": "5",
        "BID": "145",
        "DID": "13"
      },
      {
        "E": "Kottayam'",
        "M": "കോട്ടയം'",
        "BT": "5",
        "BID": "145",
        "DID": "13"
      },
      {
        "E": "Pinarayi'",
        "M": "പിണറായി'",
        "BT": "5",
        "BID": "145",
        "DID": "13"
      },
      {
        "E": "Chokli'",
        "M": "ചൊക്ളി'",
        "BT": "5",
        "BID": "145",
        "DID": "13"
      },
      {
        "E": "New Mahe'",
        "M": "ന്യൂ മാഹി'",
        "BT": "5",
        "BID": "145",
        "DID": "13"
      },
      {
        "E": "Mokeri'",
        "M": "മൊകേരി'",
        "BT": "5",
        "BID": "146",
        "DID": "13"
      },
      {
        "E": "Panniyannur'",
        "M": "പന്ന്യന്നൂര്‍'",
        "BT": "5",
        "BID": "146",
        "DID": "13"
      },
      {
        "E": "Triprangottoor'",
        "M": "തൃപ്രങ്ങോട്ടൂര്‍'",
        "BT": "5",
        "BID": "146",
        "DID": "13"
      },
      {
        "E": "Chittariparamba'",
        "M": "ചിറ്റാരിപ്പറമ്പ്'",
        "BT": "5",
        "BID": "146",
        "DID": "13"
      },
      {
        "E": "Kunnothuparamba'",
        "M": "കുന്നാത്തുപറമ്പ്'",
        "BT": "5",
        "BID": "146",
        "DID": "13"
      },
      {
        "E": "Mangattidam'",
        "M": "മാങ്ങാട്ടിടം'",
        "BT": "5",
        "BID": "146",
        "DID": "13"
      },
      {
        "E": "Pattiam'",
        "M": "പാട്യം'",
        "BT": "5",
        "BID": "146",
        "DID": "13"
      },
      {
        "E": "Vengad'",
        "M": "വേങ്ങാട്'",
        "BT": "5",
        "BID": "146",
        "DID": "13"
      },
      {
        "E": "Aralam'",
        "M": "ആറളം'",
        "BT": "5",
        "BID": "147",
        "DID": "13"
      },
      {
        "E": "Ayyankunnu'",
        "M": "അയ്യന്‍കുന്ന്'",
        "BT": "5",
        "BID": "147",
        "DID": "13"
      },
      {
        "E": "Keezhallur'",
        "M": "കീഴല്ലൂര്‍'",
        "BT": "5",
        "BID": "147",
        "DID": "13"
      },
      {
        "E": "Thillankery'",
        "M": "തില്ലങ്കേരി'",
        "BT": "5",
        "BID": "147",
        "DID": "13"
      },
      {
        "E": "Koodali'",
        "M": "കൂടാളി'",
        "BT": "5",
        "BID": "147",
        "DID": "13"
      },
      {
        "E": "Payam'",
        "M": "പായം'",
        "BT": "5",
        "BID": "147",
        "DID": "13"
      },
      {
        "E": "Kanichar'",
        "M": "കണിച്ചാര്‍'",
        "BT": "5",
        "BID": "148",
        "DID": "13"
      },
      {
        "E": "Kelakam'",
        "M": "കേളകം'",
        "BT": "5",
        "BID": "148",
        "DID": "13"
      },
      {
        "E": "Kottiyoor'",
        "M": "കൊട്ടിയൂര്‍'",
        "BT": "5",
        "BID": "148",
        "DID": "13"
      },
      {
        "E": "Muzhakkunnu'",
        "M": "മുഴക്കുന്ന്'",
        "BT": "5",
        "BID": "148",
        "DID": "13"
      },
      {
        "E": "Kolayad'",
        "M": "കോളയാട്'",
        "BT": "5",
        "BID": "148",
        "DID": "13"
      },
      {
        "E": "Malur'",
        "M": "മാലൂര്‍'",
        "BT": "5",
        "BID": "148",
        "DID": "13"
      },
      {
        "E": "Peravoor'",
        "M": "പേരാവൂര്‍'",
        "BT": "5",
        "BID": "148",
        "DID": "13"
      },
      {
        "E": "Iritty'",
        "M": "ഇരിട്ടി'",
        "BT": "3",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Kannur'",
        "M": "കണ്ണൂര്‍'",
        "BT": "1",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Kuthuparamba'",
        "M": "കൂത്തുപറമ്പ്'",
        "BT": "3",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Thalipparamba'",
        "M": "തളിപ്പറമ്പ്'",
        "BT": "3",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Mattanur'",
        "M": "മട്ടന്നൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Panoor'",
        "M": "പാനൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Sreekandapuram'",
        "M": "ശ്രീകണ്ഠാപുരം'",
        "BT": "3",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Anthoor'",
        "M": "ആന്തൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Thalassery'",
        "M": "തലശ്ശേരി'",
        "BT": "3",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Peravoor'",
        "M": "പേരാവൂര്‍'",
        "BT": "2",
        "BID": "148",
        "DID": "13"
      },
      {
        "E": "Iritty'",
        "M": "ഇരിട്ടി'",
        "BT": "2",
        "BID": "147",
        "DID": "13"
      },
      {
        "E": "Kuthuparamba'",
        "M": "കൂത്തുപറമ്പ്'",
        "BT": "2",
        "BID": "146",
        "DID": "13"
      },
      {
        "E": "Thalassery'",
        "M": "തലശ്ശേരി'",
        "BT": "2",
        "BID": "145",
        "DID": "13"
      },
      {
        "E": "Edakkad'",
        "M": "എടക്കാട്'",
        "BT": "2",
        "BID": "144",
        "DID": "13"
      },
      {
        "E": "Kannur'",
        "M": "കണ്ണൂര്‍'",
        "BT": "2",
        "BID": "143",
        "DID": "13"
      },
      {
        "E": "Irikkur'",
        "M": "ഇരിക്കൂര്‍'",
        "BT": "2",
        "BID": "142",
        "DID": "13"
      },
      {
        "E": "Thalipparamba'",
        "M": "തളിപ്പറമ്പ്'",
        "BT": "2",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Payyannur'",
        "M": "പയ്യന്നൂര്‍'",
        "BT": "2",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Payyannur'",
        "M": "പയ്യന്നൂര്‍'",
        "BT": "3",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Cheruthazham'",
        "M": "ചെറുതാഴം'",
        "BT": "5",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Ezhome'",
        "M": "ഏഴോം'",
        "BT": "5",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Kannur'",
        "M": "കണ്ണൂര്‍'",
        "BT": "4",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Panoor '",
        "M": "പാനൂര്‍ '",
        "BT": "2",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Kalliasseri '",
        "M": "കല്ല്യാശ്ശേരി '",
        "BT": "2",
        "BID": null,
        "DID": "13"
      },
      {
        "E": "Kunhimangalam'",
        "M": "കുഞ്ഞിമംഗലം'",
        "BT": "5",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Madayi'",
        "M": "മാടായി'",
        "BT": "5",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Mattool'",
        "M": "മാട്ടൂല്‍'",
        "BT": "5",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Ramanthali'",
        "M": "രാമന്തളി'",
        "BT": "5",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Kadannappally Panapuzha'",
        "M": "കടന്നപ്പള്ളി പാണപ്പുഴ'",
        "BT": "5",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Karivellur Peralam'",
        "M": "കരിവെള്ളൂര്‍ പെരളം'",
        "BT": "5",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Kankol - Alappadamba'",
        "M": "കാങ്കോല്‍ - ആലപ്പടമ്പ'",
        "BT": "5",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Eramam Kuttur'",
        "M": "എരമം കുറ്റൂര്‍'",
        "BT": "5",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Peringome Vayakkara'",
        "M": "പെരിങ്ങോം വയക്കര'",
        "BT": "5",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Cherupuzha'",
        "M": "ചെറുപുഴ'",
        "BT": "5",
        "BID": "140",
        "DID": "13"
      },
      {
        "E": "Pattuvam'",
        "M": "പട്ടുവം'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Cherukunnu'",
        "M": "ചെറുകുന്ന്'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Kalliasseri'",
        "M": "കല്ല്യാശ്ശേരി'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Kannapuram'",
        "M": "കണ്ണപുരം'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Pappinisseri'",
        "M": "പാപ്പിനിശ്ശേരി'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Chengalayi'",
        "M": "ചെങ്ങളായി'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Kurumathur'",
        "M": "കുറുമാത്തൂര്‍'",
        "BT": "5",
        "BID": "141",
        "DID": "13"
      },
      {
        "E": "Bedadka'",
        "M": "ബേഡഡുക്ക'",
        "BT": "5",
        "BID": "150",
        "DID": "14"
      },
      {
        "E": "Valiyaparamba'",
        "M": "വലിയപറമ്പ'",
        "BT": "5",
        "BID": "152",
        "DID": "14"
      },
      {
        "E": "Trikaripur'",
        "M": "തൃക്കരിപ്പൂര്‍'",
        "BT": "5",
        "BID": "152",
        "DID": "14"
      },
      {
        "E": "Kinanoor - Karinthalam'",
        "M": "കിനാനൂര്‍  കരിന്തളം'",
        "BT": "5",
        "BID": "152",
        "DID": "14"
      },
      {
        "E": "WestEleri'",
        "M": "വെസ്റ് എളേരി'",
        "BT": "5",
        "BID": "152",
        "DID": "14"
      },
      {
        "E": "Pilicode'",
        "M": "പിലിക്കോട്'",
        "BT": "5",
        "BID": "152",
        "DID": "14"
      },
      {
        "E": "East Eleri'",
        "M": "ഈസ്റ് എളേരി'",
        "BT": "5",
        "BID": "152",
        "DID": "14"
      },
      {
        "E": "Kayyur Cheemeni'",
        "M": "കയ്യൂര്‍ ചീമേനി'",
        "BT": "5",
        "BID": "152",
        "DID": "14"
      },
      {
        "E": "Cheruvathur'",
        "M": "ചെറുവത്തൂര്‍'",
        "BT": "5",
        "BID": "152",
        "DID": "14"
      },
      {
        "E": "Kallar'",
        "M": "കള്ളാര്‍'",
        "BT": "5",
        "BID": "151",
        "DID": "14"
      },
      {
        "E": "PullurPeriya'",
        "M": "പുല്ലൂര്‍ പെരിയ'",
        "BT": "5",
        "BID": "151",
        "DID": "14"
      },
      {
        "E": "Nileshwar '",
        "M": "നീലേശ്വരം '",
        "BT": "3",
        "BID": null,
        "DID": "14"
      },
      {
        "E": "Panathady'",
        "M": "പനത്തടി'",
        "BT": "5",
        "BID": "151",
        "DID": "14"
      },
      {
        "E": "Pallikere'",
        "M": "പള്ളിക്കര'",
        "BT": "5",
        "BID": "151",
        "DID": "14"
      },
      {
        "E": "Madikai'",
        "M": "മടിക്കൈ'",
        "BT": "5",
        "BID": "151",
        "DID": "14"
      },
      {
        "E": "KodomBelur'",
        "M": "കോടോം ബേളൂര്‍'",
        "BT": "5",
        "BID": "151",
        "DID": "14"
      },
      {
        "E": "Balal'",
        "M": "ബളാല്‍'",
        "BT": "5",
        "BID": "151",
        "DID": "14"
      },
      {
        "E": "Karadka '",
        "M": "കാറഡുക്ക '",
        "BT": "2",
        "BID": null,
        "DID": "14"
      },
      {
        "E": "Parappa '",
        "M": "പരപ്പ '",
        "BT": "2",
        "BID": null,
        "DID": "14"
      },
      {
        "E": "Ajanur'",
        "M": "അജാനൂര്‍'",
        "BT": "5",
        "BID": "151",
        "DID": "14"
      },
      {
        "E": "Udma'",
        "M": "ഉദുമ'",
        "BT": "5",
        "BID": "151",
        "DID": "14"
      },
      {
        "E": "Kuttikol'",
        "M": "കുറ്റിക്കോല്‍'",
        "BT": "5",
        "BID": "150",
        "DID": "14"
      },
      {
        "E": "MogralPuthur'",
        "M": "മൊഗരാല്‍ പുത്തൂര്‍'",
        "BT": "5",
        "BID": "150",
        "DID": "14"
      },
      {
        "E": "Madhur'",
        "M": "മധൂര്‍'",
        "BT": "5",
        "BID": "150",
        "DID": "14"
      },
      {
        "E": "Padne'",
        "M": "പടന്ന'",
        "BT": "5",
        "BID": "152",
        "DID": "14"
      },
      {
        "E": "Chemnad'",
        "M": "ചെമ്മനാട്'",
        "BT": "5",
        "BID": "150",
        "DID": "14"
      },
      {
        "E": "Chengala'",
        "M": "ചെങ്കള'",
        "BT": "5",
        "BID": "150",
        "DID": "14"
      },
      {
        "E": "Delampady'",
        "M": "ദേലംപാടി'",
        "BT": "5",
        "BID": "150",
        "DID": "14"
      },
      {
        "E": "Karadka'",
        "M": "കാറഡുക്ക'",
        "BT": "5",
        "BID": "150",
        "DID": "14"
      },
      {
        "E": "Muliyar'",
        "M": "മുളിയാര്‍'",
        "BT": "5",
        "BID": "150",
        "DID": "14"
      },
      {
        "E": "Badiadka'",
        "M": "ബദിയഡുക്ക'",
        "BT": "5",
        "BID": "149",
        "DID": "14"
      },
      {
        "E": "Enmakaje'",
        "M": "എന്‍മകജെ'",
        "BT": "5",
        "BID": "149",
        "DID": "14"
      },
      {
        "E": "Paivalike'",
        "M": "പൈവളികെ'",
        "BT": "5",
        "BID": "149",
        "DID": "14"
      },
      {
        "E": "Kumbla'",
        "M": "കുമ്പള'",
        "BT": "5",
        "BID": "149",
        "DID": "14"
      },
      {
        "E": "Manjeshwar'",
        "M": "മഞ്ചശ്വരം'",
        "BT": "5",
        "BID": "149",
        "DID": "14"
      },
      {
        "E": "Meenja'",
        "M": "മീഞ്ച'",
        "BT": "5",
        "BID": "149",
        "DID": "14"
      },
      {
        "E": "Puthige'",
        "M": "പുത്തിഗെ'",
        "BT": "5",
        "BID": "149",
        "DID": "14"
      },
      {
        "E": "Vorkady'",
        "M": "വോര്‍ക്കാടി'",
        "BT": "5",
        "BID": "149",
        "DID": "14"
      },
      {
        "E": "Mangalpady'",
        "M": "മംഗല്‍പാടി'",
        "BT": "5",
        "BID": "149",
        "DID": "14"
      },
      {
        "E": "Kumbadaje'",
        "M": "കുംബഡാജെ'",
        "BT": "5",
        "BID": "149",
        "DID": "14"
      },
      {
        "E": "Belloor'",
        "M": "ബേളൂര്‍'",
        "BT": "5",
        "BID": "149",
        "DID": "14"
      },
      {
        "E": "Kanhangad'",
        "M": "കാഞ്ഞങ്ങാട്'",
        "BT": "3",
        "BID": null,
        "DID": "14"
      },
      {
        "E": "Manjeshwar'",
        "M": "മഞ്ചശ്വരം'",
        "BT": "2",
        "BID": "149",
        "DID": "14"
      },
      {
        "E": "Kasaragod'",
        "M": "കാസര്‍കോഡ്'",
        "BT": "2",
        "BID": "150",
        "DID": "14"
      },
      {
        "E": "Kanhangad'",
        "M": "കാഞ്ഞങ്ങാട്'",
        "BT": "2",
        "BID": "151",
        "DID": "14"
      },
      {
        "E": "Nileshwar'",
        "M": "നീലേശ്വരം'",
        "BT": "2",
        "BID": "152",
        "DID": "14"
      },
      {
        "E": "Kasaragod'",
        "M": "കാസര്‍കോഡ്'",
        "BT": "1",
        "BID": null,
        "DID": "14"
      },
      {
        "E": "Kasaragod'",
        "M": "കാസര്‍കോഡ്'",
        "BT": "3",
        "BID": null,
        "DID": "14"
      }
     ];
    
    var meaningOfLife = 42;
    
        var masterDataPopulator = {};
    
        masterDataPopulator.getDistricts = function() {
          
          return districts;
    
        };


        masterDataPopulator.getBlocksForDistrict = function (districtName) {
          
            var distId = getDistrictId(districtName);
            var blocksForDistrict = [];
            console.log('district id : ' + distId);
            angular.forEach(blocks, function(value, key){
              
              if(value.DID == distId) {
                blocksForDistrict.push(value);
                console.log(JSON.stringify(value));
              }
      });
      return blocksForDistrict;
    };
  
      function getDistrictId(districtName) {
        var distId;
        angular.forEach(districts, function(value, key){
          console.log(key + ': ' + value);
          if(value.malDistName == districtName) {
            
            distId = value.distID
          }
     });

     return distId;
    }
    
        return masterDataPopulator;
    
        // Public API here
        // return {
        //   someMethod: function () {
        //     return meaningOfLife;
        //   }
        // };
    
     
    
       
    
      });
    
