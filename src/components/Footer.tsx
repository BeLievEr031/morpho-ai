
const Footer = () => {
    return (
        <footer className="w-full bg-white py-8 mt-24">
            <div className="px-18 grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
                {/* Left Column */}
                <div>
                    <h3 className="text-lg font-medium">MorphoAI Inc</h3>
                </div>

                {/* Middle Column */}

                <div className="grid grid-cols-2">
                    <div className="space-y-5">
                        <h3 className="text-lg font-medium pr-7.5">Location</h3>
                        <p className="text-sm mt-1">Cambridge, MA</p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-5">
                        <h3 className="text-xl font-medium pr-12">Contact</h3>
                        <p className="text-sm mt-1">hello@morpho.ai</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
