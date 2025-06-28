import { visit } from 'unist-util-visit';

export default function remarkSoundcloudEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!node || !parent || !node.children) return;

      const textNode = node.children.find((child) => child.type === 'text');
      if (!textNode) return;

      const text = textNode.value.trim();

      if (text.startsWith('#soundcloud ')) {
        let url = text.slice(12).trim();

        // Prepend https:// if missing
        if (!/^https?:\/\//i.test(url)) {
          url = 'https://' + url;
        }

        const iframeSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

        parent.children[index] = {
          type: 'html',
          value: `
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="${iframeSrc}"></iframe>
<div style="font-size: 10px; color: #cccccc; line-break: anywhere; word-break: normal; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif; font-weight: 100;">
  <a href="https://soundcloud.com" target="_blank" style="color: #cccccc; text-decoration: none;">Listen on SoundCloud</a>
</div>`.trim(),
        };
      }
    });
  };
}
