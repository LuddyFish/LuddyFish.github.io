const grids = document.querySelectorAll('.collection');

document.addEventListener("DOMContentLoaded", () => {
  grids.forEach(grid => {
    imagesLoaded(grid, () => {
    new Masonry(grid, {
      itemSelector: ".artpiece",
      columnWidth: ".artpiece",
      gutter: ".gutter-sizer",
      isFitWidth: true
      });
    });
  });
});