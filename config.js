// ============================================================
// CONFIG.JS · ACAMPA
// Configuració centralitzada dels formularis
// ============================================================

// 🔐 CODIS D'ACCÉS VÀLIDS
const ACCESS_CODES = [
    "ACAMPA2026",
    "JUNTA2026",
    "VOLUNTARIAT26",
    "ASSOCIAT2026"       // Codi per als associats (formulari comitè clínic)
];

// 📧 CORREU ÚNIC DESTINATARI (mentre no tingueu emails separats)
const DEFAULT_EMAIL = '849eac42396b113846283faae41e979e';

// ❌ MISSATGE D'ERROR DEL CODI D'ACCÉS
const ERROR_MSG = "El codi d'accés no és correcte. Si us plau, revisa el correu que t'ha enviat ACAMPA o contacta amb info@acampa.cat.";

// ============================================================
// 👨‍⚕️ MEMBRES DEL COMITÈ CLÍNIC ASSESSOR
// ============================================================
// Actualitza aquesta llista quan es formalitzin els membres.
// Cada membre té: nom, especialitat, hospital i àmbits.
// Si "disponible" és false, no apareixerà al desplegable.
const COMITE_CLINIC = [
    {
        nom: "Dra. [Nom i Cognoms]",
        especialitat: "Neurologia · Trastorns del Moviment",
        hospital: "Hospital Clínic de Barcelona",
        ambit: "PSP · AMS · DCB",
        disponible: true
    },
    {
        nom: "Dr. [Nom i Cognoms]",
        especialitat: "Neurologia · Trastorns del Moviment",
        hospital: "Hospital de la Santa Creu i Sant Pau",
        ambit: "Recerca · Diagnòstic",
        disponible: true
    },
    {
        nom: "Dra. [Nom i Cognoms]",
        especialitat: "Neurologia",
        hospital: "Hospital Universitari Vall d'Hebron",
        ambit: "DCB · Cognició",
        disponible: true
    },
    {
        nom: "[Nom i Cognoms]",
        especialitat: "Logopèdia · Disfàgia",
        hospital: "Hospital de Bellvitge",
        ambit: "Disfàgia · Nutrició",
        disponible: true
    },
    {
        nom: "[Nom i Cognoms]",
        especialitat: "Fisioteràpia · Neurorehabilitació",
        hospital: "Centre Teknon · Unitat de Parkinson",
        ambit: "Mobilitat · Caigudes",
        disponible: true
    },
    {
        nom: "[Nom i Cognoms]",
        especialitat: "Neuropsicologia",
        hospital: "Hospital Clínic de Barcelona",
        ambit: "Suport emocional · Cognició",
        disponible: true
    },
    {
        nom: "[Nom i Cognoms]",
        especialitat: "Treball Social Sanitari",
        hospital: "Xarxa d'Atenció Primària · Barcelona",
        ambit: "Tràmits · Recursos socials",
        disponible: true
    },
    {
        nom: "[Nom i Cognoms]",
        especialitat: "Dietista-Nutricionista",
        hospital: "Col·laborador extern",
        ambit: "Nutrició · Dietètica",
        disponible: true
    }
];