const Contacts = () => {
  return (
    <main className="main">
    <section className="section">
      <div className="container">

        <h1 className="title">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>
              Moscow, Russia
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+99891331008">+998913310889</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="email">abkabylbekov97@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  </main>
  );
}
 
export default Contacts;