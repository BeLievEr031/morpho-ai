import Accordion from "./Accordian"
import Card from "./Card"

function Design() {
    return (
        <div className="bg-[#EFECE7] mt-8 py-20">
            <h1 className="text-center text-4xl md:text-5xl">Design Machines, Not CAD Files.</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-16 mt-20 text-center">
                <Card title="Describes" desc="Input parts, tasks, and constraints that you want to consider in the design." />
                <Card title="Generate" desc="Our algorithms generate 100s of simulation verified options and propose the best ones likely to work for your tasks and constraints." />
                <Card title="Iterate" desc="Based on options fine tune parameters and edit the design so you can get to building and deploying." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-18 px-10 md:px-16">
                <div>
                    <h1 className="md:text-[64px] text-[50px] text-[#ff661f]">Our Capabilities</h1>
                </div>
                <div>
                    <Accordion />
                </div>
            </div>
        </div>
    )
}

export default Design