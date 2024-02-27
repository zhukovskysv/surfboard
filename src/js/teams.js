(function () {
  const openItem = item => {
    const container = item.closest(".teams__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const reqHeight = textBlock.height();

    container.addClass("team--active");
    contentBlock.height(reqHeight);
  };

  const closeEveryItem = (container) => {
    const items = container.find(".team__content");
    const itemContainer = container.find(".teams__item");

    itemContainer.removeClass("team--active");
    items.height(0);
  };

  $(".team__btn").click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".teams__list");
    const elemContainer = $this.closest(".teams__item");

    if (elemContainer.hasClass("team--active")) {
      closeEveryItem(container);
    } else {
      closeEveryItem(container);
      openItem($this);
    }

  });
})();
