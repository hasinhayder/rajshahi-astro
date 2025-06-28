import { visit } from 'unist-util-visit';

export default function remarkGoogleMapsEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (
        node.children.length === 1 &&
        node.children[0].type === 'text'
      ) {
        const match = node.children[0].value.match(/^#map\s+(.+)$/);
        if (match) {
          let mapUrl = match[1].trim();
          // If only a query is provided, build the embed URL
          if (!mapUrl.startsWith('https://')) {
            mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapUrl)}&output=embed`;
          }
          parent.children[index] = {
            type: 'html',
            value: `<iframe width="100%" class='aspect-ratio' style="aspect-ratio: 16/9; border-radius:10px;" src="${mapUrl}" frameborder="0" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>`,
          };
        }
      }
    });
  };
}
