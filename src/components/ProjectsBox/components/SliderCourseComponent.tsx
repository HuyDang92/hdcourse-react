import ItemProject from './ItemProject';
import { ProjectItem } from 'types/Project';

interface ProjectListProps {
  infoProject: ProjectItem[];
  styleCss: {
    titleColor: string;
    linearGradient: string;
    showProgress: boolean;
  };
}

const SliderCourseComponent: React.FC<ProjectListProps> = ({
  infoProject,
  styleCss,
}) => {
  return (
    <div className="grid grid-cols-1 gap-5 p-2 sm:grid-cols-3">
      {infoProject.map((course) => (
        <ItemProject key={course.id} data={course} styleCss={styleCss} />
      ))}
    </div>
  );
};

export default SliderCourseComponent;
