import extensions from './extensions.json' with { type: 'json' };

const markdownExtensions = Object.freeze([...extensions]);
const markdownExtensionsSet = new Set(markdownExtensions);

function normalizeExtension(input) {
  if (typeof input !== 'string') return '';
  const value = input.trim().toLowerCase();
  if (!value) return '';

  const filename = value.split('/').pop()?.split('\\').pop() ?? value;

  if (filename.startsWith('.')) {
    return filename.slice(1);
  }

  const lastDot = filename.lastIndexOf('.');
  return lastDot === -1 ? filename : filename.slice(lastDot + 1);
}

function isMarkdownExtension(input) {
  return markdownExtensionsSet.has(normalizeExtension(input));
}

function isMarkdownFile(input) {
  if (typeof input !== 'string') return false;
  const filename = input.split('/').pop()?.split('\\').pop() ?? input;
  const lastDot = filename.lastIndexOf('.');
  if (lastDot === -1) return false;
  return isMarkdownExtension(filename.slice(lastDot + 1));
}

export {
  markdownExtensions,
  markdownExtensionsSet,
  normalizeExtension,
  isMarkdownExtension,
  isMarkdownFile
};

export default markdownExtensions;
