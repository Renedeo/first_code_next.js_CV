// ContentItem.ts

interface Items{
  description: string;
  item:Array<string>;
}

interface ContentItem {
    date: string;
    title: string;
    subtitle: string;
    items: Items;
  }

export default ContentItem;
  