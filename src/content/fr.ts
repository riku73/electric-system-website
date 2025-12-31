export const content = {
  meta: {
    title: "ELECTRIC SYSTEM Sàrl | Électricien Professionnel Luxembourg",
    description:
      "Services électriques professionnels au Luxembourg: installation photovoltaïque, bornes de recharge, domotique, sécurité. Devis gratuit à Bertrange et environs.",
  },

  company: {
    name: "ELECTRIC SYSTEM Sàrl",
    address: "177 Rue de Luxembourg",
    city: "L-8077 Bertrange",
    country: "Luxembourg",
    phone: "+352 661 22 44 09",
    email: "info@electric-system.lu",
    hours: "Lundi - Vendredi: 8h00 - 17h00",
    registration: "RCS Luxembourg B294234",
    vat: "TVA: LU36415556",
    capital: "30 000 EUR",
  },

  nav: {
    home: "Accueil",
    services: "Services",
    about: "À Propos",
    contact: "Contact",
    cta: "Demander un Devis",
  },

  hero: {
    title: "Votre Partenaire Électricien de Confiance au Luxembourg",
    subtitle:
      "Solutions électriques professionnelles pour particuliers et entreprises. De l'installation photovoltaïque à la domotique, nous réalisons vos projets avec expertise et fiabilité.",
    cta: {
      primary: "Découvrir Nos Services",
      secondary: "Nous Contacter",
    },
    trust: [
      {
        label: "Expertise Confirmée",
        icon: "Award",
      },
      {
        label: "Agréé et Certifié",
        icon: "Shield",
      },
      {
        label: "Devis Gratuit",
        icon: "FileCheck",
      },
    ],
  },

  services: {
    title: "Nos Services",
    subtitle: "Des solutions électriques complètes pour tous vos besoins",
    items: [
      {
        id: "photovoltaique",
        title: "Installation Photovoltaïque",
        description:
          "Produisez votre propre électricité avec nos panneaux solaires performants. Installation professionnelle et accompagnement pour les aides gouvernementales.",
        icon: "Sun",
      },
      {
        id: "borne-recharge",
        title: "Bornes de Recharge",
        description:
          "Installation de bornes de recharge pour véhicules électriques. Solutions adaptées pour particuliers, entreprises et copropriétés.",
        icon: "Zap",
      },
      {
        id: "electricite-generale",
        title: "Électricité Générale",
        description:
          "Tableaux électriques, circuits, câblage complet. Installation, rénovation et mise aux normes de vos installations électriques.",
        icon: "Wrench",
      },
      {
        id: "domotique",
        title: "Domotique",
        description:
          "Automatisation de votre maison: éclairage intelligent, volets automatiques, contrôle centralisé pour plus de confort et d'économies.",
        icon: "Home",
      },
      {
        id: "securite",
        title: "Sécurité",
        description:
          "Protection complète de vos biens: alarmes, vidéosurveillance CCTV, contrôle d'accès. Sécurisez votre domicile ou entreprise.",
        icon: "ShieldCheck",
      },
      {
        id: "informatique",
        title: "Infrastructure Informatique",
        description:
          "Câblage réseau structuré, installation de baies informatiques, connexions fibre optique pour une infrastructure performante.",
        icon: "Network",
      },
    ],
  },

  about: {
    title: "À Propos d'ELECTRIC SYSTEM",
    subtitle: "Votre électricien de confiance au Luxembourg",
    content: [
      "ELECTRIC SYSTEM Sàrl est votre partenaire de confiance pour tous vos travaux électriques au Luxembourg. Basée à Bertrange, notre entreprise met son expertise au service des particuliers et des professionnels.",
      "Notre équipe de techniciens qualifiés intervient sur tout type de projet, de la simple installation électrique aux systèmes domotiques les plus avancés. Nous nous engageons à fournir un travail de qualité, dans le respect des normes en vigueur et des délais convenus.",
    ],
    values: [
      {
        title: "Qualité",
        description: "Travail soigné et matériaux de premier choix",
        icon: "Star",
      },
      {
        title: "Fiabilité",
        description: "Respect des délais et des engagements",
        icon: "Clock",
      },
      {
        title: "Expertise",
        description: "Équipe qualifiée et formée en continu",
        icon: "GraduationCap",
      },
      {
        title: "Service",
        description: "Conseil personnalisé et suivi client",
        icon: "HeartHandshake",
      },
    ],
  },

  testimonials: {
    title: "Ce Que Disent Nos Clients",
    subtitle: "La satisfaction de nos clients est notre priorité",
    items: [
      {
        name: "Jean-Pierre M.",
        location: "Luxembourg-Ville",
        rating: 5,
        text: "Excellente installation photovoltaïque. L'équipe a été très professionnelle et réactive. Le chantier a été livré dans les temps et proprement. Je recommande vivement ELECTRIC SYSTEM!",
      },
      {
        name: "Marie L.",
        location: "Bertrange",
        rating: 5,
        text: "Installation de notre borne de recharge effectuée rapidement et proprement. Le technicien nous a bien conseillé sur le choix du matériel adapté à notre véhicule. Très satisfaite du service.",
      },
      {
        name: "Pierre D.",
        location: "Strassen",
        rating: 5,
        text: "Rénovation électrique complète de notre maison. Travail impeccable, équipe à l'écoute et très professionnelle. Les conseils en domotique nous ont permis de faire des économies d'énergie.",
      },
    ],
  },

  contact: {
    title: "Contactez-Nous",
    subtitle: "Demandez votre devis gratuit et sans engagement",
    form: {
      name: {
        label: "Nom complet",
        placeholder: "Votre nom",
      },
      email: {
        label: "Adresse email",
        placeholder: "votre@email.com",
      },
      phone: {
        label: "Téléphone",
        placeholder: "+352 XXX XXX XXX",
      },
      service: {
        label: "Service intéressé",
        placeholder: "Sélectionnez un service",
        options: [
          { value: "photovoltaique", label: "Installation Photovoltaïque" },
          { value: "borne-recharge", label: "Bornes de Recharge VE" },
          { value: "electricite-generale", label: "Électricité Générale" },
          { value: "domotique", label: "Domotique" },
          { value: "securite", label: "Sécurité" },
          { value: "informatique", label: "Infrastructure Informatique" },
          { value: "autre", label: "Autre" },
        ],
      },
      message: {
        label: "Votre message",
        placeholder: "Décrivez votre projet ou votre demande...",
      },
      submit: "Envoyer ma demande",
      submitting: "Envoi en cours...",
      success:
        "Merci! Votre message a été envoyé avec succès. Nous vous recontacterons dans les plus brefs délais.",
      error:
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement par téléphone.",
    },
    info: {
      title: "Informations de Contact",
      address: {
        label: "Adresse",
        icon: "MapPin",
      },
      phone: {
        label: "Téléphone",
        icon: "Phone",
      },
      email: {
        label: "Email",
        icon: "Mail",
      },
      hours: {
        label: "Horaires",
        icon: "Clock",
      },
    },
  },

  footer: {
    description:
      "ELECTRIC SYSTEM Sàrl - Votre électricien de confiance au Luxembourg. Installation photovoltaïque, bornes de recharge, domotique et sécurité.",
    sections: {
      services: {
        title: "Nos Services",
        links: [
          { label: "Installation Photovoltaïque", href: "#services" },
          { label: "Bornes de Recharge", href: "#services" },
          { label: "Électricité Générale", href: "#services" },
          { label: "Domotique", href: "#services" },
          { label: "Sécurité", href: "#services" },
        ],
      },
      company: {
        title: "Entreprise",
        links: [
          { label: "À Propos", href: "#about" },
          { label: "Nos Réalisations", href: "#testimonials" },
          { label: "Contact", href: "#contact" },
        ],
      },
      legal: {
        title: "Informations Légales",
      },
    },
    copyright: "ELECTRIC SYSTEM Sàrl. Tous droits réservés.",
  },
} as const;

export type Content = typeof content;
