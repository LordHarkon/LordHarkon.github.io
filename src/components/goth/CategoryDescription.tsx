import { FC, Fragment } from "react";

export type CategoryDescriptionType = {
  description: string;
  id: string;
};

export const CategoryDescription: FC<CategoryDescriptionType> = (props) => {
  return (
    <span className="mt-2 text-center text-xl font-semibold">
      {props.description.split("\n").length > 1
        ? props.description.split("\n").map((desc, i) => {
            if (i !== props.description.split("\n").length - 1)
              return (
                <Fragment key={props.id + "-desc-" + i}>
                  {desc}
                  <br />
                </Fragment>
              );
            return <Fragment key={props.id + "-desc-" + i}>{desc}</Fragment>;
          })
        : props.description}
    </span>
  );
};
