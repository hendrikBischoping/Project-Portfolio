/**
 * Interface representing a commentary object.
 * This interface defines the structure of a commentary with its translations and display properties.
 */
export interface Commentaries {
    commentaryDe: string;
    commentaryEn: string;
    name: string;
    title: string;
    goesLeft: boolean;
    goesRight: boolean;
    isFarLeft: boolean;
    isLeft: boolean;
    isShown: boolean;
    isRight: boolean;
    isFarRight: boolean;
}