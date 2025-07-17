import { Component, ElementRef } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-trouver-agences',
  standalone: true,
  templateUrl: 'trouver-agences.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./trouver-agences.component.scss']
})
export class TrouverAgencesComponent {
  gouvernorats = [
    {
      nom: 'TUNIS',
      agencies: [
        {
          nom: 'PLACE BARCELONE',
          adresse: '5 place monji bali 1055 tunis',
          tel: '94519668 / 93699631',
          fax: '70202100',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'BAB BNET',
          adresse: '34, Bd Bab Benat - Tunis',
          tel: '92613003 / 93699635',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'AL DJAZIRA',
          adresse: '19 Bis, Rue Djazira - Tunis',
          tel: '99272963 / 93699640',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'JEAN JAURÈS',
          adresse: '20 Av. Jean jaurés 1001',
          tel: '99495440 / 93699642',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'LAFAYETTE',
          adresse: '15 Bis, Rue du Koweit tunis belvedere 1002',
          tel: '96902677 / 93699643',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'BARDO',
          adresse: 'Imm. Bardo Center 2000 Bardo',
          tel: '93699646 / 93699706',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'LES BERGES DU LAC',
          adresse: '29 rue du Lac Turkhana résidance les lilas les berges du Lac 1053',
          tel: '93699717 / 93699657',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'MANAR',
          adresse: 'Résidence Hanibal, Rue 7400 Manar I 2092',
          tel: '94522695 / 93699658',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'EL KRAM',
          adresse: '75, Avenue Med V – Kram 2089',
          tel: '99498050 / 93699669',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'EZZOUHOUR',
          adresse: '68 Bis, Rue Sabra et Chatila Cité Ezzouhour 2052 Tunis',
          tel: '93548150',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SIDI HESSINE',
          adresse: '10 rue 4883 Sidi Hcine 1095',
          tel: '99506209',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'EL OUERDIA',
          adresse: '89 Rue du Sahel Montfleury Tunis 1009',
          tel: '97066864',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'ETTADHAMEN',
          adresse: 'Km 4 Route de Bizerte Cité Intillaka 1064',
          tel: '98327192',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'L\'AOUINA',
          adresse: 'Rue Mongi Slim Résidence Salma App. 12 L\'Aouina 2036',
          tel: '98274234',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'EL MECHTEL',
          adresse: '37 Rue El Khartoum Belvédére 1002 Tunis',
          tel: '99487270 / 93699769',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'ETTAWFIK',
          adresse: '34, Bd Bab Benat - Tunis',
          tel: '92613003 / 93699635',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'LA GOULETTE',
          adresse: '34 Avenue Bourguiba La Goulette - 2060',
          tel: '97882417 / 99964814',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'LAC II',
          adresse: 'Rez de chausse dream residence cite des pins les berges du lac ii 1053',
          tel: '92705031 / 93108018',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'LA MARSA',
          adresse: '75 Angle rue ben cherifia la marsa 2070',
          tel: '92177325',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'EZAHROUNI',
          adresse: '18 Rue 4667 EZZahrouni 2051 Tunis',
          tel: '71648903',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'BARDO',
          adresse: '39 Avenue Mongi Slim Bardo',
          tel: '71223673 / 96823823',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'BIZERTE',
      agencies: [
        {
          nom: 'BIZERTE',
          adresse: '8, Rue Moncef Bey 7000 Bizerte',
          tel: '93699692 / 93699632',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'MENZEL BOURGUIBA',
          adresse: '83, Avenue de l\'independance Menzel Bourguiba 7050',
          tel: '94459140',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'SOUSSE',
      agencies: [
        {
          nom: 'SOUSSE 1',
          adresse: '6, Bd M\'hamed Mâarouf 4000 Sousse',
          tel: '99156714 / 93699633',
          fax: '73225120',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SOUSSE',
          adresse: 'Résidence Sidi Dhaher, Khezama Hammam – Sousse 4051',
          tel: '99080587 / 93699648',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'M\'SAKEN',
          adresse: 'Av. 20 Mars M\'Saken 4070',
          tel: '93699693 / 93699662',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SOUSSE ERRIADH',
          adresse: 'Immeuble CARTHAGO Route de ceinture - Sousse Erriadh - 4023',
          tel: '99516819',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SAHLOUL',
          adresse: 'Av yasser arafat imb jaim bloc a 9 sahloul 4054 sousse',
          tel: '94752487',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'ENFIDHA',
          adresse: '8, Rue El JAMAA 4030 Enfidha',
          tel: '98512024',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'KALAA KEBIRA',
          adresse: 'entrée Kalaa kebira',
          tel: '73317954 / 25809745',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'SFAX',
      agencies: [
        {
          nom: 'SFAX 1',
          adresse: '65, Rue Habib Mâazoun 3000 Sfax',
          tel: '93699724 / 93699634',
          fax: '74222521',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SFAX',
          adresse: 'Rue El Hedi Nouira immeuble Baya centre Mag N°2 Sfax 3027',
          tel: '99495650 / 93699647',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SFAX SEKIET EZZIT',
          adresse: 'Av. Hédi Chaker Im. Maalej Sakiet Ezzit – Sfax 3021',
          tel: '93699719 / 93699659',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SFAX SKIET EDAYER',
          adresse: 'Route de Mahdia Km 6, Avenue Mongi Slim – Immeuble Neifar - 3011 Sfax',
          tel: '99577724 / 93699664',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SFAX EL JADIDA',
          adresse: '128 LES GALERIERS SFAX EL JADIDA 3027',
          tel: '74403522',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SFAX III',
          adresse: 'Rue Ennasria Imm. El Borj Bloc <A> 1er Etage 3002 Sfax',
          tel: '92553838',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SFAX IV',
          adresse: '12 Rue Léopold Senghor Imm. Karray 2ème Etage App. N°2 3000 Sfax',
          tel: '97054535',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SFAX V',
          adresse: 'Route de mahdia km 0.5 immeuble pavillon d\'or 3000',
          tel: '99960086',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'KAIROUAN',
      agencies: [
        {
          nom: 'KAIROUAN',
          adresse: '23 Av de la victoire 3100 - kairouan',
          tel: '92735469 / 93699636',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'KAIROUAN II',
          adresse: 'Rue 20 Mars 3100 Kairouan',
          tel: '10.10127455955061',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'GABES',
      agencies: [
        {
          nom: 'GABÉS',
          adresse: 'Angle Av. Med. Ali et Rue Bahloul Dhahri 6000 Gabès',
          tel: '95599365 / 93699637',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'GABÉS II',
          adresse: 'Av farhat hached n342 gabes 6000',
          tel: '98998241',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'EL-HAMMA',
          adresse: '73 Av mongi slim immb ghoudi gabes 6000',
          tel: '94982764',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'BEJA',
      agencies: [
        {
          nom: 'BÉJA',
          adresse: '45, Avenue de la République - 9000 Beja',
          tel: '93699698 / 93699638',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'BÉJA II',
          adresse: 'Beja garden s6 route de tabarka beja 9000',
          tel: '99029181 / 99139650',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'TASTOUR',
          adresse: 'Cité Gharnata Testour 9060',
          tel: '99030393',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'MJEZ EL BAB',
          adresse: 'Place de l\'independance Medjez el Bab 9070',
          tel: '22223842',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'NABEUL',
      agencies: [
        {
          nom: 'NABEUL',
          adresse: 'Angle avenue ali belhouan & av.h.karma imm hadidane nabeul 8000',
          tel: '93699699 / 93699639',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'KELIBIA',
          adresse: '65, Av. Habib Bourguiba 8090 Kelibia',
          tel: '93699715 / 936699655',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'HAMMAMET',
          adresse: '127, Av. De la République Hammamet 8050',
          tel: '93699715 / 936699655',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'NABEUL II',
          adresse: 'Rue hedi nouira imm cherif nabeul 8000',
          tel: '99960099 / 93108816',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'GROMBALIA',
          adresse: 'Rue 18 janvier derriere b.n.a grombalia 8030',
          tel: '98430374',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'KORBA',
          adresse: 'Avenue de la liberté 8070 Korba',
          tel: '99535592',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'HAMMAMET',
          adresse: 'rue yasser arafet gp1 manaret hammamet',
          tel: '94511893 / 98322982',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SOLIMAN',
          adresse: 'Rue Habib Bourguiba –8020 Soliman',
          tel: '92267302 / 99030810',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'MONASTIR',
      agencies: [
        {
          nom: 'MONASTIR',
          adresse: 'Résidance IRIS RTE Kenis El Agba - 5000 Monastir',
          tel: '93699701 / 93699641',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'MOKNINE',
          adresse: 'Avenue Mongi Slim Moknine 5050',
          tel: '98978815',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'MONASTIR II',
          adresse: '8 immeuble cnrps n4 monastir 5000',
          tel: '93699708 / 99906112',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'TEBOULBA',
          adresse: 'Avenue habib bourguiba 5080 teboulba',
          tel: '73561100 / 98363200',
          fax: '73561100',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'KEF',
      agencies: [
        {
          nom: 'KEF',
          adresse: '65, Avenu Habib Bourguiba - 7100 El Kef',
          tel: '93699748 / 93699644',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'KEF II',
          adresse: 'B.P N°02 EL KEF OUEST 7117',
          tel: '98644306',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'ARIANA',
      agencies: [
        {
          nom: 'ARIANA',
          adresse: 'Imm. Ariana Center 2080 Ariana',
          tel: '93699705 / 93699645',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'ENASR',
          adresse: 'Av. Hédi Nouira, Résidence II - 2037',
          tel: '92782116 / 93699666',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'EL MENZAH',
          adresse: '65 Av. Mouaoui Ibn Aby Sofiène El Menzah 6- 2090',
          tel: '93699668',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'SOUKRA',
          adresse: '116 Av Union Maghreb Arabe - Soukra',
          tel: '95073181 / 93699671',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'RAOUED',
          adresse: '3, Résidence Mariem RDC Enkhilette 2083',
          tel: '98998241',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'ENNASER II',
          adresse: 'A venu Hedi Nouia Residence MIRAMAR mezanine Bloc B -ENNASR 2- 2001',
          tel: '22431674',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'BEN AROUS',
      agencies: [
        {
          nom: 'BEN AROUS I',
          adresse: '11 rue Aboukacem Chabi Ben Arous 2013',
          tel: '99464200 / 93699649',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'MOUROUJ',
          adresse: 'Av. des Martyres, Lamty Center 2074 El Mourouj',
          tel: '93699652 / 99923394',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'HAMMAM LIF',
          adresse: '7, Av. De la République – Hammam-Lif 2050',
          tel: '93699689 / 93699660',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'BEN AROUS II',
          adresse: 'Centre Folla 3, App. N° 6 BEN Arous 2013',
          tel: '93106846',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'EL MOUROUJ 3',
          adresse: 'B16, 7 Nov. Complexe Challakh El Mourouj 4 2074',
          tel: '23849302',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'EZZAHRA',
          adresse: 'Av. de Paris Complexe Boukhris Boumhel 2097',
          tel: '96543794',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'MÉGRINE',
          adresse: '68, Av. H. Bourguiba 2033 Megrine',
          tel: '98901215',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'FOUCHANA',
          adresse: 'Av. 7 Nov. APP. El Guabsia 2082 Fouchana',
          tel: '95500471',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'RADÉS',
          adresse: 'av med ali rades 2040',
          tel: '95500471',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'MOUROUJ 6',
          adresse: '5 résidence El riadh avenue des martyrs El mourouj 6',
          tel: '93699380',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'MEDENINE',
      agencies: [
        {
          nom: 'DJERBA',
          adresse: 'Complexe El Hadji, Rue Habib Thameur Houmt Souk Djerba',
          tel: '93699711 / 93699650',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'ZARZIS',
          adresse: 'Av. Med. V Zarzis – 4170',
          tel: '99497560 / 93699663',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'MÉDENINE',
          adresse: '65, Av. Habib Bourguiba 4100 Medenine',
          tel: '98483260',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'DJERBA II',
          adresse: '35, Avenue Ali Balhouane Djerba Midoun 4116',
          tel: '98483260',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'BEN GERDAINE',
          adresse: 'avenue hedi jarray ben gherdane 4160 ben Gherdane',
          tel: '96393725',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'ZARZIS II',
          adresse: 'Avenue habib bourguiba residence med amine klich zarzis 4170',
          tel: '99497870 / 99487440',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'GAFSA',
      agencies: [
        {
          nom: 'GAFSA',
          adresse: 'Av. Habib Bourguiba 2100 Gafsa',
          tel: '93699710 / 93699651',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'GAFSA II',
          adresse: 'Av. Jamel Abdenaceur Imm. La Lune 2ème Etage Gafsa 2100',
          tel: '97012259',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'GABES II',
          adresse: 'Avenue de la république 6000 Gabes',
          tel: '93548909',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'SILIANA',
      agencies: [
        {
          nom: 'SILIANA',
          adresse: '25, Av. Habib Bourguiba 6100 Seliana',
          tel: '93699713 / 93699653',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'MAHDIA',
      agencies: [
        {
          nom: 'MAHDIA',
          adresse: '36, Av. Habib Bourguiba 5100 Mahdia',
          tel: '93699714 / 93699654',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'CHEBBA',
          adresse: 'Rue med ali chebba mahdia 5170',
          tel: '99560790',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'BOUMERDÉS',
          adresse: 'Rue Habib Bourguiba Boumardes 5110',
          tel: '98309327',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'JENDOUBA',
      agencies: [
        {
          nom: 'JENDOUBA',
          adresse: '5, Rue 1er Juin, Place de la République – Jendouba 8100',
          tel: '93699716 / 93699656',
          email: 'mae.assurances@mae.tn'
        },
        {
          nom: 'GHADIMAOU',
          adresse: 'Ghardimaou 8160',
          tel: '93064217',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'MANOUBA',
      agencies: [
        {
          nom: 'MANOUBA II',
          adresse: '4, Avenue 2 Mars -Manouba- 2010',
          tel: '97440964',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'ZAGOUAN',
      agencies: [
        {
          nom: 'ZAGHOUAN',
          adresse: 'Avenue Independance – 1100 Zaghouane',
          tel: '93699690 / 93699630',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'KEBELI',
      agencies: [
        {
          nom: 'KEBILI',
          adresse: 'Avenue nalout kebili 4200',
          tel: '98943097',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'KASSERINE',
      agencies: [
        {
          nom: 'KASSERINE',
          adresse: 'Avenue Habib Bourguiba Kasserine 1200',
          tel: '54521538',
          email: 'mae.assurances@mae.tn'
        }
      ]
    },
    {
      nom: 'TOZEUR',
      agencies: [
        {
          nom: 'TOZEUR',
          adresse: 'Avenue Farhat Hached TOZEUR 2200',
          tel: '98283045',
          email: 'mae.assurances@mae.tn'
        }
      ]
    }
  ];

  constructor(private elementRef: ElementRef) {}

  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    const gouvernorats = this.elementRef.nativeElement.querySelectorAll('.gouvernorat');

    gouvernorats.forEach((gouvernorat: any) => {
      const gouvernoratText = gouvernorat.querySelector('h2').textContent.toLowerCase();
      if (gouvernoratText.includes(searchTerm) || searchTerm === '') {
        gouvernorat.style.display = 'block';
      } else {
        gouvernorat.style.display = 'none';
      }
    });
  }
}

