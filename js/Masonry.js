document.addEventListener("DOMContentLoaded", function () {
  const grids = document.querySelectorAll('.collection, .sub-collection');

  grids.forEach(grid => {
    new Masonry(grid, {
      itemSelector: ".artpiece",
      columnWidth: ".artpiece",
      gutter: 10,
    });
  });
});