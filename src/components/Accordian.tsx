import { useState } from "react";

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const data = [
        {
            title: "End of Arm Tooling",
            description:
                "Generate end of arm tooling from preferred parts and task constraints",
        },
        {
            title: "Work cell and factory layout",
            description: "Turn ideas and process requirements into quote-ready visuals that include robot, camera, sensor placement."
        },
        {
            title: "Weldments",
            description: "Lightweight weldments and optimize them for cost"
        },
        {
            title: "Robot arms and solutions",
            description: "Modify existing robot arm concepts for motors or create new solutions for application areas"
        },
    ];

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-4 text-black">
            {data.map((item, index) => (
                <div key={index} className="border-b border-t border-black pt-2">
                    <div
                        onClick={() => toggle(index)}
                        className="flex justify-between items-center cursor-pointer py-2"
                    >
                        <h3 className="font-medium text-[24px]">{item.title}</h3>
                        <span className="text-2xl">
                            {openIndex === index ? "−" : "+"}
                        </span>
                    </div>

                    {openIndex === index && item.description && (
                        <p className="text-[20px] text-orange-500 pb-2">
                            {item.description}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
