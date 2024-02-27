(function () {
  const mesurewidth = item => {
    let reqItemWidth = 0;

    const screenWidth = $(window).width();
    const container = item.closest(".catalogs__list");
    const titleBlocks = container.find(".catalogs__btn");
    const titleWidth = titleBlocks.width() * titleBlocks.length;

    const textContainer = item.find(".catalogs__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      reqItemWidth = screenWidth - titleWidth;
    } else {
      reqItemWidth = 500;
    }

    return {
      container: reqItemWidth,
      textContainer: reqItemWidth - paddingRight - paddingLeft
    }
  };

  const closeEveryItemContainer = container => {
    const items = container.find(".catalogs__item");
    const content = container.find(".catalogs__content");

    items.removeClass("active");
    content.width(0);
  }

  const openItem = (item) => {
    const hiddenContent = item.find(".catalogs__content");
    const reqWidth = mesurewidth(item);
    const textBlock = item.find(".catalogs__container");

    item.addClass("active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
  };

  $(".catalogs__btn").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".catalogs__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".catalogs__list");

    if (itemOpened) {
      closeEveryItemContainer(container);
    } else {
      closeEveryItemContainer(container);
      openItem(item);
    }
  });

  $(".catalogs__btn-close").on("click", e => {
    e.preventDefault();

    closeEveryItemContainer($(".catalogs__list"));
  })

})();
