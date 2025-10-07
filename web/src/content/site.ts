// web/src/content/site.ts
export const meta = {
  titleLine1: "Your main title line here",
  titleLine2: "Your subject / organism",
  badges: ["Your role", "Your institution", "Year(s)"],
  slidesUrl: "",  email: "",  linkedin: "",
};
export const buscoData = [
  { tool: "BRAKER3", Complete: 98.8 },
  { tool: "FunAnnotate", Complete: 97.4 },
];
export const gffCompareData = [
  { metric: "Base", BRAKER3: 0.98, FunAnnotate: 0.96 },
  { metric: "Exon", BRAKER3: 0.95, FunAnnotate: 0.97 },
  { metric: "Intron", BRAKER3: 0.98, FunAnnotate: 0.97 },
];
export const headlineStats = [
  { label: "Headline stat 1", value: 168 },
  { label: "Headline stat 2", value: 25 },
  { label: "Headline stat 3", value: 52 },
  { label: "Headline stat 4", value: 30 },
  { label: "Headline stat 5", value: "79.4%" },
];
export const evidencePieData = [
  { name: "Checked (n=xxx)", value: 442 },
  { name: "Supported (≥1 pep)", value: 52 },
  { name: "Strong (≥6 peps)", value: 30 },
];
export const highlight = { locusId: "Your_Locus_ID", bullets: [
  "Insert your highlight point 1","Insert your highlight point 2","Insert your highlight point 3",
]};
export const novelTranscriptSummary = [
  "Insert your summary item 1","Insert your summary item 2","Insert your summary item 3",
];
