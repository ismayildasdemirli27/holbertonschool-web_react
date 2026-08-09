// String literal type
type Subjects = 'Math' | 'History';

// Dərsə uyğun nəticə qaytaran funksiya
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}

// Nəticəni yoxlamaq üçün (Şərtdəki Example)
console.log(teachClass('Math'));
console.log(teachClass('History'));
