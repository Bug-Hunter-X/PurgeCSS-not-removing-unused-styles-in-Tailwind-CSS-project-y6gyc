```html
<div class="flex items-center justify-center h-screen">
  <div class="bg-gray-200 p-4 rounded shadow">
    <h1 class="text-3xl font-bold mb-4">Tailwind CSS working</h1>
    <p>Tailwind CSS is now applying styles correctly after fixing PurgeCSS configuration.</p>
  </div>
</div>
```

```javascript
// purgecss.config.js
module.exports = {
  content: ['./**/*.html'],
  css: ['./**/*.css'],
  defaultExtractor: content => {
    // Extract class names from HTML content, handling edge cases like attributes
    let classList = [];
    content.match(/class="(.*?)"/g)?.forEach((match) => {
      classList = [...classList, ...match.replace(/class="(.*?)"/g, '$1').split(' ').filter(cls => cls !== '')];
    });
    return classList; 
  }
}
```