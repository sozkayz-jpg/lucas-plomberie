export interface Service {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  highlights: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  source: string;
  text: string;
}

export const COMPANY = {
  name: "Lucas",
  fullName: "Lucas Plomberie",
  sector: "plomberie",
  city: "Lyon",
  years: 15,
  phone: "04 27 00 00 00",
  phoneDisplay: "04 27 00 00 00",
  reviews: "350+",
  delay: "45 minutes",
  tagline: "L'excellence en plomberie",
  slogan: "La plomberie repensée. Pour votre confort, sans compromis.",
  email: "contact@lucas-plomberie.fr",
  addresses: [
    {
      street: "47 rue de la République",
      zip: "69002",
      city: "Lyon",
    },
  ],
  socials: {
    facebook: "https://facebook.com/lucasplomberie",
    instagram: "https://instagram.com/lucasplomberie",
    linkedin: "https://linkedin.com/company/lucas-plomberie",
  },
} as const;

export const SERVICES: Service[] = [
  {
    slug: "debouchage",
    title: "Débouchage & nettoyage",
    description:
      "Canalisations obstruées ? Nous intervenons avec du matériel haute pression pour tout déboucher, sans produits agressifs.",
    fullDescription:
      "Nos équipes maîtrisent toutes les techniques de débouchage : haute pression, furet électrique, inspection caméra. Nous localisons précisément le bouchon et le traitons à la source, sans recours aux produits chimiques qui abîment vos canalisations. Intervention en urgence disponible 24h/24.",
    highlights: [
      "Inspection caméra offerte avec chaque intervention",
      "Débouchage haute pression jusqu'à 200 bars",
      "Garantie 6 mois sur l'intervention",
      "Sans produits chimiques agressifs",
    ],
  },
  {
    slug: "fuite-eau",
    title: "Recherche & réparation de fuites",
    description:
      "Détection acoustique et thermique des fuites. Localisation précise sans destruction, réparation durable garantie.",
    fullDescription:
      "Une fuite non traitée peut causer des dégâts considérables. Nous utilisons des technologies de pointe — détection acoustique, caméra thermique, gaz traceur — pour localiser la fuite avec une précision millimétrique, sans casser vos murs ou vos sols. Réparation rapide et durable.",
    highlights: [
      "Détection sans destruction grâce à la technologie thermique",
      "Intervention sous 45 minutes en urgence",
      "Réparation avec pièces certifiées",
      "Rapport complet avec photos inclus",
    ],
  },
  {
    slug: "installation-sanitaire",
    title: "Installation sanitaire",
    description:
      "Pose de baignoire, douche, WC, lavabo par des experts. Raccords impeccables, finitions soignées, délais tenus.",
    fullDescription:
      "De la simple robinetterie à l'installation complète d'une salle de bain, nous assurons chaque projet avec la même rigueur. Nous vous conseillons sur le choix des équipements et garantissons des finitions impeccables. Tous nos raccords sont testés sous pression avant la mise en service.",
    highlights: [
      "Conseil personnalisé sur le choix des équipements",
      "Raccords testés sous pression avant livraison",
      "Respect strict des délais annoncés",
      "Nettoyage complet du chantier après intervention",
    ],
  },
  {
    slug: "chauffe-eau",
    title: "Chauffe-eau & ballon",
    description:
      "Installation, remplacement et entretien de votre chauffe-eau. Électrique, gaz ou thermodynamique, nous maîtrisons tous les systèmes.",
    fullDescription:
      "Un chauffe-eau bien entretenu, c'est jusqu'à 30% d'économie d'énergie. Nous prenons en charge l'installation, le remplacement et l'entretien de tous types de chauffe-eau : électrique, gaz, thermodynamique, solaire. Détartrage, changement de groupe de sécurité, remplacement de la résistance — nous faisons tout.",
    highlights: [
      "Tous types de chauffe-eau : électrique, gaz, thermodynamique",
      "Jusqu'à 30% d'économie d'énergie avec un entretien régulier",
      "Dépannage en moins de 2h en moyenne",
      "Pièces d'origine constructeur",
    ],
  },
  {
    slug: "detartrage",
    title: "Détartrage & entretien",
    description:
      "Entretien préventif de vos installations : détartrage, désembouage, contrôle pression. Prolongez la durée de vie de vos équipements.",
    fullDescription:
      "Le calcaire est l'ennemi numéro un de vos installations. Notre service d'entretien préventif comprend le détartrage complet de vos canalisations, robinetteries et appareils, le contrôle de la pression, la vérification des joints et des raccords. Un entretien annuel peut doubler la durée de vie de vos équipements.",
    highlights: [
      "Contrat d'entretien annuel disponible",
      "Détartrage chimique et mécanique",
      "Contrôle complet de l'installation inclus",
      "Rapport d'intervention détaillé remis après chaque visite",
    ],
  },
  {
    slug: "renovation-salle-de-bain",
    title: "Rénovation salle de bain",
    description:
      "Rénovation complète ou partielle de votre salle de bain. Design, plomberie, carrelage : un interlocuteur unique.",
    fullDescription:
      "Nous prenons en charge votre projet de A à Z : conception, dépose de l'existant, plomberie, électricité, carrelage, pose des équipements. En tant qu'interlocuteur unique, nous vous évitons la coordination de multiples artisans. Le résultat : une salle de bain qui vous ressemble, livrée dans les délais annoncés.",
    highlights: [
      "Interlocuteur unique pour tout le projet",
      "Conception 3D de votre future salle de bain",
      "Garantie décennale sur tous les travaux",
      "Nettoyage quotidien du chantier",
    ],
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "comment-detecter-fuite-eau",
    title: "Comment détecter une fuite d'eau avant qu'elle ne cause des dégâts",
    date: "2026-04-22",
    excerpt:
      "Les signes qui ne trompent pas et les gestes simples pour repérer une fuite d'eau avant que la situation ne s'aggrave.",
    content: `
      <p>Une fuite d'eau non détectée peut rapidement se transformer en cauchemar : facture qui explose, moisissures, dégâts structurels. Heureusement, il existe des signes simples à surveiller.</p>
      <h2>Les signes visibles</h2>
      <p>Taches d'humidité au plafond ou sur les murs, peinture qui s'écaille, joints de carrelage qui noircissent, odeur de moisi persistante : ces signaux doivent vous alerter immédiatement.</p>
      <h2>Le test du compteur</h2>
      <p>Relevez votre compteur d'eau avant de vous coucher, n'utilisez aucune eau pendant la nuit, et vérifiez le compteur au réveil. Si les chiffres ont bougé, vous avez une fuite.</p>
      <h2>La chasse d'eau, coupable n°1</h2>
      <p>Une chasse d'eau qui fuit peut gaspiller jusqu'à 600 litres par jour. Versez quelques gouttes de colorant alimentaire dans le réservoir : si la cuvette se colore sans tirer la chasse, il y a une fuite.</p>
      <h2>Quand faire appel à un professionnel</h2>
      <p>Si vous suspectez une fuite sans pouvoir la localiser, ne tardez pas. Nos techniciens utilisent des caméras thermiques et des détecteurs acoustiques pour localiser la fuite avec précision, sans rien casser.</p>
    `,
  },
  {
    slug: "entretenir-chauffe-eau",
    title: "5 gestes pour prolonger la durée de vie de votre chauffe-eau",
    date: "2026-03-15",
    excerpt:
      "Un entretien régulier peut doubler la durée de vie de votre ballon d'eau chaude tout en réduisant votre facture énergétique.",
    content: `
      <p>Un chauffe-eau bien entretenu consomme moins, chauffe mieux et dure plus longtemps. Voici les gestes essentiels à connaître.</p>
      <h2>1. Détartrage annuel</h2>
      <p>Le calcaire est l'ennemi numéro un de votre ballon. Une résistance entartrée consomme jusqu'à 40% d'énergie en plus et finit par casser. Un détartrage annuel par un professionnel est indispensable.</p>
      <h2>2. Vérifier le groupe de sécurité</h2>
      <p>Actionnez le groupe de sécurité une fois par mois : ouvrez la soupape quelques secondes pour évacuer les dépôts. Si de l'eau coule en permanence, il doit être remplacé.</p>
      <h2>3. Contrôler la température</h2>
      <p>Réglez votre thermostat entre 55°C et 60°C. En dessous, risque de développement bactérien (légionelles). Au-dessus, surconsommation et risque de brûlure.</p>
      <h2>4. Isoler les tuyaux</h2>
      <p>Des tuyaux non isolés peuvent faire perdre jusqu'à 10°C entre le ballon et votre robinet. L'isolation est simple, peu coûteuse et rentabilisée en quelques mois.</p>
      <h2>5. Programmer une révision tous les 2 ans</h2>
      <p>Un contrôle professionnel tous les 2 ans permet de détecter les signes de fatigue avant la panne. Nous vérifions la résistance, l'anode, le thermostat et l'étanchéité complète du système.</p>
    `,
  },
  {
    slug: "plomberie-ecoresponsable",
    title: "Plomberie éco-responsable : réduisez votre consommation d'eau de 40%",
    date: "2026-02-08",
    excerpt:
      "Équipements économes, récupérateurs d'eau de pluie, robinets intelligents : les solutions pour une plomberie durable.",
    content: `
      <p>La plomberie d'aujourd'hui peut être un levier puissant de réduction de votre empreinte environnementale. Voici les solutions concrètes.</p>
      <h2>Les équipements hydro-économes</h2>
      <p>Un mousseur hydro-économe réduit le débit de 12L/min à 6L/min sans perte de confort. Une douchette économique divise par deux la consommation. Coût : quelques euros. Économie : jusqu'à 30% sur la facture d'eau.</p>
      <h2>La chasse d'eau double commande</h2>
      <p>Passer d'une chasse simple (9L) à une double commande (3/6L) économise jusqu'à 15 000 litres par an et par personne. L'installation est rapide et accessible.</p>
      <h2>Le récupérateur d'eau de pluie</h2>
      <p>Un système bien conçu peut couvrir 40% des besoins en eau d'un foyer : WC, lave-linge, arrosage. L'investissement initial est amorti en 5 à 7 ans.</p>
      <h2>Notre engagement</h2>
      <p>Chez Lucas, nous conseillons systématiquement les solutions les plus économes pour chaque installation. C'est bon pour la planète, et pour votre portefeuille.</p>
    `,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Vos professionnels sont-ils certifiés et assurés ?",
    answer:
      "Absolument. Tous nos techniciens sont diplômés, certifiés Qualibat RGE et couverts par une assurance responsabilité civile professionnelle complète. Ils bénéficient également de formations continues pour maîtriser les dernières technologies du secteur.",
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer:
      "Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons à votre domicile pour évaluer précisément vos besoins et vous remettons un devis détaillé sous 24 à 48 heures. Pour les urgences, nous fournissons un estimatif par téléphone avant intervention.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les règlements par carte bancaire, espèces, chèque et virement bancaire. Pour les chantiers de rénovation importants, nous proposons un échelonnement des paiements en fonction de l'avancement des travaux.",
  },
  {
    question: "Intervenez-vous le week-end et les jours fériés ?",
    answer:
      "Oui, notre service d'urgence est disponible 24h/24 et 7j/7, y compris les week-ends et jours fériés. Pour une urgence, appelez-nous directement au 04 27 00 00 00. Les interventions programmées sont réalisées du lundi au vendredi.",
  },
  {
    question: "Offrez-vous une garantie sur vos interventions ?",
    answer:
      "Toutes nos interventions sont garanties 1 an, pièces et main-d'œuvre. Pour les installations neuves, la garantie est de 2 ans. Les travaux de rénovation sont couverts par la garantie décennale obligatoire. Nous assurons un suivi rigoureux de chaque chantier.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sophie M.",
    source: "Google",
    text: "Intervention ultra rapide pour une fuite sous l'évier. Technicien ponctuel, propre et efficace. Prix conforme au devis. Je recommande sans hésiter.",
  },
  {
    name: "Pierre D.",
    source: "Trustpilot",
    text: "Rénovation complète de notre salle de bain. Résultat bluffant, délais respectés, équipe adorable. Lucas a transformé un projet stressant en expérience sereine.",
  },
  {
    name: "Marie & Laurent F.",
    source: "Google",
    text: "Détection de fuite sans rien casser : bluffant. Ils ont trouvé la fuite derrière le mur en 20 minutes avec une caméra thermique. Des vrais pros.",
  },
  {
    name: "Karine L.",
    source: "Facebook",
    text: "Débouchage de canalisation un dimanche soir. Appel à 19h, intervention à 20h, problème réglé à 21h. Service d'urgence qui porte bien son nom.",
  },
];
