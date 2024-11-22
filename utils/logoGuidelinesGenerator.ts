// utils/logoGuidelinesGenerator.ts
export function generateLogoGuidelines(brandName: string, colorPalette: string): string {
  return `
# Logo Usage Guidelines for ${brandName}

## Color Palette
${colorPalette}

## Usage
1. Maintain clear space: Always keep a clear space around the logo, equal to at least 25% of the logo's width.
2. Minimum size: Ensure the logo is never smaller than 1 inch or 100 pixels wide to maintain legibility.
3. Background: Use the logo on backgrounds that provide sufficient contrast.
4. Don't alter: Do not stretch, distort, or alter the colors of the logo.
5. Placement: Avoid placing the logo on busy backgrounds or patterns that may reduce its visibility.

## File Formats
- Use SVG or AI files for print and large format applications.
- Use PNG files for digital applications where transparency is needed.
- Use JPG files for digital applications where a smaller file size is preferred.

## Questions
For any questions about logo usage, please contact [Your Contact Information].
  `;
}