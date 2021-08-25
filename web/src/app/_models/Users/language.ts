export interface UserLanguageResult {
    id: number;
    languageId: number;
    language: LanguageResult;
}

export interface LanguageResult {
    id: number;
    name: string;
}