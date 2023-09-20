import React from "react";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <section
        className={styles.about_section}
        id="about"
        style={{ marginTop: "200px" }}
      >

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.imag}>
              <img src="about/mansoor.jpg" alt="" />
            </div>
            <div className={styles.text_container}>
              <span className={styles.span}></span>
              <h1 className={styles.title}>Web Development</h1>
              <p className={styles.desc}></p>
              <a
                className={styles.link}
                href="https://webdevtrick.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit Webdevtrick
              </a>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.imag}>
              <img src="about/sanoob.jpg" alt="" />
            </div>
            <div className={styles.text_container}>
              <span className={styles.span}></span>
              <h1 className={styles.title}>Web Development</h1>
              <p className={styles.desc}></p>
              <a
                className={styles.link}
                href="https://webdevtrick.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit Webdevtrick
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
