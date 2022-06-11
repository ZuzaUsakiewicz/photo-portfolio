let PHOTOS = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    name: "bird",
    category: "birds",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    name: "mount",
    category: "mountains",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    name: "trav",
    category: "travel",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    name: "arch",
    category: "architecture",
  },
];

function filterByCategory(category) {
  return PHOTOS.filter(
    (photo) => photo.category.toLowerCase() === category.toLowerCase()
  );
}

function getPhotoById(id) {
  return PHOTOS.find((photo) => photo.id === id);
}

let categories = [...new Set(PHOTOS.map((photo) => photo.category))];

export { categories, PHOTOS, filterByCategory, getPhotoById };
