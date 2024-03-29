(function () {
  const validateFields = (form, fieldsArray) => {

    fieldsArray.forEach((field) => {
      field.removeClass("input-error");
      if (field.val().trim() === "") {
        field.addClass("input-error");
      }
    });

    const errorFields = form.find(".input-error");

    return errorFields.length === 0;
  };

  $(".form").submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='username']");
    const phone = form.find("[name='usertel']");
    const comment = form.find("[name='usermessage']");
    const to = form.find("[name='to']");

    const popupForm = $("#popup-form");
    const content = popupForm.find(".popup-form__content");
    popupForm.removeClass("error-popup-form");

    const isValid = validateFields(form, [name, phone, comment, to]);

    if (isValid) {
      const request = $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "post",
        data: {
          name: name.val(),
          phone: phone.val(),
          comment: comment.val(),
          to: to.val(),
        },

      });

      request.done(data => {
        content.text(data.message);
        $('.form')[0].reset();
      });

      request.fail(data => {
        const message = data.responseJSON.message;
        content.text(message);
        popupForm.addClass("error-popup-form");
      });

      request.always(() => {
        $.fancybox.open({
          src: "#popup-form",
          type: "inline"
        });
      });
    };
  });

  $(".app-submit-btn").click(e => {
    e.preventDefault();

    $.fancybox.close();
  });
})();
