// ============================================================
// CONFIG.JS · ACAMPA
// Configuració centralitzada dels formularis
// ============================================================

// 🔐 CODIS D'ACCÉS VÀLIDS
const ACCESS_CODES = [
    "ACAMPA2026",
    "JUNTA2026",
    "VOLUNTARIAT26"
];

// 📧 EMAILS DESTINATARIS SEGONS EL TIPUS DE FORMULARI
// Cada formulari té una clau (la que posa al seu HTML com a data-form-type)
// i una llista d'emails que rebran les respostes.
const FORM_EMAILS = {
    // Annex 1: Compromís de Confidencialitat
    "confidencialitat": [
        "secretaria@acampa.cat"
    ],
    
    // Annex 2: Declaració de Conflictes d'Interessos
    "conflictes": [
        "secretaria@acampa.cat",
        "presidencia@acampa.cat"
    ],
    
    // Annex 3: Acceptació del tractament de dades (RGPD)
    "rgpd": [
        "protecciodades@acampa.cat",
        "secretaria@acampa.cat"
    ],
    
    // Annex 4: Compromís d'Autocura (voluntariat)
    "autocura": [
        "voluntariat@acampa.cat"
    ],
    
    // Annex 5: Codi de conducta en xarxes socials
    "xarxes": [
        "comunicacio@acampa.cat",
        "secretaria@acampa.cat"
    ]
};

// ⚠️ EMAIL PER DEFECTE (si el formulari no té un tipus configurat)
const DEFAULT_EMAIL = "secretaria@acampa.cat";

// ❌ MISSATGE D'ERROR DEL CODI D'ACCÉS
const ERROR_MSG = "El codi d'accés no és correcte. Si us plau, revisa el correu que t'ha enviat Secretaria o contacta amb secretaria@acampa.cat.";