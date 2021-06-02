import React from "react";
import "./style.css";

// Image
import Logo from "../../assets/BuanaLintas.png";

function Template() {
  return (
    <div className="pdf">
      <header>
        <img src={Logo} alt="Logo_Buana_Lintas_Media" />
        <p>
          PT. BUANA LINTAS MEDIA
          <br />
          Bamboo Estate Kav 10 RT 009/ RW 033 Tapanrejo Tajem Maguwoharjo Depok,
          <br />
          Sleman, D.I, Yogyakarta 55282, Indonesia.
          <br />
          Telp. : +62-274-4361352
          <br />
          Email : Info@buanalintas.co.id, Web : http://www.buanalintas.co.id
        </p>
      </header>
      <section>
        <div className="section1">
          <p>
            FORMULIR PENDAFTARAN BERLANGGANAN (Subscription Form)
            <br />
            SOFTWARE & INTERNET SERVICE PROVIDER
          </p>
        </div>
        <div className="content">
          <span className="font-bold">Isi dengan huruf cetak</span>{" "}
          <span className="font-italic">/ Fill In with capital letter</span>
          <br />
          <span className="font-bold">
            Beri tanda ✓ pada kotak pilihan
          </span>{" "}
          <span className="font-italic">/ Please tick in appropriate box</span>
          <div className="information">
            <div className="date">
              <input type="text" className="input-date" />
              <input type="text" className="input-date" />
              <input type="text" className="input-date" />
            </div>
            <div className="fpb-info">
              <table>
                <tr>
                  <td>No. FPB :</td>
                  <td>
                    <input type="text" className="input-no" />
                  </td>
                </tr>
                <tr>
                  <td>No. CID :</td>
                  <td>
                    <input type="text" className="input-no" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="field">
            <div className="type-of-order">
              <table>
                <thead>
                  <th colSpan="2">
                  <span className="font-bold">JENIS PERMINTAAN</span>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>
                      Jenis permintaan / Type of Order
                      </p>
                    </td>
                    <td>
                      <input type="checkbox" id="NewInstalation" />
                      <label htmlFor="NewInstalation">New Instalation</label>
                      <input type="checkbox" />
                      <label htmlFor="Upgrade">Upgrade</label>
                      <input type="checkbox" />
                      <label htmlFor="Upgrade">Down grade</label>
                      <input type="checkbox" />
                      <label htmlFor="Upgrade">Renewal</label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Template;
