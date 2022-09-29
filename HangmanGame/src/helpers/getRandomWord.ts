let words: string[] = [
    'PATATA',
    'WALKIETALKI',
    'CALENDARIO',
    'SOPORTE',
    'MOVIL',
    'ENCHUFE',
    'CASCO'
]

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    
    return words[randomIndex];
}