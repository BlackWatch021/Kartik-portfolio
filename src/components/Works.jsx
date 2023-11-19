import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    //Due to some issue in motion.div(animation), it has been removed and static display of project is used, previous code is moved to "Works-deprecated".
    <div
      onClick={() =>
        website_link === ""
          ? alert("Currently this website is not available in public domain.")
          : window.open(website_link, "_blank")
      }
      style={{ cursor: "pointer" }}
    >
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 150,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() =>
                source_code_link === ""
                  ? alert(
                      "Currently the select projects source code is private."
                    )
                  : window.open(source_code_link, "_blank")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14[x]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <>
        <div>
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </div>

        <div className="w-full flex">
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Each of the project that I have worked on comes with links to source
            code and live demos, and are mentioned below. I'm not afraid to
            tackle challenges, and I'm committed to refining my abilities in all
            aspects. Right now I am working on a real world application to solve
            a particular problem. I'm excited to collaborate on projects and
            contribute my skills to create impactful solutions.
          </p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </>
    </>
  );
};

export default SectionWrapper(Works, "");
