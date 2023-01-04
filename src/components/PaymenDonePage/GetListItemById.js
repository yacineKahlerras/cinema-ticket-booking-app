export default function GetListItemById(itemId, itemsList) {
  for (let itemIdx = 0; itemIdx < itemsList.length; itemIdx++)
    if (itemsList[itemIdx].id == itemId) return itemsList[itemIdx];
}
