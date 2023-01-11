import React from "react";

const Contacts = () => {
  return (
    <div class="wrapper">
      <div class="Contacts-wrapper">
        <a class="contacts__card-a hotlineNumber" href="">
          <div class="hotlineNumber_img" />
          <p class="_text">
            Hotline <br /> Number <br />{" "}
          </p>
        </a>
        <a href="" class="contacts__card-a email">
          <div class="email_img" />
          <p class="_text">email</p>
        </a>
        <a href="" class="contacts__card-a instagram">
          <div class="instagram_img" />
          <p class="_text">instagram</p>
        </a>
        <a href="" class="contacts__card-a telegram">
          <div class="telegram_img" />
          <p class="_text">telegram</p>
        </a>
        <a href="" class="contacts__card-a faceboock">
          <div class="faceboock_img" />
          <p class="_text">faceboock</p>
        </a>
      </div>
    </div>
  );
};
export default Contacts;
