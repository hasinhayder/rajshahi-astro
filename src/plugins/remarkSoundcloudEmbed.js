import { visit } from 'unist-util-visit';

export default function remarkSoundcloudEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (
        node.children.length === 1 &&
        node.children[0].type === 'text'
      ) {
        const match = node.children[0].value.match(/^#soundcloud\s+(.+)$/);
        if (match) {
          const url = match[1].trim();
          parent.children[index] = {
            type: 'html',
            value: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%231976d2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`,
          };
        }
      }
    });
  };
}
