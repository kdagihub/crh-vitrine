export const regionLocationMapUrl = `${import.meta.env.BASE_URL}images/situation-hambol-cote-ivoire.png`
export const pndDocumentUrl = `${import.meta.env.BASE_URL}documents/hambol-pnd-2026-2030.pdf`
export const regionMapUrl = `${import.meta.env.BASE_URL}images/carte-hambol.png`

export const highlights = [
  { value: '130', label: 'salles de classe à construire', detail: 'Au préscolaire et au primaire.', to: '/actions-publiques#capital-humain' },
  { value: '98', label: 'établissements sanitaires de premier contact', detail: '66 dispensaires ruraux, 6 centres de santé urbains et 26 centres de santé ruraux.', to: '/actions-publiques#capital-humain' },
  { value: '515', label: 'pompes à réparer', detail: 'Avec 60 pompes à remplacer et 104 à entretenir.', to: '/cadre-de-vie#eau' },
  { value: '15 000 t', label: 'de noix de cajou', detail: 'Unité principale de transformation à Katiola.', to: '/actions-publiques#economie' },
  { value: '128 km', label: 'Yaga–Gansé–Dabakala', detail: 'Aménagement et bitumage de cet axe routier.', to: '/actions-publiques#connexions' },
  { value: 'CHR', label: 'de Katiola', detail: 'Poursuite de la construction et de l’équipement.', to: '/actions-publiques#capital-humain' },
]

export const policySections = [
  {
    id: 'economie', eyebrow: 'Économie', title: 'Produire et entreprendre',
    description: 'Agriculture, élevage, industrie, commerce, artisanat et tourisme.',
    metrics: [
      { value: '15 000 t', label: 'de noix de cajou', detail: 'Unité principale à Katiola' },
      { value: '500 000', label: 'boutures de manioc', detail: 'Pour 400 t de semences' },
      { value: '35', label: 'provenderies', detail: 'Appui à leur mise en place' },
    ],
    groups: [
      { title: 'Agriculture et élevage', items: ['Pôle agro-industriel du Nord : poursuite de la mise en œuvre.', 'Complexes agro-industriels de tomate et de pulpe de mangue à Katiola.', 'Centres d’agrégation et de services de Katiola et de Dabakala : poursuite.', 'Ranch de Badikaha et sa station : réhabilitation.', 'Périmètres irrigués de cultures vivrières et chaîne de valeur du riz : en cours selon la fiche.', 'Installation de 50 producteurs de maïs et de soja : en cours selon la fiche.'] },
      { title: 'Industrie et PME', items: ['Zone d’activités de mécanique générale et de métallurgie à Katiola.', 'Unités satellites de noix de cajou à Dabakala et Niakaramadougou : 1 000 t chacune.', 'Unités artisanales de transformation de l’anacarde à Katiola, Dabakala et Niakaramadougou.', 'Transformation artisanale du maïs, du manioc et de l’igname à Katiola.', 'Projet Clonix, phase 2.'] },
      { title: 'Commerce, artisanat et tourisme', items: ['Marchés ruraux de proximité : poursuite de la construction.', 'Marché relais du marché de gros de Bouaké, à Katiola.', 'Centre d’apprentissage artisanal de Badikaha.', 'Centrale artisanale de Katiola : réhabilitation.', 'Maison des poteries de Katiola : réhabilitation.'] },
    ],
  },
  {
    id: 'capital-humain', eyebrow: 'Capital humain', title: 'Apprendre, se former et se soigner',
    description: 'Éducation, formation professionnelle, santé, emploi et sport.',
    metrics: [
      { value: '130', label: 'salles de classe', detail: 'Construction au préscolaire et au primaire' },
      { value: '98', label: 'établissements sanitaires', detail: '66 dispensaires ruraux, 6 centres de santé urbains, 26 centres de santé ruraux' },
      { value: '7', label: 'collèges', detail: 'À construire et équiper' },
    ],
    groups: [
      { title: 'Santé de proximité', items: ['CHR de Katiola : poursuite de la construction et de l’équipement.', 'Hôpital général de Tafiré : construction et équipement.', 'District sanitaire de Niakara : construction.', 'Réhabilitation des établissements sanitaires de premier contact.', 'Antennes de transfusion sanguine, cabinets dentaires, imagerie, services d’ophtalmologie et ORL.', 'Accès à l’eau potable des centres de santé et renforcement des capacités de supervision et de coordination.'] },
      { title: 'Éducation et formation', items: ['Construction de 130 salles de classe au préscolaire et au primaire.', 'Construction et équipement de 7 collèges.', 'Lycée professionnel de Tafiré : construction et équipement.', 'Collège technique de formation professionnelle à Niakaramadougou.', 'Champ ferme-école de Dabakala.'] },
      { title: 'Emploi, protection sociale et sport', items: ['Enrôlement au RSTI et à la CMU : poursuite.', 'Services de l’administration du travail : réhabilitation et équipement.', 'Salle de sport semi-couverte au lycée moderne de Katiola.'] },
    ],
  },
  {
    id: 'connexions', eyebrow: 'Routes et numérique', title: 'Se déplacer et se connecter',
    description: 'Des liaisons routières et des infrastructures numériques pour relier les territoires.',
    metrics: [
      { value: '128 km', label: 'Yaga–Gansé–Dabakala', detail: 'Aménagement et bitumage' },
      { value: '107 km', label: 'Kanawolo–Korhogo', detail: 'Aménagement et bitumage de l’autoroute' },
      { value: '96 km', label: 'Darakokaha–Tafiré', detail: 'Aménagement et bitumage de l’autoroute' },
    ],
    groups: [
      { title: 'Grands axes routiers', items: ['Foumbolo–Niakara : 80 km.', 'Tafiré–Ferké : autoroute, 65 km.', 'Bouaké–Darakokaha : autoroute, 55 km.', 'Bassawa–Prikro : 55 km ; Dabakala–Bassawa : 54 km.', 'Dikodougou–Ténindéri : 53 km.', 'Niakaramadougou–Tortya : 48 km.', 'Katiola–Marabadiassa : 42 km ; Boron–Tortiya : 39 km.'] },
      { title: 'Routes et bretelles', items: ['Accès à Niédiékaha et Sépikaha : 26 km.', 'Niéméné–Foumbolo, à Dabakala : 24 km, poursuite.', 'Niakara–Arikokaha : 19 km.', 'Bretelle de N’Gorla : 10,5 km.'] },
      { title: 'Économie numérique', items: ['26 sites radioélectriques.', 'Raccordement des sous-préfectures à la fibre optique.'] },
    ],
  },
]

export const livingSections = [
  { id: 'eau', title: 'Eau potable et assainissement', items: ['515 pompes à réparer, 60 à remplacer et 104 à entretenir.', 'Poursuite du programme d’eau potable dans 12 villes, dont Katiola.', 'Eau potable de Niakara et Kanawolo, avec les localités environnantes.', 'Renforcement de l’eau potable de Tafiré et des localités environnantes.', 'Sécurité de l’eau et de l’assainissement : projet PASEA.', 'Assainissement et résilience urbaine : poursuite ; accès à l’assainissement autonome en milieu urbain.', 'Schéma directeur d’assainissement et de drainage de Katiola : poursuite.'] },
  { id: 'energie', title: 'Énergie et électrification', items: ['4 localités à électrifier pour un objectif de couverture à 100 %.', 'Projet régional d’accès à l’électricité et de stockage d’énergie par batteries.', 'Électrification rurale et électrification des campements : poursuite.', 'Programme Électricité pour tous : branchements des ménages du Hambol.'] },
  { id: 'dechets', title: 'Gestion des déchets', items: ['Dotation d’une décharge contrôlée à Katiola.', 'Site sécurisé pour des infrastructures de gestion des déchets à Katiola.', 'Décharges contrôlées et postes de groupage dans les localités de Katiola.'] },
  { id: 'inclusion', title: 'Inclusion et justice', items: ['Autonomisation des femmes : alphabétisation numérique, droits et opportunités financières, étendue au milieu rural.', 'Cité pénitentiaire de Dabakala avec maison d’arrêt : construction et équipement.', 'Tribunal de première instance de Dabakala : construction et équipement.', 'Maison d’arrêt de Katiola : reconstruction et équipement.'] },
]
