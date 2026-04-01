import "./NotFound.css";
import notfoundimg from "../assets/not-found.svg";

export function NotFound() {
  return (
    <>
      <title>Error</title>
      <div className="container">
        <center>
          <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1>404</h1>
            <h2>The page you are looking for doesn't exist.</h2>
            <a className="btn" href="/">
              Back to home
            </a>{" "}
            <br /> <br />
            <img src={notfoundimg} className="not-found" height="350px" />
          </section>
        </center>
      </div>
    </>
  );
}
