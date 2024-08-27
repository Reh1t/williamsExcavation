import type { NextPage } from "next";
import styles from "./projects-gallery.module.css";

export type ProjectsGalleryType = {
  className?: string;
};

const ProjectsGallery: NextPage<ProjectsGalleryType> = ({ className = "" }) => {
  return (
    <section className={[styles.projectsGallery, className].join(" ")}>
      <h1 className={styles.projectGallery}>Project Gallery</h1>
      <div className={styles.imageGrid}>
        <div className={styles.imageRow}>
          <div className={styles.imagePair}>
            <div className={styles.imageItems}>
              <img
                className={styles.williamsExcavation07Icon}
                loading="lazy"
                alt=""
                src="/williams-excavation07@2x.png"
              />
              <img
                className={styles.williamsExcavation03Icon}
                loading="lazy"
                alt=""
                src="/williams-excavation-03@2x.png"
              />
            </div>
            <div className={styles.singleImage}>
              <img
                className={styles.williamsexcavation14Icon}
                loading="lazy"
                alt=""
                src="/williamsexcavation14@2x.png"
              />
            </div>
            <div className={styles.imageItems1}>
              <img
                className={styles.williamsExcavation03Icon1}
                alt=""
                src="/williams-excavation-03-1@2x.png"
              />
              <img
                className={styles.williamsExcavation03Icon}
                loading="lazy"
                alt=""
                src="/williams-excavation02@2x.png"
              />
            </div>
          </div>
          <div className={styles.imageRow1}>
            <div className={styles.imagePair1}>
              <img
                className={styles.williamsExcavation01Icon}
                loading="lazy"
                alt=""
                src="/williams-excavation-01@2x.png"
              />
              <img
                className={styles.williamsExcavation01Icon}
                loading="lazy"
                alt=""
                src="/williams-excavation11@2x.png"
              />
            </div>
            <img
              className={styles.williamsExcavation08Icon}
              loading="lazy"
              alt=""
              src="/williams-excavation08@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
