import clsx from "clsx";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";
import { FC, Fragment } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  SelectedItemOption,
  SelectedOption,
  SelectionLimit,
  selectedItemOptionsAtom,
  selectedOptionsAtom,
  selectionLimitAtom,
} from "~/atoms";
import { Category as CategoryType } from "~/pages/GoddessHearthPage";
import { CategoryDescription } from "./CategoryDescription";

type Props = CategoryType & {};
type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result;
type SetStateActionWithReset<Value> = Value | typeof RESET | ((prev: Value) => Value | typeof RESET);

const frameImageUrl = "https://i.imgur.com/QK3qIcm.png";

function checkIfSelected(selected: SelectedOption[] | SelectedItemOption[], current: string[] = []) {
  return selected.filter((sel) => current.includes(sel.id)).length > 0;
}

export function changeCategoryLimit(
  category: string,
  limit: number,
  categories: SelectionLimit[],
  setFunction: SetAtom<[SetStateActionWithReset<SelectionLimit[]>], void>,
) {
  const temp = [...categories];
  temp.map((cat) => {
    if (cat.id === category) {
      cat.limit += limit;
    }
    return cat;
  });
  setFunction([...temp]);
}

const Category: FC<Props> = (props) => {
  const [selectedOptions, setSelectedOptions] = useAtom(selectedOptionsAtom);
  const [selectedItemOptions, setSelectedItemOptions] = useAtom(selectedItemOptionsAtom);
  const [categoriesLimit, setCategoriesLimit] = useAtom(selectionLimitAtom);

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-4xl font-semibold">{props.title}</h1>
      <CategoryDescription
        description={props.description.replaceAll(
          "%LIMIT%",
          categoriesLimit.find((cl) => cl.id === props.id)?.limit?.toString() || props.itemLimit.toString(),
        )}
        id={props.id}
      />
      <div className="flex w-full flex-wrap justify-around gap-4 py-4">
        {props.items.map((item) => {
          let selected = checkIfSelected(selectedOptions, [item.id]);
          const catReq = checkIfSelected(selectedOptions, props.require);
          const incompatible = checkIfSelected(selectedOptions, item.incompatible);
          return (
            <div
              id={item.id}
              data-type="item"
              className={clsx("flex h-min w-[45%] cursor-pointer flex-col items-center p-1 md:w-[30%]", {
                "bg-blue-400/50": selected,
                "bg-black/50 text-gray-300": incompatible,
              })}
              onClick={(e) => {
                const used =
                  (selectedOptions
                    ?.filter((sel) => sel.category === props.id && !!sel?.count)
                    ?.map((it) => it.count)
                    ?.reduce((p, c) => p! + c!, 0) || 0) +
                    selectedOptions.filter((sel) => sel.category === props.id && !sel?.count).length || 0;
                const categoryLimit = categoriesLimit.filter((cat) => cat.id === props.id)[0].limit;

                // If the child element is clicked, then don't let the user (un)select this option
                if ((e.target as HTMLDivElement).getAttribute("data-type") === "item") {
                  // Don't do anything is the item: is multiselect, an incompatible item is already selected, or a requirement is not selected
                  if (item.multiselect || incompatible || (!catReq && !!props.require?.length)) {
                    return null;
                  }

                  const removeFromSelectedOptions = () => {
                    const temp = selectedOptions.filter((selected) => selected.id !== item.id);

                    if (item.addMoreCategory) {
                      changeCategoryLimit(
                        item.addMoreCategory!,
                        -item.addMoreCount!,
                        categoriesLimit,
                        setCategoriesLimit,
                      );
                    }

                    // If the item is multioption, also remove the selected options for it
                    if (item.multioption) {
                      setSelectedItemOptions([...selectedItemOptions.filter((si) => si.item !== item.id)]);
                    }

                    // If the item should unselect all the items in certain categories
                    if (item.unselect) {
                      return [...temp.filter((sel) => !item.unselect?.includes(sel.category))];
                    }

                    return temp;
                  };

                  if (selected) {
                    setSelectedOptions(removeFromSelectedOptions());
                  } else {
                    // If the array is already full, remove the first element and add the new one at the end
                    if (used + 1 > categoryLimit) {
                      const [firstElem, ...rest] = selectedOptions.filter((sel) => sel.category === props.id);
                      console.log("FIRST ELEMENT", firstElem);
                      // If the item is multiselect, remove only 1 from counter, instead of the whole item
                      if (firstElem && firstElem.count && firstElem.count > 1) {
                        setSelectedOptions([
                          ...selectedOptions.filter((sel) => sel.category !== props.id),
                          { ...firstElem, count: firstElem.count - 1 },
                          ...rest,
                          { category: props.id, id: item.id },
                        ]);
                      } else {
                        setSelectedOptions([
                          ...selectedOptions.filter((sel) => sel.category !== props.id),
                          ...rest,
                          { category: props.id, id: item.id },
                        ]);

                        // If the item is multioption, also remove the selected options for it
                        if (item.multioption) {
                          setSelectedItemOptions([...selectedItemOptions.filter((si) => si.item !== firstElem.id)]);
                        }
                      }
                    } else {
                      setSelectedOptions([...selectedOptions, { category: props.id, id: item.id }]);
                    }
                  }
                }
              }}
              key={props.id + "-" + item.id}
            >
              {/* Image */}
              <div className="pointer-events-none relative h-[300px] w-[300px] ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-[1/1] h-[300px] w-[300px] object-cover object-center"
                />
                <img
                  src={frameImageUrl}
                  alt="Frame"
                  className="absolute top-0 aspect-[1/1] h-[300px] w-[300px] object-cover object-center"
                />
              </div>

              {/* Item Name */}
              <span className="pointer-events-none mt-2 text-center text-xl font-semibold">{item.name}</span>

              {/* Item Multiselect */}
              {item.multiselect && (
                // TODO: Don't forget the limits and incompatibilities
                <div className="flex items-center justify-center space-x-2">
                  <FaMinus
                    size="18"
                    className="select-none"
                    onClick={() => {
                      const opt = selectedOptions.filter((sel) => sel.id === item.id)[0];

                      // If an incompatible item is selected, don't do anything
                      if (incompatible) return null;

                      if (selected) {
                        if (opt.count! - 1 <= 0) {
                          setSelectedOptions([
                            ...selectedOptions.filter((sel) => sel.category !== props.id),
                            ...selectedOptions.filter((sel) => sel.category === props.id && sel.id !== item.id),
                          ]);
                        } else {
                          setSelectedOptions([
                            ...selectedOptions.filter((sel) => sel.category !== props.id),
                            ...selectedOptions.filter((sel) => sel.category === props.id && sel.id !== item.id),
                            { category: props.id, id: item.id, count: opt.count! - 1 },
                          ]);
                        }
                        if (item.addMoreCategory) {
                          changeCategoryLimit(
                            item.addMoreCategory!,
                            -item.addMoreCount!,
                            categoriesLimit,
                            setCategoriesLimit,
                          );
                        }
                      }
                    }}
                  />
                  <span className="text-xl font-bold">
                    {selectedOptions.filter((sel) => sel.id === item.id)?.[0]?.count || 0}
                  </span>
                  <FaPlus
                    size="18"
                    className="select-none"
                    onClick={() => {
                      const opt = selectedOptions.filter((sel) => sel.id === item.id)[0];
                      const used =
                        (selectedOptions
                          ?.filter((sel) => sel.category === props.id && !!sel?.count)
                          ?.map((it) => it.count)
                          ?.reduce((p, c) => p! + c!, 0) || 0) +
                          selectedOptions.filter((sel) => sel.category === props.id && !sel?.count).length || 0;
                      const categoryLimit = categoriesLimit.filter((cat) => cat.id === props.id)[0].limit;

                      if (used + 1 <= categoryLimit) {
                        if (selected) {
                          setSelectedOptions([
                            ...selectedOptions.filter((sel) => sel.category !== props.id),
                            ...selectedOptions.filter((sel) => sel.category === props.id && sel.id !== item.id),
                            { category: props.id, id: item.id, count: opt.count! + 1 },
                          ]);
                        } else {
                          setSelectedOptions([
                            ...selectedOptions.filter((sel) => sel.category !== props.id),
                            ...selectedOptions.filter((sel) => sel.category === props.id && sel.id !== item.id),
                            { category: props.id, id: item.id, count: 1 },
                          ]);
                        }
                        if (item.addMoreCategory) {
                          changeCategoryLimit(
                            item.addMoreCategory!,
                            item.addMoreCount!,
                            categoriesLimit,
                            setCategoriesLimit,
                          );
                        }
                      }
                    }}
                  />
                </div>
              )}

              {/* Item Description */}
              <span className="pointer-events-none mt-2 text-center text-base font-semibold">
                {item.description.split("\n").length > 1
                  ? item.description.split("\n").map((desc, i) => {
                      if (i !== item.description.split("\n").length - 1)
                        return (
                          <Fragment key={props.id + "-" + item.id + "-desc-" + i}>
                            {desc}
                            <br />
                          </Fragment>
                        );
                      return <Fragment key={props.id + "-" + item.id + "-desc-" + i}>{desc}</Fragment>;
                    })
                  : item.description}
              </span>

              {/* Item Options */}
              {item.multioption && (
                <>
                  <br />
                  <span className="pointer-events-none w-full text-center text-base font-semibold">Options:</span>
                  <span
                    className={clsx("text-base font-semibold", {
                      "pointer-events-none": !selected,
                    })}
                  >
                    {item.options?.map((option) => {
                      const selOption = checkIfSelected(selectedItemOptions, [option.id]);
                      return (
                        <div
                          id={option.id}
                          data-type="option"
                          className={clsx("my-2 rounded border border-black/40 px-1 py-0.5", {
                            "bg-gray-400": selected && !selOption,
                            "bg-blue-400/50": selOption,
                            "pointer-events-none": !selected,
                          })}
                          onClick={() => {
                            const selectedOptionsThisItem = selectedItemOptions.filter((sel) => sel.item === item.id);
                            const itemLimit = categoriesLimit.filter((cat) => cat.id === item.id)[0].limit;

                            // Cannot select if the item itself is not selected.
                            if (!selected) return null;

                            if (selOption) {
                              setSelectedItemOptions(selectedItemOptions.filter((sel) => sel.id !== option.id));
                            } else {
                              // If the array is already full, remove the first element and add the new one at the end
                              if (selectedOptionsThisItem.length + 1 > itemLimit) {
                                setSelectedItemOptions([
                                  ...selectedItemOptions.filter((sel) => sel.item !== item.id),
                                  ...selectedItemOptions
                                    .filter((sel) => sel.item === item.id)
                                    .filter((_, i) => i !== 0),
                                  { item: item.id, id: option.id },
                                ]);
                              } else {
                                setSelectedItemOptions([...selectedItemOptions, { item: item.id, id: option.id }]);
                              }
                            }
                          }}
                          key={props.id + "-" + item.id + "-" + option.id}
                        >
                          {option.description}
                        </div>
                      );
                    })}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
