// MajorCredits interfeysi və onun unikal brand xüsusiyyəti
export interface MajorCredits {
  credits: number;
  brand: 'MajorCredits.brand';
}

// MinorCredits interfeysi və onun unikal brand xüsusiyyəti
export interface MinorCredits {
  credits: number;
  brand: 'MinorCredits.brand';
}

// Major kreditləri toplayan funksiya
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits.brand',
  };
}

// Minor kreditləri toplayan funksiya
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits.brand',
  };
}
