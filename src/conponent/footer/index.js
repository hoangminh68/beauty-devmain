import Time from "../time";
import { Wapper } from "./styled";

const Footer = () => {
  return (
    <Wapper>
      <Wapper>
        <ul class="footer__item footer__menu"></ul>
        <ul class="footer__item footer__menu">
          <li class="etr">
            <p class="footer__ttl">Contact</p>
            <div class="etr__add">
              <p class="ttl">Head Office</p>
              <p class="footer__txt ico ico--location">
                561, cach mang thang 8, q.3, tphcm
              </p>
              <div class="footer__txt ico ico--phone">
                <a href="tel:0906801855">09xx.xxx.xxx</a>
              </div>
              <div class="footer__txt ico ico--mail">
                <a href="mailto:mekong.bsm@luavietours.com">xxx@gmail.com</a>
              </div>
            </div>
          </li>
        </ul>
        <div class="footer__item footer__contact">
          <div class="footer__ctc">
            <p class="footer__ttl">Newsletter</p>
            <a href="" class="btn-email">
              Email of Our Valued Customer
            </a>
            <form
              method="post"
              class="footerForm"
              id="footerForm"
              action="javascript:void(0);"
              name="footerForm"
              novalidate=""
            >
              <input
                class="input validate[required,custom[email]]"
                type="email"
                placeholder="Email of Our Valued Customer"
                name="mail_notice"
              />
            </form>
          </div>
        </div>
      </Wapper>

    </Wapper>
  );
};
export default Footer;
