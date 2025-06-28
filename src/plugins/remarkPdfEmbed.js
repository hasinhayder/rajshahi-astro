import { visit } from 'unist-util-visit';

export default function remarkPdfEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!node || !parent || !node.children) return;

      const textNode = node.children.find((child) => child.type === 'text');
      if (!textNode) return;

      const text = textNode.value.trim();

      if (text.startsWith('#pdf ')) {
        let url = text.slice(5).trim();

        // Automatically add https:// if missing
        if (!/^https?:\/\//i.test(url)) {
          url = 'https://' + url;
        }

        parent.children[index] = {
          type: 'html',
          value: `<iframe src="${url}" width="100%" height="600" style="border:none; aspect-ratio: 16/9;" allowfullscreen></iframe>`,
        };
      }
    });
  };
}
