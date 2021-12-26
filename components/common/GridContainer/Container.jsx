import { Text, Link, Slider } from "@components/ui";
import cn from "classnames";

function GridContainer({ heading, children, className }) {
  return (
    <div className={cn("flex flex-col", className)}>
      {heading && (
        <div className="flex justify-between items-center px-4">
          <Text variant="pageHeading" className="text-accent-7 my-2">
            {heading.toUpperCase()}
          </Text>

          <div className="flex items-center space-x-4">
            <Link href="#">
              <Text className="text-primary-2 pb-3"> View All </Text>
            </Link>
          </div>
        </div>
      )}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>

      <Slider sliderClassName="md:hidden">{children}</Slider>
    </div>
  );
}

export default GridContainer;
