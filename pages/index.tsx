import type { NextPage } from "next";
import Section from "../components/section";
import Section1 from "../components/section1";
import Williams from "../components/williams";
import ProjectsGallery from "../components/projects-gallery";
import styles from "./index.module.css";

const WillaimsExcavation: NextPage = () => {
  return (
    <div className={styles.willaimsExcavation}>
      <Section />
      <Section1 />
      <Williams />
      <ProjectsGallery />
      <section className={styles.contact}>
        <div className={styles.heading}>
          <div className={styles.heading1}>
            <div className={styles.headingChild} />
            <h1 className={styles.contactUs}>Contact Us</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WillaimsExcavation;
