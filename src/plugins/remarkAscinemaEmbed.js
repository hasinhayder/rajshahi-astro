import { visit } from 'unist-util-visit';

export default function remarkAscinemaEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (
        node.children.length === 1 &&
        node.children[0].type === 'text'
      ) {
        const match = node.children[0].value.match(/^#asciinema\s+([\w-]+)$/);
        if (match) {
          const id = match[1];
          parent.children[index] = {
            type: 'html',
            value: `<script src="https://asciinema.org/a/${id}.js" id="asciicast-${id}" async></script>`,
          };
        }
      }
    });
  };
}
