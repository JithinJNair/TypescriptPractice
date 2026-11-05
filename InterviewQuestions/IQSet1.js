"use strict";
// Understood. You need pure TypeScript coding interview questions that interviewers commonly ask candidates for Playwright Automation QA roles — not Playwright scripts, locators, POM, or framework questions.
// Here are the TypeScript programming questions to prepare for those interviews.
// ## Top 25 TypeScript coding interview questions for Playwright QA roles
// ### Strings
// 1. Reverse a string without using built-in reverse methods.
// 2. Check whether a string is a palindrome.
// 3. Count the occurrence of each character in a string.
// 4. Find the first non-repeating character in a string.
// 5. Check whether two strings are anagrams.
// 6. Remove duplicate characters from a string.
// 7. Count vowels and consonants in a string.
// ### Arrays
// 8. Find duplicate elements in an array.
// 9. Remove duplicate elements from an array.
// 10. Find the second-largest number in an array.
// 11. Find the missing number in a sequence.
// 12. Find common elements between two arrays.
// 13. Sort an array without using `sort()`.
// 14. Find the maximum and minimum values in an array.
// 15. Move all zeros to the end of an array.
// 16. Find pairs of numbers whose sum equals a target.
// 17. Flatten a nested array.
// 18. Separate even and odd numbers from an array.
// ### Objects and data manipulation
// 19. Count the frequency of elements in an array using an object.
// 20. Find the employee with the highest salary in an array of objects.
// 21. Group objects by a property.
// 22. Merge two objects and handle duplicate keys.
// 23. Compare two objects for equality.
// ### TypeScript-specific programming
// 24. Write a generic function that works with different data types.
// 25. Write a function using union types, optional parameters, and proper return types.
// These are representative coding exercises for automation QA interviews; the exact questions vary by company and experience level.
// I'll keep the next step strictly to TypeScript coding questions and solutions, without mixing in Playwright code.
class Prac {
    reverseString(str) {
        let rev = "";
        for (let i = str.length - 1; i >= 0; i--) {
            rev = rev + str[i];
        }
        return rev;
    }
    reverseClockWise(str, k) {
        let rev = "";
        rev = rev + str.substring(str.length - k) + str.substring(0, str.length - k) + " ";
        rev = rev.trim();
        return rev;
    }
    reverseAntiClockWise(str, k) {
        let rev = "";
        rev = rev + str.substring(k) + str.substring(0, k) + " ";
        rev = rev.trim();
        return rev;
    }
}
const obj = new Prac();
console.log(obj.reverseString("Hello"));
console.log(obj.reverseClockWise("Hello", 2));
console.log(obj.reverseAntiClockWise("Hello", 2));
