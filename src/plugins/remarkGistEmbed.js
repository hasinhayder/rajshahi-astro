import { visit } from 'unist-util-visit';

export default function remarkGistEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (
        node.children.length === 1 &&
        node.children[0].type === 'text'
      ) {
        const match = node.children[0].value.match(/^#gist\s+(.+)$/);
        if (match) {
          const gistUrl = match[1].trim();
          // Accepts either the full embed URL or just the gist ID
          const src = gistUrl.startsWith('https://gist.github.com/')
            ? gistUrl.replace(/\/$/, '') + '.js'
            : `https://gist.github.com/${gistUrl}.js`;
          parent.children[index] = {
            type: 'html',
            value: `<script src="${src}"></script>`,
          };
        }
      }
    });
  };
}
