import React, { useState } from "react";
import group from "../assets/images/Group.png";
import faceboock from "../assets/images/faceboock.png";
import heroImg from "../assets/images/hero-img.png";
import commentImg1 from "../assets/images/icon1.png";
import commentImg2 from "../assets/images/icon2.png";
import commentImg3 from "../assets/images/icon3.png";
import workImg1 from "../assets/images/w-img1.png";
import workImg2 from "../assets/images/w-img2.png";
import workImg3 from "../assets/images/w-img3.png";
import delivry1 from "../assets/images/d-img1.png";
import delivry2 from "../assets/images/d-img2.png";
import delivry3 from "../assets/images/d-img3.png";
import brandImg1 from "../assets/images/logotip1.png";
import brandImg2 from "../assets/images/logotip2.png";
import brandImg3 from "../assets/images/logotip3.png";
import brandImg4 from "../assets/images/logotip4.png";
import brandImg5 from "../assets/images/logotip5.png";
import brandImg6 from "../assets/images/logotip6.png";
import brandImg7 from "../assets/images/logotip7.png";
import brandImg8 from "../assets/images/logotip8.png";
import Image from "../assets/images/image.png";
import User1 from "../assets/images/user1.png";
import User2 from "../assets/images/user2.png";
import User3 from "../assets/images/user3.png";
import User4 from "../assets/images/user4.png";
import User5 from "../assets/images/user5.png";
import User6 from "../assets/images/user6.png";
import Instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import Linkedin from "../assets/images/linkedin.png";

function Home() {
  //////////////
  const [toggle, setToggle] = useState(false);
  //////////////

  /////    HEADER    /////
  const header = ["Home", "About", "Blog", "Contact", "Help"];
  let headerCards = header?.map((i, inx) => (
    <a key={inx} href="#" className="nav-item">
      {i}
    </a>
  ));
  /////    HEADER    /////

  /////    HERO    /////
  const hero = [
    {
      id: 1,
      heroText: "Поставщик Дальнего Востока",
      heroPar: `Наши клиенты получают полный спектр услуг по работе с Китаем.
    Начиная с подбора производителя заканчивая доставкой товара до
    двери. Настолько прозрачных сделок с Китаем вы еще не
    осуществляли.`,
      heroA: "Узнать больше",
    },
  ];
  let heroCards = hero.map((i) => (
    <div className="hero-style" key={i.id}>
      <div className="hero-content">
        <p className="hero-text">{i.heroText}</p>
        <p className="hero-par">{i.heroPar}</p>
        <a href="#" className="hero-a">
          {i.heroA}
        </a>
      </div>
      <img src={heroImg} alt="" />
    </div>
  ));
  /////    HERO    /////
  /////    COMMENT    /////
  const comment = [
    {
      id: 1,
      img: commentImg1,
      commentText: "Поиск производителей по товару",
      commentPar: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod incididunt ut.`,
    },
    {
      id: 2,
      img: commentImg2,
      commentText: "Поиск конкретного производителя",
      commentPar: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod incididunt ut.`,
    },
    {
      id: 3,
      img: commentImg3,
      commentText: "Доставка образцов товаров",
      commentPar: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod incididunt ut.`,
    },
  ];
  let commentCards = comment.map((i) => (
    <div key={i.id} className="comment-card">
      <img src={i.img} alt="" />
      <p className="comment-text">{i.commentText}</p>
      <p className="comment-par">{i.commentPar}</p>
    </div>
  ));
  /////    COMMENT    /////
  /////    WORK    /////
  const work = [
    {
      id: 1,
      img: workImg1,
      workText: "Станки и оборудование",
      workPar: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod ut.`,
      workPrice: "20 000 руб.",
    },
    {
      id: 2,
      img: workImg2,
      workText: "Станки и оборудование",
      workPar: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod ut.`,
      workPrice: "20 000 руб.",
    },
    {
      id: 3,
      img: workImg3,
      workText: "Станки и оборудование",
      workPar: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod ut.`,
      workPrice: "20 000 руб.",
    },
  ];
  let workCards = work?.map((i) => (
    <div key={i.id} className="work-card">
      <img src={i.img} alt="" />
      <div className="work-card-content">
        <p className="w-card-text">{i.workText}</p>
        <p className="w-card-par">{i.workPar}</p>
        <a className="w-card-a">{i.workPrice}</a>
      </div>
    </div>
  ));
  /////    WORK    /////
  /////    DELIVRY    /////
  const delivery = [
    {
      id: 1,
      img: delivry1,
      Text: "Предложение от продавца",
      Par: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Elit duis tristique sollicitudin nibh sit amet. Ultrices eros
      in cursus turpis massa tincidunt. Venenatis urna cursus eget
      nunc scelerisque viverra mauris in.`,
    },
    {
      id: 2,
      img: delivry2,
      Text: "Доставка",
      Par: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Elit duis tristique sollicitudin nibh sit amet. Ultrices eros
      in cursus turpis massa tincidunt. Venenatis urna cursus eget
      nunc scelerisque viverra mauris in.`,
    },
    {
      id: 3,
      img: delivry3,
      Text: "Установка у клиента",
      Par: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Elit duis tristique sollicitudin nibh sit amet. Ultrices eros
      in cursus turpis massa tincidunt. Venenatis urna cursus eget
      nunc scelerisque viverra mauris in.`,
    },
  ];
  let delivryCards = delivery?.map((i) => (
    <div key={i.id} className="d-card">
      <img src={i.img} alt="" />
      <div className="d-content">
        <p className="d-card-text">{i.Text}</p>
        <div className="line"></div>
        <p className="d-card-par">{i.Par}</p>
      </div>
    </div>
  ));
  /////    DELIVRY    /////
  /////    BRAND    /////
  const brand = [
    {
      id: 1,
      img: brandImg1,
      text: "Росатом",
      par: "Корпорация атомной энергии",
    },
    {
      id: 2,
      img: brandImg2,
      text: "Росатом",
      par: "Корпорация атомной энергии",
    },
    {
      id: 3,
      img: brandImg3,
      text: "Росатом",
      par: "Корпорация атомной энергии",
    },
    {
      id: 4,
      img: brandImg4,
      text: "Росатом",
      par: "Корпорация атомной энергии",
    },
    {
      id: 5,
      img: brandImg5,
      text: "Росатом",
      par: "Корпорация атомной энергии",
    },
    {
      id: 6,
      img: brandImg6,
      text: "Росатом",
      par: "Корпорация атомной энергии",
    },
    {
      id: 7,
      img: brandImg7,
      text: "Росатом",
      par: "Корпорация атомной энергии",
    },
    {
      id: 8,
      img: brandImg8,
      text: "Росатом",
      par: "Корпорация атомной энергии",
    },
  ];
  let brandCards = brand?.map((i) => (
    <div key={i.id} className="b-card">
      <img src={i.img} alt="" />
      <p className="b-text">{i.text}</p>
      <p className="b-par">{i.par}</p>
    </div>
  ));
  /////    BRAND    /////
  /////    COMPANI    /////
  const compani = [
    {
      id: 1,
      img: User1,
      text: "Антон Макаров",
      par: "Руководитель компании",
    },
    {
      id: 2,
      img: User2,
      text: "Елена Валерьева",
      par: "Руководитель компании",
    },
    {
      id: 3,
      img: User3,
      text: "Иван Аркадьев",
      par: "Руководитель компании",
    },
    {
      id: 4,
      img: User4,
      text: "Борис Вавилов",
      par: "Руководитель компании",
    },
    {
      id: 5,
      img: User5,
      text: "Алина Кравец",
      par: "Руководитель компании",
    },
    {
      id: 6,
      img: User6,
      text: "Виктор Козуб",
      par: "Руководитель компании",
    },
  ];
  let companiCards = compani?.map((i) => (
    <div key={i.id} className="c-card">
      <div className="c-div"></div>
      <div className="c-content">
        <img src={i.img} alt="" />
        <div className="c-content2">
          <p className="c-text">{i.text}</p>
          <p className="c-par">{i.par}</p>
          <div className="line"></div>
          <div className="c-images">
            <img src={Instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={Linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  ));
  /////    COMPANI    /////
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <a href="#" className="nav-logo">
              грузовик
            </a>
            <div
              className="nav-items"
              id={`navbar-responsive ${toggle ? "open" : ""}`}
            >
              {headerCards}
            </div>
            <button
              class="menu-btn"
              id="menu-btn"
              onClick={() => setToggle(!toggle)} // Bu yerda toggle holatini o'zgartirish uchun ishlatilgan
            >
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </button>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="container">{heroCards}</div>
      </section>
      <section className="comment">
        <div className="container">
          <div className="comment-cards">{commentCards}</div>
        </div>
      </section>
      <section className="work">
        <div className="container">
          <div className="work-style">
            <p className="work-title">Выполненные работы</p>
            <p className="work-par">
              Мы собрали информацию по грузам, которые мы уже доставили.У нас
              специальный подход к каждому виду товаров.
            </p>
            <div className="work-cards">{workCards}</div>
          </div>
        </div>
      </section>
      <section className="delivery">
        <div className="container">
          <p className="d-text">Этапы поставки</p>
          <div className="d-cards">{delivryCards}</div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <p className="brand-title">Нам доверяют</p>
          <div className="b-cards">{brandCards}</div>
        </div>
      </section>
      <section className="compani">
        <div className="container">
          <div className="c-title">Сотрудники компании</div>
          <div className="c-cards">{companiCards}</div>
        </div>
      </section>
      <section className="images">
        <div className="container">
          <img
            style={{ width: "100%", marginBottom: "166px" }}
            src={Image}
            alt=""
          />
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="footer-items">
            <div className="footer-links">
              <a href="#" className="footer-title">
                LOGO
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">
                Каталог
              </a>
              <a href="#" className="footer-link">
                о компании
              </a>
              <a href="#" className="footer-link">
                Индивидуальная
              </a>
              <a href="#" className="footer-link">
                Партнерам
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">
                2D, 3D модели
              </a>
              <a href="#" className="footer-link">
                Шоу-румы
              </a>
              <a href="#" className="footer-link">
                Дилерам
              </a>
              <a href="#" className="footer-link">
                Контакты
              </a>
              <a href="#" className="footer-link">
                Партнерам
              </a>
            </div>
            <div className="footer-links">
              <div className="footer-images">
                <img src={group} alt="" />
                <img src={faceboock} alt="" />
              </div>
              <a href="#" className="footer-tell">
                +38 (099)-638-45-37
              </a>
              <button className="footer-btn">Персональная консультация</button>
            </div>
          </div>
          <p className="footer-text">
            © 1993–2021 Интернет-магазин «LOGO» — truck
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
